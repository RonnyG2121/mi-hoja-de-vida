const showYear = () => {
    const date = new Date();
    const dateYear = date.getFullYear();
    const derechos_autor = document.getElementById("derechos_autor");
    const p = document.createElement("p");
    p.textContent = `Ronny González ${dateYear}`;
    derechos_autor.appendChild(p);
}

document.addEventListener("DOMContentLoaded", (ev) => {
    showYear();
});
