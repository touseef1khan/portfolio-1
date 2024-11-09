import Image from "next/image";

export default function About() {
  return (
    <div className="bg-pink-100 min-h-screen flex flex-col md:flex-row px-4 md:px-20 lg:px-40 justify-center md:justify-between items-center max-w-screen-2xl mx-auto py-16 md:py-24">
      
      {/* Image Section */}
      <Image
        src="/img6.jpg"
        alt="Profile Picture"
        width={400}
        height={400}
        className="w-80 h-80 md:w-80 md:h-80 object-center rounded-full border-4 border-pink-800 mb-8 mt-2 md:mb-0 transform transition-transform duration-500 ease-in-out hover:scale-110 animate-fadeIn"
      />

      {/* About Section */}
      <div className="border-solid border-2 border-pink-800 rounded-2xl bg-pink-100 w-full md:w-3/4 max-w-md md:max-w-2xl h-auto md:h-96 shadow-xl shadow-pink-900 flex flex-col justify-center items-center p-4 md:p-8 animate-fadeIn animate_animated animate_slideIn transform transition-transform duration-500 ease-in-out hover:scale-110">
        <h1 className="text-pink-900 text-3xl md:text-5xl font-bold font-serif mb-2 text-center animate-pulse">About Me</h1>
        <p className="md:text-xl text-center text-base leading-relaxed text-pink-800 animate-fadeIn">
          Hello! I&apos;m Touseef, a passionate Graphic Designer and Frontend Developer with a solid foundation in Computer Science. I completed my studies in Computer Science from Hyderabad Government Vocational Institute, which set the stage for my journey in design and technology. Alongside my studies, I pursued specialized courses, including an Amazon training program at JDC Foundation, and advanced my skills with MS Word and Excel.
          With expertise in HTML, CSS, JavaScript, Tailwind CSS, TypeScript, and Next.js, I bring dynamic, visually engaging, and user-friendly web interfaces to life. I&apos;m dedicated to continuous learning and creating meaningful digital experiences that blend aesthetics with functionality.
        </p>
      </div>
      
    </div>
  );
}