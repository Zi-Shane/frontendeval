import NavItems from "./NavItems";

const NavBar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-slate-500">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <a href="/">Shane</a>
          <nav className="sm:flex hidden">
            <NavItems />
          </nav>
          <button className="sm:hidden">---</button>
        </div>
      </div>
      {/* <nav className="sm:hidden">
        <NavItems />
      </nav> */}
    </header>
  );
};

export default NavBar;
