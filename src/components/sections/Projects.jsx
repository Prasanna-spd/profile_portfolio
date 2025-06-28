import { RevealOnScroll } from "../RevealOnScroll";
import restauImg from "../../assets/restau.png";

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

                <ul className="mt-auto flex flex-wrap gap-2 text-sm">
                {["React","Next.js","Tailwind","Stripe","Zustand","Typescript"].map((tech,key)=>(
                  <li key={key} className="flex cursor-default rounded-lg bg-white p-1 font-semibold text-gray-200 transition-all duration-300 hover:bg-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700">{tech}</li>
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
            <div className="border border-white group relative h-72 w-full lg:w-3/5 overflow-x-hidden rounded-lg  p-5 leading-relaxed shadow-xl transition-all duration-300 odd:self-start even:self-end">
              <div className="flex h-full w-[80%] flex-col sm:w-[45%]">
                {/* Proj Desc */}
                <div className="text-xl font-semibold">Dominoza</div>
                <div className="font-normal">A Full Stack food ordering platform to list your foods and grow business and Great place for food savours to order and get it at their doorstep.</div>
              </div>

              {/* Proj image */}
              <img
                src={restauImg}
                alt="RestaurantImg"
                className=" border border-red-600   
                absolute -right-44 bottom-10 w-[18rem] rotate-3 rounded-lg shadow-2xl transition-all duration-300 transform group-hover:-translate-x-12 group-hover:translate-y-1 group-hover:rotate-0 sm:-right-40 sm:top-9 sm:w-[28rem]"
              />
            </div>
            <div className="border border-white group relative h-72 w-full lg:w-3/5 overflow-x-hidden rounded-lg  p-5 leading-relaxed shadow-xl transition-all duration-300 odd:self-start even:self-end">
              <div className="flex h-full w-[80%] flex-col sm:w-[45%]">
                {/* Proj Desc */}
                <div className="text-xl font-semibold">Dominoza</div>
                <div className="font-normal">A Full Stack food ordering platform to list your foods and grow business and Great place for food savours to order and get it at their doorstep.</div>
              </div>

              {/* Proj image */}
              <img
                src={restauImg}
                alt="RestaurantImg"
                className=" border border-red-600   
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
