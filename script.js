
function initMap() {

    var mapOptions = {
      center: {lat: -25.4526, lng: -49.1144},
      zoom: 12
    };
  
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);
  
    var marker = new google.maps.Marker({
      position: {lat: -25.4526, lng: -49.1144},
      map: map,
      title: 'Localização da cidade'
    });
  
    function addMarker(location) {
      var marker = new google.maps.Marker({
        position: location,
        map: map
      });
        
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
    }
    map.addListener('click', function(event) {
      addMarker(event.latLng);
    });
  }
  
