import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div class="container">
      <h1>About me</h1>
      <div class="row">
        <div class="col-lg-4 info">
          <div class="row">
            <div class="col-12 info-image"></div>
            <div class="col-12 info-content">
              <h1>Harish Purohit</h1>
              <span>
                <i class="fa-solid fa-envelope"></i> purohit.delhi@gmail.com
              </span>
            </div>
          </div>
        </div>
        <div class="col-lg-7 desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempor
          erat massa. Maecenas et ante sit amet justo aliquam sagittis nec sed
          sem. Nullam at laoreet purus. Nunc cursus erat a nisi pulvinar rutrum.
          Donec et placerat odio. Mauris luctus commodo tortor id blandit. Cras
          gravida justo ut sapien tincidunt gravida. Cras tristique sagittis
          purus, scelerisque efficitur metus scelerisque vitae. Vivamus pulvinar
          tellus metus. Ut sed ultricies neque. Sed venenatis molestie quam a
          elementum. Sed vehicula eleifend massa vitae hendrerit. Sed nunc
          ipsum, sollicitudin eu quam vel, pretium ornare nibh. Mauris
          dignissim, mauris vel posuere egestas, justo nibh elementum tellus,
          luctus scelerisque lectus lacus eget ante.
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
