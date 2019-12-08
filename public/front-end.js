
function closeModal(){

var grabContainter = document.getElementById('location-modal');

console.log(grabContainter);

grabContainter.innerHTML = "";

}


function showModal(info){

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

    container.innerHTML += informationFromHandlebars;

}

function onCardClick() {
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

    // Render the modal with the information from the card
    showModal(info);
}

// Register your onClick event handler for all of the location cards
let cards = document.getElementsByClassName('whole-container-home');
Array.from(cards).forEach(function(card) {
    card.addEventListener('click', onCardClick);
});
