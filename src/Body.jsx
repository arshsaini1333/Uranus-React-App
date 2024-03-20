import bc from "./assets/bc.avif";
import rotateGif from "./assets/rotate.gif";
import "./Body.css";
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
      <div className="mid"></div>
    </div>
  );
}
