import React, { Component } from 'react'
import mapbox from 'mapbox-gl';
import './Pins.css'
import data from '../data/map.json'

export class Pins extends Component {
    render() {
        const app = this.props.app
        const map = app.state.map
        
        if (map){
        
            data.features.forEach((place) => {
                const coord = [place.geometry.coordinates[0], place.geometry.coordinates[1]]
            
                const popup = new mapbox.Popup({
                    // closeButton: false,
                    // closeOnClick: false
                })

                // map.on('mouseenter', 'places', function (e) {
                //     // Change the cursor style as a UI indicator.
                //     map.getCanvas().style.cursor = 'crosshairs';
                     
                //     var coordinates = e.features[0].geometry.coordinates.slice();
                //     var description = e.features[0].properties.description;
                     
                //     // Ensure that if the map is zoomed out such that multiple
                //     // copies of the feature are visible, the popup appears
                //     // over the copy being pointed to.
                //     while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                //     coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
                //     }
                     
                //     // Populate the popup and set its coordinates
                //     // based on the feature found.
                //     popup.setLngLat(coordinates).setHTML(description).addTo(map);
                //     });


                
                // map.on('mouseleave', 'places', function () {
                //     map.getCanvas().style.cursor = '';
                //     popup.remove();
                //     });


                

                popup.setMaxWidth("350px")

                popup.setHTML(
                    // place.properties.description ?

                    // `
                    // <div class="mapboxgl-popup-content-header">
                    // <h3>${place.properties.name}</h3>
                    // </div>
                    // <div class="description">
                    // ${place.properties.description}
                    // </div>
                    // `               

                    // :

                    `
                    <div class="mapboxgl-popup-content-header">
                    <h3>${place.properties.name}</h3>
                    </div>
                    ` )                


                var el = document.createElement('div');
                el.id = 'pin-marker';
                
                const marker = new mapbox.Marker(el)
                marker.setPopup(popup)
                marker.setLngLat(coord)
                marker.addTo(map)
            })
        }
        return (
            <div>
            </div>
        )      
      }
}

export default Pins
