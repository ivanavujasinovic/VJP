import React from "react";
import Tekstijakuvalaatikko from "./Tekstijakuvalaatikko.jsx";
import kiri from "../Kuvak/kiri.png";
import ivana from "../Kuvak/Ivana.png";
import sanni from "../Kuvak/sanni.png";
import irpo from "../Kuvak/Irpo.png";

// Jokainen erillinen const-muuttuja antaa parametrit teksijakuvalaatikko-funktiolle
//Sekä täällä yksi tekstilaatikko (meteksti)
export const ivanav = {
  kuva: <img src={ivana} id="ivanakuva" alt="IVANA" width="90%" />,
  teksti: (
    <div>
      <p class="nimi"> Ivana Vujasinovic</p>
      <p> Moikka miten menee </p>
    </div>
  )
};
export const kirih = {
  kuva: <img src={kiri} id="kirikuva" alt="KIRI" width="90%" />,
  teksti: (
    <div>
      <p class="nimi"> Kiri Huhtanen</p>
      <p> 21-vuotias suunnistaja ja korpikuusien fani</p>
    </div>
  )
};

export const sannik = {
  kuva: <img src={sanni} id="sannikuva" alt="SANNI" width="90%" />,
  teksti: (
    <div>
      <p class="nimi"> Sanni Karhunen</p>
      <p> Mun lempikuusi on koivu </p>
    </div>
  )
};

export const irpon = {
  kuva: <img src={irpo} id="irpokuva" alt="IRPO" width="90%" />,
  teksti: (
    <div>
      <p class="nimi"> Irpo Niemenmaa</p>
      <p> Ei yksi puu kauaa pala</p>
    </div>
  )
};

//Tässä tekstilaatikkoon parametrit
export const meteksti = {
  otsikko: "Keitä me olemme?",
  teksti: (
    <div>
      <div id="profiilit">
        <Tekstijakuvalaatikko
          class="moikka"
          kuva={ivanav.kuva}
          teksti={ivanav.teksti}
        />
        <Tekstijakuvalaatikko kuva={kirih.kuva} teksti={kirih.teksti} />
        <Tekstijakuvalaatikko kuva={sannik.kuva} teksti={sannik.teksti} />
        <Tekstijakuvalaatikko kuva={irpon.kuva} teksti={irpon.teksti} />
      </div>

      <p>Hei!</p>

      <p>
        Olemme nelj&auml; opiskelijaa Aalto-yliopiston informaatioverkostojen
        linjalta. Toteutimme t&auml;m&auml;n kampanjan osana
        &rdquo;Viestint&auml; ja digitaalinen media&rdquo; -kurssia.
        T&auml;m&auml;n kouluty&ouml;n tarkoituksena oli suunnitella ja
        toteuttaa yhteiskunnallisesti merkitt&auml;v&auml; kampanja
        ryhm&auml;lle annetusta energiamuodosta - joko sen puolesta tai vastaan.
      </p>

      <p>
        Ryhm&auml;mme aiheeksi valikoitui bioenergia, ja jo suunnittelun
        alkuvaiheessa p&auml;&auml;dyimme toteuttamaan kampanjaa nimenomaan puun
        pienpoltosta. Kiinnostuimme aiheesta, sill&auml; halusimme rakentaa
        kampanjan, jonka teema on monelle suomalaiselle t&auml;rke&auml;.
        Teemasta, joka ei kirjaimellisesti j&auml;t&auml; kylm&auml;ksi.
      </p>

      <p>
        Kampanjan suunnittelu ja toteutus on ollut monivaiheinen, mutta
        nautinnollinen prosessi kuluneen kev&auml;&auml;n aikana. Haluamme
        kiitt&auml;&auml; Viestint&auml; ja digitaalinen media -kurssin
        vastuuprofessori Miia Jaatista, kurssiassistentteja Ilona Malmivirtaa ja
        Aarne Talvelaa sek&auml; Helsingin seudun ymp&auml;rist&ouml;palveluita
        (HSY) asiantuntevasta ohjeista sek&auml; opastuksesta.
      </p>

      <p>Turvallista ja vastuullista loppukev&auml;tt&auml; toivottaen</p>
      <br />
      <p>Irpo, Ivana, Kiri ja Sanni</p>
      <br />
      <p>Instagram: @poltaparemmin</p>
      <p>Sähköposti: poltaparemmin@gmail.com</p>
      <p>#poltaparemmin</p>

    </div>
  )
};
