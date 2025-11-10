document.addEventListener("DOMContentLoaded", () => {
  // Asignar UserAgent
  document.getElementById("userAgent").value = navigator.userAgent;

  // Obtener IP y esperar antes del envío
  fetch("https://api.ipify.org?format=json")
    .then(res => res.json())
    .then(data => {
      document.getElementById("ip").value = data.ip;
      console.log("✅ IP asignada:", data.ip);
    })
    .catch(err => console.error("❌ Error obteniendo IP:", err));

  // Prevenir envío si todavía no está la IP
  const form = document.getElementById("inscripcion");
  form.addEventListener("submit", (e) => {
    if (!document.getElementById("ip").value) {
      e.preventDefault();
      alert("⏳ Espera un segundo mientras obtenemos tu IP...");
      setTimeout(() => form.submit(), 1500);
    }
  });
});