import React, { Component } from "react";
import Faq from "react-faq-component";
//Tässä data react-faq-componentille
//react faq toiminnallisuus: https://www.npmjs.com/package/react-faq-component
const data = {
  title: "",
  rows: [
    {
      title: "Oodi polttopuulle",
      content: `Puulajilla on merkitystä <br/>   * Puun lämpöarvo kertoo, kuinka tehokkaasti puu lämmittää <br/>   * Lämpöarvon lisäksi myös puun tiheys vaikuttaa <br/>   * Koivu on lämpöarvonsa ja tiheytensä puolesta parasta polttopuuta, mutta muutkin suomalaiset puulajit sopivat hyvin poltettavaksi <br/> Jos kaadat oman polttopuusi <br/>   * Klapien tekoon on syytä ryhtyä kevättalvella <br/>   - Kasvavan puun kosteus on alimmillaan <br/>   - Jäinen puu on helpointa halkoa <br/>   - Puu kuivuu parhaiten loppukeväästä <br/>   * Pidä huoli puun kuivaamisesta <br/>   - Kuivan puun kosteusprosentti on n. 20 <br/>   - Kuiva puu palaa puhtaammin ja tuottaa enemmän lämpöä ympäristöönsä - säästät siis rahaa <br/>   - Kuiva puuhalko: <br/>   x On kevyt - painaa vain noin puolikkaan maitotölkin verran <br/>   x Halkeilee kärjestä <br/>   x Helähtää, kun klapeja lyödään yhteen - ei kumise`
    },
    {
      title: "Sinfonia vaaleasta savusta",
      content:
        "Väritön tai vaaleanharmaa savu on vähäpäästöisempää - tällöin poltat paremmin! <br/> Älä polta jätteitä tai kierrätyskelpoista materiaalia <br/>   * Pahvin ja paperin poltosta syntyy runsaasti tuhkaa ja nokia <br/>   * Saatu energiahyöty on vähäistä <br/>   * Kierrätä, älä polta <br/> Vältä kitupolttoa <br/>   * Tuloilman saantia ei kannata rajoittaa liikaa <br/>   * Kitupoltto nokeaa tulisijan ja tuottaa pienhiukkaspäästöjä <br/> Katso tuulen suunta ennen sytyttämistä - älä savusta naapureitasi <br/> Lado puut tulisijaan oikein <br/>   * Aseta isot klapit alle ja pienemmät päälle <br/>   * Aseta polttopuut irti tulisijan seinistä <br/>   * Tiukka ladonta hidastaa ja löyhä ladonta nopeuttaa kaasuuntumista <br/>   * Lado puut vaakasuoraan, jos se on mahdollista <br/>   * Täytä tulisija korkeintaan puolilleen - liika lämmittäminen saattaa vaurioittaa tulisijaa <br/> Sytytä päältä <br/>   * Sytykkeeksi voit käyttää kuivia puutikkuja, lastuja ja tuohta <br/>   * Paloilmaa riittää näin paremmin ja päästöt ovat pienemmät <br/> Tarvittaessa polta toinen pesällinen <br/>   * Käytä ensimmäistä pesällistä isompia klapeja <br/>   * Aseta polttopuut hiilloksen päälle tiiviisti ladottuna <br/> Nuohoa tulisija säännöllisesti <br/>   * Hormit on nuohottava kerran vuodessa <br/>   * Ehkäiset nokipalojen syttymistä <br/>   * Kysy nuohoojalta vinkkejä parempaan polttamiseen <br/> Harkitse uutta tulisijaa <br/>   * Vanhanaikainen tulisija tuottaa jopa puolet enemmän päästöjä kuin nykyaikainen <br/>   * Kysy päästöistä myyjältä tai valitse tulisija, jossa on Joutsenmerkki tai CE-merkintä"
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
        <p class="tekstit">
          T&auml;st&auml; osiosta l&ouml;yd&auml;t k&auml;yt&auml;nn&ouml;n
          tietoa siit&auml;, miten voit polttaa paremmin. &rdquo;Oodi
          polttopuulle&rdquo; -osiossa kerrotaan, millaista on hyv&auml;
          polttopuu, mist&auml; sit&auml; saa ja miten se
          s&auml;ilytet&auml;&auml;n. &rdquo;Sinfonia savuttomasta
          poltosta&rdquo; taas kertoo, miten tulisija sytytet&auml;&auml;n ja
          liekki pidet&auml;&auml;n yll&auml; mahdollisimman puhtaasti.
        </p>
        <p class="tekstit">
          Voit ladata flyerin puunpolton ABC:sta omalle tietokoneellesi ja
          tulostaa sen
          <a href="https://drive.google.com/open?id=1EKal_E_yBubiRa8Nlw1TZ1JiwUWW_VGM">
            _tästä linkistä_
          </a>
          .
        </p>
        <Faq data={data} styles={styles} />
      </div>
    );
  }
}

// styles={styles}
