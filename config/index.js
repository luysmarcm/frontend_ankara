import axios from "axios";
import { url } from "./url";

const instance = axios.create({
	baseURL: url,
	//   headers: {
	//     "x-rapidapi-key": "923cff1576msh1afb25e17ddd3eep1183ccjsn6ac33acec8bf",
	//     "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
	//   },
});

export default instance;
