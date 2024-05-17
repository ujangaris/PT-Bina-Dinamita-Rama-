import { Link as ScrollLink } from "react-scroll";

const links = [
  { name: "beranda", target: "beranda", offset: -90 },
  { name: "tentang kami", target: "tentangKami", offset: -80 },
  { name: "info", target: "info", offset: -50 },
  { name: "lowongan", target: "lowongan", offset: -50 },
  { name: "kontak", target: "kontak", offset: -40 },
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
