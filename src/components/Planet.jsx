import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function Planet() {
  const [planet, setPlanet] = useState(null);
  const navigate = useNavigate();
  const params = useParams();
  console.log(params);

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/planets/${params.id}/`)
      .then((response) => {
        console.log(response.data);
        setPlanet(response.data);
      })
      .catch((error) => {
        console.error(error);
        navigate("*");
        // if anything throws an error with the get request, then gets skipped and we go straight to catch
      });
  }, [params.id]);

  return (
    planet && (
      <div className="card mt-3">
        <div className="card-body">
          <h3 className="card-title">Planet: {planet.name}</h3>
          <p className="card-text">
            <strong>Climate: {planet.climate}</strong>
          </p>
          <p className="card-text">
            <strong>Terrain: {planet.terrain}</strong>
          </p>
          <p className="card-text">
            <strong>Surface Water: {planet.surface_water}</strong>
          </p>
          <p className="card-text">
            <strong>Population: {planet.population}</strong>
          </p>
        </div>
      </div>
    )
  );
}
export default Planet;
