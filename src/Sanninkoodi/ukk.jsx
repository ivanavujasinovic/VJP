import React, { Component } from "react";
import Faq from "react-faq-component";

//Sama kuin edellisessä
//UKK:ssa vastataan usein kysyttyihin kysymyksiin
const data = {
  title: "",
  rows: [
    {
      title: "Mikä on kampanjan tavoite?",
      content:
        "Kampanjallamme on ensisijaisesti kaksi tavoitetta, jotka tähtäävät suurempaan yhteiskunnalliseen muutokseen. <br/><br/>Ensimmäiseksi tavoitteeksi olemme valinneet sen, että ihmisten tietoisuus puunpolton haitoista sekä paremman puunpolton tavoista lisääntyy. Toisena tavoitteenamme on asennemuutos suomalaisissa puunpolttoa kohtaan. Haluamme nostaa takkatulen vastuulliseksi arjen luksuskokemukseksi. Päämääränä on, että ihmiset kokevat mahdollisimman vähäpäästöisen ja tehokkaan puunpolton tärkeäksi ja arvostettavaksi. Kampanjamme taustalla on suurempi ajatus hengitysilman parantamisesta ja puunpolton aiheuttamien ilmansaasteiden vähentämisestä. <br/><br/>Kampanjamme pyrkii muokkaamaan keskustelun tyyliä syyllistävästä ja haittoja korostavasta lempeämpään suuntaan. Haluamme enemmänkin auttaa ihmisiä yhdessä polttamaan puuta paremmin."
    },
    {
      title: "Mikä on tämänhetkinen tilanne Suomessa pienpuupolton osalta?",
      content:
        "HSY:n julkaiseman raportin mukaan noin 80 prosentissa pääkaupunkiseudun pientaloista poltetaan puuta. Yleisimmin tulisijaa käytetään pääkaupunkiseudulla lisälämmitykseen sähköä säästääkseen sekä pientalojen saunanlämmitykseen. Tulisijaa käytetään myös tunnelman luomiseen sekä sisustuselementtinä . Takanpolttoon liittyy tiettyä perinteikkyyttä sekä niin sanottua “takkaromantiikkaa”. Monet kuitenkin polttavat tietämättä asioista – takassa poltetaan maitotölkkejä, liekki palaa liian vähällä hapella tai kiuasta lämmitetään turhaan tuntikausia. Vaikka monet käyttävät tulisijaa jo valistuneesti, parantamisen varaa on. <br /><br /> Puun pienpolton merkitys ilmansaasteiden lähteenä on lisääntynyt paljon 2000-luvulla, sillä puun käyttö on kasvanut lähes 50 prosentilla. Lämmityskauden aikana Suomessa tuotetaan tulisijoilla 775 GWh määrä energiaa, joka vastaa lähes yhden ydinvoimalan tuottamaa energiamäärää. On syytä keskittyä siihen, kuinka puunpolton pienhiukkaspäästöt saataisiin minimiin.<br /><br />Nykytavoin toteutetusta puun pienpoltosta syntyy: <br />· 40 % Suomen kaikista pienhiukkaspäästöistä (PM2.5)<br />· 55 % kaikista mustan hiilen (BC) päästöistä, jotka lämmittävät alailmakehää erityisesti pohjoisilla alueilla<br />· Yli 80 % soluille myrkyllisten ja syöpävaarallisten PAH-yhdisteiden päästöistä<br />· 30 % haisevien ja limakalvoja ärsyttävien haihtuvien orgaanisten hiilivetyjen (VOC) päästöistä<br />· 25 % hiilimonoksidin (CO) päästöistä"
    },
    {
      title: "Onko polttamistottumusten muuttamisesta konkreettista hyötyä?",
      content:
        "Huonosti toteutetussa puunpoltossa hiukkas- ja PAH-päästöt voivat olla monikymmen- tai jopa monisatakertaiset verrattuna taitavaan kuivan puun polttoon hyvässä tulisijassa. <br/><br/> Jokainen voi vaikuttaa siihen, kuinka puhtaasti puut palavat. Kaiken taustalla on polttopuun laatu ja kuivuus. Kostea puu tuottaa neljänneksen vähemmän lämpöä kuin kuiva puu, kun verrataan kahta kosteudeltaan erilaista koivuerää: kuivaa (kosteus 10 %) ja kosteaa (kosteus 30 %). Nykypäivän energiatehokas tulisija säästää myös selvää rahaa sähkönkulutuksessa – etenkin yhdistettynä lämpöpumppuun. <br/><br/>Myös Suomen laki säätelee vastuullista polttamista: jätehuolto- ja ympäristömääräyksissä kielletään roskien poltto tulisijoissa tai avotulella. Poltettavaksi eivät kelpaa myöskään märkä, maalattu, kyllästetty tai muita haitallisia aineita sisältävä puu tai lastulevy. Roskien poltto vahingoittaa tulisijaa ja tuottaa paljon savua ja terveydelle haitallisia yhdisteitä."
    },
    {
      title: "Mitä haittoja vastuuttomalla puunpoltolla on?",
      content:
        "Jos poltetaan jätteitä tai märkää puuta, savupiipusta tupruaa runsaasti hiukkasia, häkää ja hiilivetyjä. Nämä ovat haitallisia ihmisten terveydelle ja myös vähentävät viihtyisyyttä. Puutteellisesti toteutettu puulämmitys tuottaa myös suuria määriä ilmakehää lämmittäviä mustahiilihiukkasia sekä samalla tavoin vaikuttavia kaasuja (mm. metaania ja otsonia muodostavia VOC-yhdisteitä). Huonoista puunpolttototavoista saattaa aiheutua merkittäviä määriä pienhiukkasia ja häkää myös suoraan asunnon sisäilmaan.<br/><br/>Poltossa muodostuu pienhiukkasia, jotka voivat aiheuttaa vakavia terveyshaittoja. Pienhiukkaset lisäävät lasten hengitystieoireita ja -infektioita. Lyhytaikaiset korkeat pitoisuudet voivat aiheuttaa vakavia astma- ja sydänkohtauksia. Pitkäaikainen, vuosia tai vuosikymmeniä kestänyt altistuminen erityisesti polttoperäisille pienhiukkasille aiheuttaa ja pahentaa keuhkosairauksia ja sepelvaltimotautia. Lisäksi hiukkaset voivat aiheuttaa ennenaikaisia kuolemia. Vaikutus on samanlainen kuin liikenteen pakokaasuilla ja tupakansavulla, joka muistuttaa koostumukseltaan suuresti huonon puunpolton savua.<br/><br/>Terveyden ja hyvinvoinnin laitoksen vuonna 2010 julkaiseman terveysriskinarvion mukaan noin 250 suomalaista kuolee vuosittain ennenaikaisesti sairauksiin, joita aiheuttavat pienhiukkaset, jotka syntyvät puun poltosta vakituisten pientaloasuntojen lämmityksessä."
    },
    {
      title: "Miten voin itse osallistua kampanjaan?",
      content: `<div><p>Keinoja on monia! N&auml;ist&auml; t&auml;rkein on tietysti omien polttamisk&auml;yt&auml;nteiden arviointi ja haitallisten tottumusten muuttaminen.</p>

      <p>Voit jakaa yst&auml;villesi sis&auml;lt&ouml;&auml; sosiaalisessa mediassa k&auml;ytt&auml;m&auml;ll&auml; tunnistetta #poltaparemmin. Jaa kuvasi illasta takkatulen &auml;&auml;rell&auml; tai kerro kokemuksestasi vastuullisista puukiuasl&ouml;ylyist&auml;.</p>
      
      <p>Muista my&ouml;s kommentoida, tyk&auml;t&auml; ja jakaa kampanjavideotamme. Instagramista l&ouml;yd&auml;t meid&auml;t nimell&auml; @poltaparemmin.</p>
      
      <p>Puunpolton ABC:sta l&ouml;ytyv&auml;n lehtisen voit ladata omalle tietokoneellesi JPG-tiedostona, ja vaikka tulostaa muistutukseksi j&auml;&auml;kaapin oveen. Eth&auml;n kuitenkaan k&auml;yt&auml; paperista lehtist&auml; sytykkeen&auml;! :)</p>
      
      <p>Palautetta meille voit antaa t&auml;m&auml;n sivun alareunassa l&ouml;ytyv&auml;n palautelaatikon kautta tai s&auml;hk&ouml;postiosoitteeseemme: poltaparemmin@gmail.com</p></div>`
    }
  ]
};

const styles = {
  bgColor: "white",
  titleTextColor: "black",
  titleTextAlign: "left",
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
