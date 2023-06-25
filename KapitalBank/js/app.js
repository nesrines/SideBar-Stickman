let btn = document.querySelector(".icons .ms-3");
let icon = document.querySelector(".icons .ms-3 .fas")
btn.addEventListener("click", () => {
    if (icon.className === "fas fa-xmark") {
        btn.style.fontSize = "17px";
        icon.classList.replace("fa-xmark", "fa-bars");
    }
    else {
        btn.style.fontSize = "22px";
        icon.classList.replace("fa-bars", "fa-xmark");
    }
    btn.classList.toggle("active");
    document.querySelector("#SideBar").classList.toggle("d-none");
});