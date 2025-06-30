"use client";
type FooterProps = {
  setActiveTab: (tab: string) => void;
};

export default function Footer({ setActiveTab }: FooterProps) {
  return (
    <footer className="bg-[#F6F7FC] py-7">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0 text-left">
          <h2 className="text-4xl mb-2 font-cooper">Coming Soon...</h2>
          <p className="text-gray-600 font-inter tracking-[-0.32px]">
            Stay tuned to be one of the first to try our product when we launch!
          </p>
        </div>
        <button
          onClick={() => setActiveTab("Contact")}
          className="bg-[#1C0942] text-white text-lg font-inter tracking-[-0.32px] py-3 px-8 rounded-full hover:scale-105 hover:bg-[#1f073e]"
        >
          Join Waitlist
        </button>
      </div>
    </footer>
  );
}
