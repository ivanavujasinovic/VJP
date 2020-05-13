import React from "react";

//Tällä funktiolla voi tekstilaatikko-funktion tapaan tehdä kuva+ kuvateksti komponentti
//Sisältö löytyy "meista.jsx" kansiosta
export default function(props) {
  return (
    <div class="kuvat">
      <image class="kuva"> {props.kuva} </image>
      <p class="kuvausteksti"> {props.teksti} </p>
    </div>
  );
}
