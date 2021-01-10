import React, { Component } from 'react'
import './Map.css';
import mapbox from 'mapbox-gl';
import { placeData } from '../data/data'

export class Map extends Component {

    
    componentDidMount(){
        const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

        const app = this.props.app
        mapbox.accessToken = 'pk.eyJ1IjoibTEyLXRyZW50IiwiYSI6ImNrZ2UxcHRzcjBqZmIycnFpdzh1MzlkYXAifQ.0UqT-ST0dFdnPhuVd54T5w';
       
        // var bounds = [
        //     [-110.113384, 35.747004], // Southwest coordinates
        //     [-102.113384, 39.747004] // Northeast coordinates
        // ]

        var map = new mapbox.Map({
            container: 'map',
            style:  "mapbox://styles/m12-trent/ckg9xlrw62gxc19lc9hbaylmf",
            center: [app.state.longitude, app.state.latitude],
            zoom: app.state.zoom,
            minZoom: 1,
            maxZoom: 13,
            attributionControl: false,
            // maxBounds: bounds
            });
        
        map.scrollZoom.disable();

        const nav = new mapbox.NavigationControl();
        map.addControl(nav, 'bottom-right');

        this.props.app.setState({
            map: map
        })

        

        




        map.on('load', function () {

            map.addSource('landlines', {
                'type': 'geojson',
                'data': {
                    'type': 'Feature',
                    'properties': {},
                    'geometry': {
                        'type': 'LineString',
                        'coordinates': [
                            placeData[0].coordinates,
                            placeData[1].coordinates,
                            placeData[6].coordinates,
                            placeData[11].coordinates,
                            placeData[3].coordinates,
                            placeData[16].coordinates,
                            placeData[10].coordinates,
                            placeData[6].coordinates,
                            placeData[5].coordinates,
                            placeData[12].coordinates,
                            placeData[8].coordinates,
                            placeData[4].coordinates,
                            placeData[7].coordinates,
                            placeData[9].coordinates,
                            placeData[14].coordinates,
                            placeData[4].coordinates,
                            placeData[8].coordinates,
                            placeData[11].coordinates,
                            placeData[14].coordinates,
                            placeData[15].coordinates,
                            placeData[0].coordinates,
                            placeData[2].coordinates,
                            placeData[13].coordinates,
                            placeData[4].coordinates,
                            placeData[9].coordinates,
                            placeData[2].coordinates,
                            placeData[3].coordinates,
                            ]
                        }
                    }    
                });
            
            map.addLayer({
                'id': 'lines',
                'type': 'line',
                'source': 'landlines',
                'layout': {
                    'line-join': 'round',
                    'line-cap': 'round'
                    },
                'paint': {
                    'line-color': '#fff',
                    'line-opacity': 0.7,
                    'line-width': 1.5
                 }
            });
            
        })
    }
    
    render() { 


        return (
            <div id="map">
            </div>
        )
    }
}

export default Map
