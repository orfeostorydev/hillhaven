function initMap() {
  // Create grayscale map
  const map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 1.3619946730724686, lng: 103.764240 }, // New York City coordinates
    zoom: 15,
    mapTypeId: 'roadmap',
    styles: [
      {
        featureType: 'all',
        elementType: 'labels.text.fill',
      },
      {
        featureType: 'all',
        elementType: 'geometry',
      },{
        featureType: 'poi',
        stylers: [{ visibility: 'off' }]
      }
    ]
  });
 
  // Define marker data
  const markerData = [
   {
      position: { lat: 1.3619946730724686, lng: 103.76398163361861 }, // Amenities
     icon: './assets/image/map/hillhaven-map-logo.png',
     content:'<h4>Hillview</h4>',
    },
    {
      position: { lat: 1.361900, lng: 103.764240 }, // Amenities
      icon: 'https://orfeostorydev.com/hillhaven/assets/image/map/Amenities-map.png',
      content:'<h4>Hillview Community Club</h4><p>1 Hillview Rise</p><h5><img src="./assets/image/icons/walk.svg" alt="">  <strong>1.1 min</strong> walk</h5>',
    
    },
    {
      position: { lat: 1.363190, lng: 103.764130 }, // Amenities
      icon: 'https://orfeostorydev.com/hillhaven/assets/image/map/Amenities-map.png',
      content:'<h4>HillV2</h4><p>4 Hillview Rise</p><h5><img src="./assets/image/icons/walk.svg" alt="">  <strong>2.2 mins</strong> walk</h5>',
    },
    {
      position: { lat: 1.357730, lng: 103.768210 }, // Amenities
      icon: 'https://orfeostorydev.com/hillhaven/assets/image/map/Amenities-map.png',
      content:'<h4>The Rail Mall</h4><p>380 Upper Bukit Timah Road</p><h5><img src="./assets/image/icons/car.svg" alt="">  <strong>2 mins</strong> drive</h5>',
    },
    {
      position: { lat: 1.37878, lng: 103.76300 }, // Amenities
      icon: 'https://orfeostorydev.com/hillhaven/assets/image/map/Amenities-map.png',
      content:'<h4>Hillion Mall</h4><p>185A Jelebu Road</p> <h5><img src="./assets/image/icons/car.svg" alt="">  <strong>8.5 mins</strong> drive</h5>',
    },
    {
      position: { lat: 1.38030, lng: 103.76423 }, // Amenities
      icon: 'https://orfeostorydev.com/hillhaven/assets/image/map/Amenities-map.png',
      content:'<h4>Bukit Panjang Plaza</h4> <h5><img src="./assets/image/icons/car.svg" alt="">  <strong>12.6 mins</strong> drive</h5>',
    },
    {
      position: { lat: 1.38067, lng: 103.75996 }, // Amenities
      icon: 'https://orfeostorydev.com/hillhaven/assets/image/map/Amenities-map.png',
      content:'<h4>Junction 10</h4><p>178 Lompang Road</p><h5><img src="./assets/image/icons/car.svg" alt="">  <strong>13.7 mins</strong> drive</h5>',
    },
    {
      position: { lat: 1.36330, lng: 103.76737 }, // Connectivity
      icon: 'https://orfeostorydev.com/hillhaven/assets/image/map/connectivity-map.png',
      content:'<h4>Hillview MRT Station</h4><p>Upper Bukit Timah Road</p><h5><img src="./assets/image/icons/walk.svg" alt="">  <strong>9.6 mins</strong> walk</h5>',
    },
    {
      position: { lat: 1.368480, lng: 103.765327 }, // Education
      icon: 'https://orfeostorydev.com/hillhaven/assets/image/map/Education-map.png',
      content:'<h4>Assumption English School</h4> <p>624 Upper Bukit Timah Road</p><h5><img src="./assets/image/icons/car.svg" alt="">  <strong>4.3 mins</strong> drive</h5>',
    },
    {
      position: { lat:1.36614, lng: 103.77379 }, // Education
      icon: 'https://orfeostorydev.com/hillhaven/assets/image/map/Education-map.png',
      content:'<h4>GESS - International School</h4> <p>Dairy Farm Lane, Singapore</p>h5><img src="./assets/image/icons/car.svg" alt="">  <strong>6.3 mins</strong> drive</h5>',
    },
    {
      position: { lat: 1.36699, lng: 103.76745 }, // Education
      icon: 'https://orfeostorydev.com/hillhaven/assets/image/map/Education-map.png',
      content:'<h4>CHIJ Our Lady Queen of Peace</h4> <p>4 Chestnut Drive</p> <h5><img src="./assets/image/icons/car.svg" alt="">  <strong>7.4 mins</strong> drive</h5>',
    },
    {
      position: { lat: 1.36169, lng: 103.76762 }, // Education
      icon: 'https://orfeostorydev.com/hillhaven/assets/image/map/Education-map.png',
      content:'<h4>St Francis Methodist School</h4><p>496 Upper Bukit Timah Road</p> <h5><img src="./assets/image/icons/walk.svg" alt="">  <strong>10.6 mins</strong> walk</h5>',
    },
    {
      position: { lat: 1.33097, lng: 103.80246 }, // Education
      icon: 'https://orfeostorydev.com/hillhaven/assets/image/map/Education-map.png',
      content:"<h4>Nayang Girls' High School</h4> <p>2 Linden Drive</p><h5><i class='bi bi-car-front-fill'></i> <strong>16.12 mins</strong> drive</h5>",
 
    },
    {
      position: { lat: 1.33073, lng: 103.80449 }, //Education
      icon: 'https://orfeostorydev.com/hillhaven/assets/image/map/Education-map.png',
      content:'<h4>National Junior College</h4> <p>37 Hillcrest Road</p><h5><img src="./assets/image/icons/car.svg" alt="">  <strong> 17.12 mins</strong> drive</h5>',
    },
    {
      position: { lat: 1.35684, lng: 103.75355 }, // Nature
      icon: 'https://orfeostorydev.com/hillhaven/assets/image/map/Nature-map.png',
      content:'<h4>Bukit Batok Town Park</h4>  <p>Bukit Batok East Avenue 5</p> <h5><img src="./assets/image/icons/car.svg" alt="">  <strong>5.3 mins</strong> drive</h5>',
 
    },
    {
      position: { lat: 1.35008, lng: 103.77620 }, // Nature
      icon: 'https://orfeostorydev.com/hillhaven/assets/image/map/Nature-map.png',
      content:'<h4>Hindhede Nature Park</h4> <p>23 Hindhede Drive</p><h5><img src="./assets/image/icons/car.svg" alt="">  <strong>11.6 mins</strong> drive</h5>',
 
    },
    {
      position: { lat: 1.36411, lng: 103.77637 }, // Nature
      icon: 'https://orfeostorydev.com/hillhaven/assets/image/map/Nature-map.png',
      content:'<h4>Dairy Farm Nature Park</h4> <p>Thomson Road</p> <h5><img src="./assets/image/icons/car.svg" alt="">  <strong>14.7 mins</strong> drive</h5>',
 
    },
    {
      position: { lat: 1.35432, lng: 103.77694 }, // Nature 
      icon: 'https://orfeostorydev.com/hillhaven/assets/image/map/Nature-map.png',
      content:'<h4>Bukit Timah Nature Reserve</h4> <p>Thomson Road</p> <h5><img src="./assets/image/icons/car.svg" alt="">  <strong>15.8 mins</strong> drive</h5>',
 
    }
 
    // Add more marker data as needed
  ];
 
  // Add markers and info windows
  const markers = markerData.map(markerInfo => {
    const marker = new google.maps.Marker({
      position: markerInfo.position,
      map: map,
      icon: markerInfo.icon
    });
 
    const infoWindow = new google.maps.InfoWindow({
      content: markerInfo.content
    });
 
    // marker.addListener('click', () => {
    //   infoWindow.open(map, marker);
    // });
   
     marker.addListener('click', () => {
      // Close any open info windows before opening a new one
      markers.forEach(marker => {
      marker.infoWindow.close();
      });

      // Open the clicked info window
      infoWindow.open(map, marker);
    });

   // Attach the info window to the marker object
   marker.infoWindow = infoWindow;

    return marker;
  });
 
  // Remove airports, bus stations, train stations, and POI locations
  const request1 = {
    location: map.getCenter(),
    radius: '5000',
    types: ['accounting',
'airport',
'amusement_park',
'aquarium',
'art_gallery',
'atm',
'bakery',
'bank',
'bar',
'beauty_salon',
'bicycle_store',
'book_store',
'bowling_alley',
'bus_station',
'cafe',
'campground',
'car_dealer',
'car_rental',
'car_repair',
'car_wash',
'casino',
'cemetery',
'church',
'city_hall',
'clothing_store',
'convenience_store',
'courthouse',
'dentist',
'department_store',
'doctor',
'drugstore',
'electrician',
'electronics_store',
'embassy',
'fire_station',
'florist',
'funeral_home',
'furniture_store',
'gas_station',
'gym',
'hair_care',
'hardware_store',
'hindu_temple',
'home_goods_store',
'hospital',
'insurance_agency',
'jewelry_store',
'laundry',
'lawyer',
'library',
'light_rail_station',
'liquor_store',
'local_government_office',
'locksmith',
'lodging',
'meal_delivery',
'meal_takeaway',
'mosque',
'movie_rental',
'movie_theater',
'moving_company',
'museum',
'night_club',
'painter',
'park',
'parking',
'pet_store',
'pharmacy',
'physiotherapist',
'plumber',
'police',
'post_office',
'primary_school',
'real_estate_agency',
'restaurant',
'roofing_contractor',
'rv_park',
'school',
'secondary_school',
'shoe_store',
'shopping_mall',
'spa',
'stadium',
'storage',
'store',
'subway_station',
'supermarket',
'synagogue',
'taxi_stand',
'tourist_attraction',
'train_station',
'transit_station',
'travel_agency',
'university',
'veterinary_care',
'zoo']
  };
 
// Remove shopping malls and POI locations
 /* const request = {
    location: map.getCenter(),
    radius: '5000',
    types: ['shopping_mall', 'poi']
  };
*/
 
  const service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request1, (results, status) => {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      results.forEach(place => {
        const markerIndex = markers.findIndex(marker =>
          marker.getPosition().equals(place.geometry.location)
        );
        if (markerIndex !== -1) {
          markers[markerIndex].setMap(null);
        }
      });
    }
  });
 
  // Create grayscale map
  const mapeducation = new google.maps.Map(document.getElementById('mapeducation'), {
    center: { lat: 1.3619946730724686, lng: 103.76398163361861 }, // New York City coordinates
    zoom: 16,
    mapTypeId: 'roadmap',
    styles: [
      {
        featureType: 'all',
        elementType: 'labels.text.fill',
       // stylers: [{ saturation: 100 }, { color: '#000000' }, { lightness: -100 }]
      },
      {
        featureType: 'all',
        elementType: 'geometry',
       // stylers: [{ saturation: -100 }, { hue: '#ff0000' }]
      },
      {
        featureType: 'poi',
        stylers: [{ visibility: 'off' }]
      }
    ]
  });
 
  // Define marker data
  const markerDataEdu = [
     {
      position: { lat: 1.3619946730724686, lng: 103.76398163361861 }, // Amenities
     icon: './assets/image/map/hillhaven-map-logo.png',
     content:'<h4>Hillview</h4>',
    },
    {
      position: { lat: 1.368480, lng: 103.765327 }, // Education
      icon: 'https://orfeostorydev.com/hillhaven/assets/image/map/Education-map.png',
      content:'<h4>Assumption English School</h4> <p>624 Upper Bukit Timah Road</p><h5><img src="./assets/image/icons/car.svg" alt="">  <strong>4.3 mins</strong> drive</h5>',
    },
    {
      position: { lat:1.36614, lng: 103.77379 }, // Education
      icon: 'https://orfeostorydev.com/hillhaven/assets/image/map/Education-map.png',
      content:'<h4>GESS - International School</h4> <p>Dairy Farm Lane, Singapore</p>h5><img src="./assets/image/icons/car.svg" alt="">  <strong>6.3 mins</strong> drive</h5>',
    },
    {
      position: { lat: 1.36699, lng: 103.76745 }, // Education
      icon: 'https://orfeostorydev.com/hillhaven/assets/image/map/Education-map.png',
      content:'<h4>CHIJ Our Lady Queen of Peace</h4> <p>4 Chestnut Drive</p> <h5><img src="./assets/image/icons/car.svg" alt="">  <strong>7.4 mins</strong> drive</h5>',
    },
    {
      position: { lat: 1.36169, lng: 103.76762 }, // Education
      icon: 'https://orfeostorydev.com/hillhaven/assets/image/map/Education-map.png',
      content:'<h4>St Francis Methodist School</h4><p>496 Upper Bukit Timah Road</p> <h5><img src="./assets/image/icons/walk.svg" alt="">  <strong>10.6 mins</strong> walk</h5>',
    },
    {
      position: { lat: 1.33097, lng: 103.80246 }, // Education
      icon: 'https://orfeostorydev.com/hillhaven/assets/image/map/Education-map.png',
      content:"<h4>Nayang Girls' High School</h4> <p>2 Linden Drive</p><h5><i class='bi bi-car-front-fill'></i> <strong>16.12 mins</strong> drive</h5>",
 
    },
    {
      position: { lat: 1.33073, lng: 103.80449 }, //Education
      icon: 'https://orfeostorydev.com/hillhaven/assets/image/map/Education-map.png',
      content:'<h4>National Junior College</h4> <p>37 Hillcrest Road</p><h5><img src="./assets/image/icons/car.svg" alt="">  <strong> 17.12 mins</strong> drive</h5>',
    },
 
    // Add more marker data as needed
  ];
 
// Initialize a variable to keep track of the currently open info window
// Add markers and info windows
const markersEdu = markerDataEdu.map(markerInfo => {
  const marker = new google.maps.Marker({
    position: markerInfo.position,
    map: mapeducation,
    icon: markerInfo.icon
  });

  const infoWindow = new google.maps.InfoWindow({
    content: markerInfo.content
  });

  marker.addListener('click', () => {
    // Close any open info windows before opening a new one
    markersEdu.forEach(marker => {
      marker.infoWindow.close();
    });

    // Open the clicked info window
    infoWindow.open(mapeducation, marker);
  });

  // Attach the info window to the marker object
  marker.infoWindow = infoWindow;

  return marker;
});

 
  // Remove airports, bus stations, train stations, and POI locations
  const requestEdu = {
    location: mapeducation.getCenter(),
    radius: '5000',
    types: ['accounting',
'airport',
'amusement_park',
'aquarium',
'art_gallery',
'atm',
'bakery',
'bank',
'bar',
'beauty_salon',
'bicycle_store',
'book_store',
'bowling_alley',
'bus_station',
'cafe',
'campground',
'car_dealer',
'car_rental',
'car_repair',
'car_wash',
'casino',
'cemetery',
'church',
'city_hall',
'clothing_store',
'convenience_store',
'courthouse',
'dentist',
'department_store',
'doctor',
'drugstore',
'electrician',
'electronics_store',
'embassy',
'fire_station',
'florist',
'funeral_home',
'furniture_store',
'gas_station',
'gym',
'hair_care',
'hardware_store',
'hindu_temple',
'home_goods_store',
'hospital',
'insurance_agency',
'jewelry_store',
'laundry',
'lawyer',
'library',
'light_rail_station',
'liquor_store',
'local_government_office',
'locksmith',
'lodging',
'meal_delivery',
'meal_takeaway',
'mosque',
'movie_rental',
'movie_theater',
'moving_company',
'museum',
'night_club',
'painter',
'park',
'parking',
'pet_store',
'pharmacy',
'physiotherapist',
'plumber',
'police',
'post_office',
'primary_school',
'real_estate_agency',
'restaurant',
'roofing_contractor',
'rv_park',
'school',
'secondary_school',
'shoe_store',
'shopping_mall',
'spa',
'stadium',
'storage',
'store',
'subway_station',
'supermarket',
'synagogue',
'taxi_stand',
'tourist_attraction',
'train_station',
'transit_station',
'travel_agency',
'university',
'veterinary_care',
'zoo']
  };
 
 
  const serviceEdu = new google.maps.places.PlacesService(mapeducation);
  serviceEdu.nearbySearch(requestEdu, (results, status) => {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      results.forEach(place => {
        const markerIndex = markers.findIndex(marker =>
          marker.getPosition().equals(place.geometry.location)
        );
        if (markerIndex !== -1) {
          markers[markerIndex].setMap(null);
        }
      });
    }
  });
 


  // Create grayscale map
  const mapconnectivity = new google.maps.Map(document.getElementById('mapconnectivity'), {
    center: { lat: 1.3619946730724686, lng: 103.76398163361861 }, // New York City coordinates
    zoom: 16,
    mapTypeId: 'roadmap',
    styles: [
      {
        featureType: 'all',
        elementType: 'labels.text.fill',
      //  stylers: [{ saturation: 100 }, { color: '#000000' }, { lightness: -100 }]
      },
      {
        featureType: 'all',
        elementType: 'geometry',
       // stylers: [{ saturation: -100 }, { hue: '#ff0000' }]
      },
      {
        featureType: 'poi',
        stylers: [{ visibility: 'off' }]
      }
    ]
  });
 
  // Define marker data
  const markersDataCon = [
    {
      position: { lat: 1.3619946730724686, lng: 103.76398163361861 }, // Amenities
     icon: './assets/image/map/hillhaven-map-logo.png',
     content:'<h4>Hillview</h4>',
    },
   {
      position: { lat: 1.36330, lng: 103.76737 }, // Connectivity
      icon: 'https://orfeostorydev.com/hillhaven/assets/image/map/connectivity-map.png',
      content:'<h4>Hillview MRT Station</h4><p>Upper Bukit Timah Road</p><h5><img src="./assets/image/icons/walk.svg" alt="">  <strong>9.6 mins</strong> walk</h5>',
    },
    // Add more marker data as needed
  ];
 
  // Add markers and info windows
  const markersCon = markersDataCon.map(markerInfo => {
    const marker = new google.maps.Marker({
      position: markerInfo.position,
      map: mapconnectivity,
      icon: markerInfo.icon
    });
 
    const infoWindow = new google.maps.InfoWindow({
      content: markerInfo.content
    });
 
   marker.addListener('click', () => {
      // Close any open info windows before opening a new one
      markersCon.forEach(marker => {
        marker.infoWindow.close();
      });

      // Open the clicked info window
      infoWindow.open(mapconnectivity, marker);
    });

    // Attach the info window to the marker object
    marker.infoWindow = infoWindow;

    return marker;
  });
 
  // Remove airports, bus stations, train stations, and POI locations
  const requestCon = {
    location: mapconnectivity.getCenter(),
    radius: '5000',
    types: ['accounting',
'airport',
'amusement_park',
'aquarium',
'art_gallery',
'atm',
'bakery',
'bank',
'bar',
'beauty_salon',
'bicycle_store',
'book_store',
'bowling_alley',
'bus_station',
'cafe',
'campground',
'car_dealer',
'car_rental',
'car_repair',
'car_wash',
'casino',
'cemetery',
'church',
'city_hall',
'clothing_store',
'convenience_store',
'courthouse',
'dentist',
'department_store',
'doctor',
'drugstore',
'electrician',
'electronics_store',
'embassy',
'fire_station',
'florist',
'funeral_home',
'furniture_store',
'gas_station',
'gym',
'hair_care',
'hardware_store',
'hindu_temple',
'home_goods_store',
'hospital',
'insurance_agency',
'jewelry_store',
'laundry',
'lawyer',
'library',
'light_rail_station',
'liquor_store',
'local_government_office',
'locksmith',
'lodging',
'meal_delivery',
'meal_takeaway',
'mosque',
'movie_rental',
'movie_theater',
'moving_company',
'museum',
'night_club',
'painter',
'park',
'parking',
'pet_store',
'pharmacy',
'physiotherapist',
'plumber',
'police',
'post_office',
'primary_school',
'real_estate_agency',
'restaurant',
'roofing_contractor',
'rv_park',
'school',
'secondary_school',
'shoe_store',
'shopping_mall',
'spa',
'stadium',
'storage',
'store',
'subway_station',
'supermarket',
'synagogue',
'taxi_stand',
'tourist_attraction',
'train_station',
'transit_station',
'travel_agency',
'university',
'veterinary_care',
'zoo']
  };
 
 
  const serviceCon = new google.maps.places.PlacesService(mapconnectivity);
  serviceCon.nearbySearch(requestEdu, (results, status) => {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      results.forEach(place => {
        const markerIndex = markers.findIndex(marker =>
          marker.getPosition().equals(place.geometry.location)
        );
        if (markerIndex !== -1) {
          markers[markerIndex].setMap(null);
        }
      });
    }
  });
 


  // Create grayscale map
  const mapamenities = new google.maps.Map(document.getElementById('mapamenities'), {
    center: { lat: 1.3619946730724686, lng: 103.76398163361861 }, // New York City coordinates
    zoom: 16,
    mapTypeId: 'roadmap',
    styles: [
      {
        featureType: 'all',
        elementType: 'labels.text.fill',
     //   stylers: [{ saturation: 100 }, { color: '#000000' }, { lightness: -100 }]
      },
      {
        featureType: 'all',
        elementType: 'geometry',
      //  stylers: [{ saturation: -100 }, { hue: '#ff0000' }]
      },
      {
        featureType: 'poi',
        stylers: [{ visibility: 'off' }]
      }
    ]
  });
 
  // Define marker data
  const markersDataAme = [
    {
      position: { lat: 1.3619946730724686, lng: 103.76398163361861 }, // Amenities
     icon: './assets/image/map/hillhaven-map-logo.png',
     content:'<h4>Hillview</h4>',
    },
    {
      position: { lat: 1.361900, lng: 103.764240 }, // Amenities
      icon: 'https://orfeostorydev.com/hillhaven/assets/image/map/Amenities-map.png',
      content:'<h4>Hillview Community Club</h4><p>1 Hillview Rise</p><h5><img src="./assets/image/icons/walk.svg" alt="">  <strong>1.1 min</strong> walk</h5>',
    
    },
    {
      position: { lat: 1.363190, lng: 103.764130 }, // Amenities
      icon: 'https://orfeostorydev.com/hillhaven/assets/image/map/Amenities-map.png',
      content:'<h4>HillV2</h4><p>4 Hillview Rise</p><h5><img src="./assets/image/icons/walk.svg" alt="">  <strong>2.2 mins</strong> walk</h5>',
    },
    {
      position: { lat: 1.357730, lng: 103.768210 }, // Amenities
      icon: 'https://orfeostorydev.com/hillhaven/assets/image/map/Amenities-map.png',
      content:'<h4>The Rail Mall</h4><p>380 Upper Bukit Timah Road</p><h5><img src="./assets/image/icons/car.svg" alt="">  <strong>2 mins</strong> drive</h5>',
    },
    {
      position: { lat: 1.37878, lng: 103.76300 }, // Amenities
      icon: 'https://orfeostorydev.com/hillhaven/assets/image/map/Amenities-map.png',
      content:'<h4>Hillion Mall</h4><p>185A Jelebu Road</p> <h5><img src="./assets/image/icons/car.svg" alt="">  <strong>8.5 mins</strong> drive</h5>',
    },
    {
      position: { lat: 1.38030, lng: 103.76423 }, // Amenities
      icon: 'https://orfeostorydev.com/hillhaven/assets/image/map/Amenities-map.png',
      content:'<h4>Bukit Panjang Plaza</h4> <h5><img src="./assets/image/icons/car.svg" alt="">  <strong>12.6 mins</strong> drive</h5>',
    },
    {
      position: { lat: 1.38067, lng: 103.75996 }, // Amenities
      icon: 'https://orfeostorydev.com/hillhaven/assets/image/map/Amenities-map.png',
      content:'<h4>Junction 10</h4><p>178 Lompang Road</p><h5><img src="./assets/image/icons/car.svg" alt="">  <strong>13.7 mins</strong> drive</h5>',
    }
 
    // Add more marker data as needed
  ];
 
  // Add markers and info windows
  const markersAme = markersDataAme.map(markerInfo => {
    const marker = new google.maps.Marker({
      position: markerInfo.position,
      map: mapamenities,
      icon: markerInfo.icon
    });
 
    const infoWindow = new google.maps.InfoWindow({
      content: markerInfo.content
    });
 
    marker.addListener('click', () => {
      // Close any open info windows before opening a new one
      markersAme.forEach(marker => {
        marker.infoWindow.close();
      });

      // Open the clicked info window
      infoWindow.open(mapamenities, marker);
    });

    // Attach the info window to the marker object
    marker.infoWindow = infoWindow;

    return marker;
  });
 
  // Remove airports, bus stations, train stations, and POI locations
  const requestAme = {
    location: mapamenities.getCenter(),
    radius: '5000',
    types: ['accounting',
'airport',
'amusement_park',
'aquarium',
'art_gallery',
'atm',
'bakery',
'bank',
'bar',
'beauty_salon',
'bicycle_store',
'book_store',
'bowling_alley',
'bus_station',
'cafe',
'campground',
'car_dealer',
'car_rental',
'car_repair',
'car_wash',
'casino',
'cemetery',
'church',
'city_hall',
'clothing_store',
'convenience_store',
'courthouse',
'dentist',
'department_store',
'doctor',
'drugstore',
'electrician',
'electronics_store',
'embassy',
'fire_station',
'florist',
'funeral_home',
'furniture_store',
'gas_station',
'gym',
'hair_care',
'hardware_store',
'hindu_temple',
'home_goods_store',
'hospital',
'insurance_agency',
'jewelry_store',
'laundry',
'lawyer',
'library',
'light_rail_station',
'liquor_store',
'local_government_office',
'locksmith',
'lodging',
'meal_delivery',
'meal_takeaway',
'mosque',
'movie_rental',
'movie_theater',
'moving_company',
'museum',
'night_club',
'painter',
'park',
'parking',
'pet_store',
'pharmacy',
'physiotherapist',
'plumber',
'police',
'post_office',
'primary_school',
'real_estate_agency',
'restaurant',
'roofing_contractor',
'rv_park',
'school',
'secondary_school',
'shoe_store',
'shopping_mall',
'spa',
'stadium',
'storage',
'store',
'subway_station',
'supermarket',
'synagogue',
'taxi_stand',
'tourist_attraction',
'train_station',
'transit_station',
'travel_agency',
'university',
'veterinary_care',
'zoo']
  };
 
 
  const serviceAme = new google.maps.places.PlacesService(mapamenities);
  serviceAme.nearbySearch(requestEdu, (results, status) => {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      results.forEach(place => {
        const markerIndex = markers.findIndex(marker =>
          marker.getPosition().equals(place.geometry.location)
        );
        if (markerIndex !== -1) {
          markers[markerIndex].setMap(null);
        }
      });
    }
  });
 

 
  // Create grayscale map
  const mapnature = new google.maps.Map(document.getElementById('mapnature'), {
    center: { lat: 1.3619946730724686, lng: 103.76398163361861 }, // New York City coordinates
    zoom: 16,
    mapTypeId: 'roadmap',
    styles: [
      {
        featureType: 'all',
        elementType: 'labels.text.fill',
      //  stylers: [{ saturation: 100 }, { color: '#000000' }, { lightness: -100 }]
      },
      {
        featureType: 'all',
        elementType: 'geometry',
      //  stylers: [{ saturation: -100 }, { hue: '#ff0000' }]
      },
      {
        featureType: 'poi',
        stylers: [{ visibility: 'off' }]
      }
    ]
  });
 
  // Define marker data
  const markersDataNat = [
   {
      position: { lat: 1.3619946730724686, lng: 103.76398163361861 }, // Amenities
     icon: './assets/image/map/hillhaven-map-logo.png',
     content:'<h4>Hillview</h4>',
    },
    {
      position: { lat: 1.35684, lng: 103.75355 }, // Nature
      icon: 'https://orfeostorydev.com/hillhaven/assets/image/map/Nature-map.png',
      content:'<h4>Bukit Batok Town Park</h4>  <p>Bukit Batok East Avenue 5</p> <h5><img src="./assets/image/icons/car.svg" alt="">  <strong>5.3 mins</strong> drive</h5>',
 
    },
    {
      position: { lat: 1.35008, lng: 103.77620 }, // Nature
      icon: 'https://orfeostorydev.com/hillhaven/assets/image/map/Nature-map.png',
      content:'<h4>Hindhede Nature Park</h4> <p>23 Hindhede Drive</p><h5><img src="./assets/image/icons/car.svg" alt="">  <strong>11.6 mins</strong> drive</h5>',
 
    },
    {
      position: { lat: 1.36411, lng: 103.77637 }, // Nature
      icon: 'https://orfeostorydev.com/hillhaven/assets/image/map/Nature-map.png',
      content:'<h4>Dairy Farm Nature Park</h4> <p>Thomson Road</p> <h5><img src="./assets/image/icons/car.svg" alt="">  <strong>14.7 mins</strong> drive</h5>',
 
    },
    {
      position: { lat: 1.35432, lng: 103.77694 }, //Nature
      icon: 'https://orfeostorydev.com/hillhaven/assets/image/map/Nature-map.png',
      content:'<h4>Bukit Timah Nature Reserve</h4> <p>Thomson Road</p> <h5><img src="./assets/image/icons/car.svg" alt="">  <strong>15.8 mins</strong> drive</h5>',
 
    }


 
    // Add more marker data as needed
  ];
 
  // Add markers and info windows
  const markersNat = markersDataNat.map(markerInfo => {
    const marker = new google.maps.Marker({
      position: markerInfo.position,
      map: mapnature,
      icon: markerInfo.icon
    });
 
    const infoWindow = new google.maps.InfoWindow({
      content: markerInfo.content
    });
 
    marker.addListener('click', () => {
      // Close any open info windows before opening a new one
      markersNat.forEach(marker => {
        marker.infoWindow.close();
      });

      // Open the clicked info window
      infoWindow.open(mapnature, marker);
    });

    // Attach the info window to the marker object
    marker.infoWindow = infoWindow;

    return marker;
  });
 
  // Remove airports, bus stations, train stations, and POI locations
  const requestnat = {
    location: mapnature.getCenter(),
    radius: '5000',
    types: ['accounting',
'airport',
'amusement_park',
'aquarium',
'art_gallery',
'atm',
'bakery',
'bank',
'bar',
'beauty_salon',
'bicycle_store',
'book_store',
'bowling_alley',
'bus_station',
'cafe',
'campground',
'car_dealer',
'car_rental',
'car_repair',
'car_wash',
'casino',
'cemetery',
'church',
'city_hall',
'clothing_store',
'convenience_store',
'courthouse',
'dentist',
'department_store',
'doctor',
'drugstore',
'electrician',
'electronics_store',
'embassy',
'fire_station',
'florist',
'funeral_home',
'furniture_store',
'gas_station',
'gym',
'hair_care',
'hardware_store',
'hindu_temple',
'home_goods_store',
'hospital',
'insurance_agency',
'jewelry_store',
'laundry',
'lawyer',
'library',
'light_rail_station',
'liquor_store',
'local_government_office',
'locksmith',
'lodging',
'meal_delivery',
'meal_takeaway',
'mosque',
'movie_rental',
'movie_theater',
'moving_company',
'museum',
'night_club',
'painter',
'park',
'parking',
'pet_store',
'pharmacy',
'physiotherapist',
'plumber',
'police',
'post_office',
'primary_school',
'real_estate_agency',
'restaurant',
'roofing_contractor',
'rv_park',
'school',
'secondary_school',
'shoe_store',
'shopping_mall',
'spa',
'stadium',
'storage',
'store',
'subway_station',
'supermarket',
'synagogue',
'taxi_stand',
'tourist_attraction',
'train_station',
'transit_station',
'travel_agency',
'university',
'veterinary_care',
'zoo']
  };
 
 
  const servicenat = new google.maps.places.PlacesService(mapnature);
  servicenat.nearbySearch(requestEdu, (results, status) => {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      results.forEach(place => {
        const markerIndex = markers.findIndex(marker =>
          marker.getPosition().equals(place.geometry.location)
        );
        if (markerIndex !== -1) {
          markers[markerIndex].setMap(null);
        }
      });
    }
  });
 
 
}