import { RevealOnScroll } from "../RevealOnScroll";
import restauImg from "../../assets/restau.png"; 
import WebPageImg from "../../assets/webpage.png"; 
import chatapp from "../../assets/chatapp.png"; 
import vimage from "../../assets/vimage.png"; 
import { VscGithub } from "react-icons/vsc";
import { TbExternalLink } from "react-icons/tb";

export const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="w-full mx-auto px-4 mt-16 flex flex-col items-center gap-5">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"> Featured Projects</h2>
          <div className="flex w-full items-center flex-col  gap-12">
            <div className="group relative h-72 w-full lg:w-3/5 overflow-x-hidden rounded-lg  p-5 leading-relaxed shadow-xl transition-all duration-300 odd:self-start even:self-end border border-white/10 hover:border-white/30 hover:shadow-[0_2px_12px_rgba(255,255,255,0.2)] hover:scale-[1.02]">
              <div className="flex h-full w-[60%] flex-col sm:w-[45%]">
                {/* Proj Desc */}
                <div className="text-xl font-semibold">Dominoza</div>
                <div className="font-normal pt-2">A Full Stack food ordering platform to list your foods and grow business and Great place for food savours to order and get it at their doorstep.</div>
                <div className="flex space-x-4 p-3 opacity-0 transition-all ease-in duration-100 group-hover:opacity-100">
                  <a rel="stylesheet" href="https://github.com/Prasanna-spd/Dominoza">
                    <VscGithub className="text-4xl" />
                  </a>
                  <a rel="stylesheet" href="https://dominoza.vercel.app/">
                    <TbExternalLink className="text-4xl" />
                  </a>
                </div>
                <ul className="mt-auto flex flex-wrap gap-2 text-sm">
                  {["React", "Next.js", "Tailwind", "Stripe", "Zustand", "Typescript"].map((tech, key) => (
                    <li key={key} className="flex cursor-default rounded-lg bg-white p-1 font-semibold text-gray-200 transition-all duration-300 hover:bg-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Proj image */}
              <img
                src={restauImg}
                alt="RestaurantImg"
                className=" 
                absolute -right-44 bottom-10 w-[18rem] rotate-3 rounded-lg shadow-2xl transition-all duration-300 transform group-hover:-translate-x-12 group-hover:translate-y-1 group-hover:rotate-0 sm:-right-40 sm:top-9 sm:w-[28rem]"
              />
            </div>
            <div className="group relative h-72 w-full lg:w-3/5 overflow-x-hidden rounded-lg  p-5 leading-relaxed shadow-xl transition-all duration-300 odd:self-start even:self-end border border-white/10 hover:border-white/30 hover:shadow-[0_2px_12px_rgba(255,255,255,0.2)] hover:scale-[1.02]">
              <div className="flex h-full w-[60%] flex-col sm:w-[45%]">
                {/* Proj Desc */}
                <div className="text-xl font-semibold">Web Genie</div>
                <div className="font-normal pt-2">A AI powered website builder where u can built ur dream website . Choose from a wide varity of templates and go live.</div>
                <div className="flex space-x-4 p-3 opacity-0 transition-all ease-in duration-100 group-hover:opacity-100">
                  <a rel="stylesheet" href="https://github.com/Prasanna-spd/WebGenie">
                    <VscGithub className="text-4xl" />
                  </a>
                  <a rel="stylesheet" href="https://web-genie-six.vercel.app/">
                    <TbExternalLink className="text-4xl" />
                  </a>
                </div>
                <ul className="mt-auto flex flex-wrap gap-2 text-sm">
                  {["React", "Next.js", "LLMs", "AI", "Typescript"].map((tech, key) => (
                    <li key={key} className="flex cursor-default rounded-lg bg-white p-1 font-semibold text-gray-200 transition-all duration-300 hover:bg-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Proj image */}
              <img
                src={WebPageImg}
                alt="WebPageImg"
                className=" 
                absolute -right-44 bottom-10 w-[18rem] rotate-3 rounded-lg shadow-2xl transition-all duration-300 transform group-hover:-translate-x-12 group-hover:translate-y-1 group-hover:rotate-0 sm:-right-40 sm:top-9 sm:w-[28rem]"
              />
            </div>
            <div className="group relative h-72 w-full lg:w-3/5 overflow-x-hidden rounded-lg  p-5 leading-relaxed shadow-xl transition-all duration-300 odd:self-start even:self-end border border-white/10 hover:border-white/30 hover:shadow-[0_2px_12px_rgba(255,255,255,0.2)] hover:scale-[1.02]">
              <div className="flex h-full w-[60%] flex-col sm:w-[45%]">
                {/* Proj Desc */}
                <div className="text-xl font-semibold">What&apos;s Up</div>
                <div className="font-normal pt-2">A Real-Time messaging platform where u can connect with ur friends and start talking. A complete solution for your communication.</div>
                <div className="flex space-x-4 p-3 opacity-0 transition-all ease-in duration-100 group-hover:opacity-100">
                  <a rel="stylesheet" href="https://github.com/Prasanna-spd/mern-chat-app">
                    <VscGithub className="text-4xl" />
                  </a>
                  <a rel="stylesheet" href="https://mern-chat-app-8owr.onrender.com/">
                    <TbExternalLink className="text-4xl" />
                  </a>
                </div>
                <ul className="mt-auto flex flex-wrap gap-2 text-sm">
                  {["React", "Node.js", "MongoDB", "Socket.io", "Redux", "Typescript"].map((tech, key) => (
                    <li key={key} className="flex cursor-default rounded-lg bg-white p-1 font-semibold text-gray-200 transition-all duration-300 hover:bg-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Proj image */}
              <img
                src={chatapp}
                alt="RestaurantImg"
                className=" 
                absolute -right-44 bottom-10 w-[18rem] rotate-3 rounded-lg shadow-2xl transition-all duration-300 transform group-hover:-translate-x-12 group-hover:translate-y-1 group-hover:rotate-0 sm:-right-40 sm:top-9 sm:w-[28rem]"
              />
            </div>
            <div className="group relative h-72 w-full lg:w-3/5 overflow-x-hidden rounded-lg  p-5 leading-relaxed shadow-xl transition-all duration-300 odd:self-start even:self-end border border-white/10 hover:border-white/30 hover:shadow-[0_2px_12px_rgba(255,255,255,0.2)] hover:scale-[1.02]">
              <div className="flex h-full w-[60%] flex-col sm:w-[45%]">
                {/* Proj Desc */}
                <div className="text-xl font-semibold">VImage Solutions</div>
                <div className="font-normal pt-2">An AI powered post generator for instagram, twitter, etc and video compressor which uses Cloudinary&apos;s inbuilt optimisations.</div>
                <div className="flex space-x-4 p-3 opacity-0 transition-all ease-in duration-100 group-hover:opacity-100">
                  <a rel="stylesheet" href="https://github.com/Prasanna-spd/Vimage-solutions">
                    <VscGithub className="text-4xl" />
                  </a>
                  <a rel="stylesheet" href="https://vimage-solutions.vercel.app/home">
                    <TbExternalLink className="text-4xl" />
                  </a>
                </div>
                <ul className="mt-auto flex flex-wrap gap-2 text-sm">
                  {["React", "Next.js", "NeonDB", "AI", "Cloudinary", "Postgresql"].map((tech, key) => (
                    <li key={key} className="flex cursor-default rounded-lg bg-white p-1 font-semibold text-gray-200 transition-all duration-300 hover:bg-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Proj image */}
              <img
                src={vimage}
                alt="RestaurantImg"
                className=" 
                absolute -right-44 bottom-10 w-[18rem] rotate-3 rounded-lg shadow-2xl transition-all duration-300 transform group-hover:-translate-x-12 group-hover:translate-y-1 group-hover:rotate-0 sm:-right-40 sm:top-9 sm:w-[28rem]"
              />
            </div>
            
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

{
  /* <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
<h3 className="text-xl font-bold mb-2"> Cloud Platform</h3>
<p className="text-gray-400 mb-4">
  Scalable cloud infrastructure management with real-time
  monitoring and automated scaling.
</p>
<div className="flex flex-wrap gap-2 mb-4">
  {["React", "Node.js", "AWS", "Docker"].map((tech, key) => (
    <span
      key={key}
      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
      "
    >
      {tech}
    </span>
  ))}
</div>

<div className="flex justify-between items-center">
  <a
    href="#"
    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
  >
    View Project →
  </a>
</div>
</div>
<div
className="
glass p-6 rounded-xl border border-white/10 
hover:-translate-y-1 hover:border-blue-500/30
hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
transition-all
"
>
<h3 className="text-xl font-bold mb-2">AI Analytics Dashboard</h3>
<p className="text-gray-400 mb-4">
  ML-powered data visualization platform with predictive analytics
  and interactive reports.
</p>
<div className="flex flex-wrap gap-2 mb-4">
  {["Python", "TensorFlow", "D3.js", "Flask"].map((tech, key) => (
    <span
      key={key}
      className="
        bg-blue-500/10 text-blue-500 py-1 px-3 
        rounded-full text-sm
        transition
        hover:bg-blue-500/20 hover:-translate-y-0.5
        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
      "
    >
      {tech}
    </span>
  ))}
</div>
<div className="flex justify-between items-center">
  <a
    href="#"
    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
  >
    View Project →
  </a>
</div>
</div>

<div
className="
glass p-6 rounded-xl border border-white/10 
hover:-translate-y-1 hover:border-blue-500/30
hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
transition-all
"
>
<h3 className="text-xl font-bold mb-2">E-Commerce Web App</h3>
<p className="text-gray-400 mb-4">
  Full-stack e-commerce with modern UI, secure payment
  integration, and customizable product inventory.
</p>
<div className="flex flex-wrap gap-2 mb-4">
  {["Next.js", "TypeScript", "Stripe", "PostgreSQL"].map(
    (tech) => (
      <span
        key={tech}
        className="
        bg-blue-500/10 text-blue-500 py-1 px-3 
        rounded-full text-sm
        transition
        hover:bg-blue-500/20 hover:-translate-y-0.5
        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
      "
      >
        {tech}
      </span>
    )
  )}
</div>
<div className="flex justify-between items-center">
  <a
    href="#"
    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
  >
    View Project →
  </a>
</div>
</div>

<div
className="
glass p-6 rounded-xl border border-white/10 
hover:-translate-y-1 hover:border-blue-500/30
hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
transition-all
"
>
<h3 className="text-xl font-bold mb-2">Real-Time Chat App</h3>
<p className="text-gray-400 mb-4">
  Scalable chat platform supporting real-time messaging, presence,
  and group chat features.
</p>
<div className="flex flex-wrap gap-2 mb-4">
  {["Socket.IO", "Express", "React", "Redis"].map((tech, key) => (
    <span
      key={key}
      className="
        bg-blue-500/10 text-blue-500 py-1 px-3 
        rounded-full text-sm
        transition
        hover:bg-blue-500/20 hover:-translate-y-0.5
        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
      "
    >
      {tech}
    </span>
  ))}
</div>
<div className="flex justify-between items-center ">
  <a
    href="#"
    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
  >
    View Project →
  </a>
</div>
</div> */
}
