import styles from "./Poem.module.css";
import { useNavigate } from "react-router-dom";

const Poem = () => {
  let navigate = useNavigate();
  return (
    <div class={styles.container}>
      <h1> Poem name</h1>
      <div class={styles.content}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempor
        erat massa. Maecenas et ante sit amet justo aliquam sagittis nec sed
        sem. Nullam at laoreet purus. Nunc cursus erat a nisi pulvinar rutrum.
        Donec et placerat odio. Mauris luctus commodo tortor id blandit. Cras
        gravida justo ut sapien tincidunt gravida. Cras tristique sagittis
        purus, scelerisque efficitur metus scelerisque vitae. Vivamus pulvinar
        tellus metus. Ut sed ultricies neque. Sed venenatis molestie quam a
        elementum. Sed vehicula eleifend massa vitae hendrerit. Sed nunc ipsum,
        sollicitudin eu quam vel, pretium ornare nibh. Mauris dignissim, mauris
        vel posuere egestas, justo nibh elementum tellus, luctus scelerisque
        lectus lacus eget ante.
      </div>
      <div class={`btn ${styles["btn-custom"]}`} onClick={() => navigate(-1)}>
        Back
      </div>
    </div>
  );
};

export default Poem;
