// Função para inicializar o mapa
function initMap() {
    // Configurações do mapa
    var mapOptions = {
      center: {lat: -25.4526, lng: -49.1144},
      zoom: 12
    };
  
    // Criação do objeto Map
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);
  
    // Marcador para a localização da cidade
    var marker = new google.maps.Marker({
      position: {lat: -25.4526, lng: -49.1144},
      map: map,
      title: 'Localização da cidade'
    });
  
    // Função para adicionar marcador ao clicar no mapa
    function addMarker(location) {
      var marker = new google.maps.Marker({
        position: location,
        map: map
      });
    }
  
    // Evento de clique no mapa
    map.addListener('click', function(event) {
      addMarker(event.latLng);
    });
  }
  