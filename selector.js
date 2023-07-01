export function mostrarSelectores(seleccionado) {
  let algo;
  if (seleccionado == 1) {
    algo = `            
    <select class="form-select" id="opcion1">
        <option value="1" selected>Kilometro</option>
        <option value="2">metro</option>
        <option value="3">Pies</option>
      </select>
      <select class="form-select" id="opcion2">
      <option value="1">Kilometro</option>
      <option value="2" selected>Metro</option>
      <option value="3">Pies</option>
    </select>`;
  } else if (seleccionado == 2) {
    algo = `            
    <select class="form-select" id="opcion1">
        <option value="1" selected>°C</option>
        <option value="2">°F</option>
        <option value="3">°K</option>
      </select>
      <select class="form-select" id="opcion2">
      <option value="1">°C</option>
      <option value="2" selected>°F</option>
      <option value="3">°K</option>
    </select>`;
  } else if (seleccionado == 3) {
    algo = `            
    <select class="form-select" id="opcion1">
        <option value="1" selected>Kilogramo</option>
        <option value="2">Libra</option>
      </select>
      <select class="form-select" id="opcion2">
      <option value="1">Kilogramo</option>
      <option value="2" selected>Libra</option>

    </select>`;
  }
  return algo;
}
