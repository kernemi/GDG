import React, { useState, useReducer, useMemo, useCallback } from "react";
import "./index.css";

const MAX_LIMIT = 200;

const initialState = { count: 0, text: "" };

function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_TEXT":
      return { count: action.payload.length, text: action.payload };
    default:
      return state;
  }
}

const useCharacterCount = (initialText = "") => {
  const [state, dispatch] = useReducer(reducer, { ...initialState, text: initialText });
  
  const updateText = useCallback((text) => {
    if (text.length <= MAX_LIMIT) {
      dispatch({ type: "UPDATE_TEXT", payload: text });
    }
  }, []);
  
  return [state, updateText];
};

export default function CharacterCounter() {
  const [state, updateText] = useCharacterCount();
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(state.text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  }, [state.text]);

  const progress = useMemo(() => (state.count / MAX_LIMIT) * 100, [state.count]);

  return (
    <div className="container">
      <h1>Real-Time Character Counter</h1>
      <textarea
        value={state.text}
        onChange={(e) => updateText(e.target.value)}
        placeholder="Type something..."
      />
      <div className="text-counter">
        {state.count}/{MAX_LIMIT}
      </div>
      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>
      {progress >= 90 && <p className="warning">Warning: Near character limit!</p>}
      <button onClick={handleCopy} className="copy-button">
        {copied ? "Copied!" : "Copy to Clipboard"}
      </button>
    </div>
  );
}
