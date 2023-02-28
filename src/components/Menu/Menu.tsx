import { Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";

interface IMenu {
  setMenuActive: Dispatch<SetStateAction<boolean>>;
  menuActive: boolean;
  onAnimationEnd: any;
}

const Menu = ({ setMenuActive, menuActive, onAnimationEnd }: IMenu) => {
  return (
    <div
      className={`menu ${menuActive ? "--open" : "--close"}`}
      onAnimationEnd={onAnimationEnd}
    >
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
