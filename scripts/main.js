const locationTable = document.getElementById("location-table");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    // locationDiv.innerHTML = "unknown";
  }
}

function showPosition(position) {
  const newRow = locationTable.insertRow();

  // Insert cells (columns) in the new row
  const longitude = newRow.insertCell(0);
  const latitude = newRow.insertCell(1);
  longitude.innerHTML = position.coords.latitude;
  latitude.innerHTML = position.coords.longitude;
}
