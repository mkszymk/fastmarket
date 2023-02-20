import React from "react";
import { NavLink } from "react-router-dom";
import "./AsideCategoriesComponent.css";

export default function AsideCategoriesComponent() {
  return (
    <aside className="singleAsideElement">
      <div className="categoriesContainer">
        <h3>Categorías</h3>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              <p>Todos</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/category/celulares"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              <p>Celulares</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/category/consolas"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              <p>Consolas</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/category/notebooks"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              <p>Notebooks</p>
            </NavLink>
          </li>
        </ul>
      </div>
    </aside>
  );
}
