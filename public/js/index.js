const busSubmit = document.getElementById('busSubmit');
const devSubmit = document.getElementById('devSubmit');

busSubmit.onclick = () => {
  const busName = document.getElementById('bus-name');
  const busUrl = document.getElementById('bus-url');
  const busAddress = document.getElementById('bus-address');
  const busPhoto = document.getElementById('bus-photo');
  const busBio = document.getElementById('bus-bio');
  const busSkillOne = document.getElementById('busSkillOne');
  const busSkillTwo = document.getElementById('busSkillTwo');
  const busSkillThree = document.getElementById('busSkillThree');
  const newBus = {
    name: busName.value,
    address: busUrl.value,
    website: busUrl.value,
    photo: busPhoto.value,
    address: busAddress.value,
    bio: busBio.value,
    skillOne: busSkillOne.value,
    skillTwo: busSkillTwo.value,
    skillThree: busSkillThree.value,
  };

  $.post('/api/businesses', newBus).then(data => {
    console.log(data);
  });

  busName.value = '';
  busUrl.value = '';
  busPhoto.value = '';
  busAddress.value = '';
  busBio.value = '';
  busSkillOne.value = '';
  busSkillTwo.value = '';
  busSkillThree.value = '';
};

devSubmit.onclick = () => {
  const devName = document.getElementById('dev-name');
  const devPhoto = document.getElementById('dev-photo');
  const devExp = document.getElementById('dev-exp');
  const devGit = document.getElementById('dev-git');
  const devLinkedin = document.getElementById('dev-linkedin');
  const devPortfolio = document.getElementById('dev-portfolio');
  const devBio = document.getElementById('dev-bio');
  const devSkillOne = document.getElementById('devSkillOne');
  const devSkillTwo = document.getElementById('devSkillTwo');
  const devSkillThree = document.getElementById('devSkillThree');
  const newDev = {
    name: devName.value,
    photo: devPhoto.value,
    yearsExp: devExp.value,
    github: devGit.value,
    linkedin: devLinkedin.value,
    portfolio: devPortfolio.value,
    bio: devBio.value,
    skillOne: devSkillOne.value,
    skillTwo: devSkillTwo.value,
    skillThree: devSkillThree.value,
  };

  $.post('/api/devs', newDev).then(data => {
    console.log(data);
  });

  devName.value = '';
  devPhoto.value = '';
  devExp.value = '';
  devGit.value = '';
  devLinkedin.value = '';
  devPortfolio.value = '';
  devBio.value = '';
  devSkillOne.value = '';
  devSkillTwo.value = '';
  devSkillThree.value = '';
};

$(document).ready(function() {
  // Our new todos will go inside the todoContainer
  var $contactContainer = $(".contact-container");
  // Adding event listeners for deleting, editing, and adding todos
  $(document).on("click", "button.delete", deleteMessage);
  $(document).on("click", "button.complete", toggleComplete);

  // Our initial todos array
  var contact = [];

  // Getting todos from database when page loads
  getContacts();

  // This function resets the todos displayed with new todos from the database
  function initializeRows() {
    $contactContainer.empty();
    var rowsToAdd = [];
    for (var i = 0; i < contact.length; i++) {
      rowsToAdd.push(createNewRow(contact[i]));
    }
    $todoContainer.prepend(rowsToAdd);
  }

  // This function grabs todos from the database and updates the view
  function getContacts() {
    $.get("/api/contacts", function(data) {
      contact = data;
      initializeRows();
    });
  }

  // This function deletes a todo when the user clicks the delete button
  function deleteMessage(event) {
    event.stopPropagation();
    var id = $(this).data("id");
    $.ajax({
      method: "DELETE",
      url: "/api/contacts/" + id
    }).then(getContacts);
  }


  // Toggles complete status
  function toggleComplete(event) {
    event.stopPropagation();
    var contact = $(this).parent().data("contact");
    contact.complete = !contact.complete;
    updateTodo(contact);
  }


});
