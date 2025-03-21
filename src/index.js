import React from "react";
import { createRoot } from "react-dom/client";
import App  from "./App";
import 'bootstrap/dist/css/bootstrap.min.css'; 

const element = document.getElementById('root');

const root = createRoot(element);

root.render(<App />);