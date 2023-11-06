function initGooglePlaces(){
  console.log("places loaded")

const input = document.querySelector(".g-places-finder");
if(input){
  const options = {
    // componentRestrictions: { country: "es" },
    strictBounds: false,
  };
  const autocomplete = new google.maps.places.Autocomplete(input, options);
  google.maps.event.addListener(autocomplete, 'place_changed', function () {
    var place = autocomplete.getPlace();
    console.log(place)
    const lat = place.geometry.location.lat()
    const lng = place.geometry.location.lng()
  
    document.querySelector('[name="lat"]').value = lat
    document.querySelector('[name="lng"]').value = lng
    console.log(place, lat, lng)
  });
}
}
function startMap() {
  const ironhackBCN = {
  	lat: 41.3977381,
  	lng: 2.190471916};
  const map = new google.maps.Map(
    document.getElementById('map'),
    {
      zoom: 9,
      center: ironhackBCN
    }
  );
  const myMarker = new google.maps.Marker({
    position: {
      lat: 41.3977381,
      lng: 2.190471916
    },
    map: map,
    title: "I'm here"
  });

}


// startMap();
