import styles from "./Homepage.module.css";
import PoetryPhoto from "../../images/PoetryPhoto.jpg";
import ReligiousLiteraturePhoto from "../../images/ReligiousLiteraturePhoto.jpg";
import ShayariPhoto from "../../images/ShayariPhoto.jpg";
import StoriesPhoto from "../../images/StoriesPhoto.jpg";

const Homepage = () => {
  const collectionTypes = [
    { name: "कविताएं", url: PoetryPhoto },
    { name: "कहानियां", url: StoriesPhoto },
    { name: "शायरी", url: ShayariPhoto },
    {
      name: "साहित्य",
      url: ReligiousLiteraturePhoto,
    },
  ];

  return (
    <div>
      <div className={styles.headerContainer}>
        <div className={styles.contentSection}>
          <h1>
            साहित्य प्रेमियों के लिए कविताओं, कहानियों और शरीयों का संग्रह।
          </h1>
        </div>
      </div>

      <div className={styles.seperator} s></div>

      <div className={styles.bottomContainer}>
        <h1>सूची</h1>

        <div class={"row " + styles.collections}>
          {collectionTypes.map((item) => (
            <div className="col-lg-4">
              <div className={styles.collectionItem}>
                <div className={styles.overlay}>
                  <h1>
                    <a href="#">{item.name}</a>
                  </h1>
                </div>
                <div
                  className={styles.collectionImage}
                  style={{
                    backgroundImage: "url(" + item.url + ")",
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
