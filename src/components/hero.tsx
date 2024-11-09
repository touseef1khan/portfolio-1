// components/Hero.tsx
import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="h-screen min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-4 md:px-8 max-w-screen-2xl"
      style={{ backgroundImage: "url('/bg2.jpg')", backgroundSize: "cover" }}
    >
      {/* Right section with text */}
      <div className="text-center py-20">
        <h1 className="text-2xl md:text-5xl font-bold font-serif text-pink-900 text-center animate-slideIn transform transition-transform duration-1000 ease-in-out hover:scale-110">
          Hi, I&apos;m Touseef
        </h1>
        <div className="md:text-7xl mt-4 text-3xl font-serif text-pink-600 font-bold text-center animate-fadeIn transform transition-transform duration-1000 ease-in-out hover:scale-110">
          I&apos;m a Frontend Developer & Graphic Designer
        </div>
      </div>
      {/* Left section with image */}
      <Image
        src="/img7.png"
        alt="Profile Picture"
        width={300}
        height={300}
        className="w-80 h-80 md:w-80 md:h-80 object-center rounded-full border-4 border-pink-800 mb-10 mt-8 md:mb-0 transform transition-transform duration-500 ease-in-out hover:scale-110 animate-fadeIn"
      />
    </section>
  );
}