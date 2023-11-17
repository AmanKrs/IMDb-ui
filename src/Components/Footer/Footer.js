import React from "react";
import "./footer.css";
import { Facebook, Twitter, Youtube, Instagram, Copyright } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Footer(props) {
  const navigate = useNavigate();

  const handleRegister = () => {
    props.setReg(true);
    navigate("/register");
  };

 
  return (
    <>
      <footer className="footer-content">
        {!props.logged && (
          <button className="ftr-signup-btn" onClick={handleRegister}>
            Sign up for more
          </button>
        )}

        <div className="ftr-icon">
          <Twitter size={26} />
          <Youtube size={26} />
          <Instagram size={26} />
          <Facebook size={26} />
        </div>
        <div className="ftr-menu">
          <p>Get the App</p>
          <p>Help</p>
          <p>Site Index</p>
          <p>IMDbPro</p>
          <p>Box Office Mojo</p>
          <p>Advertising</p>
          <p>Conditions of Use</p>
          <p>Privacy Policy</p>
          <p>Your Ads Privacy Choices</p>
        </div>
        <p>"Made by AMAN KUMAR"</p>
        <p className="ftr-copyright">
          <Copyright size={16} /> AKCritics@2023
        </p>
      </footer>
    </>
  );
}
