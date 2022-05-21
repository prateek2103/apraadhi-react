import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav
        class="navbar navbar-expand-lg navbar-light"
        style={{ padding: "20" }}
      >
        <a class="navbar-brand" href="/">
          अपराधी
        </a>

        <button
          class="navbar-toggler collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div
          class="collapse navbar-collapse d-lg-flex justify-content-end"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="/">
                कविता
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="/user/home">
                शायरी
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="/user/home">
                कहानी
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="/user/home">
                साहित्य
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="/user/home">
                जिवन परिचय
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
