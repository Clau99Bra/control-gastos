let listaNombresGastos = [];
let listaValoresGastos = [];
let listaDescripcionGasto = [];


//esta funcion se invoca al mmomento de que el usuario 
//hace click en el boton
function clickBoton() {
  let nombreGasto = document.getElementById('nombreGasto').value;
  let valorGasto = document.getElementById('valorGasto').value;
  let descripcionGasto = document.getElementById('descripcionGasto').value;
  console.log(listaNombresGastos);
  console.log(listaValoresGastos);

  if (nombreGasto === "" || valorGasto === "") {
    alert("completa los campos");
    return;
  }

  listaNombresGastos.push(nombreGasto);
  listaValoresGastos.push(valorGasto);
  listaDescripcionGasto.push(descripcionGasto);

  console.log(nombreGasto);
  console.log(valorGasto);

  actualizarListaGastos();

}

function actualizarListaGastos() {
  const listaElementos = document.getElementById('listaDeGastos');
  const totalElementos = document.getElementById('totalGastos');
  let htmlLista = '';
  let totalGastos = 0;

  listaNombresGastos.forEach((elemento, posicion) => {
    // console.log('elemento');
    // console.log('posicion');
    const valorGasto = Number(listaValoresGastos[posicion]);
    //calculamos el total de gastos
    totalGastos += Number(valorGasto);

    if (totalGastos > 150) {
      alert("Gasto 150$ dólares ");
    }
    htmlLista += `<li>${elemento}
    <span>Descripcion: ${listaDescripcionGasto[posicion]}</span>
    - USD ${valorGasto.toFixed(2)} 
    <button onclick="editarGasto(${posicion});">Editar</button>
    <button onclick="eliminarGasto(${posicion});">Eliminar</button>
    </li>`;
  });
  // console.log(htmlLista);
  listaElementos.innerHTML = htmlLista;
  totalElementos.innerHTML = totalGastos.toFixed(2);
  limpiar();

}

function limpiar() {
  document.getElementById('nombreGasto').value = '';
  document.getElementById('valorGasto').value = '';
  document.getElementById('descripcionGasto').value = '';

}

function eliminarGasto(posicion) {
  listaNombresGastos.splice(posicion, 1);
  listaValoresGastos.splice(posicion, 1);
  actualizarListaGastos();

}