import logo from "../assets/img/logo-putih.png";
import { Link as ScrollLink } from "react-scroll";

const links = [
  { name: "home", target: "home", offset: -70 },
  { name: "about", target: "about", offset: -55 },
  { name: "blog", target: "blog", offset: -50 },
  { name: "job", target: "job", offset: -50 },
  { name: "contact", target: "contact", offset: -40 },
];

export const Footer = () => {
  return (
    <div className="h-[30vh] bg-primary-300">
      <footer className=" w-screen -mt-[230px]  bg-black">
        <div className="container mx-auto grid md:grid-cols-6 pt-[400px] gap-x-10  gap-y-6">
          <div className="company flex flex-col col-span-2 gap-y-3  md:mb-[100px] md:ml-6">
            <a href="">
              <img src={logo} alt="" />
            </a>
            <p className="text-base font-medium text-white mt-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
          </div>
          <div className="menu-link flex flex-col gap-3 col-span-2 md:mx-auto">
            <h1 className="text-white font-bold text-sm  xl:text-2xl ">
              QUICK LINK
            </h1>
            <ul>
              {links.map((link, index) => {
                return (
                  <li key={index}>
                    <ScrollLink
                      offset={link.offset}
                      to={link.target}
                      smooth
                      spy
                      activeClass="active2"
                      className="hover:text-green-500 hover:border-b-4 border-green-500  font-regular text-white"
                    >
                      {link.name}
                    </ScrollLink>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="site-contact flex flex-col col-span-2 gap-4 ">
            <h1 className="text-white font-bold text-sm xl:text-2xl  ">
              GET IN TOUCH
            </h1>

            <div className="flex flex-row gap-2">
              <svg
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="16.5" cy="16.5" r="16.5" fill="white" />
                <path
                  d="M23.9913 21.0392C23.8575 22.119 23.3584 23.1102 22.5872 23.8276C21.8159 24.545 20.8252 24.9396 19.8002 24.9376C13.8451 24.9376 9.00001 19.7897 9.00001 13.4624C8.99817 12.3733 9.36953 11.3207 10.0447 10.5013C10.7199 9.68179 11.6528 9.15149 12.6691 9.0094C12.9261 8.97606 13.1863 9.03192 13.411 9.16865C13.6356 9.30538 13.8126 9.51564 13.9156 9.76804L15.4996 13.5254V13.5349C15.5784 13.7281 15.611 13.9391 15.5944 14.1489C15.5777 14.3588 15.5125 14.5609 15.4044 14.7374C15.3909 14.759 15.3766 14.7789 15.3616 14.7988L13.8001 16.7655C14.3618 17.9784 15.5559 19.2359 16.7124 19.8343L18.5379 18.184C18.5558 18.168 18.5746 18.1531 18.5942 18.1394C18.7601 18.0217 18.9511 17.9499 19.1498 17.9305C19.3484 17.911 19.5485 17.9444 19.7319 18.0278L19.7417 18.0326L23.275 19.7148C23.513 19.8238 23.7114 20.0117 23.8405 20.2504C23.9696 20.4892 24.0225 20.7659 23.9913 21.0392Z"
                  fill="#29BF08"
                />
              </svg>

              <p className="text-base font-semibold text-white">
                +(341) - 400799
              </p>
            </div>
            <div className="flex flex-row gap-2 ">
              <svg
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="16.5" cy="16.5" r="16.5" fill="white" />
                <path
                  d="M17 19C19.206 19 21 17.206 21 15C21 12.794 19.206 11 17 11C14.794 11 13 12.794 13 15C13 17.206 14.794 19 17 19ZM17 13C18.103 13 19 13.897 19 15C19 16.103 18.103 17 17 17C15.897 17 15 16.103 15 15C15 13.897 15.897 13 17 13Z"
                  fill="#29BF08"
                />
                <path
                  d="M16.4201 26.814C16.5893 26.9349 16.7921 26.9998 17.0001 26.9998C17.2081 26.9998 17.4108 26.9349 17.5801 26.814C17.8841 26.599 25.0291 21.44 25.0001 15C25.0001 10.589 21.4111 7 17.0001 7C12.5891 7 9.00009 10.589 9.00009 14.995C8.97109 21.44 16.1161 26.599 16.4201 26.814ZM17.0001 9C20.3091 9 23.0001 11.691 23.0001 15.005C23.0211 19.443 18.6121 23.428 17.0001 24.735C15.3891 23.427 10.9791 19.441 11.0001 15C11.0001 11.691 13.6911 9 17.0001 9Z"
                  fill="#29BF08"
                />
              </svg>

              <p className="text-base font-semibold text-white">
                Jl. Bunga Maya 16 Malang- indonesia
              </p>
            </div>
          </div>
        </div>
        <div className="max-6xl mx-auto mt-14 md:mt-0 px-5 pb-12 text-center">
          <p className="text-base text-white font-semibold">
            All Rights Reserved • Copyright by Ujang Arisandi - 2024 in Jakarta
          </p>
        </div>
      </footer>
    </div>
  );
};
