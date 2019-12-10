
function closeModalLocation(){

  var modalBackdrop = document.getElementById('modal-backdrop');
  var createLocationModal = document.getElementById('location-modal');

  // Hide the modal and its backdrop.
  modalBackdrop.classList.add('hidden');
  createLocationModal.classList.add('hidden');

  modalBackdrop.parentNode.removeChild(modalBackdrop);
  createLocationModal.parentNode.removeChild(createLocationModal);

}

function showModalFullyLocation () {

  var modalBackdrop = document.getElementById('modal-backdrop');
  var createLocationModal = document.getElementById('location-modal');

  // Show the modal and its backdrop.
  modalBackdrop.classList.remove('hidden');
  createLocationModal.classList.remove('hidden');

}

function closeModalDisease(){

  var modalBackdrop = document.getElementById('modal-backdrop');
  var createDiseaseModal = document.getElementById('disease-modal');

  // Hide the modal and its backdrop.
  modalBackdrop.classList.add('hidden');
  createDiseaseModal.classList.add('hidden');

  modalBackdrop.parentNode.removeChild(modalBackdrop);
  createDiseaseModal.parentNode.removeChild(createDiseaseModal);

}

function showModalFullyDisease () {

  var modalBackdrop = document.getElementById('modal-backdrop');
  var createDiseaseModal = document.getElementById('disease-modal');

  // Show the modal and its backdrop.
  modalBackdrop.classList.remove('hidden');
  createDiseaseModal.classList.remove('hidden');

}

function showModalLocation (info){

let informationFromHandlebars = Handlebars.templates.locationModal({
  Address: info.bAdd,
  img: info.bImg,
  bID: info.bbID,
  staffs: info.staffC,
  patient: info.patientC,
  Total_Rooms: info.totalR,
  Used_Rooms: info.useR,
  Unused_Rooms: info.unuseR
});
    // Show the modal
    var container = document.querySelector('.content-for-modal');
    container.insertAdjacentHTML('beforeend', informationFromHandlebars);
    showModalFullyLocation();
}

function showModalDisease (info){

let informationFromHandlebars = Handlebars.templates.diseaseModal({

  dID: info.diseaid,
  dName: info.disname,
  tID: info.treatme,
  tName: info.ttname

});
    // Show the modal
    var container = document.querySelector('.contatiner-for-diseases');
    container.insertAdjacentHTML('beforeend', informationFromHandlebars);
    showModalFullyDisease();
}

function onCardClickLocation() {
    // Get all of the information you need from the card data attributes
    let info = {

        bImg: this.dataset.bimg,
        bbID: this.dataset.build,
        bAdd: this.dataset.add,
        useR: this.dataset.used,
        unuseR: this.dataset.unused,
        totalR: this.dataset.total,
        staffC: this.dataset.snum,
        patientC: this.dataset.pnum

    };
    console.log('made it here');
    // Render the modal with the information from the card
    showModalLocation(info);
}

function onCardClickDisease() {
    // Get all of the information you need from the card data attributes
    let info = {

        diseaid: this.dataset.ddid,
        disname: this.dataset.dna,
        treatme: this.dataset.ttid,
        ttname: this.dataset.tna

    };
    // Render the modal with the information from the card
    showModalDisease(info);
}


// Register your onClick event handler for all of the location cards
let cards = document.getElementsByClassName('location-handlebars');
Array.from(cards).forEach(function(card) {
    card.addEventListener('click', onCardClickLocation);
});

let diseaseCards = document.getElementsByClassName('disease-for-text-bin');
Array.from(diseaseCards).forEach(function(dis) {
    dis.addEventListener('click', onCardClickDisease);
});

//ADD LOCATION MODAL:

var addLocationButton = document.getElementsByClassName('add-location-button')[0];

var addLocationModal = document.getElementById('add-location-modal');

var addLocationModalBG = document.getElementById('modal-backdrop');

var addLocationCancelButton = document.getElementsByClassName('modal-cancel-button')[0];

var addLocationSubmitButton = document.getElementsByClassName('modal-submit-button')[0];

function clearAddLocationInputs() {
  document.getElementById('location-address-input').value = "";
  document.getElementById('location-id-input').value = "";
  document.getElementById('location-img-input').value = "";
  document.getElementById('location-total-rooms-input').value = "";
  document.getElementById('location-used-rooms-input').value = "";
  document.getElementById('location-unused-rooms-input').value = "";
}

function validateLocation(newLocation) {
	if (!newLocation.Address) return false;
	if (isNaN(newLocation.bID) || newLocation.bID <= 0) return false;
	if (!newLocation.img) return false;
	if (isNaN(newLocation.Total_Rooms) || newLocation.Total_Rooms <= 0) return false;
	if (isNaN(newLocation.Unused_Rooms) || newLocation.Unused_Rooms < 0) return false;
	if (isNaN(newLocation.Used_Rooms) || newLocation.Used_Rooms < 0) return false;
	if (newLocation.Unused_Rooms + newLocation.Used_Rooms != newLocation.Total_Rooms) return false;

	return true;
}

addLocationButton.addEventListener('click', function() {
    addLocationModal.classList.toggle('hidden');
});

addLocationCancelButton.addEventListener('click', function() {
	addLocationModal.classList.toggle('hidden');
	clearAddLocationInputs();
});

addLocationSubmitButton.addEventListener('click', function() {
	var newLocation = {
		Address: document.getElementById('location-address-input').value,
		bID: parseInt(document.getElementById('location-id-input').value, 10),
		img: document.getElementById('location-img-input').value,
		Total_Rooms: parseInt(document.getElementById('location-total-rooms-input').value, 10),
		Unused_Rooms: parseInt(document.getElementById('location-unused-rooms-input').value, 10),
		Used_Rooms: parseInt(document.getElementById('location-used-rooms-input').value, 10)
	}
	
	if (validateLocation(newLocation)) {
		clearAddLocationInputs();
		console.log(newLocation);
		addLocationModal.classList.toggle('hidden');

		var request = new XMLHttpRequest();
		var url = '/addLocation';
		request.open('POST', url);
		var requestBody = JSON.stringify(newLocation);
		request.setRequestHeader('Content-Type', 'application/json');
		request.send(requestBody);
		
		request.addEventListener('load', function(event) {
			console.log(event.target.status);
			if (event.target.status  == 200) {
				alert("Location successfully added.");
			} else {
				alert("Location could not be added: A location with that ID already exists");
			}
		});
	} else {
		alert("Location could not be added. Please fill the form with valid information.");
	}
});
