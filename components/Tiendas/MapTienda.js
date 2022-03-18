import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
	width: "100%",
	height: "100%",
};

const MapTienda = ({ coordenadas }) => {
	const c = coordenadas.split(" ");

	const center = {
		lat: parseFloat(c[0]),
		lng: parseFloat(c[1]),
	};
	return (
		<LoadScript googleMapsApiKey="AIzaSyA9BSI8Xb8o-_UE4IuMOhI9Z3TrA-qBKHA">
			<GoogleMap
				id="Tienda Canguro"
				mapContainerStyle={containerStyle}
				zoom={15}
				center={center}
			>
				<Marker position={center} icon="/imagen/ico.png" />
			</GoogleMap>
		</LoadScript>
	);
};

export default MapTienda;
