import React, { Component } from "react";
import Faq from "react-faq-component";

//Uutisia-osio on tehty react-faq-componentilla
//Uutisella on otsikko, content on uutisen ingressi ja Lue lisää johtaa uutisen alkuperäiselle verkkosivulle

const data = {
  title: "",
  rows: [
    {
      title:
        "Puun pienpoltto jo suurin pienhiukkasten ja mustan hiilen päästölähde Suomessa",
      content: `<div>
        <p>Puun pienpoltto on jo suurin pienhiukkasten ja mustan hiilen p&auml;&auml;st&ouml;jen l&auml;hde Suomessa, k&auml;y ilmi tuoreesta v&auml;it&ouml;skirjasta. Asiaa selvitti Suomen ymp&auml;rist&ouml;keskuksen tutkija Mikko Savolahti. (HS 28.2.2020)</p>

        <a href="https://www.hs.fi/kotimaa/art-2000006422446.html">Lue lisää</a>
      </div>`
    },
    {
      title: "Puunpolton pienhiukkaspäästöt alas nykyaikaisella laitteistolla",
      content: `<div>
      <p>Puunpolton pienhiukkasp&auml;&auml;st&ouml;t puhuttavat yh&auml; kiivaammin. Puul&auml;mmitys tulee olemaan aina osa suomalaista kulttuuria. 
      L&auml;mmityskauden aikana Suomessa tuotetaan tulisijoilla 775 GWh m&auml;&auml;r&auml; energiaa, joka vastaa l&auml;hes yhden ydinvoimalan tuottamaa energiam&auml;&auml;r&auml;&auml;.</p>

      <p>Nyt keskityt&auml;&auml;n entist&auml; enemm&auml;n siihen, kuinka puunpolton pienhiukkasp&auml;&auml;st&ouml;t saataisiin minimiin. Tutkimustulosten perusteella tulisijakannan uusimisella on merkitt&auml;vi&auml; vaikutuksia pienhiukkasp&auml;&auml;st&ouml;ihin. 
      Nykyp&auml;iv&auml;n energiatehokas 
      tulisija s&auml;&auml;st&auml;&auml; my&ouml;s selv&auml;&auml; rahaa s&auml;hk&ouml;nkulutuksessa &ndash; etenkin yhdistettyn&auml; l&auml;mp&ouml;pumppuun. (TSY 5.2.2020)</p>

      <a href="https://tsy.fi/puunpolton-pienhiukkaspaastot/">Lue lisää</a>
      </div>`
    },
    {
      title:
        "Kotien turha puunpoltto ylittää pian liikennepäästöt – Tällaiselle alueelle ei kannata pienten lasten kanssa muuttaa",
      content: `<div>
      <p>Puul&auml;mmitys ja puukiukaat pientaloalueilla pilaavat satojentuhansien suomalaisten terveyden. &ndash; Nyt pit&auml;&auml; ravistella kunnolla, ylil&auml;&auml;k&auml;ri Raimo O. Salonen sanoo. (Apu 19.3.2019)</p>

      < a href="https://www.apu.fi/artikkelit/puunpoltto-aiheuttaa-miehille-keuhkosyopia-kukaan-ei-uskalla-rajoittaa-polttoa">Lue lisää</a>

        </div>`
    }
  ]
};

const styles = {
  bgColor: "white",
  titleTextColor: "black",
  rowTitleColor: "Darkgreen",
  arrowColor: "Green"
};

export default class App extends Component {
  render() {
    return (
      <div>
        <Faq data={data} styles={styles} />
      </div>
    );
  }
}
