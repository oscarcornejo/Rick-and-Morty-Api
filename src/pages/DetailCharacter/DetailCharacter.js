import React, { useEffect, useState } from "react";

// react-router-dom
import { useParams } from "react-router-dom";

// Components
import Character from "../../components/Character/Character";
import Loading from "../../components/Loading/Loading";

// Config
import API from "../../config/urlConfig";

const DetailCharacter = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [detailPersonaje, setDetailPersonaje] = useState({});

  useEffect(() => {
    let mounted = true;

    if (mounted) {
      const getPersonaje = async () => {
        setLoading(true);
        try {
          const url = `/character/${id}`;

          const response = await API.get(url);
          const data = response.data;
          setDetailPersonaje(data);

          setTimeout(() => {
            setLoading(false);
          }, 1000);
        } catch (error) {
          console.log(error);
          setLoading(false);
        }
      };
      getPersonaje();
    }

    return () => {
      mounted = false;
    };
  }, [id]);

  return <>{loading ? <Loading /> : <Character detailPersonaje={detailPersonaje} />}</>;
};

export default DetailCharacter;
