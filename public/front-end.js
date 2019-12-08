
function closeModal(){

  var modalBackdrop = document.getElementById('modal-backdrop');
  var createTwitModal = document.getElementById('location-modal');

  // Hide the modal and its backdrop.
  modalBackdrop.classList.add('hidden');
  createTwitModal.classList.add('hidden');

  modalBackdrop.parentNode.removeChild(modalBackdrop);
  createTwitModal.parentNode.removeChild(createTwitModal);

}

function showModalFully () {

  var modalBackdrop = document.getElementById('modal-backdrop');
  var createTwitModal = document.getElementById('location-modal');

  // Show the modal and its backdrop.
  modalBackdrop.classList.remove('hidden');
  createTwitModal.classList.remove('hidden');

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
    container.insertAdjacentHTML('beforeend', informationFromHandlebars);
    showModalFully();
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
    console.log('made it here');
    // Render the modal with the information from the card
    showModal(info);
}


// Register your onClick event handler for all of the location cards
let cards = document.getElementsByClassName('location-handlebars');
Array.from(cards).forEach(function(card) {
    card.addEventListener('click', onCardClick);
});
