import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import store from "./redux/store.js"
import {Provider} from "react-redux"
import "./index.css"
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap/dist/js/bootstrap.js"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
