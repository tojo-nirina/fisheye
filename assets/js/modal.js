 const modale = document.getElementById("myModale");
const openModaleBtn = document.getElementById("openModaleBtn");
const closeModaleBtn = document.getElementsByClassName("close")[0];

openModaleBtn.addEventListener("click", () => {
     modale.style.display = "block";
})

closeModaleBtn.addEventListener("click", () => {
    modale.style.display = "none";
})
