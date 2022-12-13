import React from 'react'
import GoogleMaps from '../Maps/GoogleMap'
import GoogleMaps2 from '../Maps/GoogleMaps2'
import UserNavbar from '../Navbar/UserNavbar'
import styles from './Sell.module.css'

function Sell() {
    return (
        <div>
            <UserNavbar />
            <div className={styles.MapOverall}>
                <div className={styles.Map}>
                    <GoogleMaps2 />
                </div>
            </div>

            Sell
        </div>
    )
}

export default Sell