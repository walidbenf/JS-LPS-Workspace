var nomF = document.getElementById('nom');
nomF.addEventListener('change', validName);

function validName() {
  if (nameInput.value.lenght < 1) {
    nameInput.style.backgroundColor = 'red';
  } else {
    nameInput.style.backgroundColor = 'green';
  }
}
