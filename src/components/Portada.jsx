import '../App.css';


import { useEffect } from 'react';
import ScrollMagic from 'scrollmagic';

const Portada = () => {
  useEffect(() => {
    const controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
      triggerElement: "#trigger1",
      triggerHook: 0.9,
      duration: "80%",
      offset: 350
    })
    .setClassToggle("#reveal1", "visible")
    .addIndicators()
    .addTo(controller);
  }, []);

  return (
    <>
    <div className='main-title'>
      <div className="spacer s2"></div>
      <div id="trigger1" className="spacer s0"></div>
      <div id="reveal1" className="box2 blue">
            <h1><span className='title'>FINTECH</span><br/><span className='underline'>SOLVERS.</span></h1>
            <div className='paragraph'><p>Bienvenidos, este proyecto forma parte de la simulación de No Country.</p>
            </div>
      </div>
      <div className="spacer s2"></div>
    </div>
    </>
  );
};

export default Portada;
