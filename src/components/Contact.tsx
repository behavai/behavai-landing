import GoogleFormEmbed from "@/components/GoogleFormEmbed"; // make sure this path is correct

export default function Contact() {
  return (
    <section className="relative flex-1 flex items-center justify-center px-6 py-24 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#f4f4ff] via-[#efefff] to-[#e5e5f7]">
      {/* Blobs */}
      <div className="absolute w-[634px] h-[634px] bg-[#F7EDFF] rounded-full blur-[100px] opacity-50 top-[-200px] right-[50px] z-0 pointer-events-none floating-down-left"></div>
      <div className="absolute w-[634px] h-[634px] bg-[#545DBE] rounded-full blur-[100px] opacity-50 bottom-[-200px] right-[-200px] z-0 pointer-events-none floating-up-left"></div>
      <div className="absolute w-[634px] h-[634px] bg-[#525BBD] rounded-full blur-[100px] opacity-50 top-[-280px] left-[-317px] z-0 pointer-events-none floating-down-right"></div>
      <div className="absolute w-[634px] h-[634px] bg-white rounded-full blur-[100px] opacity-100 top-[219px] left-[376px] z-0 pointer-events-none floating-up-down"></div>

      {/* Frosted card with embedded form */}
      <div className="relative z-10 w-full max-w-4xl bg-white/30 backdrop-blur-xl p-6 rounded-3xl shadow-xl">
        <div className="w-full h-[80vh]">
          <GoogleFormEmbed />
        </div>
      </div>
    </section>
  );
}
