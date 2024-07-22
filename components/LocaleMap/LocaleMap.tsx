import "leaflet/dist/leaflet.css"
import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from 'react-leaflet'
import icon from "./icons"
import styles from "./map.module.css"
import { useState } from "react"


interface MapProps {
    latitude: number,
    longitude: number,
    updateLocale: Function,
}

interface LocationProps{
  updatePosition: Function
}

function LocationMarker(props:LocationProps) {
    const [position, setPosition] = useState(null)
    const map = useMapEvents({
      click() {
        map.locate()
      },
      locationfound(e) {
        setPosition(e.latlng)
        map.flyTo(e.latlng, map.getZoom())
      },
    })

    props.updatePosition(position);
  
    return position === null ? null : (
      <Marker position={position} icon={icon}>
        <Popup>You are here</Popup>
      </Marker>
    )
  }

export function LocaleMap(props:Readonly<MapProps>){
    return(
        <>
        <h1>Locale Map Component Example</h1>
        <MapContainer className={styles.map} center={[props.latitude, props.longitude]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='<a href="https://www.openstreetmap.org/copyright"></a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {/* <Marker position={[props.latitude, props.longitude]} icon={icon}>
                <Popup>
                    Minha localização atual!
                </Popup>
            </Marker> */}
            <LocationMarker updatePosition={props.updateLocale}/>
        </MapContainer>
        </>
    )
}