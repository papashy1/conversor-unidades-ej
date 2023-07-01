export function convertirTemperatura(entrada, booleano, opcion1, opcion2) {
  if (entrada == '') {
    return '';
  }
  let res;

  if (opcion1 == 1 && opcion2 == 2) {
    if (booleano == true) {
      res = entrada * (9 / 5) + 32;
      return Number(res.toFixed(7));
    } else {
      res = (entrada - 32) * (5 / 9);
      return Number(res.toFixed(7));
    }
  } else if (opcion1 == 1 && opcion2 == 3) {
    if (booleano == true) {
      res = entrada + 273.15;
      return Number(res);
    } else {
      res = entrada - 273.15;
      return Number(res.toFixed(7));
    }
  } else if (opcion1 == 2 && opcion2 == 1) {
    if (booleano == true) {
      res = (entrada - 32) * (5 / 9);
      return Number(res.toFixed(7));
    } else {
      res = entrada * (9 / 5) + 32;
      return Number(res.toFixed(7));
    }
  } else if (opcion1 == 2 && opcion2 == 3) {
    if (booleano == true) {
      res = (entrada - 32) * (5 / 9) + 273.15;
      return Number(res.toFixed(7));
    } else {
      res = (entrada - 273.15) * (9 / 5) + 32;
      return Number(res.toFixed(7));
    }
  } else if (opcion1 == 3 && opcion2 == 1) {
    if (booleano == true) {
      res = entrada - 273.15;
      return Number(res.toFixed(7));
    } else {
      res = entrada + 273.15;
      return Number(res);
    }
  } else if (opcion1 == 3 && opcion2 == 2) {
    if (booleano == true) {
      res = (entrada - 273.15) * (9 / 5) + 32;
      return Number(res.toFixed(7));
    } else {
      res = (entrada - 32) * (5 / 9) + 273.15;
      return Number(res.toFixed(7));
    }
  }
}
