import { Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";

interface IMenu {
  setMenuActive: Dispatch<SetStateAction<boolean>>;
}

const Menu = ({ setMenuActive }: IMenu) => {
  return (
    <div className="menu">
      <div className="blur" onClick={() => setMenuActive(false)} />
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
