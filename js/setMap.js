var map;
var markers = [];

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 39.922800,
            lng: 116.400000
        },
        zoom: 13,
        styles: mapStyle,
        mapTypeControl: false,
    });
    showListings();

    document.getElementById('show-listings').addEventListener('click', showListings);
    document.getElementById('hide-listings').addEventListener('click', hideListings);
    document.getElementById('zoom-to-area').addEventListener('click', function() {
          zoomToArea();
        });
};

function showListings() {
    var largeInfowindow = new google.maps.InfoWindow();
    var bounds = new google.maps.LatLngBounds();
    let defaultIcon = makeMarkerIcon('0091ff');
    let highlightedIcon = makeMarkerIcon('FFFF24');
    for (var i = 0; i < locations.length; i++) {
        var position = locations[i].location;
        var title = locations[i].title;
        var marker = new google.maps.Marker({
            position: position,
            map: map,
            title: title,
            animation: google.maps.Animation.DROP,
            id: i,
            icon: defaultIcon
        });
        markers.push(marker);
        bounds.extend(marker.position);
        marker.addListener('click', function() {
            populateInfoWindow(this, largeInfowindow);
        });
        marker.addListener('mouseover', function() {
            this.setIcon(highlightedIcon);
        });
        marker.addListener('mouseout', function() {
            this.setIcon(defaultIcon);
        });
    }
    map.fitBounds(bounds);


};

function hideListings() {
    console.log(markers);
    for (var i of markers) {
        i.setMap(null);
    }
};

function populateInfoWindow(marker, infowindow) {

    if (infowindow.marker != marker) {
        infowindow.setContent('');
        infowindow.marker = marker;
        console.log(marker.title);
        //mark详细信息
        let markerDesc = '';
        let _vikiRequeryUrl = `http://baike.baidu.com/api/openapi/BaikeLemmaCardApi?scope=103&format=json&appid=379020&bk_key=${marker.title}&bk_length=600`;
        $.ajax({
            url: _vikiRequeryUrl,
            dataType: 'jsonp',
            type: 'POST',
            success: function(response) {
                console.log(response);
                console.log(response.abstract);
                let _desc = '';
                (response.abstract) ? _desc = response.abstract: _desc = '暂无收录信息';
                infowindow.setContent(`<div><span style="font-weight:bold">${marker.title}</span><br>${_desc}</div>`);
            },
            error: function(err) {
                console.log(err);
                infowindow.setContent(`<div><span style="font-weight:bold">${marker.title}</span><br>${err}</div>`);
            }
        });
        console.log(_vikiRequeryUrl);

        infowindow.open(map, marker);
        infowindow.addListener('closeclick', function() {
            // infowindow.setMarker(null);
        });


    }
};

function makeMarkerIcon(iconColor) {
    var markerImage = new google.maps.MarkerImage('http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|' + iconColor +
        '|40|_|%E2%80%A2',
        new google.maps.Size(21, 34),
        new google.maps.Point(0, 0),
        new google.maps.Point(10, 34),
        new google.maps.Size(21, 34));
    return markerImage;

};

function zoomToArea() {
    // Initialize the geocoder.
    var geocoder = new google.maps.Geocoder();
    // Get the address or place that the user entered.
    var address = document.getElementById('zoom-to-area-text').value;
    // Make sure the address isn't blank.
    if (address == '') {
      window.alert('You must enter an area, or address.');
    } else {
      // Geocode the address/area entered to get the center. Then, center the map
      // on it and zoom in
      geocoder.geocode(
        { address: address,
          componentRestrictions: {locality: 'New York'}
        }, function(results, status) {
          if (status == google.maps.GeocoderStatus.OK) {
            map.setCenter(results[0].geometry.location);
            map.setZoom(15);
          } else {
            window.alert('We could not find that location - try entering a more' +
                ' specific place.');
          }
        });
    }
}
