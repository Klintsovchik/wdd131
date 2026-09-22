

document.getElementById("currentyear").textContent = new Date().getFullYear();

document.getElementById("lastModified").textContent =
  `Last Modification: ${document.lastModified}`;


const temperature = 8;   
const windSpeed = 12;    

function calculateWindChill(t, s) {
  return 13.12 + 0.6215 * t - 11.37 * Math.pow(s, 0.16) + 0.3965 * t * Math.pow(s, 0.16);
}

const windChill =
  temperature <= 10 && windSpeed > 4.8
    ? `${calculateWindChill(temperature, windSpeed).toFixed(1)} \u00B0C`
    : "N/A";

document.getElementById("windchill").textContent = windChill;
