import resetImg from "../../img/reset.png";
import loginImg from "../../img/login.png";
import "./Header.scss";
export default function Header() {
  return (
    <header className="header">
      <div className="container header__container">
        <div className="header__menu">
         =
        </div>
        <div className="header__logo">
          <p className="header__logo-title">~Posters Galore~</p>
        </div>
        <div className="header__img">
          <div className="header__img-row">
            <img src={resetImg} alt="" />
          </div>
          <div className="header__img-left">
            <img src={loginImg} alt="" />
         </div>
         
        </div>
      </div>
    </header>
  )
}