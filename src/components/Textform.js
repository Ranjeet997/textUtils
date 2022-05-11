import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("Enter text here");
  // setText("this is text");
  const handleUpClick = () => {
    // console.log("UpperCase was clicked");
    let newText = text.toUpperCase();
    props.showAlert("Converted to uppercase!", "success");
    setText(newText);
  };

  const textToBinary = () => {
    let length = text.length,
      output = [];

    for (let i = 0; i < length; i++) {
      let bin = text[i].charCodeAt().toString(2);
      output.push(Array(8 - bin.length + 1).join("0") + bin);
    }
    let newText = output.join(" ");
    props.showAlert("Text has been converted into binary", "success");
    setText(newText);
    // console.log(newText);
  };

  const binaryToText = () => {
    let newText = text
      .split(" ")
      .map((b) => parseInt(b, 2))
      .map((num) => String.fromCharCode(num))
      .join("");
    props.showAlert("Text has been converted into string", "success");
    setText(newText);
    // console.log(newText);
  };

  const handleLoClick = () => {
    // console.log("UpperCase was clicked");
    let newText = text.toLowerCase();
    props.showAlert("Converted to lowercase!", "success");
    setText(newText);
  };

  const clearText = () => {
    // console.log("UpperCase was clicked");
    let newText = "";
    props.showAlert("Clear the text", "success");

    setText(newText);
  };

  const handleOnChange = (event) => {
    console.log("on change");
    setText(event.target.value);
  };

  const boldText = () => {
    let newText = text;
    <strong>newText</strong>;
    console.log(newText);
    setText(newText);
  };

  const handleCopy = () => {
    let newText = text;
    newText.replace(/\s/g);
    setText(newText);
    console.log(setText);
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "rgb(3 27 56)" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="mybox"
            rows="8"
            style={{
              backgroundColor:
                props.mode === "light" ? "white" : "rgb(6, 58, 63)",
              color: props.mode === "dark" ? "white" : "rgb(3 27 56)",
            }}
          ></textarea>
          <buttom
            className="btn btn-primary mx-1 my-2"
            onClick={handleUpClick}
            style={{ Color: props.color }}
          >
            Convert to Uppercase
          </buttom>
          <buttom className="btn btn-primary mx-1 my-2" onClick={handleLoClick}>
            Convert to Lovercase
          </buttom>
          <buttom className="btn btn-primary mx-1 my-2" onClick={textToBinary}>
            Convert text to binary
          </buttom>
          <buttom className="btn btn-primary mx-1 my-2" onClick={binaryToText}>
            Convert binary to text
          </buttom>
          <buttom className="btn btn-primary mx-1 my-2" onClick={boldText}>
            bold text
          </buttom>
          <buttom className="btn btn-primary mx-1 my-2" onClick={clearText}>
            Clear Text
          </buttom>
          <buttom className="btn btn-primary mx-1 my-2" onClick={handleCopy}>
            Copy
          </buttom>
        </div>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "rgb(3 27 56)" }}
      >
        <h2>your text summary</h2>
        <p>
          <b>
            {text.split(" ").length} words {text.length} characters
          </b>
        </p>
        <p>
          <b>{0.008 * text.split(" ").length} Minutes read</b>
        </p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
