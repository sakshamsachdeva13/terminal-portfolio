import React from "react";
import { useState } from "react";
import classes from "./terminal.module.css";
import { commands, responses, errorTemplate , banner } from "./responses";
import {TypewriterClass} from 'typewriter-effect'
const Terminal = () => {
  const setLabel = (string) => (
    <label className={classes.label}>{string}</label>
  );

  const [content, setContent] = useState([]);
  const [cpos , setCpos] = useState(0);
  // const linebrake = (<br/>)
  const [val, setVal] = useState("");


  const handlePrompt = (e) => {
    let prompt = e.target.value;
    if (e.keyCode == 13) {
      e.preventDefault();
      //  clean prompt
      prompt = cleanPrompt(prompt);
      // set label
      let label = setLabel("Welcome@SakshamSachdeva.com:~ $ " + prompt);
      // set response
      let response = <></>;

      if (prompt === "") {
        response = <></>;
      } else if (Object.keys(responses).some((pr) => pr === prompt)) {
        response = responses[prompt];
      } else if(prompt === 'clear') {

        commands.clear(setContent)
      }else {
        response = errorTemplate;
      }
      // update content
      setContent((pv) => [...pv, label, response]);
      setVal("");
    }
  };

  const promptChangeHandler = (e) => {
    setVal(e.target.value);
  };

  
const moveIt = (e) => {
  console.log("it is working")
  const count = e.target.value.length;

  var keycode = e.keyCode || e.which;
  if (keycode == 37 && parseInt(cpos) >= (0 - ((count - 1) * 10))) {
    // change cursor position +10 px
    setCpos(pcpos => pcpos-10)
  } else if (keycode == 39 && (parseInt(cpos) + 10) <= 0) {
    // change cursor position -10 px
    setCpos(pcpos => pcpos+10)

  }
}

  const cleanPrompt = (prompt) => {
    // check the whitespace
    prompt = prompt.trim();
    // check if number or not
    prompt = prompt.toLowerCase();
    // convert it into lowercase

    return prompt;
  };

  return (
    <div className={classes.body}>
      <div className={classes.greeting}>
        {banner}
        <p>Welcome to my interactive web terminal.</p>
        <p>For a list of available commands, type 'help'.</p>
      </div>
      {content.map((_) => _)}
      <div className={classes.prompt}>
        <label>Welcome@SakshamSachdeva.com:~ $</label>
        <textarea
          onKeyDownCapture={(e) => {handlePrompt(e);moveIt(e)}}
          onChange={promptChangeHandler}
          // onKeyUp={(e)=>{handlePrompt(e)}}
          className={classes.inpt}
          value={val}
          autoFocus
        ></textarea>
      </div>
    </div>
  );
};

export default Terminal;

//  Need to create a html generator
