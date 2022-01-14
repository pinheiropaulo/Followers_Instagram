import React from "react";

import {
  MdMenu,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdOutlineLogout,
} from "react-icons/md";

import "./styles/App.scss";

export function App() {
  return (
    <div className="Container">
      <div className="Header">
        <MdMenu color="#FFF" size="28" />

        <div>
          <p>PauloPrap</p>
          <MdKeyboardArrowDown color="#FFF" size="28" />
        </div>

        <MdOutlineLogout color="#FFF" size="28" />
      </div>

      <div className="Profile">
        <div className="image">
          <img src="https://avatars.githubusercontent.com/u/33367881?v=4" />
        </div>

        <div className="text_container_info">
          <div className="container_info">
            <strong className="profile_text">13k</strong>
            <p className="profile_text">Seguidores</p>
          </div>

          <div className="container_info">
            <strong className="profile_text">13k</strong>
            <p className="profile_text">Seguidores</p>
          </div>

          <div className="container_info">
            <strong className="profile_text">13k</strong>
            <p className="profile_text">Seguidores</p>
          </div>
        </div>
      </div>

      <div className="button">
        <p>Iniciar a Análise</p>
      </div>

      <div className="cards">
        {/*  */}
        <div className="card">
          <div className="card_info_text">
            <strong>12 K</strong>
            <span>Novos</span>
            <span>Seguidores</span>
          </div>

          <div className="card_info_status">
            <MdKeyboardArrowUp color="#2c9751" size="12" />
            44
          </div>
        </div>

        <div className="card">
          <div className="card_info_text">
            <strong>120</strong>
            <span>Seguidores</span>
            <span>perdidos</span>
          </div>

          <div className="card_info_status">
            <MdKeyboardArrowDown color="red" size="12" />
            12
          </div>
        </div>

        <div className="card">
          <div className="card_info_text">
            <strong>20</strong>
            <span>Interações</span>
            <span>de perfis</span>
          </div>
          <div className="card_info_status">
            <MdKeyboardArrowUp color="#2c9751" size="12" />4
          </div>
        </div>

        <div className="card">
          <div className="card_info_text">
            <strong>11</strong>
            <span>Admiradores</span>
            <span>secretos</span>
          </div>
          <div className="card_info_status">
            <MdKeyboardArrowUp color="#2c9751" size="12" />2
          </div>
        </div>

        <div className="card">
          <div className="card_info_text">
            <strong>12</strong>
            <span>Eu não sigo</span>
            <span>de volta</span>
          </div>
          <div className="card_info_status">
            <MdKeyboardArrowUp color="#2c9751" size="12" />2
          </div>
        </div>

        <div className="card">
          <div className="card_info_text">
            <strong>24</strong>
            <span>Não me seguiu</span>
            <span>de volta</span>
          </div>

          <div className="card_info_status">
            <MdKeyboardArrowDown color="red" size="12" />8
          </div>
        </div>
      </div>
    </div>
  );
}
