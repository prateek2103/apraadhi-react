import { useContext } from "react";
import { NavContext } from "../../context/navContext";
import "./CardLayout.css";
const CardLayout = (props) => {
  const ctx = useContext(NavContext);
  return (
    <div class="card" style={{ width: "18rem" }}>
      <div class="card-body">
        <h5 class="card-title">{props.name}</h5>
        <p class="card-text">{props.description}</p>
        <a
          href={`${props.type}/${props.link}`}
          class="btn btn-custom"
          style={{ backgroundColor: ctx.color }}
        >
          Open
        </a>
      </div>
    </div>
  );
};

export default CardLayout;
