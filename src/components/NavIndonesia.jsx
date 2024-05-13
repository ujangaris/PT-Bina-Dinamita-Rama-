import { Link as ScrollLink } from "react-scroll";

const links = [
  { name: "beranda", target: "beranda", offset: -70 },
  { name: "tentang Kami", target: "tentang Kami", offset: -55 },
  { name: "blog", target: "blog", offset: -50 },
  { name: "lowongan", target: "lowongan", offset: -50 },
  { name: "Kontak", target: "Kontak", offset: -40 },
];

export const NavIndonesia = ({ containerStyles }) => {
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
            className="hover:text-accent hover:border-b-4 border-accent  font-regular text-primary-100"
          >
            {link.name}
          </ScrollLink>
        );
      })}
    </div>
  );
};
