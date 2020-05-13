import React, { useRef } from "react";
import "./styles.css";
import Alotus from "./Irponkoodi/alotus.jsx";
import Valilaatikko from "./Irponkoodi/valilaatikko.jsx";
import Tekstilaatikko from "./Irponkoodi/Tekstilaatikko.jsx";
import {
  esittely,
  lisatieto,
  hsy,
  quizteksti,
  palaute
} from "./Irponkoodi/sisalto.jsx";
import ResponsivePlayer from "./video.jsx";
import { meteksti } from "./Ivanankoodi/meista.jsx";
import Abc from "./Sanninkoodi/abc.jsx";
import Ukk from "./Sanninkoodi/ukk.jsx";
import Uutisia from "./Kirinkoodi/Uutisia.jsx";
import Quiz from "react-quiz-component";
import { kysely } from "./Kirinkoodi/Quiz.jsx";

//Koodi sivulta:https://codepen.io/Lando726/pen/WxrNyO
// Tässä teemme kommenttiboksin

class CommentBox extends React.Component {
  constructor() {
    super();

    this.state = {
      showComments: false,
      comments: [
        { id: 1, author: "Ivana", body: "moiksuli moi" },
        { id: 2, author: "Ivana", body: "heipsuli hei" }
      ]
    };
  }

  render() {
    const comments = this._getComments();
    let commentNodes;
    let buttonText = "Show Comments";

    if (this.state.showComments) {
      buttonText = "Hide Comments";
      commentNodes = <div className="comment-list">{comments}</div>;
    }

    return (
      <div className="comment-box">
        <h1>Anna palautetta ja keskustele</h1>
        <CommentForm addComment={this._addComment.bind(this)} />
        <button id="comment-reveal" onClick={this._handleClick.bind(this)}>
          {buttonText}
        </button>
        <h1>Comments</h1>
        <h1 className="comment-count">
          {this._getCommentsTitle(comments.length)}
        </h1>
        {commentNodes}
      </div>
    );
  } // end render

  _addComment(author, body) {
    const comment = {
      id: this.state.comments.length + 1,
      author,
      body
    };
    this.setState({ comments: this.state.comments.concat([comment]) }); // *new array references help React stay fast, so concat works better than push here.
  }

  _handleClick() {
    this.setState({
      showComments: !this.state.showComments
    });
  }

  _getComments() {
    return this.state.comments.map(comment => {
      return (
        <Comment author={comment.author} body={comment.body} key={comment.id} />
      );
    });
  }

  _getCommentsTitle(commentCount) {
    if (commentCount === 0) {
      return "No comments yet";
    } else if (commentCount === 1) {
      return "1 comment";
    } else {
      return `${commentCount} comments`;
    }
  }
} // end CommentBox component

class CommentForm extends React.Component {
  render() {
    return (
      <form className="comment-form" onSubmit={this._handleSubmit.bind(this)}>
        <div className="comment-form-fields">
          <input
            placeholder="Name"
            required
            ref={input => (this._author = input)}
          />
          <br />
          <textarea
            placeholder="Comment"
            rows="4"
            required
            ref={textarea => (this._body = textarea)}
          />
        </div>
        <div className="comment-form-actions">
          <button type="submit">Post Comment</button>
        </div>
      </form>
    );
  } // end render

  _handleSubmit(event) {
    event.preventDefault(); // prevents page from reloading on submit
    let author = this._author;
    let body = this._body;
    this.props.addComment(author.value, body.value);
  }
} // end CommentForm component

class Comment extends React.Component {
  render() {
    return (
      <div className="comment">
        <p className="comment-header">{this.props.author}</p>
        <p className="comment-body">- {this.props.body}</p>
        <div className="comment-footer" />
      </div>
    );
  }
}

//scrollToRef on osa navigointia
const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop);
//Tässä toteutamme sivun rakenteen
const Sivu = () => {
  //Eri navigointikohtien määrittely
  const myRef = useRef(null);
  const Esittely = useRef(null);
  const abc = useRef(null);
  const ukk = useRef(null);
  const uutisia = useRef(null);
  const lisaa = useRef(null);
  const hs = useRef(null);
  const quiz = useRef(null);
  const pala = useRef(null);
  const me = useRef(null);

  //Tästä alkaa sivu
  return (
    <div ref={myRef} id="kaikenWrapperi">
      <Alotus />
      <nav id="vali">
        <nav id="valikko">
          <button class="Work" onClick={() => scrollToRef(myRef)}>
            Koti{" "}
          </button>
          <div style={{ height: 20 }} />
          <button class="Work" onClick={() => scrollToRef(Esittely)}>
            Esittely{" "}
          </button>
          <div style={{ height: 20 }} />
          <button class="Work" onClick={() => scrollToRef(abc)}>
            ABC{" "}
          </button>
          <div style={{ height: 20 }} />
          <button class="Work" onClick={() => scrollToRef(ukk)}>
            UKK{" "}
          </button>
          <div style={{ height: 20 }} />
          <button class="Work" onClick={() => scrollToRef(lisaa)}>
            Lisätietoa{" "}
          </button>
          <div style={{ height: 20 }} />
          <button class="Work" onClick={() => scrollToRef(uutisia)}>
            Uutisia{" "}
          </button>
          <div style={{ height: 20 }} />
          <button class="Work" onClick={() => scrollToRef(hs)}>
            HSY{" "}
          </button>
          <div style={{ height: 20 }} />
          <button class="Work" onClick={() => scrollToRef(quiz)}>
            Quiz{" "}
          </button>
          <div style={{ height: 20 }} />
          <button class="Work" onClick={() => scrollToRef(pala)}>
            Palaute{" "}
          </button>
          <div style={{ height: 20 }} />
          <button class="Work" onClick={() => scrollToRef(me)}>
            Keitä me olemme{" "}
          </button>
          <div style={{ height: 20 }} />
          <button
            class="Work"
            onClick={() => window.open("https://instagram.com/poltaparemmin")}
          >
            Instagram
          </button>
        </nav>
      </nav>

      <div className="App">
        <div id="boksi">
          <div ref={Esittely} className="Navigaatio" />
          <Tekstilaatikko otsikko={esittely.otsikko} teksti={esittely.teksti} />
          <ResponsivePlayer />
          <Valilaatikko />
          <div ref={abc} className="Navigaatio" />
          <h1>Puunpolton ABC</h1>
          <Abc />
          <Valilaatikko />
          <div ref={ukk} className="Navigaatio" />
          <h1>Usein kysytyt kysymykset</h1>
          <Ukk />
          <Valilaatikko />
          <div ref={lisaa} className="Navigaatio" />
          <Tekstilaatikko
            otsikko={lisatieto.otsikko}
            teksti={lisatieto.teksti}
          />
          <Valilaatikko />
          <div ref={uutisia} className="Navigaatio" />
          <h1>Uutisia</h1>
          <Uutisia />
          <Valilaatikko />
          <div ref={hs} className="Navigaatio" />
          <Tekstilaatikko id="vo" otsikko={hsy.otsikko} teksti={hsy.teksti} />
          <Valilaatikko />
          <div ref={quiz} className="Navigaatio" />
          <div id="quizcont">
            <Quiz id="quiz" quiz={kysely} />
          </div>
          <Tekstilaatikko teksti={quizteksti.teksti} />
          <Valilaatikko />
          <div ref={pala} className="Navigaatio" />
          <div id="kommentti">
            {" "}
            <CommentBox />{" "}
          </div>
          <Tekstilaatikko otsikko={palaute.otsikko} teksti={palaute.teksti} />
          <Valilaatikko />
          <div ref={me} className="Navigaatio" />
          <Tekstilaatikko otsikko={meteksti.otsikko} teksti={meteksti.teksti} />
          <Valilaatikko />
        </div>
      </div>
    </div>
  );
};

export default function App() {
  return <Sivu />;

  //moi t.ivana
}
