import { Link as ScrollLink } from "react-scroll";

const links = [
  { name: "home", target: "home", offset: -90 },
  { name: "about", target: "about", offset: -80 },
  { name: "blog", target: "blog", offset: -50 },
  { name: "job", target: "job", offset: -50 },
  { name: "contact", target: "contact", offset: -40 },
];

export const MobileNavEnglish = ({ containerStyles }) => {
  return (
    <nav className={containerStyles}>
      {links.map((link, index) => {
        return (
          <ScrollLink
            offset={link.offset}
            to={link.target}
            smooth
            spy
            activeClass="active2"
            key={index}
          >
            {link.name}
          </ScrollLink>
        );
      })}
    </nav>
  );
};
