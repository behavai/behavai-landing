'use client'

import Image from 'next/image'

interface DemoCardProps {
  index: number
  header: string
  body: string
  image: string // image path
}

export default function DemoCard({ index, header, body, image }: DemoCardProps) {
  return (
    <div className="flex rounded-[24px] shadow-2xl bg-white h-[600px] overflow-hidden w-full">
      {/* Left Column */}
      <div className="flex flex-col w-2/5 px-16 py-12 justify-between">
        <div className="h-1/3">
          <p className="text-xl font-semibold">{index.toString().padStart(2, '0')}</p>
        </div>
        <div className="h-2/3 flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-4">{header}</h2>
          <p className="text-gray-600 text-lg">{body}</p>
        </div>
      </div>

      {/* Right Column */}
      <div className="relative w-3/5">
        <div className="absolute -top-6 -right-6 w-full h-full">
          <Image
            src={image}
            alt="UI Screenshot"
            layout="fill"
            objectFit="contain"
            className="rounded-[20px]"
          />
        </div>
      </div>
    </div>
  )
}
