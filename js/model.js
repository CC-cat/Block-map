var locations = [{
        title: '中国美术馆',
        location: {
            lat: 39.925144,
            lng: 116.408861
        }
    },
    {
        title: '故宫博物馆',
        location: {
            lat: 39.916345,
            lng: 116.397155
        }
    },
    {
        title: '天安门',
        location: {
            lat: 39.908715,
            lng: 116.397389
        }
    },
    {
        title: '北京工人体育场',
        location: {
            lat: 39.930857,
            lng: 116.447228
        }
    },
    {
        title: '民族文化宫',
        location: {
            lat: 39.907820,
            lng: 116.36900
        }
    },
    {
        title: '天坛公园',
        location: {
            lat: 39.883704,
            lng: 116.41284
        }
    },
    {
        title: '北京国际饭店',
        location: {
            lat: 39.909794,
            lng: 116.428291
        }
    },
    {
        title: '钟鼓楼',
        location: {
            lat: 39.941165,
            lng: 116.395888
        }
    },
    {
        title: '万达广场',
        location: {
            lat: 39.909000,
            lng: 116.470900
        }
    }
];


let mapStyle = [
  {
    featureType: 'water',
    stylers: [
      { color: '#19a0d8' }
    ]
  },{
    featureType: 'administrative',
    elementType: 'labels.text.stroke',
    stylers: [
      { color: '#ffffff' },
      { weight: 6 }
    ]
  },{
    featureType: 'administrative',
    elementType: 'labels.text.fill',
    stylers: [
      { color: '#e85113' }
    ]
  },{
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [
      { color: '#efe9e4' },
      { lightness: -40 }
    ]
  },{
    featureType: 'transit.station',
    stylers: [
      { weight: 9 },
      { hue: '#e85113' }
    ]
  },{
    featureType: 'road.highway',
    elementType: 'labels.icon',
    stylers: [
      { visibility: 'off' }
    ]
  },{
    featureType: 'water',
    elementType: 'labels.text.stroke',
    stylers: [
      { lightness: 100 }
    ]
  },{
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [
      { lightness: -100 }
    ]
  },{
    featureType: 'poi',
    elementType: 'geometry',
    stylers: [
      { visibility: 'on' },
      { color: '#f0e4d3' }
    ]
  },{
    featureType: 'road.highway',
    elementType: 'geometry.fill',
    stylers: [
      { color: '#efe9e4' },
      { lightness: -25 }
    ]
  }
];
