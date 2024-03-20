import bc from "./assets/bc.avif";
import rotateGif from "./assets/rotate.gif";
import "./Body.css";
export default function Body() {
  return (
    <div className="Body row">
      <div className="col-lg-5 col-md-8">
        <h2>$URANUS Web</h2>
        <p>
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
        </p>
      </div>
      <div className="col-lg-5 col-md-8">
        <img src={rotateGif} alt="" />
      </div>
    </div>
  );
}
