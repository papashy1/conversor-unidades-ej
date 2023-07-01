export function convertirDistancia(entrada, booleano, opcion1, opcion2) {
  if (entrada == '') {
    return '';
  }
  let res;
  if (opcion1 == 1 && opcion2 == 2) {
    if (booleano == true) {
      res = entrada * 1000;
      return Number(res.toFixed(7));
    } else {
      res = entrada / 1000;
      return Number(res.toFixed(7));
    }
  } else if (opcion1 == 1 && opcion2 == 3) {
    if (booleano == true) {
      res = entrada * 3280.84;
      return Number(res.toFixed(7));
    } else {
      res = entrada / 3280.84;
      return Number(res.toFixed(7));
    }
  } else if (opcion1 == 2 && opcion2 == 1) {
    if (booleano == true) {
      res = entrada / 1000;
      return Number(res.toFixed(7));
    } else {
      res = entrada * 1000;
      return Number(res.toFixed(7));
    }
  } else if (opcion1 == 2 && opcion2 == 3) {
    if (booleano == true) {
      res = entrada * 3.2804;
      return Number(res.toFixed(7));
    } else {
      res = entrada / 3.2804;
      return Number(res.toFixed(5));
    }
  } else if (opcion1 == 3 && opcion2 == 1) {
    if (booleano == true) {
      res = entrada / 32804;
      return Number(res.toFixed(7));
    } else {
      res = entrada * 32804;
      return Number(res.toFixed(5));
    }
  } else if (opcion1 == 3 && opcion2 == 2) {
    if (booleano == true) {
      res = entrada / 3.2804;
      return Number(res.toFixed(5));
    } else {
      res = entrada * 3.2804;
      return Number(res.toFixed(5));
    }
  }
}
