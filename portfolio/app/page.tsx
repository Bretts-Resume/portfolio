import Image from "next/image";

export default function Home() {
  return (
    <div>
      <img src="/IMG_0818.png" alt="" className="w-1/3 h-auto ms-3 personal-image" />
      <div className="border p-3 text-me max-w-screen pt-50 ps-20 me-150 pb-50">
        <p className="max-w-screen text-sm md:text-base lg:text-lg pe-10">Game design in motion - solo projects and experiments by Brett Grentell.
        </p><br></br>
        <p className="max-w-screen text-sm md:text-base lg:text-lg pe-10">Currently studying game design & development.  Portfolio coming soon.
        </p><br></br>
        <p className="max-w-screen text-sm md:text-base lg:text-lg pe-10">Let’s build something great together.
        </p>
      </div>
    </div>
  );
}
