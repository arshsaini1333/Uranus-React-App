import rotateGif from "./assets/rotate.gif";
import "./Body.css";
import img1 from "./assets/img1.png";
import img4 from "./assets/img4.png";
import img9 from "./assets/img9.png";
import img10 from "./assets/img10.png";
export default function Body() {
  return (
    <div className="Body">
      <h1 className="Uranus">$URANUS Web</h1>
      <div className="top">
        <div className="para">
          <h3>Astrological Insights for 2024</h3>
          Uranus, the ruler of Aquarius, starts 2024 in retrograde, going direct
          on <b>Saturday, January 27</b>, then retrogrades again on{" "}
          <b>Sunday, September 1</b>. This suggests ongoing evolution in your
          home life and personal growth. <br /> Uranus champions individuality,
          social justice, and authenticity. During its retrograde, focus on
          living by your values and perhaps engage more actively in humanitarian
          efforts.
          <br /> In 2024, the location of the Sun on the March equinox is in the
          constellation of Pisces but also on the border of Aquarius. So,{" "}
          <b>we are slowly moving into a new age, from Pisces to Aquarius</b>.
          Aquarius is ruled by Uranus, the planet that governs innovation,
          technology, and surprising events. Uranus perfectly mirrors Aquarius'
          distinctive attitude, complementing the nontraditional nature of these
          visionary air signs.
          <h3>Features:</h3>
          <ul>
            <li>
              Everyone Loves to Pump Uranus more then they like when Uranus
              Dumps.
            </li>
            <li>The liquidity injections just keep coming into Uranus.</li>
            <li>Don’t pass gas (it’s gonna be giant)</li>
            <li>Hold onto Uranus!</li>
            <li>
              Disclaimer: This is all in good fun – a blend of memes, astrology,
              and crypto. We will not go moon, we going to Uranus.
            </li>
          </ul>
        </div>

        <div className="img">
          <img src={rotateGif} alt="Uranus image" />
        </div>
      </div>
      <div className="mid">
        <h1 className="Uranus">The Memeifesto</h1>
        <p>
          Welcome to the wild side of crypto - where memes aren't just dreams,
          and astrology isn’t just your daily horoscope.
        </p>
        <div className="cards">
          <div class="card">
            <img src={img1} class="card-img-top" alt="cardImage" />
            <div class="card-body">
              <h5 class="card-title">MEME-1</h5>
              <p class="card-text">
                63 Earths can fit inside <br /> the uranus, 64 if you relax 😉
              </p>
              <a href="#" class="btn btn-primary">
                View Meme
              </a>
            </div>
          </div>
          <div class="card">
            <img src={img4} class="card-img-top" alt="cardImage" />
            <div class="card-body">
              <h5 class="card-title">MEME-2</h5>
              <p class="card-text">
                Uranus is leaking 😲 <br />
                Toxic Gases
              </p>
              <a href="#" class="btn btn-primary">
                View Meme
              </a>
            </div>
          </div>
          <div class="card">
            <img src={img9} class="card-img-top" alt="cardImage" />
            <div class="card-body">
              <h5 class="card-title">MEME-3</h5>
              <p class="card-text">
                Keep the earth clean 🌍 <br />
                It's not Uranus
              </p>
              <a href="#" class="btn btn-primary">
                View Meme
              </a>
            </div>
          </div>
          <div class="card">
            <img src={img10} class="card-img-top" alt="cardImage" />
            <div class="card-body">
              <h5 class="card-title">MEME-4</h5>
              <p class="card-text">
                We have'nt been to space, <br />
                But is this a closeup of Uranus 🤔
              </p>
              <a href="#" class="btn btn-primary">
                View Meme
              </a>
            </div>
          </div>
        </div>
      </div>
      <h1 className="Uranus">Get In Touch</h1>
      <div className="bottom">
        <div className="content">
          <h3>Why Do People Buy Meme Coins?</h3>
          <p>
            People buy meme coins for a variety of reasons. Some are attracted
            to the potential for quick profits, driven by the high volatility
            and speculative nature of these coins. Others join in for the sense
            of community and culture surrounding meme coins, engaging in online
            communities and sharing humorous content. Fear of missing out (FOMO)
            also plays a role, prompting individuals to invest hastily to avoid
            being left behind. Additionally, some see meme coins as a form of
            experimentation or entertainment, enjoying the excitement of the
            cryptocurrency market. Moreover, certain meme coins may align with
            particular values or causes, motivating individuals to support them
            financially. Regardless of the reason, it's crucial for investors to
            approach meme coins with caution, considering their speculative
            nature and associated risks.
          </p>
        </div>
        <div className="form">
          <form action="">
            <label for="exampleFormControlInput1" class="form-label">
              Name:
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Arsh Saini"
            />
            <label for="exampleFormControlInput1" class="form-label">
              Email:
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />

            <label for="exampleFormControlTextarea1" class="form-label">
              Enter Message:
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows={1}
            ></textarea>
            <button type="button" className="btn">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
