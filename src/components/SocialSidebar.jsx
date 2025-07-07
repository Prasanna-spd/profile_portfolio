import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from "react-icons/fa";

export const SocialSidebar = () => {
  return (
   
      <div className="fixed top-1/3 right-2 space-y-4 p-1 md:space-y-6 md:p-2 md:right-7 z-50 opacity-90 md:opacity-100 scale-90 md:scale-100 flex flex-col items-center bg-gray-900 border border-white/50 rounded-2xl hover:border-white/30 hover:shadow-[0_2px_12px_rgba(255,255,255,0.2)] hover:scale-[1.02] border-glow">
        <a href="https://github.com/Prasanna-spd" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
          <FaGithub size={40} />
        </a>
        <a href="https://linkedin.com/in/sarada-prasanna-dash-aa217822a" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
          <FaLinkedin size={40} />
        </a>
        <a href="mailto:dashsharada@gmail.com" className="text-white hover:text-red-400">
          <FaEnvelope size={40} />
        </a>
        <a href="https://drive.google.com/drive/folders/1J6wD2kF5HqGCNtntYuMhq6Naw59tkQVb?usp=drive_link" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-400">
          <FaFileAlt size={40} />
        </a>
      </div>
   
  );
};






{/* <div className="relative w-64 h-64 flex items-center justify-center bg-black text-white animate-border-glow"> */}























