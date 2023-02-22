import Demo from "../../components/Demo/Demo";
import { Panels } from "../../components/Info/Info";
import "./Dashboard.scss";

export function Dashboard() {
  return (
    <section className="dashboard">
      <div className="container dashboard__container">
        <div className="dashboard__panels">
          <Panels title="Monthly Revenue" value="1 385 $US" />
          <Panels title="New Orders" value="12" />
          <Panels title="Panding Reviews" value="3" />
          <Panels title="New Customers" value="9" />
        </div>
        <Demo />
      </div>

    </section>
  )
}