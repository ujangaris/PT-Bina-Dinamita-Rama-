import { Link as ScrollLink } from "react-scroll";

const links = [
  { name: "home", target: "home", offset: -70 },
  { name: "about", target: "about", offset: -50 },
  { name: "blog", target: "blog", offset: -35 },
  { name: "contact", target: "contact", offset: -30 },
];

export const MobileNav = ({ containerStyles }) => {
  return (
    <nav className={containerStyles}>
      {links.map((link, index) => {
        return (
          <ScrollLink
            offset={link.offset}
            to={link.target}
            smooth
            spy
            activeClass="active"
            key={index}
          >
            {link.name}
          </ScrollLink>
        );
      })}
    </nav>
  );
};
