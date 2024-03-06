import { useEffect, useRef } from "react";
import ScrollMagic from "scrollmagic";
import "../App.css";
import Navbar from "./Navbar";
import Portada from "./Portada";
import logo from "../assets/github.png";
import brian from "../assets/Brian.jpg";
import kevin from "../assets/kevin.png";
import veronica from "../assets/Veronica.jpg";
import mayra from "../assets/Mayra.jpg";
import marcos from "../assets/Marcos.png";
import diego from "../assets/Diego.jpg";
import banner from "../assets/background1.png";
import { Carousel } from "bootstrap";
import Dashboard from "./Dashboard";

const Home = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    const carouselInstance = new Carousel(carousel, {
      interval: 5000,
    });

    return () => {
      carouselInstance.dispose();
    };
  }, []);

  useEffect(() => {
    const controller = new ScrollMagic.Controller();

    const revealElements = document.querySelectorAll(".digit, .digit1");

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
      <div id="inicio" style={{ paddingTop: "60px" }}></div>
      <Navbar />
      <Portada />
      <div>
        <div
          className="home-content"
          id="introducción"
          style={{ paddingTop: "70px" }}
        >
          <div className="home-desarrollo">
            <p>
              En el mundo actual, la seguridad en las transacciones comerciales
              es una preocupación esencial tanto para consumidores como
              empresas. El aumento de tecnologías digitales ha facilitado las
              transacciones, pero también ha llevado a un incremento en casos de
              fraude en línea.
            </p>
            <br />
            <p>
              Para las empresas, proteger sus activos y la información
              confidencial de los clientes es fundamental frente a amenazas
              cibernéticas. Los clientes esperan poder realizar transacciones de
              manera segura y confiable.
            </p>
            <br />
            <p>
              Nuestro servicio especializado en modelos predictivos y análisis
              de datos aborda este desafío. Utilizando técnicas avanzadas,
              analizamos grandes volúmenes de datos para identificar patrones
              sospechosos y prevenir fraudes en tiempo real.
            </p>
            <br />
            <p>
              Nuestro enfoque no solo protege los intereses empresariales, sino
              también los activos y la privacidad de los clientes. Creemos que
              la seguridad de las transacciones es crucial y nos comprometemos a
              proporcionar soluciones innovadoras para mantener a nuestras
              empresas clientes un paso adelante de los delincuentes
              cibernéticos.
            </p>
          </div>
          <div className="home-img">
            <img src={banner} alt="imagen secundaria" />
          </div>
        </div>
        <div
          className="titles-container"
          id="desarrollo"
          style={{ paddingTop: "70px" }}
        >
          <h1 className="titles borde-inferior">Desarrollo</h1>
        </div>
        <div className="home-desarrollo-descripcion"></div>
        <div className="home-container" id="reveal-elements">
          <div className="box1 digit item">
            <div className="box-content">
              <h1>ETL (Extract, Transform, Load):</h1>
              <p>
                Extraer datos de diversas fuentes, transformarlos para el
                análisis y cargarlos en una estructura adecuada es un proceso
                garantiza la calidad de los datos y facilita la generación de
                insights para la toma de decisiones.
              </p>
            </div>
          </div>
          <div className="box1 digit item">
            <div className="box-content">
              <h1>
                Exploración de los Datos (EDA - Exploratory Data Analysis):
              </h1>
              <p>
                Implica investigar y comprender la naturaleza y el contenido de
                un conjunto de datos mediante diversas técnicas estadísticas y
                de visualización. Su objetivo es descubrir patrones, relaciones
                y tendencias ocultas en los datos.
              </p>
            </div>
          </div>
          <div className="box1 digit item">
            <div className="box-content">
              <h1>
                Visualización de los datos (Dashboards, KPIs, Gráficos,
                Métricas, etc.):
              </h1>
              <p>
                En esta etapa, se utilizan herramientas y técnicas de
                visualización de datos para representar la información de manera
                efectiva y comprensible, facilitando la interpretación y
                comunicación de los resultados.
              </p>
            </div>
          </div>
          <div className="box1 digit item">
            <div className="box-content">
              <h1>Modelo de Machine Learning:</h1>
              <p>
                Implica desarrollar algoritmos que permiten a las máquinas
                aprender de los datos y mejorar su rendimiento con la
                experiencia. Esto implica procesar datos para identificar
                patrones y tomar decisiones automatizadas en base a estos
                patrones.
              </p>
            </div>
          </div>
        </div>
        <div
          className="titles-container analisis"
          id="análisis"
          style={{ paddingTop: "70px" }}
        >
          <h1 className="titles borde-inferior">
            Analizando transacciones fraudulentas
          </h1>
        </div>
        <div className="container">
          <div className="container-background">
            <main className="main-content">
              <section>
                <h6>Análisis Exploratorio de Datos (EDA)</h6>
                <p>
                  Se llevó a cabo una investigación exhaustiva de los datos
                  disponibles para comprender en profundidad la estructura y las
                  características intrínsecas de las transacciones. Mediante un
                  enfoque multidisciplinario que abarcó técnicas estadísticas
                  avanzadas y visualización de datos, logramos desentrañar
                  patrones ocultos y tendencias significativas en los datos
                  transaccionales.
                </p>
              </section>
              <section>
                <h6>Relación entre Variables</h6>
                <p>
                  Al fusionar múltiples conjuntos de datos, pudimos establecer
                  conexiones valiosas entre diversos atributos, como los
                  detalles de las transacciones, la metadata asociada, las
                  categorías específicas y los indicadores de anomalía y fraude.
                  Esta integración de información nos permitió profundizar en
                  las relaciones entre estas variables y revelar correlaciones
                  relevantes que podrían ser indicativas de comportamientos
                  fraudulentos.
                </p>
              </section>
              <section>
                <h6>Detección de Anomalías y Fraudes</h6>
                <p>
                  Aprovechando las puntuaciones de anomalía y los indicadores de
                  fraude, desarrollamos y desplegamos modelos de machine
                  learning de vanguardia para identificar y clasificar
                  transacciones sospechosas o fraudulentas. La implementación de
                  algoritmos avanzados y técnicas de aprendizaje automático nos
                  permitió discernir patrones sutiles y detectar comportamientos
                  anómalos con una precisión excepcional.
                </p>
              </section>
              <section>
                <h6>Validación y Ajuste del Modelo</h6>
                <p>
                  Nos comprometimos con un proceso iterativo de validación y
                  ajuste del modelo, donde refinamos continuamente los
                  parámetros y evaluamos el rendimiento del modelo en datos de
                  prueba no observados. La validación cruzada rigurosa y el
                  análisis exhaustivo de métricas de rendimiento garantizaron la
                  fiabilidad y la robustez de nuestros modelos en una variedad
                  de escenarios y contextos operativos.
                </p>
              </section>
              <section>
                <h6>Conclusiones y Recomendaciones</h6>
                <p>
                  Como resultado de nuestro análisis detallado, pudimos
                  identificar señales claras y consistentes de posibles fraudes
                  dentro de las transacciones financieras. Basándonos en
                  nuestros hallazgos, formulamos recomendaciones específicas
                  para fortalecer los sistemas de detección y prevención de
                  fraudes, con el objetivo de proteger los activos financieros y
                  preservar la confianza del cliente. Además, destacamos la
                  importancia de la educación y la concienciación continua sobre
                  la ciberseguridad y las mejores prácticas en la gestión de
                  riesgos financieros, como parte integral de cualquier
                  estrategia efectiva de prevención de fraudes.
                </p>
              </section>
            </main>
          </div>
        </div>
        <div
          className="titles-container"
          id="dashboard"
          style={{ paddingTop: "70px" }}
        >
          <h1 className="titles borde-inferior">Dashboard</h1>
        </div>
        <Dashboard />
        <div className="container" style={{ paddingTop: "70px" }}>
          <div className="section">
            <h1 className="titles">
              Análisis de Información y Métricas Clave para la Detección de
              Fraudes
            </h1>
            <div className="borde-inferior"></div>
            <br />
            <p style={{fontStyle: 'italic'}}>
              El conjunto de datos y el proceso de modelado permiten extraer una
              amplia gama de información valiosa para la detección de fraudes en
              transacciones financieras. A continuación, se detallan algunas
              visualizaciones, métricas y KPIs que pueden derivarse de estos
              datos:
            </p>
          </div>

          <div className="section">
            <h2>Visualizaciones:</h2>
            <ol>
              <li>
                <strong>Histogramas de Transacciones:</strong> Visualizar la
                distribución de montos de transacciones puede ayudar a
                identificar anomalías y detectar posibles fraudes, especialmente
                si hay picos inusuales en ciertos rangos de montos.
              </li>
              <li>
                <strong>Gráficos de Series Temporales:</strong> Mostrar la
                cantidad de transacciones a lo largo del tiempo y resaltar los
                períodos con un aumento repentino en la actividad puede indicar
                posibles actividades fraudulentas durante esos intervalos.
              </li>
              <li>
                <strong>Mapas de Calor de Actividad del Cliente:</strong>{" "}
                Identificar patrones geográficos de actividad de clientes y
                resaltar áreas con concentraciones inusuales de actividad puede
                señalar posibles casos de fraude.
              </li>
              <li>
                <strong>
                  Gráficos de Barras de Categorías de Transacciones:
                </strong>{" "}
                Comparar la cantidad de transacciones en diferentes categorías y
                destacar aquellas con una proporción inusualmente alta de
                transacciones fraudulentas puede proporcionar información sobre
                áreas de riesgo.
              </li>
            </ol>
          </div>

          <div className="section">
            <h2>Métricas y KPIs:</h2>
            <ol>
              <li>
                <strong>Tasa de Fraude:</strong> La proporción de transacciones
                identificadas como fraudulentas con respecto al total de
                transacciones es una métrica clave para evaluar la efectividad
                del sistema de detección de fraudes.
              </li>
              <li>
                <strong>Precisión y Sensibilidad del Modelo:</strong> Evaluar la
                precisión y la sensibilidad del modelo en la identificación de
                transacciones fraudulentas es fundamental para comprender su
                rendimiento y su capacidad para distinguir entre transacciones
                legítimas y fraudulentas.
              </li>
              <li>
                <strong>Tasa de Falsos Positivos:</strong> La proporción de
                transacciones legítimas incorrectamente identificadas como
                fraudulentas puede tener un impacto significativo en la
                eficiencia operativa y la experiencia del cliente.
              </li>
              <li>
                <strong>Tiempo de Respuesta:</strong> El tiempo necesario para
                identificar y responder a transacciones sospechosas es crucial
                para mitigar el impacto del fraude y minimizar las pérdidas
                financieras.
              </li>
              <li>
                <strong>Monto Total de Fraudes Detectados:</strong> Seguir el
                monto total de transacciones fraudulentas identificadas permite
                evaluar el impacto financiero del fraude y justificar la
                inversión en sistemas de detección y prevención.
              </li>
            </ol>
          </div>

          <div className="section">
            <h2>Conclusiones:</h2>
            <p style={{fontStyle: 'italic'}}>
              El análisis exhaustivo de la información extraída de los datos y
              las métricas generadas proporciona una visión integral del
              panorama de fraudes y permite a las instituciones financieras
              tomar decisiones informadas para proteger sus activos y garantizar
              la seguridad de sus clientes. La combinación de visualizaciones,
              métricas y KPIs facilita la identificación de patrones, tendencias
              y anomalías que pueden indicar actividades fraudulentas, lo que
              permite una respuesta proactiva y eficaz a las amenazas de fraude.
            </p>
          </div>
        </div>
        <div
          className="container"
          id="modelo ml"
          style={{ paddingTop: "70px" }}
        >
          <div className="section">
            <h1 className="titles">Modelo de Machine Learning:</h1>
            <div className="borde-inferior"></div>
            <br />
            <p style={{fontStyle: 'italic'}}>
              El objetivo de este modelo es identificar transacciones
              fraudulentas dentro de un conjunto de datos de transacciones
              financieras. Para lograr esto, se emplean algoritmos de machine
              learning que son capaces de aprender patrones y comportamientos
              anómalos a partir de datos históricos.
            </p>
          </div>

          <div className="section">
            <h2>Datos Utilizados:</h2>
            <ol>
              <li>
                <strong>Transaction Records:</strong> Este conjunto de datos
                contiene información sobre las transacciones realizadas,
                incluyendo el monto de la transacción y el ID del cliente
                involucrado.
              </li>
              <li>
                <strong>Transaction Metadata:</strong> Proporciona metadatos
                adicionales sobre cada transacción, como la fecha y hora en que
                se realizó y el ID del comerciante.
              </li>
              <li>
                <strong>Anomaly Score:</strong> Ofrece una puntuación de
                anomalía para cada transacción, lo que indica el nivel de
                desviación de la norma.
              </li>
              <li>
                <strong>Transaction Category Labels:</strong> Define la
                categoría de cada transacción, lo que puede ser útil para
                identificar patrones específicos de fraudes en ciertas
                categorías.
              </li>
              <li>
                <strong>Fraud Indicator:</strong> Indica si una transacción es
                fraudulenta o no.
              </li>
              <li>
                <strong>Merchant Data:</strong> Contiene información sobre los
                comerciantes involucrados en las transacciones.
              </li>
              <li>
                <strong>Suspicious Activity:</strong> Identifica actividades
                sospechosas asociadas con clientes específicos.
              </li>
              <li>
                <strong>Customer Data:</strong> Proporciona detalles sobre los
                clientes, como su nombre, edad y dirección.
              </li>
              <li>
                <strong>Amount Data:</strong> Información adicional sobre los
                montos de las transacciones.
              </li>
              <li>
                <strong>Account Activity:</strong> Detalles sobre la actividad
                de la cuenta de los clientes, como su saldo y fecha del último
                inicio de sesión.
              </li>
            </ol>
          </div>

          <div className="section">
            <h2>Proceso de Modelado:</h2>
            <ol>
              <li>
                <strong>Preprocesamiento de Datos:</strong> Se realiza una
                limpieza y transformación de los datos para prepararlos para su
                uso en el modelo. Esto puede incluir la normalización de los
                valores, la eliminación de valores atípicos y la codificación de
                variables categóricas.
              </li>
              <li>
                <strong>Selección de Características:</strong> Se identifican
                las características más relevantes para la detección de fraudes,
                lo que puede implicar el análisis de correlaciones y la
                selección de características basada en la importancia.
              </li>
              <li>
                <strong>Entrenamiento del Modelo:</strong> Se utilizan
                algoritmos de machine learning, como árboles de decisión,
                bosques aleatorios o métodos de aprendizaje no supervisado, para
                entrenar el modelo utilizando los datos históricos. Durante este
                proceso, el modelo aprende los patrones normales de
                comportamiento y puede identificar anomalías.
              </li>
              <li>
                <strong>Evaluación del Modelo:</strong> Se evalúa el rendimiento
                del modelo utilizando métricas como la precisión, la
                sensibilidad y la especificidad para evaluar la capacidad de
                discriminación del modelo.
              </li>
            </ol>
          </div>

          <div className="section">
            <h2>Detección de Fraudes:</h2>
            <p style={{fontStyle: 'italic'}}>
              Utilizando el modelo entrenado, se pueden identificar
              transacciones sospechosas o fraudulentas en tiempo real. El modelo
              analiza las características de cada transacción y las compara con
              los patrones aprendidos durante el entrenamiento. Si una
              transacción se desvía significativamente de los patrones normales,
              se marca como sospechosa y se requiere una revisión adicional por
              parte del equipo de seguridad.
            </p>
          </div>
        </div>
        <div className="container">
          <div className="section">
            <h2>Posibles Relaciones entre los Conjuntos de Datos</h2>
            <ol>
              <li>
                <strong>Relación entre Transacciones y Metadata:</strong> El
                conjunto de datos de Transacciones y Metadata están
                estrechamente relacionados, ya que la Metadata proporciona
                información adicional sobre cada transacción, como la fecha, la
                hora y el comerciante involucrado. Esta relación puede ser
                fundamental para identificar patrones temporales o
                comportamientos inusuales asociados con ciertos comerciantes o
                momentos del día.
              </li>
              <li>
                <strong>
                  Correlación entre Categorías de Transacciones y Actividad
                  Fraudulenta:
                </strong>{" "}
                Al analizar la relación entre las categorías de transacciones y
                el indicador de fraude, podemos identificar si ciertas
                categorías están más asociadas con actividades fraudulentas. Por
                ejemplo, podría haber una mayor incidencia de fraudes en ciertas
                categorías, como las transacciones en línea o las transacciones
                de viaje.
              </li>
              <li>
                <strong>
                  Impacto de la Actividad del Cliente en la Detección de
                  Fraudes:
                </strong>{" "}
                Los conjuntos de datos de Suspicious Activity y Customer Data
                pueden proporcionar información valiosa sobre los patrones de
                comportamiento de los clientes que podrían estar relacionados
                con actividades fraudulentas. Por ejemplo, ciertos patrones de
                actividad inusual podrían indicar la presencia de fraude, como
                múltiples intentos de inicio de sesión desde ubicaciones
                diferentes en un corto período de tiempo.
              </li>
              <li>
                <strong>Anomalías en los Montos de las Transacciones:</strong>{" "}
                El conjunto de datos de Amount Data puede revelar anomalías en
                los montos de las transacciones que podrían indicar posibles
                casos de fraude. Por ejemplo, transacciones inusualmente grandes
                o pequeñas podrían ser indicativas de actividades fraudulentas,
                especialmente si no coinciden con el historial de transacciones
                del cliente.
              </li>
            </ol>
          </div>

          <div className="section">
            <h2>Conjunto de Datos Más Prometedor</h2>
            <p>
              En cuanto a qué conjunto de datos parece ser el mejor para obtener
              datos e información relevante, puede depender de varios factores,
              incluyendo la calidad de los datos, la disponibilidad de
              información relevante y la capacidad de cada conjunto de datos
              para proporcionar insights significativos. Sin embargo, los
              conjuntos de datos de Transacciones, Metadata y Suspicious
              Activity parecen ser especialmente prometedores debido a su
              capacidad para proporcionar información detallada sobre las
              transacciones individuales, la actividad del cliente y los
              patrones de comportamiento anómalos.
            </p>
          </div>

          <div className="section">
            <h2>Resumen</h2>
            <p>
              El modelo de machine learning utiliza una variedad de datos
              financieros para identificar transacciones fraudulentas, lo que
              permite a las instituciones financieras tomar medidas proactivas
              para protegerse contra el fraude y garantizar la seguridad de sus
              clientes.
            </p>
            <p>
              Al analizar la interrelación entre los conjuntos de datos e
              identificar posibles patrones y relaciones, podemos obtener
              información valiosa que puede ser utilizada para desarrollar un
              modelo de machine learning efectivo para la detección de
              transacciones fraudulentas. Cada conjunto de datos ofrece una
              perspectiva única que, cuando se combina, puede proporcionar una
              comprensión más completa y profunda del fenómeno del fraude
              financiero.
            </p>
          </div>
        </div>

        <div className="proyecto-container">
          <h2>¡Explora más!</h2>
          <p>
            ¡Te invitamos a conocer más sobre nuestro trabajo! Descubre todo lo
            que hemos desarrollado y cómo nuestra tecnología puede ayudarte.
            Explora las diferentes secciones y encuentra información detallada
            sobre nuestros proyectos, análisis y predicciones.
          </p>
          <p>
            Para una experiencia aún más completa, visita nuestro documento en{" "}
            <a href="https://github.com/No-Country/c16-91-ft-data-bi" target="_blank">Github</a> o
            visita nuestra página web de <a href="https://fintech-solver.streamlit.app/" target="_blank">Streamlit</a>.
          </p>
          <p>¡Gracias por tu interés y apoyo!</p>
        </div>
        <div id="integrantes" style={{paddingTop: '70px'}}>
        <div className="footer-background">
          <div
            id="carouselExampleCaptions"
            className="carousel slide integrantes"
            data-bs-ride="carousel"
            data-interval="false"
            ref={carouselRef}
          >
            <div className="carousel-container">
              <button
                type="button"
                className="active"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="3"
                aria-label="Slide 4"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="4"
                aria-label="Slide 5"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="5"
                aria-label="Slide 6"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div style={{ marginBottom: "160px" }}>
                  <img
                    src={kevin}
                    className="d-block w-25"
                    alt="Kevin Castellano"
                  />
                </div>
                <div className="carousel-caption d-md-block">
                  <h6>
                    Kevin Castellano - <span>Data Engineer</span>
                  </h6>
                </div>
              </div>
              <div className="carousel-item">
                <div style={{ marginBottom: "160px" }}>
                  <img src={brian} className="d-block w-25" alt="Brian Gómez" />
                </div>
                <div className="carousel-caption d-md-block">
                  <h6>
                    Brian Gómez - <span>Data Scientist</span>
                  </h6>
                </div>
              </div>
              <div className="carousel-item">
                <div style={{ marginBottom: "160px" }}>
                  <img
                    src={marcos}
                    className="d-block w-25"
                    alt="Marcos Miño"
                  />
                </div>
                <div className="carousel-caption d-md-block">
                  <h6>
                    Marcos Miño - <span>Data Analyst</span>
                  </h6>
                </div>
              </div>
              <div className="carousel-item">
                <div style={{ marginBottom: "160px" }}>
                  <img
                    src={veronica}
                    className="d-block w-25"
                    alt="Verónica Moroni"
                  />
                </div>
                <div className="carousel-caption d-md-block">
                  <h6>
                    Verónica Moroni - <span>Analyst BI</span>
                  </h6>
                </div>
              </div>
              <div className="carousel-item">
                <div style={{ marginBottom: "160px" }}>
                  <img
                    src={diego}
                    className="d-block w-25"
                    alt="Diego Sanabria"
                  />
                </div>
                <div className="carousel-caption d-md-block">
                  <h6>
                    Diego Sanabria - <span>Machine Learning Developer</span>
                  </h6>
                </div>
              </div>
              <div className="carousel-item">
                <div style={{ marginBottom: "160px" }}>
                  <img
                    src={mayra}
                    className="d-block w-25"
                    alt="Mayra Sierra"
                  />
                </div>
                <div className="carousel-caption d-md-block">
                  <h6>
                    Mayra Sierra - <span>Data Analyst</span>
                  </h6>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>

          <footer>
            <div className="footer-container">
              <div>
                <span>No Country</span>
              </div>
              <div className="footer-github">
                <a
                  href="https://github.com/No-Country/c16-91-ft-data-bi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={logo} alt="Logo de Github" />
                </a>
              </div>
              <div>
                <span>c16-91-data-BI</span>
              </div>
            </div>
            <div>
              <span>Copyright &copy; 2024 Fintech Solvers</span>
            </div>
          </footer>
        </div>
      </div>
      </div>
    </>
  );
};

export default Home;
