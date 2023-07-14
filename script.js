

function add() {

  let inputs = document.getElementById('inp');
  let text = document.querySelector('.text');

  if (inputs.value == "") {
    alert("Please enter text!");
  } 
  else {   
    let newElement = document.createElement('p');

    newElement.innerHTML = `${inputs.value} <i class="fas fa-trash-alt"></i>`;
    text.appendChild(newElement);
    inputs.value = '';
    newElement.querySelector('i').addEventListener('click' , getrid);

    function getrid(){
      newElement.remove();
    }
  }
}



