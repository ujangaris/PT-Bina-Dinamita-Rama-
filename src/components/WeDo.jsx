import { Link } from "react-scroll";
import kegiatan1 from "../assets/img/kegiatan1.jpeg";
import kegiatan2 from "../assets/img/kegiatan2.jpeg";
export const WeDo = () => {
  return (
    <>
      <section className="we-do w-screen  bg-black mx-auto  h-96 mt-20 ">
        <div className="container mx-auto h-96 grid grid-col-1 md:grid-cols-2 items-center gap-4">
          <div className="righ  h-80 text-center md:text-left">
            <h1 className="text-2xl lg:text-4xl font-bold text-white mb-10 tracking-wide ">
              Our activities
            </h1>
            <p className="text-sm lg:text-base font-medium text-white mb-14 tracking-wide ">
              Our company provides thorough education and training in terms of
              language and skills which are necessary to fulfill the requirement
              from our clients. With the complete facilities from the dorm until
              the modern education system, we guarantee our partners’
              satisfaction over the provided human resources.
            </p>
            <Link
              to="/about"
              className="text-white font-semibold text-xs lg:text-base border-2 border-white bg-black hover:bg-green-400 w-full  rounded-full px-10 py-2 tracking-wide "
            >
              Portfolio
            </Link>
          </div>
          <div className=" right h-80 hidden md:grid grid-cols-3 gap-2">
            <div className="box  h-30 w-full"></div>
            <div className="box bg-abu2 h-30 w-full ">
              <img
                src={kegiatan1}
                alt="kegiatan"
                className="object-cover h-full w-full"
              />
            </div>
            <div className="box bg-abu2 h-30">
              <img
                src={kegiatan2}
                alt="kegiatan"
                className="object-cover h-full w-full"
              />
            </div>
            <div className="box bg-abu2 h-30">
              <img
                src={kegiatan1}
                alt="kegiatan"
                className="object-cover h-full w-full"
              />
            </div>
            <div className="box bg-abu2 h-30">
              <img
                src={kegiatan2}
                alt="kegiatan"
                className="object-cover h-full w-full"
              />
            </div>
            <div className="box bg-abu2 h-30">
              <img
                src={kegiatan1}
                alt="kegiatan"
                className="object-cover h-full w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
