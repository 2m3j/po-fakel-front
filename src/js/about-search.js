import React from "react";
import ReactDOM from "react-dom";
import SearchForm from "../components/SearchForm/SearchForm";

export function aboutSearch() {
    ReactDOM.render(<SearchForm/>, document.querySelector(".media-form"));
}
