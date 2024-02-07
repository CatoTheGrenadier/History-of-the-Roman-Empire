import { MapContainer, TileLayer, useMap, Popup, Marker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import L from 'leaflet'


const geoUrl = "https://dh.gu.se/tiles/imperium/{z}/{x}/{y}.png"

const Province = () => {
    const center = [41.89,12.487]
    const zoom = 5.3

    const rome = new L.icon({
        iconUrl: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/264498ee-73ce-49d8-8ebc-f1f845fff514/d6zradm-e4dbb2af-5b51-4c24-a9a9-951e552a614c.png/v1/fit/w_800,h_800/total_war__rome_2___rome_faction_symbol_by_undevicesimus_d6zradm-414w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODAwIiwicGF0aCI6IlwvZlwvMjY0NDk4ZWUtNzNjZS00OWQ4LThlYmMtZjFmODQ1ZmZmNTE0XC9kNnpyYWRtLWU0ZGJiMmFmLTViNTEtNGMyNC1hOWE5LTk1MWU1NTJhNjE0Yy5wbmciLCJ3aWR0aCI6Ijw9ODAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.HmEb6QynibUP3QUJD45LavdQPLe_dgaV7YHfdlKE2O0',
        iconSize: [32,32]
    })
    
    return (
        <MapContainer center={center} zoom={zoom} scrollWheelZoom={false} style={{ height: "800px", width: "90%", margin: "auto", border: "5px solid black"}}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url={geoUrl}
            />
            <Marker position={[41.89,12.487]} icon={rome}>
                <Popup>
                    Eternal City
                </Popup>
            </Marker>
        </MapContainer>
    )
}

export default Province