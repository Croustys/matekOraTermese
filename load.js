window.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#root').style.display = "none";
})
window.addEventListener('load', () => {
    document.querySelector('#loader').style.display = "none";
    document.querySelector('#root').style.display = "";
})