import styles from "./Shayaris.module.css";
import { NavContext } from "../../context/navContext";
import { useContext } from "react";
import CardLayout from "../../Layout/CardLayout/CardLayout";

const Shayaris = () => {
  const ctx = useContext(NavContext);
  ctx.setTypeColor("#51D1D6");
  const shayaris = [
    {
      name: "Shayari 1",
      addedOn: new Date(),
      id: "1",
      description: "A short description",
    },
    {
      name: "Shayari 2",
      addedOn: new Date(),
      id: "2",
      description: "A short description",
    },
    {
      name: "Shayari 3",
      addedOn: new Date(),
      id: "3",
      description: "A short description",
    },
    {
      name: "Shayari 4",
      addedOn: new Date(),
      id: "4",
      description: "A short description",
    },
  ];

  return (
    <div className="container">
      <div className="row">
        {shayaris.map((shayari) => (
          <div className={styles["shayari-section"] + " col-lg-3"}>
            <CardLayout
              key={shayari.id}
              name={shayari.name}
              addedOn={shayari.addedOn}
              link={shayari.id}
              description={shayari.description}
              type="shayari"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shayaris;
