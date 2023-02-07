import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <span className="header__button">
        <Link to="/">Главная</Link>
      </span>
      <span className="header__button">
        <Link to="/favorites">Избранное</Link>
      </span>
    </div>
  );
};

export { Header };
