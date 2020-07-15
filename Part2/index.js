//console.log('The house always wins!');

const idInput = document.getElementById('idGrabber');

const styler = document.getElementById('styler');



function setCard() {
    let card = document.getElementById(idInput.value);
    card.style.color = styler.value;
    //console.log(card)
}

function resetCard() {
    let card = document.getElementById(idInput.value);
    card.style.color = null;
}