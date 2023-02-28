interface IHeader {
  setMenuActive: any;
  menuActive: boolean;
}

const Header = ({ setMenuActive, menuActive }: IHeader) => {
  return (
    <header className="header">
      <div
        className="header__burger-btn"
        onClick={() => setMenuActive(!menuActive)}
      >
        <span />
      </div>
    </header>
  );
};

export { Header };
