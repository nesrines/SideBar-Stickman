document.querySelector("#Open").addEventListener("click", () => {
    document.querySelector(".sidebar").style.width = "100%";
})
document.querySelector("#Close").addEventListener("click", () => {
    document.querySelector(".sidebar").style.width = "0%";
});