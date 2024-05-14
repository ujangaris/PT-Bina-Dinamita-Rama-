// import hero from "../assets/img/bg.png";

export const Hero = () => {
  return (
    <div
      className="h-[100vh] w-full   bg-hero bg-cover bg-center bg-no-repeat flex flex-col gap-5 items-center justify-center "
      id="home"
    >
      <h1 className="text-accent text-3xl md:text-7xl text-center  uppercase z-20 tracking-wide">
        PT Bina <span className="text-white"> Dinamita</span> Rama Ltd.
      </h1>
      <h5 className="text-white text-base md:text-3xl normal-case z-20 tracking-wide">
        INDONESIA <span className="text-red-700">Migrant Workers</span>
      </h5>
      <h5 className="text-white text-base md:text-3xl normal-case z-20 tracking-wide">
        Placement Agencies
      </h5>
      <button className="text-white font-roboto bg-accent rounded-full py-2 px-4 hover:bg-accent/70 hover:font-bold mt-5 z-20 tracking-wide shadow-sm hover:shadow-white">
        Apply Now
      </button>
      {/* pelapis image agar ada opacity dari warna hitam sekitar 70% */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70 z-10"></div>
    </div>
  );
};
