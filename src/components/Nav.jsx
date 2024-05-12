import { Link as ScrollLink } from "react-scroll";

const links = [
  { name: "home", target: "home", offset: -70 },
  { name: "about", target: "about", offset: -55 },
  { name: "blog", target: "blog", offset: -50 },
  { name: "contact", target: "contact", offset: -40 },
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
            className="hover:text-accent hover:border-b-4 border-accent  font-bold text-primary-100"
          >
            {link.name}
          </ScrollLink>
        );
      })}
    </div>
  );
};
