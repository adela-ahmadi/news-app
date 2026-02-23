import "../App.css";

const categories = [
  "technology",
  "business",
  "health",
  "sports",
  "entertainment",
];

const Navbar = ({ category, setCategory }) => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark custom-navbar'>
      <div className='container'>
        <span className='navbar-brand fw-bold'>NewsMag</span>

        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'>
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav ms-auto'>
            {categories.map((cat) => (
              <li className='nav-item' key={cat}>
                <button
                  className={`nav-link btn btn-link ${
                    category === cat ? "active-link" : ""
                  }`}
                  onClick={() => setCategory(cat)}>
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
