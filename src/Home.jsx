import React, { useState, useEffect } from "react";
import "./styles.scss";
import { Icon } from "@mui/material";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import OpacityIcon from "@mui/icons-material/Opacity";
import InvertColorsIcon from "@mui/icons-material/InvertColors";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <span>
          Created by <b>Ob1</b> & <b>DESIGNEV</b>
        </span>
      </div>
    </footer>
  );
};

////////////////////
//         Home  //
//////////////////
const Screen1 = ({ goToScreen2, goToScreen3, goToScreen2zero }) => {
  return (
    <div className="screen-1">
      <br />
      <br />
      {/* <h2>Schermata 1</h2> */}
      <div className="home-card">
        <div className="home-card-body">
          <div className="home-card-name">
            <p>Calcolo</p>
            <h2>PORTATA</h2>
          </div>
          <img src="https://svgur.com/i/ueA.svg" />
        </div>
        <button className="bttn-ev" onClick={goToScreen2zero}>
          Inizia
        </button>
      </div>
      <hr className="hr-" />
      <div className="home-card">
        <div className="home-card-body">
          <div className="home-card-name">
            <p> Database</p>
            <h2> ARCHIVIO</h2>
          </div>

          <img src="https://svgur.com/i/ucz.svg" />
          {/* <img src="https://svgur.com/i/ueN.sv" /> */}
        </div>
        <button
        // onClick={goToScreen3}
        >
          Presto disponibile
        </button>
      </div>
      <hr className="hr-" />
    </div>
  );
};

////////////////////
//     CALCOLO PORTATA  //
//////////////////

const Screen2zero = ({
  goToScreen1,
  goToScreen2,
  goToScreen2uno,
  goToScreen2due
}) => {
  return (
    <div className="screen">
      <br /> <br />
      <h3>Seleziona la tipologia di bocca:</h3>
      <div className="card-group">
        <button onClick={goToScreen2}>
          <span>Bazen </span>
          <Icon>
            <WaterDropIcon />
          </Icon>
        </button>
        <button onClick={goToScreen2uno}>
          <span>Cavour</span>
          <Icon>
            <OpacityIcon />
          </Icon>
        </button>
        <button onClick={goToScreen2due}>
          <span>Rigurgitata</span>
          <Icon>
            <InvertColorsIcon />
          </Icon>
        </button>
      </div>
      <br />
      {/* <button className="button-back"  onClick={goToScreen1}>Torna alla Schermata 1</button> */}
    </div>
  );
};
////////////////////
//     CP BAZEN  //
//////////////////

const Screen2 = ({ goToScreen1, goToScreen2uno, goToScreen2due }) => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  // const [num3, setNum3] = useState(0);
  const [result, setResult] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const calculateResult = () => {
    const sum = Number(num1) * Number(num2);
    setResult(sum);
    setShowResult(true);
  };

  return (
    <div className="screen">
      <div className="screen-calc">
        <h2>
          {" "}
          <Icon className="icon-title">
            <WaterDropIcon />
          </Icon>
          Bazen
        </h2>
        <span>Valore Tabella</span>
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <span>Valore Lama</span>
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
        {/* <input
        type="number"
        value={num3}
        onChange={(e) => setNum3(e.target.value)}
      /> */}
        <button onClick={calculateResult}>Calcola</button>
      </div>
      {showResult && (
        <>
          <br />
          <hr className="hr-" />

          <p>
            Risultato: <span>{result} L/s</span>
          </p>

          <hr className="hr-" />
          <br />
          <div className="ai-bttn fade-in">
            <button className="bttn-suggested" onClick={goToScreen2uno}>
              <span>Calcola Cavour </span>
              <Icon className="">
                <OpacityIcon />
              </Icon>
            </button>
            <button className="bttn-suggested" onClick={goToScreen2due}>
              <span>Calcola Rigurgitata </span>
              <Icon>
                <InvertColorsIcon />
              </Icon>
            </button>{" "}
          </div>
          {/* <p>
            5%<span>{result - result * 0.05}</span>
          </p>
          <p>
            10%<span>{result - result * 0.1}</span>
          </p>
          <p>
            15%<span>{result - result * 0.15}</span>
          </p>
          <p>
            20%<span>{result - result * 0.2}</span>
          </p>
          <p>
            25%<span>{result - result * 0.25}</span>
          </p>
          <p>
            30%<span>{result - result * 0.3}</span>
          </p>
          <p>
            35%<span>{result - result * 0.35}</span>
          </p>
          <p>
            40%<span>{result - result * 0.4}</span>
          </p>
          <p>
            45%<span>{result - result * 0.45}</span>
          </p>
          <p>
            50%<span>{result - result * 0.5}</span>
          </p>
          <p>
            55%<span>{result - result * 0.55}</span>
          </p>
          <p>
            60%<span>{result - result * 0.6}</span>
          </p>
          <p>
            65%<span>{result - result * 0.65}</span>
          </p>
          <p>
            70%<span>{result - result * 0.7}</span>
          </p>
          <p>
            75%<span>{result - result * 0.75}</span>
          </p>
          <p>
            80%<span>{result - result * 0.8}</span>
          </p>
          <p>
            85%<span>{result - result * 0.85}</span>
          </p>
          <p>
            90%<span>{result - result * 0.9}</span>
          </p>
          <p>
            95%<span>{result - result * 0.95}</span>
          </p> */}
        </>
      )}
      {/* <button className="button-back" onClick={goToScreen1}>Torna alla Schermata 1</button> */}
    </div>
  );
};

////////////////////
//     CP CAVOUR //
//////////////////

const Screen2uno = ({ goToScreen1, goToScreen2due, goToScreen2 }) => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  // const [num3, setNum3] = useState(0);
  const [result, setResult] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const calculateResult = () => {
    const sum = Number(num1) * Number(num2);
    setResult(sum);
    setShowResult(true);
  };

  return (
    <div className="screen">
      <div className="screen-calc">
        <h2>
          {" "}
          <Icon className="icon-title">
            <OpacityIcon />
          </Icon>
          Cavour
        </h2>
        <span>Valore Tabella</span>
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <span>Valore Lama</span>
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />

        <button onClick={calculateResult}>Calcola</button>
      </div>
      {showResult && (
        <>
          <br />
          <hr className="hr-" />
          <p>
            Risultato: <span>{result} L/s</span>
          </p>
          <hr className="hr-" />
          <br />
          <div className="ai-bttn fade-in">
            <button className="bttn-suggested" onClick={goToScreen2due}>
              <span>Calcola Rigurgitata </span>
              <Icon>
                <InvertColorsIcon />
              </Icon>
            </button>{" "}
            <button className="bttn-suggested" onClick={goToScreen2}>
              <span>Calcola Bazen </span>
              <Icon>
                <WaterDropIcon />
              </Icon>
            </button>{" "}
          </div>
        </>
      )}
    </div>
  );
};

////////////////////
//     CP RIGURGITATA //
//////////////////

const Screen2due = ({ goToScreen2, goToScreen2due, goToScreen2uno }) => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  const [result, setResult] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const calculateResult = () => {
    const sum = Number(num1) / Number(num2);
    setResult(sum);
    setShowResult(true);
  };

  return (
    <div className="screen">
      <div className="screen-calc">
        <h2>
          {" "}
          <Icon className="icon-title">
            <InvertColorsIcon />
          </Icon>
          Rigurgitata
        </h2>
        <span>Valore Differenza Vasche</span>
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <span>
          Valore DM<sup>2</sup>
        </span>
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />

        <button onClick={calculateResult}>Calcola</button>
      </div>
      {showResult && (
        <>
          <br />
          <hr className="hr-" />
          <p>
            Risultato: <span>{result} L/s</span>
          </p>
          <hr className="hr-" />
          <br />
          <div className="ai-bttn fade-in">
            <button className="bttn-suggested" onClick={goToScreen2}>
              <span>Calcola Bazen </span>
              <Icon>
                <WaterDropIcon />
              </Icon>
            </button>{" "}
            <button className="bttn-suggested" onClick={goToScreen2uno}>
              <span>Calcola Cavour </span>
              <Icon className="">
                <OpacityIcon />
              </Icon>
            </button>{" "}
          </div>
        </>
      )}
    </div>
  );
};

////////////////////
//     ARCHIVIO PORTATA //
//////////////////

const Screen3 = ({ goToScreen1 }) => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const calculateResult = () => {
    const multiplication = Number(num1) * Number(num2);
    setResult(multiplication);
    setShowResult(true);
  };

  return (
    <div className="screen">
      <h2>Schermata 3</h2>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <button onClick={calculateResult}>Calcola</button>
      {showResult && (
        <>
          <hr />
          <p>Risultato: {result}</p>
          {/* <button onClick={goToScreen1}>Torna alla Schermata 1</button> */}
        </>
      )}
    </div>
  );
};

const LoadingCircle = () => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((prevPercentage) => {
        if (prevPercentage === 100) {
          clearInterval(interval);
          return 100;
        }
        return prevPercentage + 1;
      });
    }, 50);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="laoding-g">
      <div className="loading-circle">
        <div className="logo-container">
          {/* <img src="https://svgur.com/i/udo.svg" alt="Logo" className="logo" /> */}
          <img src="https://svgur.com/i/udp.svg" alt="Logo" className="logo" />
        </div>
        <div className="percentage">{percentage}%</div>
      </div>
    </section>
  );
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simuliamo un ritardo di 2 secondi per il caricamento
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const [currentScreen, setCurrentScreen] = useState(1);

  const goToScreen2 = () => {
    setCurrentScreen(4);
  };

  const goToScreen3 = () => {
    setCurrentScreen(3);
  };

  const goToScreen1 = () => {
    setCurrentScreen(1);
  };

  const goToScreen2zero = () => {
    setCurrentScreen(2);
  };

  const goToScreen2uno = () => {
    setCurrentScreen(5);
  };

  const goToScreen2due = () => {
    setCurrentScreen(6);
  };

  return (
    <div className="app">
      {isLoading ? (
        <LoadingCircle />
      ) : (
        <>
          {/* <img src="https://svgur.com/i/uc4.svg" alt="logo-color" onClick={goToScreen1} /> */}

          <div className="nav-bar-app">
            {currentScreen === 1 && (
              <>
                <Icon
                  style={{ opacity: 0 }}
                  className="nav-bar-back"
                  onClick={goToScreen1}
                >
                  <ArrowBackOutlinedIcon />
                </Icon>
              </>
            )}

            {currentScreen === 2 && (
              <>
                <Icon className="nav-bar-back" onClick={goToScreen1}>
                  <ArrowBackOutlinedIcon />
                </Icon>
              </>
            )}
            {currentScreen === 3 && (
              <>
                <Icon className="nav-bar-back">
                  <ArrowBackOutlinedIcon />
                </Icon>
              </>
            )}
            {currentScreen === 4 && (
              <>
                <Icon className="nav-bar-back" onClick={goToScreen2zero}>
                  <ArrowBackOutlinedIcon />
                </Icon>
              </>
            )}
            {currentScreen === 5 && (
              <>
                <Icon className="nav-bar-back" onClick={goToScreen2zero}>
                  <ArrowBackOutlinedIcon />
                </Icon>
              </>
            )}
            {currentScreen === 6 && (
              <>
                <Icon className="nav-bar-back" onClick={goToScreen2zero}>
                  <ArrowBackOutlinedIcon />
                </Icon>
              </>
            )}

            <img
              src="https://svgur.com/i/uf4.svg"
              className="logo-cent"
              alt="logo-vett-black"
              onClick={goToScreen1}
            />
            <a></a>
          </div>

          <div className="app">
            {currentScreen === 1 && (
              <Screen1
                goToScreen2zero={goToScreen2zero}
                goToScreen2={goToScreen2}
                goToScreen3={goToScreen3}
              />
            )}
            {currentScreen === 2 && (
              <Screen2zero
                goToScreen2={goToScreen2}
                goToScreen2uno={goToScreen2uno}
                goToScreen2due={goToScreen2due}
                goToScreen1={goToScreen1}
              />
            )}
            {currentScreen === 3 && (
              <Screen3
                goToScreen2={goToScreen2}
                goToScreen2uno={goToScreen2uno}
                goToScreen2due={goToScreen2due}
                goToScreen1={goToScreen1}
              />
            )}
            {/*  */}
            {currentScreen === 4 && (
              <Screen2
                goToScreen2={goToScreen2}
                goToScreen2uno={goToScreen2uno}
                goToScreen2due={goToScreen2due}
                goToScreen1={goToScreen1}
              />
            )}
            {currentScreen === 5 && (
              <Screen2uno
                goToScreen2={goToScreen2}
                goToScreen2uno={goToScreen2uno}
                goToScreen2due={goToScreen2due}
                goToScreen1={goToScreen1}
              />
            )}
            {currentScreen === 6 && (
              <Screen2due
                goToScreen2={goToScreen2}
                goToScreen2uno={goToScreen2uno}
                goToScreen2due={goToScreen2due}
                goToScreen1={goToScreen1}
              />
            )}
          </div>
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
