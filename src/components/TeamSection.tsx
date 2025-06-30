import { FaLinkedin, FaGithub, FaGlobe } from 'react-icons/fa';

export default function TeamSection() {
  return (
    <section className="relative flex-1 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#f4f4ff] via-[#efefff] to-[#e5e5f7] flex items-center justify-center px-6 py-24">
            {/* Blobs */}
      <div className="absolute w-[634px] h-[634px] bg-[#F7EDFF] rounded-full blur-[100px] opacity-50 top-[-200px] right-[50px] z-0 pointer-events-none floating-down-left"></div>
      <div className="absolute w-[634px] h-[634px] bg-[#545DBE] rounded-full blur-[100px] opacity-50 bottom-[-200px] right-[-200px] z-0 pointer-events-none floating-up-left"></div>
      <div className="absolute w-[634px] h-[634px] bg-[#525BBD] rounded-full blur-[100px] opacity-50 top-[-280px] left-[-317px] z-0 pointer-events-none floating-down-right"></div>
      <div className="absolute w-[634px] h-[634px] bg-white rounded-full blur-[100px] opacity-100 top-[219px] left-[376px] z-0 pointer-events-none floating-up-down"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl w-full">
        {/* Team Member 1 */}
        <div className="relative bg-white/20 backdrop-blur-xl border border-white/40 rounded-3xl shadow-[inset_0_0_0.5px_rgba(255,255,255,0.4),_0_4px_30px_rgba(0,0,0,0.1)] p-8 text-gray-800 flex flex-row gap-6 hover:scale-[1.02] transition-transform duration-300 before:content-[''] before:absolute before:inset-0 before:rounded-3xl before:border before:border-white/10 before:shadow-[0_0_30px_rgba(255,255,255,0.2)] before:pointer-events-none overflow-hidden">
          <div className="w-40 h-52 bg-gray-300 rounded-xl flex-shrink-0"></div>
          <div className="flex flex-col justify-center relative z-10">
            <h2 className="text-xl font-semibold text-gray-900">Lana Farkas</h2>
            <p className="text-sm text-gray-500 mt-1">Co-Founder & CEO</p>
            <p className="mt-4 text-sm text-gray-700">
              Jane builds the system backbone. She's obsessed with clean code, developer tooling, and pixel-perfect execution.
            </p>
            <div className="mt-4 flex gap-4 text-indigo-600 text-lg">
              <a href="#" aria-label="LinkedIn" className="hover:text-indigo-800"><FaLinkedin /></a>
              <a href="#" aria-label="GitHub" className="hover:text-indigo-800"><FaGithub /></a>
            </div>
          </div>
        </div>

        {/* Team Member 2 */}
        <div className="relative bg-white/20 backdrop-blur-xl border border-white/40 rounded-3xl shadow-[inset_0_0_0.5px_rgba(255,255,255,0.4),_0_4px_30px_rgba(0,0,0,0.1)] p-8 text-gray-800 flex flex-row gap-6 hover:scale-[1.02] transition-transform duration-300 before:content-[''] before:absolute before:inset-0 before:rounded-3xl before:border before:border-white/10 before:shadow-[0_0_30px_rgba(255,255,255,0.2)] before:pointer-events-none overflow-hidden">
          <div className="w-40 h-52 bg-gray-300 rounded-xl flex-shrink-0"></div>
          <div className="flex flex-col justify-center relative z-10">
            <h2 className="text-xl font-semibold text-gray-900">Grisha Bandodkar</h2>
            <p className="text-sm text-gray-500 mt-1">Co-Founder & CTO</p>
            <p className="mt-4 text-sm text-gray-700">
              John leads the visual direction. He ensures every product feels intuitive, modern, and unmistakably yours.
            </p>
            <div className="mt-4 flex gap-4 text-indigo-600 text-lg">
              <a href="#" aria-label="LinkedIn" className="hover:text-indigo-800"><FaLinkedin /></a>
              <a href="#" aria-label="Portfolio" className="hover:text-indigo-800"><FaGlobe /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
