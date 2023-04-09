import React from "react";
import ReactDOM from "react-dom/client";
import SearchForm from "../components/SearchForm/SearchForm";

export function aboutSearch() {
  const root = ReactDOM.createRoot(document.querySelector(".media-form"));

  root.render(<SearchForm />);
}
