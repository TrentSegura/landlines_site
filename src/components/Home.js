import React, { Component } from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

export default class Home extends Component {

    

    render() {

        const app = this.props.app
        const map = app.state.map 



        return (
            <div className="home-btn">
                <button onClick={()=>  map.flyTo({
                        center: [app.state.longitude, app.state.latitude],
                        zoom: 9,
                    })
            }><FontAwesomeIcon icon={faHome} /></button>
            </div>
        )
    }
}

