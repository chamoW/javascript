const d = document,
  w = window,
  n = navigator;

export default function validateNetworkStatus(
  idNetwoKStatus = "network-status"
) {
  let $idPanel = d.getElementById(idNetwoKStatus);

  const isOnline = () => {
    console.log(n.onLine);

    if (n.onLine) {
      $idPanel.innerHTML = "<p> Conexion Restablecida</p>";
      $idPanel.classList.add("online");
      $idPanel.classList.remove("offline");
    } else {
      $idPanel.innerHTML = "<p> Conexion Perdida</p>";
      $idPanel.classList.add("offline");
      $idPanel.classList.remove("online");
    }

    setTimeout(() => {
      $idPanel.classList.remove("online");
      $idPanel.classList.remove("offline");
      $idPanel.innerHTML = "";
    }, 3000);
  };

  w.addEventListener("online", (e) => isOnline());
  w.addEventListener("offline", (e) => isOnline());
}
