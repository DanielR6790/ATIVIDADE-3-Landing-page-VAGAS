const form = document.getElementById("formVaga");
const listaVagas = document.getElementById("listaVagas");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const empresa = document.getElementById("empresa").value;
    const vaga = document.getElementById("vaga").value;
    const curso = document.getElementById("curso").value;
    const local = document.getElementById("local").value;

    const novaLinha = document.createElement("tr");

    novaLinha.innerHTML = `
        <td>${empresa}</td>
        <td>${vaga}</td>
        <td>${curso}</td>
        <td>${local}</td>
    `;

    listaVagas.appendChild(novaLinha);

    form.reset();
});