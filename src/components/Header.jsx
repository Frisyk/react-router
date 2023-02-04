import { Link } from "react-router-dom";
 
const Header = () => {
  return (
      <div className="header-container">
        <h1 className="header-title">Frisyk blogsite</h1>
        <div className="header-sub">
          <Link className="header-buttons" to={"/home"}>Home</Link>
          <Link className="header-buttons" to={"/"}>Blogs</Link>
          <Link className="header-buttons" to={"/fav"}>Favorite</Link>
          <Link className="header-buttons" to={"/author"}>About</Link>
        </div>
      </div>
  );
}
 
export default Header;