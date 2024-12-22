import { NavLink } from "react-router";

function Header({ pageTitle }) {

  return (
    <>
      <h1>{pageTitle}</h1>
      <div className="header-btns">
        <NavLink to="/">
          <button className="btn">
            Books
          </button>
        </NavLink>

        <NavLink to="/add-book">
          <button className="btn">
            Add Book +
          </button>
        </NavLink>
      </div>
    </>
  )
}

export default Header
