import { Dispatch, SetStateAction, useEffect } from "react";
import { Link } from "react-router-dom";

interface IMenu {
  setMenuActive: Dispatch<SetStateAction<boolean>>;
  menuActive: boolean;
  setRender: Dispatch<SetStateAction<boolean>>;
}

const Menu = ({ setMenuActive, menuActive, setRender }: IMenu) => {
  useEffect(() => {
    if (menuActive) setRender(true);
  }, [menuActive, setRender]);

  const onAnimationEnd = () => {
    if (!menuActive) setRender(false);
  };

  return (
    <div
      className="menu"
      onAnimationEnd={onAnimationEnd}
      style={{ animation: `${menuActive ? "MenuIn" : "MenuOut"} 0.5s` }}
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
