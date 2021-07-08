import { useEffect, useState } from "react";

// Components
import ListCharacters from "../../components/ListCharacters/ListCharacters";
import InputSearch from "../../components/InputSearch/InputSearch";
import Loading from "../../components/Loading/Loading";
// import { useFetch } from "../../hooks/useFetch";
// import { getPersonajePorNombre } from "../../services/getPersonajePorNombre";

// Config
import "./Home.scss";

// SCSS
import API from "../../config/urlConfig";

const Home = () => {
  const [personajes, setPersonajes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  // Custom Hooks
  // const { dataApi, isLoading } = useFetch("/character", "get");

  useEffect(() => {
    // setPersonajes(dataApi.results);
    const getPersonajes = async () => {
      setLoading(true);
      try {
        const url = "/character";
        const response = await API.get(url);
        const dataApi = response.data;
        setPersonajes(dataApi.results);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    getPersonajes();
  }, []);

  const handleSearch = async (value) => {
    setSearchTerm(value);

    if (value && value.length > 2) {
      setLoading(true);
      // const newList = personajes.filter((personaje) =>
      //   personaje.name.toLowerCase().includes(value.toLowerCase())
      // );

      try {
        const url = `/character/?name=${value}`;
        // const response = await getPersonajePorNombre(url, "get");
        const response = await API.get(url);
        setSearchResults(response.data.results);
        setLoading(false);
      } catch (error) {
        setSearchResults([]);
        setLoading(false);
      }
    } else {
      setSearchResults(personajes);
      setLoading(false);
    }
  };

  return (
    <section className="home-view">
      <InputSearch term={searchTerm} handleSearch={handleSearch} />

      {loading ? (
        <Loading />
      ) : (
        <ListCharacters personajes={searchTerm.length < 1 ? personajes : searchResults} />
      )}
    </section>
  );
};

export default Home;
