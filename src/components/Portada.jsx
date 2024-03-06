import "../App.css";
import fraud from "../assets/fraud4.png";
import github from "../assets/github.png";
import streamlit from "../assets/streamlit.png";

const Portada = () => {
  return (
    <>
      <div className="main-container">
        <div className="spacer s2"></div>
        <div id="trigger1" className="spacer s0"></div>
        <div id="reveal1" className="box2 blue">
          <div className="title-container">
            <h1 className="title">
              FINTECH
              <br />
              <h1 className="subtitle">SOLVERS</h1>
            </h1>
            <p>
              Bienvenidos, este proyecto forma parte de la simulación de No
              Country.
            </p>
            <div className="redes-container">
              <a
                href="https://github.com/No-Country/c16-91-ft-data-bi"
                target="_blank"
                className="social-link"
              >
                <img src={github} alt="github" className="social-icon" />{" "}
                <span className="popup-text">GitHub</span>
              </a>
              <a
                href="https://fintech-solver.streamlit.app/"
                target="_blank"
                className="social-link"
              >
                <img src={streamlit} alt="streamlit" className="social-icon" />{" "}
                <span className="popup-text">Streamlit</span>
              </a>
            </div>
          </div>
          <div className="spacer s2"></div>
          <div className="background-container">
            <img src={fraud} alt="background" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Portada;
