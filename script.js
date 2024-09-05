let b = document.querySelector('.body');
document.querySelector("#act").addEventListener('click', (event) => {
  event.preventDefault();
  b.innerHTML = "";
  let h=document.createElement("h1");
  h.innerText="Welcome To The Weather App";
  b.appendChild(h);
  let p=document.createElement('p');
  p.innerText="Here is your current location";
  b.appendChild(p);
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(showPosition, showError);
} else {
  alert("Geolocation is not supported by this browser.");
}
function showPosition(position) {
  let lat=position.coords.latitude;
  let lon=position.coords.longitude;
  let div=document.createElement("div");
  div.className='latlong';
let box=document.createElement("input");
box.value=`Lat: ${lat}`;
div.appendChild(box);
let box2=document.createElement("input");
box2.value=`Long: ${lon}`;
div.appendChild(box2);
b.appendChild(div);
let iframe=document.createElement("iframe");
iframe.setAttribute("src",`https://maps.google.com/maps?q=${position.coords.latitude}, ${position.coords.longitude}&z=15&output=embed`);
b.appendChild(iframe);
let ndiv=document.createElement('div');
ndiv.className='bottom';
let h2=document.createElement('h2');
h2.innerText='Your Weather Data'
ndiv.appendChild(h2);
b.appendChild(ndiv);
}
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

});


