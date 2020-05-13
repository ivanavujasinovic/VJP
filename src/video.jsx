import React from "react";
import ReactPlayer from "react-player";
//Youtube-video on upotettu sivulle react-player -kirjastolla
//controls-propsilla saadaan käyttöön Youtuben natiivit videotyökalut (fullscreen, asetukset)
const ResponsivePlayer = () => {
  return (
    <div className="player-wrapper">
      <ReactPlayer
        className="react-player"
        url="https://youtu.be/2gi5PIw4ty4"
        width="100%"
        controls="true"
      />

      <p class="tekstit">
        Tässä vlogimme aurinkoisesta kev&auml;tp&auml;iv&auml;st&auml;, jonka
        vietimme kampanjaty&ouml;ryhm&auml;n kanssa polttaen puuta nuotion
        &auml;&auml;rell&auml;, vaahtokarkkeja paistaen.
      </p>
    </div>
  );
};

export default ResponsivePlayer;
