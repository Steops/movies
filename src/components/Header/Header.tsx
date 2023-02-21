interface IHeader {
  setMenuActive: any;
  menuActive: boolean;
}

const Header = ({ setMenuActive, menuActive }: IHeader) => {
  return (
    <div className="header">
      <div
        className="header__burger-btn"
        onClick={() => setMenuActive(!menuActive)}
      >
        <span />
      </div>
    </div>
  );
};

export { Header };
