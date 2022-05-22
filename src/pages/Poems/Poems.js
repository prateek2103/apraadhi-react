import styles from "./Poems.module.css";
import CardLayout from "../../Layout/CardLayout/CardLayout";
import { useContext } from "react";
import { NavContext } from "../../context/navContext";
const Poems = () => {
  const ctx = useContext(NavContext);
  ctx.setTypeColor("#FF6A6A");

  const poems = [
    {
      name: "Poem 1",
      addedOn: new Date(),
      id: "1",
      description: "A short description",
    },
    {
      name: "Poem 2",
      addedOn: new Date(),
      id: "2",
      description: "A short description",
    },
    {
      name: "Poem 3",
      addedOn: new Date(),
      id: "3",
      description: "A short description",
    },
    {
      name: "Poem 4",
      addedOn: new Date(),
      id: "4",
      description: "A short description",
    },
  ];

  return (
    <div className="container">
      <div className="row">
        {poems.map((poem) => (
          <div className={styles["poem-section"] + " col-lg-3"}>
            <CardLayout
              key={poem.id}
              name={poem.name}
              addedOn={poem.addedOn}
              link={poem.id}
              description={poem.description}
              type="poem"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Poems;
