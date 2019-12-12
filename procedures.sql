/*This file contatns the three functions that are in our database to get specific information.*/

/* Creates a funciton that returns the amount of available rooms given a building ID*/

DELIMITER $$
CREATE FUNCTION numberOfAvailableRooms( bld_ID INT ) RETURNS INT
BEGIN
DECLARE amountAvailable INT;
    SELECT B.Unused_Rooms into amountAvailable
    FROM Building_Info B
    WHERE B.bID = bld_ID;

    RETURN amountAvailable;

END$$
DELIMITER ;

/* Creates a function that gets the disesase that a patient ID  has */

DELIMITER $$
CREATE FUNCTION nameOfTheDisease( pat_id INT )RETURNS VARCHAR(50)
BEGIN
DECLARE diseaseName VARCHAR(50);
    SELECT D.dName into diseaseName
    FROM Patients P, Suffers_From S, Disease D
    WHERE P.pID = pat_id AND P.pID = S.Suffers_pID AND S.Suffers_dID = D.dID;
    RETURN diseaseName;

END$$
DELIMITER ;

/* Creates a function that gets the treatment name for a given disease ID*/

DELIMITER $$
CREATE FUNCTION treatmentForDisease( dis_id INT )RETURNS VARCHAR(50)
BEGIN
DECLARE treatmentName VARCHAR(50);
    SELECT T.tName into treatmentName
    FROM Treatment T, Disease D, Has H
    WHERE D.dID = dis_id AND D.dID = H.Has_dID AND H.Has_tID = T.tID;
    RETURN treatmentName;

END$$
DELIMITER ;
