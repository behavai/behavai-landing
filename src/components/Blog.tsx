export default function Blog() {
  return (
    <section className="relative flex-1 flex items-center justify-center px-6 py-24 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#f4f4ff] via-[#efefff] to-[#e5e5f7]">
      {/* Blobs */}
      <div className="absolute w-[634px] h-[634px] bg-[#F7EDFF] rounded-full blur-[100px] opacity-50 top-[-200px] right-[50px] z-0 pointer-events-none floating-down-left"></div>
      <div className="absolute w-[634px] h-[634px] bg-[#545DBE] rounded-full blur-[100px] opacity-50 bottom-[-200px] right-[-200px] z-0 pointer-events-none floating-up-left"></div>
      <div className="absolute w-[634px] h-[634px] bg-[#525BBD] rounded-full blur-[100px] opacity-50 top-[-280px] left-[-317px] z-0 pointer-events-none floating-down-right"></div>
      <div className="absolute w-[634px] h-[634px] bg-white rounded-full blur-[100px] opacity-100 top-[219px] left-[376px] z-0 pointer-events-none floating-up-down"></div>

      {/* Frosted card */}
      <div className="relative bg-white/50 backdrop-blur-xl border border-white/40 rounded-3xl shadow-[inset_0_0_0.5px_rgba(255,255,255,0.4),_0_4px_30px_rgba(0,0,0,0.1)] px-12 py-16 max-w-5xl w-[80%] h-[80%] text-left text-gray-800 before:content-[''] before:absolute before:inset-0 before:rounded-3xl before:border before:border-white/10 before:shadow-[0_0_30px_rgba(255,255,255,0.2)] before:pointer-events-none overflow-hidden flex flex-col justify-start">
        <h1 className="text-4xl font-cooper text-gray-900 mb-10">Blogs</h1>
        <div className="space-y-4">
            <a
            href="https://technical.ly/startups/techstars-pittsburgh-startup-weekend-winners/"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-2xl font-inter font-semibold text-indigo-800 hover:underline"
            >
            BehavAI Wins at Tech Stars!
            </a>
            <p className="text-base font-inter text-gray-700">
            BehavAI wins first place at Techstars Pittsburgh for its AI platform that streamlines ABA therapy documentation to improve care quality.
            </p>
        </div>
      </div>


    </section>
  );
}
