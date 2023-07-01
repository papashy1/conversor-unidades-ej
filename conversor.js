import { convertirDistancia } from './distancia.js';
import { convertirTemperatura } from './temperatura.js';
import { convertirPeso } from './peso.js';
import { mostrarSelectores } from './selector.js';

const selector = document.querySelector('#seleccionar_Opcion');
const formEntradas = document.querySelector('#formEntradas');
const contenedor_Entradas = document.querySelector('#contenedor_Entradas');

//-----Selectores de los imputs----------
const input1 = document.querySelector('#input1');
const input2 = document.querySelector('#input2');
const selectores = document.querySelector('#selectores');

selector.addEventListener('change', () => {
  if (selector.value == 1 || selector.value == 2 || selector.value == 3) {
    const seleccionar = mostrarSelectores(selector.value);
    selectores.innerHTML = seleccionar;
    formEntradas.reset();
    contenedor_Entradas.classList.remove('d-none');
    const opcion1 = document.querySelector('#opcion1');
    const opcion2 = document.querySelector('#opcion2');
    let temp1 = opcion1.value;
    let temp2 = opcion2.value;
    opcion1.addEventListener('change', () => {
      if (opcion1.value == opcion2.value) {
        opcion2.value = temp1;
        temp2 = opcion2.value;
        temp1 = opcion1.value;
      }
      reiniciar();
    });
    opcion2.addEventListener('change', () => {
      if (opcion1.value == opcion2.value) {
        opcion1.value = temp2;
        temp2 = opcion2.value;
        temp1 = opcion1.value;
      }
      reiniciar();
    });
  } else {
    contenedor_Entradas.classList.add('d-none');
    formEntradas.reset();
  }
});

function reiniciar() {
  input1.value = '';
  input2.value = '';
}

input1.addEventListener('input', () => {
  if (selector.value == 1) {
    input2.value = convertirDistancia(
      input1.value,
      true,
      opcion1.value,
      opcion2.value
    );
  } else if (selector.value == 2) {
    input2.value = convertirTemperatura(
      input1.value,
      true,
      opcion1.value,
      opcion2.value
    );
  } else if (selector.value == 3) {
    input2.value = convertirPeso(
      input1.value,
      true,
      opcion1.value,
      opcion2.value
    );
  }
});
input2.addEventListener('input', () => {
  if (selector.value == 1) {
    input1.value = convertirDistancia(
      input2.value,
      false,
      opcion1.value,
      opcion2.value
    );
  } else if (selector.value == 2) {
    input1.value = convertirTemperatura(
      input2.value,
      false,
      opcion1.value,
      opcion2.value
    );
  } else if (selector.value == 3) {
    input1.value = convertirPeso(
      input2.value,
      false,
      opcion1.value,
      opcion2.value
    );
  }
});
