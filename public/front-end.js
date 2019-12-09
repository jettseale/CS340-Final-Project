
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

window.onload = function () {
  addLocationButton.addEventListener('click', function () {
    addLocationModal.classList.toggle('hidden');
    addLocationModalBG.classList.toggle('hidden');
  });
}
