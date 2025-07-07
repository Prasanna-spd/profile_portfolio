import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const Skills = ["Typescript", "Javascript", "C++", "C", "React.js", "TailwindCSS", "Next.js", "Recoil", "Node.js", "Express", "Hono", "Prisma", "MongoDB", "Postgresql", "Git", "Bash", "AWS", "Docker", "DSA", "& More"];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"> Your Ideas | My Skills</h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">Passionate developer with expertise in building scalable web applications and creating innovative solutions.</p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-6">
              {Skills.map((tech, key) => (
                <span key={key} className="flex items-center justify-center px-5 py-3 text-base md:text-lg font-semibold rounded-xl border border-blue-500/30 bg-blue-500/10 text-blue-500 shadow-sm hover:bg-blue-500/20 hover:shadow-md transition-all duration-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
