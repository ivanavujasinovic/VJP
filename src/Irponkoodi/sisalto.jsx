import React from "react";

// tekstilaatikko.jsx:n tekstit.
// Kun teet omasi, muista lisätä muuttujan nimi App.js:n importteihin.

//Esittelyteksti
export const esittely = {
  otsikko: "",
  teksti: (
    <div>
      <p>
        Puun pienpoltto on suurin pienhiukkasten ja mustan hiilen päästöjen
        lähde Suomessa. Vaikutukset ihmisten terveyteen etenkin kaupungeissa
        ovat huolestuttavia, ja päästöt kiihdyttävät myös osaltaan
        ilmastonmuutosta.
      </p>
      <p />

      <p>
        Saunaa lämmittävä puukiuas ja takkatulen loimu kuuluvat suomalaiseen
        mielenmaisemaan. Polttamalla harkitummin meillä kaikilla on mahdollisuus
        vaikuttaa. Noudattamalla vastuullisen polton ohjenuoraa voimme jo nyt
        vähentää haitallisia ilmansaasteita huomattavasti.
      </p>
      <p />

      <p>
        Voisimmeko kohdella puunpolttoa sen ansaitsemalla arvokkuudella?
        Laadukkaat polttovälineet ja harkittu ajankohta lisäävät takkahetken
        erityisyyttä ja päästävät meidät nauttimaan oikeasta ylellisyydestä.
        Mitä harvemmin ja paremmin puuta polttaa, sitä tärkeämpi hetkestä
        syntyy. Puuksi voimme valita kuivan, laadukkaan ja kotimaisen koivupuun.
        Sen sijaan roskien takassa polttaminen on kuin laittaisi tiskisaippuaa
        aamukahviin, eihän se hyvältä tunnu!
      </p>
    </div>
  )
};
//"Mistä Lisätietoa?"- kohdan tekstit
export const lisatieto = {
  otsikko: "Mistä lisätietoa?",
  teksti: (
    <div>
      <li>- Omalta nuohoojaltasi</li>
      <li>- Kunnan ympäristö- ja pelastusviranomaiselta</li>
      <li>
        - Helsingin seudun ympäristöpalvelut:
        <a href="www.hsy.fi/ilmanlaatu"> HSY</a>{" "}
      </li>
      <li>
        - <a href="www.nuohoojat.fi">Nuohousalan keskusliitto</a>
      </li>
      <li>
        - <a href="www.syke.fi/">Suomen ympäristökeskus </a>
      </li>
      <li>
        - Terveyden ja hyvinvoinnin laitos:
        <a href="https://thl.fi/fi/web/ymparistoterveys/ilmansaasteet/puunpoltto">
          _THL
        </a>
      </li>
      <li>
        - Tulisija- ja savupiippuyhdistys: <a href="https://tsy.fi/">TSY </a>
      </li>
      <li>
        <a href="https://www.aalto.fi/fi/tapahtumat/vaitos-konetekniikan-alalta-di-mikko-savolahti">
          {" "}
          - Diplomi-insinööri Mikko Savolahden väitöskirja puunpolton
          pienhiukkasten haitoista
        </a>
      </li>
    </div>
  )
};
//"Tervehdys HSY:ltä"- kohdan tekstit
export const hsy = {
  otsikko: "Tervehdys HSY:ltä",
  teksti: (
    <div>
      <p>
        Otimme yhteyttä Helsingin seudun ympäristöpalveluihin ja saimme
        tervehdyksen kampanjasivuillamme julkaistavaksi:
      </p>
      <p>
        ”Tulisijojen käyttö aiheuttaa aina savua eli päästöjä ilmaan.
        Erityisesti jos poltetaan jätteitä tai kosteaa puuta, savupiipusta
        tupruaa ilmaan runsaasti hiukkasia, häkää ja hiilivetyjä. Nämä ovat
        haitallisia ihmisten terveydelle ja myös vähentävät viihtyisyyttä.
        Huonossa puun palamisessa syntyy mustaa hiiltä eli nokea, joka Suomen
        leveyspiireiltä kulkeutuu arktisille alueille ja aikaistaa jään
        sulamista. Jokainen voi vaikuttaa siihen, kuinka puhtaasti puut palavat.
        Huonosti toteutetussa puunpoltossa hiukkas- ja PAH-päästöt voivat olla
        monikymmen- tai jopa monisatakertaiset hyvään polttoon verrattuna.
        Tärkeintä on, että poltetaan vain kuivaa ja puhdasta puuta. Vanhaakin
        tulisijaa voi käyttää taitavasti ja vähentää muodostuvien epäpuhtauksien
        määriä. Vinkkejä löytyy sivulta
        <a href="www.poltapuhtaasti.fi/"> www.poltapuhtaasti.fi/</a>-sivulta.”
      </p>
    </div>
  )
};

//Puunpolttovisan tekstit
export const quizteksti = {
  otsikko: "",
  teksti: (
    <div>
      <p>Tuloksesi:</p>
      <p>
        11 - 12 pistett&auml;: Onneksi olkoon, polttotaitosi ovat kuuminta
        hottia! Sinulla on aihetta olla ylpe&auml;
        polttok&auml;yt&auml;nteist&auml;si. Jaa t&auml;m&auml; testi
        kavereillesi ja laita tietoisuus levi&auml;m&auml;&auml;n kulovalkean
        tavoin.
      </p>

      <p>
        8 - 10 pistett&auml;: Almost there! Puhtaat ja vastuulliset
        tulisijak&auml;yt&auml;nteet polttelevat jo varpaitasi.
        P&auml;ivit&auml; sivu tehd&auml;ksesi testin uudestaan. Sinustakin voi
        tulla tuota pikaa puunpolton kuumin nimi!
      </p>

      <p>
        3 - 7 pistett&auml;: Valitettavasti et t&auml;n&auml;&auml;n ollut
        liekeiss&auml;. Tutustuthan huolella puunpolton saloihin
        &rdquo;Puunpolton ABC&rdquo; -osiossa. Kun olet valmis, testaa itsesi
        uudelleen ja viet tuhkatkin pes&auml;st&auml;.
      </p>

      <p>
        0 - 2 pistett&auml;: Olet paloturvallisuusriski. T&auml;m&auml; kampanja
        on tehty etenkin sinua varten, joten tutustuthan huolella
        kampanjasivustomme materiaaleihin. Muuten maailma palaa silmiesi
        edess&auml;, pienhiukkaset aiheuttavat sinulle ja l&auml;heisillesi
        terveyshaittoja ja napaj&auml;&auml;tik&ouml;t sulavat.
        Tehd&auml;&auml;n muutos yhdess&auml;!
      </p>

      <p />
    </div>
  )
};

//Palauteosion tekstit
export const palaute = {
  otsikko: "",
  teksti: (
    <div>
      <p>
        J&auml;ik&ouml; jokin askarruttamaan? L&ouml;ysitk&ouml; sivuiltamme
        asiavirheen? Onko sinulla kehitysideoita tai jokin puunpolttoon
        liittyv&auml; tarina tai muisto?
      </p>

      <p>
        J&auml;t&auml; terveisesi tai kysymyksesi oheiseen palautelaatikkoon, ja
        luemme sen mielell&auml;mme. Mielipiteell&auml;si on v&auml;li&auml;!
      </p>

      <p>
        Palautetta voit antaa my&ouml;s s&auml;hk&ouml;postiosoitteeseemme:
        poltaparemmin@gmail.com
      </p>
    </div>
  )
};
