async function fetchElements() {
  try {
    const response = await fetch("elements.json");
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.log("Error al obtener los elementos:", error);
    return [];
  }
}

function createTable(elements) {
  const tbody = document.querySelector("#elementTable tbody");
  tbody.innerHTML = "";

  elements.forEach(element => {
    //para imprimir la lista de titulos
    console.log(element.title)
    const row = document.createElement("tr");
    //para rellenar la tabla
    row.innerHTML = `
      <td>${element.title}</td>
      <td>${element.priority}</td>
      <td>${element.isDone}</td>
    `;
    tbody.appendChild(row);
  });
}

(async () => {
  const elements = await fetchElements();
  await createTable(elements);
})();