import Image from "next/image";
const Sidebar = () => {
  return (
    <div className="flex flex-col items-center space-y-10 fixed w-72 h-full bg-azulPokemon">
      <div>
        <Image
          src="/logo.png"
          alt="Picture of the author"
          width={150}
          height={59}
        />
      </div>
      <div>
        <Image
          src="/avatar.png"
          alt="Picture of the author"
          width={200}
          height={200}
        />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-white text-2xl font-bold">ASHK123</h1>
        <p className="text-white ">Level 1</p>
      </div>
      <p className="text-white text-sm">"Work hard in your test"</p>
      <div className="absolute bottom-5">
        <button className="bg-white text-white font-semibold p-4 rounded-md w-52 bg-opacity-40">
          LOG OUT
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
