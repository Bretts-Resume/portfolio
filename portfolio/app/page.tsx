import Image from "next/image";

export default function Home() {
  return (
    <div>
      <img src="/IMG_0818.png" alt="" className="w-1/3 h-auto ms-3 personal-image" />
      <div className="border p-3 text-me max-w-screen me-150 pb-100">
        <p className="max-w-screen text-sm md:text-base lg:text-lg pe-10">Hi, I’m Brett - a web developer focused on building modern, responsive websites with Next.js and Tailwind CSS.  I craft fast, responsive and user-first websites using modern frameworks like Next.js and express.js.
        </p><br></br>
        <p className="max-w-screen text-sm md:text-base lg:text-lg pe-10">I build custom websites and apps with code that’s as clean as my workspace and UI/UX design to bring ideas to life.
        </p><br></br>
        <p className="max-w-screen text-sm md:text-base lg:text-lg pe-10">Let’s build something great together.
        </p>
        <br></br>
        <p className="max-w-screen text-sm md:text-base lg:text-lg pe-10">[View my work] or [Get in touch]</p>
      </div>
    </div>
  );
}
