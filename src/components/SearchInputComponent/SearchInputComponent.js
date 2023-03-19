import React, { useState } from "react";
import "./SearchInputComponent.css";
import searchLogo from "./assets/searchIcon.svg";
import { useNavigate } from "react-router-dom";

export const SearchInputComponent = () => {
  const [inputTextValue, setInputTextValue] = useState("");
  const navigateTo = useNavigate();

  const handleInputTextValue = (e) => {
    setInputTextValue(e.target.value);
  };

  const handleSearch = (e) => {
    if (e.key === "Enter" && inputTextValue !== "") {
      navigateTo(`/search/${inputTextValue.replaceAll(" ", "+")}`);
    }
  };

  const handleImgSearch = (e) => {
    if (inputTextValue !== "") {
      navigateTo(`/search/${inputTextValue.replaceAll(" ", "+")}`);
    }
  };

  return (
    <div className="searchBarContainer">
      <input
        className="searchBarInput"
        placeholder="Buscar productos..."
        onChange={handleInputTextValue}
        onKeyDown={handleSearch}
        maxLength="64"
      ></input>
      <img
        src={searchLogo}
        alt="Buscar"
        className="searchLogo"
        onClick={handleImgSearch}
      />
    </div>
  );
};
