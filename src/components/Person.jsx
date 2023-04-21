import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function Person() {
  const [person, setPerson] = useState(null);
  // useState snippet
  const navigate = useNavigate();
  const params = useParams();
  console.log(params);

  useEffect(() => {
    // callback function first arg, then array
    axios
      .get(`https://swapi.dev/api/people/${params.id}/`)
      // get request which returns the response
      .then((response) => {
        console.log(response.data);
        setPerson(response.data);
      })
      // grabs the response we get back from the get request
      .catch((error) => {
        console.error(error);
        navigate("*");
        // if anything throws an error with the get request, then gets skipped and we go straight to catch
      });
    // creates a way to catch errors and redirect
  }, [params.id]);
  // in the array we list attributes to be checked that let the page know to fire the useEffect again
  // callback function first arg, then array

  return (
    person && (
      <div className="card mt-3">
        <div className="card-body">
          <h3 className="card-title">Person: {person.name}</h3>
          <p className="card-text">
            <strong>Height: {person.height}</strong>
          </p>
          <p className="card-text">
            <strong>Mass: {person.mass}</strong>
          </p>
          <p className="card-text">
            <strong>Hair Color: {person.hair_color}</strong>
          </p>
          <p className="card-text">
            <strong>Skin Color: {person.skin_color}</strong>
          </p>
        </div>
      </div>
    )
  );
}

export default Person;
