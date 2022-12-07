import axios from "axios";

//Get a starwars person
const swapiGetter = (id) => 
axios
.get(`https://swapi.dev/api/people/${id}/`)
.then((res) => res.data.name)
.catch((err) => console.error(err));

export default swapiGetter;