import "./Info.scss";

export function Panels(props) {
  return (
    <div className="panels">
      <div className="panels__img">
        <img src="" alt="" />
      </div>
      <div className="panels__row">
        <h2 className="panels__row-title">{props.title}</h2>
        <p className="panels__row-value">{props.value}</p>
      </div>
    </div>
  )
}