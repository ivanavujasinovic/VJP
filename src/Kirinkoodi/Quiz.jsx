//Tämä React-kirjasto löytyy sivulta: https://github.com/wingkwong/react-quiz-component
//Quiz on JSON-muodossa, ja se on kirjoitettu React Quiz Formin avulla: https://wingkwong.github.io/react-quiz-form/
//Tätä kysely-tiedostoa käytetään App.js:ssä Quiz-komponenttia luodessa

export const kysely = {
  quizTitle: "Puunpolttovisa",
  quizSynopsis: "Testaa tietosi ja taitosi puunpolttajana!",
  questions: [
    {
      question:
        "Mikäli polttopuut haluaa tehdä itse, koska on paras aika kaataa rangat?",
      questionType: "text",
      answers: ["Sydäntalvi", "Loppukevät", "Alkusyksy"],
      correctAnswer: "1",
      point: "1"
    },
    {
      question: "Koska on paras aika klapien hakkaamiseen ja varastointiin?",
      questionType: "text",
      answers: [
        "Keskikesällä",
        "Syksyllä ennen talven tuloa",
        "Keväällä, ennen huhtikuuta"
      ],
      correctAnswer: "3",
      point: "1"
    },
    {
      question: "Mikä seuraavista kuvaa hyvää puuvarastoa?",
      answers: [
        " Ilmava, aurinkoinen, vain päältä peitetty",
        "Tuulelta suojattu, aurinkoinen, lähellä asuinrakennusta",
        "Tilaa säästäen ladottu, pressulla ympäröity, ilkivallalta suojattu"
      ],
      questionType: "text",
      point: "1",
      correctAnswer: "1"
    },
    {
      question: "Milloin polttopuut on hyvä tuoda sisälle?",
      answers: [
        "1-2 päivää ennen polttamista",
        "Noin viikkoa aiemmin niin sanottuun sisävarastoon",
        "Suoraan pihalta sisälle sieni-itiöiden välttämiseksi"
      ],
      correctAnswer: "1",
      point: "1",
      questionType: "text"
    },
    {
      question: "Mitä polttopuiden ostamisessa on hyvä huomioida?",
      questionType: "text",
      answers: [
        "Kaikkia puulajeja kannattaa suosia tasapuolisesti",
        "Vain koivupuuta kannattaa ostaa sen muita paremman lämpöarvon vuoksi",
        "Irtokuutio eli i-m3 vastaa 1,5 pinokuutiota"
      ],
      correctAnswer: "1",
      point: "1"
    },
    {
      question: "Mistä tunnistaa kuivan polttopuun",
      answers: [
        "Se painaa noin maitotölkin verran",
        "Halon päässä on halkeamia",
        "Kun klapeja lyödään toisiinsa, kuuluu kumea ääni"
      ],
      correctAnswer: "2",
      point: "1",
      questionType: "text"
    },
    {
      question: "Miksi kosteaa puuta ei kannata polttaa?",
      questionType: "text",
      answers: [
        "Märkä puu on lämpöarvoltaan heikompaa, joten sen polttaminen on kalliimpaa",
        "Märkää puuta polttaessa ilmaan pääsee kuivaa puuta enemmän haitallisia hiilidioksidipäästöjä",
        "Lahoa puuta poltettaessa ilmaan pääsee myrkyllisiä sieni-itiöitä"
      ],
      correctAnswer: "1",
      point: "1"
    },
    {
      question: "Voiko maitotölkkejä polttaa?",
      questionType: "text",
      answers: [
        "Pahvia ja paperia voi polttaa, sillä ne palavat nopeasti ja tehokkaasti. Muovi tai kyllästetty puu sen sijaan eivät takkaan kuulu. ",
        "Ei koskaan, sillä poltosta syntyy runsaasti tuhkaa ja nokea, jotka mm. tukkivat savukanavat",
        "Ei toistuvasti, mutta esimerkiksi sytykkeenä pahvia voi käyttää"
      ],
      correctAnswer: "2",
      point: "1"
    },
    {
      question: "Miten puut olisi hyvä laittaa pesään?",
      questionType: "text",
      answers: [
        "Väljästi ja ilmavasti ladottuna, kuitenkin täyttäen enintään puolet tulisijasta",
        "Vaakasuoraan ja tiiviisti",
        "Tiiviisti, koko tulisijan mitalta tehokkaan palamisen takaamiseksi"
      ],
      correctAnswer: "2",
      point: "1"
    },
    {
      question: "Mitä tulee tehdä aina tulisijan polton jälkeen?",
      questionType: "text",
      answers: [
        "Onnitella itseään hyvin sujuneesta poltosta ja ottaa vaikka torkut",
        "Puhdistaa vanhat tuhkat pois ja varastoida kannelliseen, metalliseen tuhka-astiaan",
        "Pitää palamisilman tuloaukko auki ja sulkea pelti heti, kun mahdollista"
      ],
      correctAnswer: "2",
      point: "1"
    },
    {
      answers: [
        "Kadottaa tuuleen",
        "Sirotella päänsä päälle",
        "Käyttää sen maanparannusaineena esimerkiksi nurmikolle ",
        "Sijoittaa ongelmajätteisiin"
      ],
      question: "Mitä tuhkalle voi varastoinnin jälkeen tehdä?",
      questionType: "text",
      correctAnswer: "3",
      point: "1"
    },
    {
      question: "Mikä savua koskeva väite pitää paikkansa?",
      questionType: "text",
      answers: [
        "Ei tulta ilman savua - savun tuoksu luo kodikkaan mökkifiiliksen",
        "Taitavasti poltettuna ei tummanharmaata savua synny missään vaiheessa",
        "Kesällä savun tulisi olla väritöntä"
      ],
      correctAnswer: "3",
      point: "1"
    }
  ]
};
