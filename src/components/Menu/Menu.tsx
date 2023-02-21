import { Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";

interface IMenu {
  menuActive: boolean;
  setMenuActive: Dispatch<SetStateAction<boolean>>;
}

const Menu = ({ menuActive, setMenuActive }: IMenu) => {
  return (
    <div className={menuActive ? "menu active" : "menu"}>
      <div className="blur" />
      <div className="menu__content">
        <div className="menu__header">Меню</div>
        <ul>
          <li onClick={() => setMenuActive(false)}>
            <Link to="/">Главная</Link>
          </li>
          <li onClick={() => setMenuActive(false)}>
            <Link to="/favorites">Избранное</Link>
          </li>
          <li onClick={() => setMenuActive(false)}>
            <Link to="/rated">Оценённое</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export { Menu };
