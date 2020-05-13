import React from "react";

//Tällä funktiolla voi tehdä tekstiosioita, joissa on otsikko ja tekstiä
//Tämä yksinkertaistaa sivun kokoamista
//Tekstit, jotka tähän on laitettu löytyvät joko "sisalto.jsx" tai "meista.jsx"

const Tekstilaatikko = props => {
  return (
    <div>
      <h1 id="otsikko"> {props.otsikko} </h1>
      <p id="teksti"> {props.teksti} </p>
    </div>
  );
};

export default function(props) {
  return Tekstilaatikko(props);
}
