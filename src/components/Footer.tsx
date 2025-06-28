import Image from 'next/image';

const supporters = [
  { src: '/assets/techstars.svg', alt: 'Techstars' },
  { src: '/assets/cmu.svg', alt: 'CMU Swartz' },
];

export default function Footer() {
  return (
    <footer className="bg-white pt-16">
      <div className="text-center">
        <h2 className="text-3xl font-semibold font-cooper mb-12">Supported by</h2>
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          {supporters.map(({ src, alt }) => (
            <div
              key={alt}
              className="bg-white rounded-xl p-6 w-52 h-24 flex items-center justify-center"
              style={{
                    boxShadow: '0px 20px 50px rgba(28, 40, 83, 0.16)',
                }}
            >
              <Image src={src} alt={alt} width={160} height={50} objectFit="contain" />
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[#F6F7FC] py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0 text-left">
            <h2 className="text-4xl mb-2 font-cooper">Coming Soon...</h2>
            <p className="text-gray-600 font-inter tracking-[-0.32px]">Stay tuned to be one of the first to try our product when we launch!</p>
            </div>
            <button className="bg-[#1C0942] text-white text-lg font-inter tracking-[-0.32px] py-3 px-8 rounded-full hover:scale-105 hover:bg-[#1f073e]">
            Join Waitlist
            </button>
        </div>
      </div>

    </footer>
  );
}
