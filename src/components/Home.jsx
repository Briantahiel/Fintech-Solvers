import { useEffect } from 'react';
import ScrollMagic from 'scrollmagic';
import '../App.css';
import Navbar from './Navbar';
import Portada from './Portada';
import banner from '../assets/background.jpg';
import dashboard from '../assets/dashboard.jpg';
// import visualizacion from '../assets/visualizacion.png'

const Home = () => {

    useEffect(() => {
        const controller = new ScrollMagic.Controller();
    
        const revealElements = document.getElementsByClassName("digit");
        for (let i = 0; i < revealElements.length; i++) {
          new ScrollMagic.Scene({
            triggerElement: revealElements[i],
            offset: 50,
            triggerHook: 0.9,
          })
          .setClassToggle(revealElements[i], "visible")
          .addIndicators({ name: "digit " + (i + 1) })
          .addTo(controller);
        }
      }, []);
  return (
    <>
        <Navbar />
        <div id='inicio'></div>
        <Portada />
        <div id='introducción' style={{height: '60px'}}></div>
        <div className='home-content'>
        <div className='home-desarrollo'>
            <p>En el mundo actual, la seguridad en las transacciones comerciales es una preocupación esencial tanto para consumidores como 
            empresas. El aumento de tecnologías digitales ha facilitado las transacciones, pero también ha llevado a un incremento en casos 
            de fraude en línea.</p>
            <br/>
            <p>Para las empresas, proteger sus activos y la información confidencial de los clientes es fundamental frente a amenazas cibernéticas. 
            Los clientes esperan poder realizar transacciones de manera segura y confiable.</p>
            <br/>
            <p>Nuestro servicio especializado en modelos predictivos y análisis de datos aborda este desafío. Utilizando técnicas avanzadas, analizamos 
            grandes volúmenes de datos para identificar patrones sospechosos y prevenir fraudes en tiempo real.</p>
            <br/>
            <p>Nuestro enfoque no solo protege los intereses empresariales, sino también los activos y la privacidad de los clientes. Creemos que la 
            seguridad de las transacciones es crucial y nos comprometemos a proporcionar soluciones innovadoras para mantener a nuestras empresas 
            clientes un paso adelante de los delincuentes cibernéticos.</p>

        </div>
        <div className='home-img'>
            <img src={banner} alt='imagen secundaria'/>
        </div>
        </div>
        <div id='desarrollo' style={{height: '70px'}}></div>
        <h1 className='titles'>Desarrollo</h1>
        <div className='home-desarrollo-descripcion'>
         
        </div>
        <div className="home-container" id="reveal-elements">
        <div className="box1 digit item">
        <div className='box-content'>
        {/* <img src={visualizacion} alt='imagen'/> */}
        <h1>Exploración de los Datos (EDA - Exploratory Data Analysis):</h1>
            <p>Implica investigar y comprender la naturaleza y el contenido de un conjunto de datos mediante diversas técnicas 
            estadísticas y de visualización. Su objetivo es descubrir patrones, relaciones y tendencias ocultas en los datos.
            </p>
        </div>
        <div className='borde-inferior'></div>
        </div>
        <div className="box1 digit item">
        <div className='box-content'>
            <h1>ETL (Extract, Transform, Load):</h1>
            <p>Extraer datos de diversas fuentes, transformarlos para el análisis y cargarlos en una estructura adecuada. Este 
            proceso garantiza la calidad de los datos y facilita la generación de insights para la toma de decisiones.</p>
        </div>
        <div className='borde-inferior'></div>
        </div>
        <div className="box1 digit item">
        <div className='box-content'>
            <h1>Visualización de los datos (Dashboards, KPIs, Gráficos, Métricas, etc.):</h1>
            <p>En esta etapa, se utilizan herramientas y técnicas de visualización de datos para representar la información de manera 
            efectiva y comprensible, facilitando la interpretación y comunicación de los resultados.</p>
        </div>
        <div className='borde-inferior'></div>
        </div>
        <div className="box1 digit item">
            <div className='box-content'>
                <h1>Modelo de Machine Learning:</h1>
                <p>Implica desarrollar algoritmos que permiten a las máquinas aprender de los datos y mejorar su rendimiento con la 
                experiencia. Esto implica procesar datos para identificar patrones y tomar decisiones automatizadas en base a estos patrones.</p>
            </div>
            <div className='borde-inferior'></div>
        </div>
        </div>
        <div id='dashboard' style={{height: '60px'}}></div>
        <h1 className='titles'>Dashboard</h1>
            <div className='home-dashboard' >
            <img src={dashboard} alt='dashboard'/>
        </div>
     
        
    </>
  )
}

export default Home





  
