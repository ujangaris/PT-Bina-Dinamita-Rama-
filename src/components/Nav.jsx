import { Link as ScrollLink } from "react-scroll";

const links = [
  { name: "home", target: "home", offset: -80 },
  { name: "about", target: "about", offset: -80 },
  { name: "blog", target: "blog", offset: -80 },
  { name: "contact", target: "contact", offset: -80 },
];

export const Nav = ({ containerStyles }) => {
  return (
    <div className={containerStyles}>
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
    </div>
  );
};
