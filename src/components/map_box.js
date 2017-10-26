import React, { Component } from 'react';
import { connect } from 'react-redux';
import { storeDirections } from '../actions';

class MapBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: 0,
      longitude: 0,
      id: '',
      instructions: [],
      distance: [],
      draw_line: [],
    }
  }

  componentDidMount() {
    this.props.storeInstructions(this.state.instructions);
    console.log(this.props.storeInstructions);
    let line;
    // let coordinates;
    window.mapboxgl.accessToken = 'pk.eyJ1IjoiY2p6ZWxlZG9uIiwiYSI6ImNqOG5jdnlhODE5a3MycW11MWo1eGV2Y2QifQ.WZStz_i8Bt1B4OEZJMg_WA';

    //Adds the map
    this.map = new window.mapboxgl.Map({
      container: 'map', // container id
      style: 'mapbox://styles/mapbox/streets-v9', // stylesheet location
      center: [-80.8464, 35.2269], // starting position [lng, lat]
      zoom: 14 // starting zoom
    });

    //Retreives the json of foodtrucks and returns the coordinates to the map in geojson.
    this.map.on('load', () => {
      fetch('https://desolate-lowlands-68945.herokuapp.com/foodtrucks')
        .then(response => response.json())
        .then(response => {
          return response.businesses.map(response => {
            return {

              'type': 'Feature',
              'properties': {
                id: response.id,
                description: response.name,
              },

              'geometry': {
                'type': 'Point',
                'coordinates': [response.coordinates.longitude,
                response.coordinates.latitude
                ]

              }

            }

          });
        })
        .then(features => {
          this.map.addSource('pointsSource', {
            type: 'geojson',
            data: {
              'type': 'FeatureCollection',
              'features': features,
            }
          })

          this.map.addLayer({
            id: 'points',
            source: 'pointsSource',
            type: 'circle',
          })
        });

      navigator.geolocation.watchPosition(function (position) {
        bigBrother(position);
      });

      // console.log(this.state.id);
      const bigBrother = (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          id: this.state.id,
          instructions: this.state.instructions,
        }, () => {

          if (this.map.getLayer('currentLocation') !== undefined && this.map.getSource('movingAlong') !== undefined) {
            this.map.removeLayer('currentLocation');
            this.map.removeSource('movingAlong');
          } else {

            this.map.addSource('movingAlong', {
              type: 'geojson',
              data: {
                'type': 'FeatureCollection',
                'features': [{
                  type: 'Feature',
                  geometry: {
                    type: 'Point',
                    coordinates: [
                      this.state.longitude,
                      this.state.latitude,
                    ],
                  }
                }]
              }
            });

            this.map.addLayer({
              id: 'currentLocation',
              source: 'movingAlong',
              type: 'circle',
              paint: {
                "circle-radius": 7,
                "circle-color": "#007cbf"
              }
            });
          }
        });
      };
    });

    this.map.addControl(new window.mapboxgl.NavigationControl());

    //Centers the point the user selected on the map

    this.map.on('click', 'points', (e) => {
      // The flyTo needed to be an arrow function to not tie it to the the map.on function.
      this.map.flyTo({
        center: e.features[0].geometry.coordinates
      });
    });
    this.map.on('click', 'points', (e) => {
      
      this.setState({
        id: e.features[0].properties.id,
        latitude: this.state.latitude,
        longitude: this.state.longitude,
        instructions: this.state.instructions});
        

      new window.mapboxgl.Popup()
        .setLngLat(e.features[0].geometry.coordinates)
        .setHTML(e.features[0].properties.description)
        .addTo(this.map);
        this.sendToGoogle();
    })
  }
  
  sendToGoogle() {
    let directions;
    let distance;
    let line;
<<<<<<< HEAD
    let coors;

=======
    
>>>>>>> a0acf5d9e9eeebaca673bf82d6a0efb11aa239ae
    fetch('https://desolate-lowlands-68945.herokuapp.com/directions/' + this.state.id + '?origin=' + this.state.latitude + ',' + this.state.longitude)
      .then(response => response.json())
      .then(response => {
        const steps = response.routes[0].legs[0].steps;

        directions = steps.map(location => location.html_instructions);
        distance = steps.map(location => location.distance.text);

<<<<<<< HEAD


=======
>>>>>>> a0acf5d9e9eeebaca673bf82d6a0efb11aa239ae
// This will place the coordiates in the correct format. The reduce function is needed
// it reduces the array of arrays of arrays from three deep to two deep. The concat wil
// not work without the reduce function.

        line = steps.map(location => [
         [location.start_location.lng,
          location.start_location.lat],
         [location.end_location.lng,
          location.end_location.lat]]).reduce(function (a, b) {
            return a.concat(b);
          });
        this.setState({
          instructions: directions,
          distance: distance,
          draw_line: line,
<<<<<<< HEAD
        });

        console.log(coors);

=======
        }),
          this.props.storeInstructions(this.state.instructions);
        
>>>>>>> a0acf5d9e9eeebaca673bf82d6a0efb11aa239ae
        this.map.addLayer({
          "id": "route",
          "type": "line",
          "source": {
            "type": "geojson",
            "data": {
              "type": "Feature",
              "properties": {},
              "geometry": {
                "type": "LineString",
                "coordinates": line
              }
            }
          },
          "layout": {
            "line-join": "round",
            "line-cap": "round"
          },
          "paint": {
            "line-color": "blue",
            "line-width": 6
          }
        })
      })

  };

  render() {
    console.log(this.state.longitude);
    // console.log(this.state.id);
    // console.log(this.state.instructions);
   console.log(this.state.distance);
    // console.log(this.state.draw_line);

    return (
      <div className="mapbox">
        <div id="map" />
<<<<<<< HEAD
        {<button className="mapGo" onClick={() => this.sendToGoogle()}>Go</button>}
        {/* <div>{directions}</div> */}
=======
>>>>>>> a0acf5d9e9eeebaca673bf82d6a0efb11aa239ae
      </div >
    );
  };
};

  export function mapDispatch2Props(dispatch) {
  return {
    storeInstructions: function (instruction) {
      dispatch(storeDirections(instruction));   
    },
  };
};

<<<<<<< HEAD
export default connect(mapDispatch2Props)(MapBox);
=======
export default connect(null, mapDispatch2Props)(MapBox);
>>>>>>> a0acf5d9e9eeebaca673bf82d6a0efb11aa239ae
