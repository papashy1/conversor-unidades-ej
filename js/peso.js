export function convertirPeso(entrada, booleano, opcion1, opcion2) {
  if (entrada == '') {
    return '';
  }
  let res;

  if (opcion1 == 1 && opcion2 == 2) {
    if (booleano == true) {
      res = entrada * 2.20462;
      return Number(res.toFixed(5));
    } else {
      res = entrada / 2.20462;
      return Number(res.toFixed(6));
    }
  } else if (opcion1 == 2 && opcion2 == 1) {
    if (booleano == true) {
      res = entrada / 2.20462;
      return Number(res.toFixed(5));
    } else {
      res = entrada * 2.20462;
      return Number(res.toFixed(6));
    }
  }
}
