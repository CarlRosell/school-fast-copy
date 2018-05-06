import React from "react";
import { render } from "react-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Component from "@reactions/component";
import TEXT from "./text";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <Component initialState={{ copied: false }}>
      {({ state, setState }) => (
        <React.Fragment>
          <CopyToClipboard
            text={TEXT}
            onCopy={() => setState({ copied: true })}
          >
            <button
              style={{
                background: state.copied ? "darkgreen" : "black",
                borderRadius: 100,
                width: "auto",
                color: "white",
                padding: 10,
                margin: 10,
                width: 200,
                border: "none",
                outline: "none"
              }}
            >
              {state.copied ? "KOPIERAD!!" : "KOPIERA TEXT"}
            </button>
          </CopyToClipboard>
          <div style={{ padding: 10, textAlign: "left" }}>
            {TEXT.split(/\n/g).map(a => <p key={a}>{a}</p>)}
          </div>
        </React.Fragment>
      )}
    </Component>
  </div>
);

render(<App />, document.getElementById("root"));
