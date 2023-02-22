import domImg from "../../img/dom.png";
import menImg from "../../img/men.jpg";
import bracketsImg from "../../img/brackets.png";
import "./Demo.scss";
export default function Demo() {
  return (
    <div className="demo">
      <div className="demo__img">
        <img src={menImg} alt="" />
      </div>
      <div className="demo__row">
        <h2 className="demo__row-title">Welcome to reakt-admin demo</h2>
        <p className="demo__row-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero,
          dolores? Laboriosam debitis voluptates
          eaque fuga soluta tenetur ut nostrum sint.Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className="demo__dom">
        <div className="demo__dom-row">
          <div className="demo__dom-row-img">
            <img src={domImg} alt="" />
          </div>
          <p className="demo__dom-row-title">REACT-ADMIN SITE</p>

        </div>
        <div className="demo__dom-row">
          <div className="demo__dom-row-img">
            <img src={bracketsImg} alt="" />
          </div>
          <p className="demo__dom-row-title">SOURCE FOR THIS DEMO</p>

        </div>
      </div>
      
    </div>
  )
}