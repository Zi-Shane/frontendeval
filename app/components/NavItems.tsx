const NavLinks = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "Projects",
    link: "/projects",
  },
  { id: 3, name: "About", link: "/about" },
  {
    id: 4,
    name: "Contact",
    link: "/contact",
  },
];
const NavItems = () => {
  return (
    <ul className="flex sm:flex-row">
      {NavLinks.map(({ id, name, link }) => (
        <li key={id}>
          <a href={link}>{name}</a>
        </li>
      ))}
    </ul>
  );
};

export default NavItems;
