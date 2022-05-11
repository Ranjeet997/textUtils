// import logo from './logo.svg';
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import React, { useState } from "react";

import Textform from "./components/Textform";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Settime from "./components/Settime";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [color, setColor] = useState("danger");

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleBlueMode = () => {
    setMode("dark");
    setColor("primary");
    document.body.style.background = "rgb(3 27 56)";
    showAlert("Dark mode has been enabled", "primary");
    document.title = "TextUtils - Dark Mode";

    // setInterval(() => {
    //   document.title = 'TextUtils is Amazing';
    // }, 2000);
    // setInterval(() => {
    //   document.title = 'Install TextUtils Now';
    // }, 1500);
  };

  const toggleRedMode = () => {
    setMode("dark");
    setColor("danger");

    document.body.style.background = "rgb(105, 7, 4)";
    showAlert("Red mode has been enabled", "danger");
    document.title = "TextUtils - Dark Mode";
  };

  // const toggleGreenMode = () => {
  //   setMode("dark");
  //   document.body.style.background = "rgb(3, 56, 3)";
  //   showAlert("Light mode has been enabled", "success");
  // };

  const removeBodyClasses = () => {
    document.body.classList.remove("bg-primary");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-dark");
    document.body.classList.remove("bg-warning");
    document.body.classList.remove("bg-success");
  };

  const toggleMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add("bg-" + cls);
    if (mode === "mode") {
      setMode("light");
      document.body.style.background = cls;
      setColor("light");
      showAlert("light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    } else {
      setMode("dark");

      document.body.style.background = "rgb(5, 5, 63)";
      showAlert("dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          title1="Home"
          mode={mode}
          toggleBlueMode={toggleBlueMode}
          toggleRedMode={toggleRedMode}
          toggleMode={toggleMode}
        />
        
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
          <Route exact path="/time">
          <Settime/>
            </Route>

            <Route exact path="/about">
              <About />
            </Route>

            <Route exact path="/">
              <Textform
                showAlert={showAlert}
                color={color}
                heading=" Enter the text to anylize below"
                mode={mode}
              />
            </Route>
          </Switch>
        </div>
      </Router>


    </>
  );
}

export default App;
