
function MoveTab(tabNumber) {
    /*
    *   const indicator = document.getElementById("indicator");
    *   const pxNumber = 130;
    *   indicator.style.left = `${(tabNumber - 1)}` * `${pxNumber}px`;
    */
    document.querySelectorAll('.tab-label').forEach(tab => tab.classList.remove('active'));
    document.querySelector(`.tab-label[data-tab="${tabNumber}"]`).classList.add('active');
}

const presentation = document.getElementById("presentation"), skillset = document.getElementById("skillset"),
projects = document.getElementById("projects"), contact = document.getElementById("contact");


const radio = document.querySelectorAll('input[type="radio"][name="tab"]');
const articleR = [
    presentation, skillset,
    projects, contact
];

function updateState(){
    articleR.forEach(article => {
        article.style.display = "none";
    });
    const selectedRadio = document.querySelector('input[type="radio"][name="tab"]:checked');
    const index = parseInt(selectedRadio.value) - 1;
    articleR[index].style.display = "block";
}
radio.forEach(element => {
    element.addEventListener('change', updateState);
})
updateState();