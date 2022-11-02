const d = document,
  n = navigator,
  w = window;

export default function getGeolocation(idPanel) {
  const $id = d.getElementById(idPanel),
    options = {
      enableHighAccuracy: true,
      timeout: 3000,
      maximumAge: 0,
    };

  const succes = (postion) => {
    console.log(postion);

    let coords = postion.coords;

    $id.innerHTML = `
    <p>Tu posicion actual es:</p>
    <ul>
        <li>Latitud: <b>${coords.latitude}</b></li>
        <li>Longitud: <b>${coords.longitude}</b></li>
        <li>Presicion: <b>${coords.accuracy}</b> metros</li>
    </ul>
    <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},20z" 
        target="_blank" rel="noopener">Ver en google maps</a>
       `;
  };

  const error = (error) => {
    let errorVar = `Error: ${error.code} - ${error.message}`;
    $id.innerHTML = `<p><mark> ${errorVar}</mark></p>`;
    console.log(errorVar);
  };

  n.geolocation.getCurrentPosition(succes, error, options);
}
