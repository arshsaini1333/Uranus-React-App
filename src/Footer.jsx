import "./Footer.css";
export default function Footer() {
  return (
    <>
      <div className="Footer">
        <div className="contact">
          <a href="https://github.com/arshsaini1333" target="_blank">
            <i class="fa-solid fa-phone"></i>Contact us
          </a>
          <a href="https://www.instagram.com/arsh.saini1333/" target="_blank">
            <i class="fa-brands fa-square-instagram"></i>Instagram
          </a>
          <a href="https://twitter.com/Arsh_saini_1333" target="_blank">
            <i class="fa-brands fa-twitter"></i>Twiter
          </a>
          <a
            href="https://www.linkedin.com/in/arshdeep-kaur-508680210/"
            target="_blank"
          >
            <i class="fa-brands fa-linkedin"></i>LinkedIn
          </a>
          <a
            href="https://www.linkedin.com/in/arshdeep-kaur-508680210/"
            target="_blank"
          >
            <i class="fa-brands fa-square-whatsapp"></i>Whatsaap
          </a>
        </div>
        <div className="author">
          <span>@ArshSaini</span>
          <span>Terms</span>
          <span>Conditions</span>
          <span>Privacy</span>
          <span>Policies</span>
        </div>
      </div>
    </>
  );
}
