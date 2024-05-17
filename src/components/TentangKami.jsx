import imageAbout1 from "../assets/img/image-about-1.png";
import imageAbout2 from "../assets/img/image-about-2.png";
import imageAbout3 from "../assets/img/image-about-3.png";
export const TentangKami = () => {
  return (
    <div className="mb-20" id="about">
      <div className="about container mx-auto max-w-7xl">
        <div className="w-full  mx-auto">
          <div className="max-w-xl mx-auto text-center mb-10 md:mb-20 ">
            <h4 className="font-bold text-3xl md:text-5xl text-[#927F7F]  pt-20">
              Tentang Kami
            </h4>
            <p className="pt-5  md:text-base text-xs text-[#717171]  mb">
              Kami telah bekerja dengan 200+ klien
            </p>
          </div>
        </div>
        <div className=" mx-auto grid md:grid-cols-2 gap-x-10 pb-10 gap-y-4">
          <div className="left order-2 mt-2 md:mt-28 relative">
            <img
              src={imageAbout1}
              alt="image-about-1"
              className="absolute bottom-0"
            />
          </div>
          <div className="right  md:order-2 ">
            <h1 className="text-1xl md:text-3xl font-semibold text-black mb-4 md:mb-10 tracking-wide ">
              PT. BINA <span className="text-red-500">DINAMITA</span> RAMA
            </h1>
            <p className="lg:text-xl font-medium text-slate-500 tracking-wide text-justify mb-3">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Perusahaan kami
              didirikan dengan tekad untuk melatih dan menghasilkan sumber daya
              manusia yang berkualitas. Hal ini bertujuan untuk memenuhi
              kebutuhan tenaga kerja di kancah internasional sesuai dengan
              kualifikasi yang ada. Selain menyalurkan tenaga kerja secara
              global, perusahaan kami juga fokus dalam membantu perbaikan
              kehidupan masyarakat melalui pelayanan pemberian tenaga kerja.
            </p>
            <p className="lg:text-xl font-medium text-slate-500 tracking-wide text-justify">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kami selalu berkomitmen
              untuk mempertahankan kualitas rekrutmen sumber daya manusia yang
              berdasarkan nilai profesionalisme. Dedikasi yang kami berikan
              melalui peningkatan dan pengembangan sumber daya adalah untuk
              memberikan sumber daya manusia yang terlatih dan kompeten.
              Diharapkan dengan semangat dan usaha yang baik, kami dapat
              memberikan pelayanan yang terbaik dan memuaskan untuk klien kami.
            </p>
          </div>
        </div>
        <div className=" mx-auto grid md:grid-cols-2   gap-y-4 gap-x-1">
          <div className="image-left mx-auto">
            <img src={imageAbout2} alt="" />
          </div>
          <div className="image-right mx-auto">
            <img src={imageAbout3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
