import { Nav } from "./Nav";

export const Header = () => {
  return (
    <div className="fixed left-0 right-0 w-full bg-white h-[100px]">
      <div className="container mx-auto">
        <Nav containerStyles=" py-8 flex gap-4" />
      </div>
    </div>
  );
};
