let b = document.querySelector('.body');
document.querySelector("#act").addEventListener('click', (event) => {
  event.preventDefault();
  b.innerHTML = "";
  let h=document.createElement("h2");
  h.innerText="Welcome To The Weather App";
  b.appendChild(h);
  let p=document.createElement('p');
  p.innerText="Here is your current location";
  b.appendChild(p);
  // Check if Geolocation is supported
if (navigator.geolocation) {
  // Get the current position
  navigator.geolocation.getCurrentPosition(showPosition, showError);
} else {
  alert("Geolocation is not supported by this browser.");
}

// Function to handle the success scenario
function showPosition(position) {
  console.log("Latitude: " + position.coords.latitude);
  console.log("Longitude: " + position.coords.longitude);
let label=document.createElement("label");
label.innerText="Latitude";
b.appendChild(label);
let box=document.createElement("input");
box.value=position.coords.latitude;
b.appendChild(box);
let label2=document.createElement("label");
label2.innerText="Latitude";
b.appendChild(label2);
let box2=document.createElement("input");
box2.value=position.coords.longitude;
b.appendChild(box2);
let iframe=document.createElement("iframe");
iframe.setAttribute("src",`https://maps.google.com/maps?q=${position.coords.latitude}, ${position.coords.longitude}&z=15&output=embed`);
b.appendChild(iframe);
}

// Function to handle errors
function showError(error) {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      alert("User denied the request for Geolocation.");
      break;
    case error.POSITION_UNAVAILABLE:
      alert("Location information is unavailable.");
      break;
    case error.TIMEOUT:
      alert("The request to get user location timed out.");
      break;
    case error.UNKNOWN_ERROR:
      alert("An unknown error occurred.");
      break;
  }
}
{/* <iframe src="https://maps.google.com/maps?q=35.856737, 10.606619&z=15&output=embed" width="360" height="270" frameborder="0" style="border:0"></iframe> */}
});


