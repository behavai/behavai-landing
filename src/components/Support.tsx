import Image from 'next/image';

const supporters = [
  { src: '/assets/techstars.svg', alt: 'Techstars' },
  { src: '/assets/cmu.svg', alt: 'CMU Swartz' },
];

export function Support() {
  return (
    <section className="bg-white pt-16">
      <div className="text-center">
        <h2 className="text-3xl font-semibold font-cooper mb-12">Supported by</h2>
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          {supporters.map(({ src, alt }) => (
            <div
              key={alt}
              className="bg-white rounded-xl p-6 w-52 h-24 flex items-center justify-center"
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
