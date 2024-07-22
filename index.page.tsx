import { useEffect, useState } from "react";
import { ClientLocaleMap } from "./components/LocaleMap";
import { BoxCoordinates, Container, Coordinate } from "./styles";

const geolocation = require('geolocation');

interface Position {
    coords: {
        latitude: number,
        longitude: number,
    }
}

interface UpdatePosition {
    lat: number | null,
    lng: number | null,
}

export default function Locale(){

    const [coordinateLatitude, setCoordinateLatitude] = useState(0);
    const [coordinateLongitude, setCoordinateLongitude] = useState(0);

    const handleUpdateLocale = (position:UpdatePosition) =>{
        console.log(JSON.stringify(position))
    }

    useEffect(()=> {
        geolocation.getCurrentPosition(function (err: Error, position:Position) {
            if (err) throw err
            setCoordinateLatitude(position.coords.latitude)
            setCoordinateLongitude(position.coords.longitude)
          })
    },[coordinateLatitude,coordinateLongitude])   

    return(
        
        <Container>
            <ClientLocaleMap 
                latitude={coordinateLatitude} 
                longitude={coordinateLongitude} 
                updateLocale={handleUpdateLocale}
            />            
            <BoxCoordinates>
                <Coordinate>Latidude: {coordinateLatitude}</Coordinate>
                <Coordinate>Logitude: {coordinateLongitude}</Coordinate>
            </BoxCoordinates>              
        </Container>)
}