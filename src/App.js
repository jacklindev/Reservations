import React, { useReducer } from "react";
import { Tabs } from "antd";

import { Provider, Client } from "./components";
import { reducer, initialState } from "./store/reducer";

import "antd/dist/antd.css";
import "./styles.css";

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const tabItems = [
    {
      label: "Provider",
      key: "provider",
      children: <Provider data={state} dispatch={dispatch} />
    },
    {
      label: "Client",
      key: "client",
      children: <Client data={state} dispatch={dispatch} />
    }
  ];

  return (
    <div className="App">
      <div className="container">
        <Tabs items={tabItems} />
      </div>
    </div>
  );
}
