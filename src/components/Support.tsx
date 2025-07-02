import Image from 'next/image';

const supporters = [
  { src: '/assets/techstars.svg', alt: 'Techstars' },
  { src: '/assets/cmu.svg', alt: 'CMU Swartz' },
];

export function Support() {
  return (
    <section className="pt-10">
      <div className="text-center">
        <h2 className="text-3xl font-semibold font-cooper mb-5">Supported by</h2>
        <div className="flex flex-wrap justify-center gap-16">
          {supporters.map(({ src, alt }) => (
            <div
              key={alt}
              className="bg-white rounded-xl w-[13rem] h-[5rem] flex items-center justify-center"
              style={{ boxShadow: '0px 20px 50px rgba(28, 40, 83, 0.16)' }}
            >
              <Image src={src} alt={alt} width={160} height={50} objectFit="contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
