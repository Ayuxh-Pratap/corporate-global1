import Image from 'next/image';

export default function Home() {
  return (
    <div className="relative isolate">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-50 z-10" />
        <div className="relative h-[600px] overflow-hidden">
          <Image
            src="/images/hero/corporate-hero.webp"
            alt="Corporate Hero"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
            quality={90}
          />
          <div className="absolute inset-0 flex items-center justify-start px-8 md:px-16 z-20">
            <div className="max-w-xl text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Innovating for a Better Tomorrow
              </h1>
              <p className="text-lg md:text-xl mb-8">
                Delivering cutting-edge solutions that transform industries and improve lives across the globe.
              </p>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">Why Choose Us</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to succeed
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {[
                {
                  title: 'Innovation',
                  description: 'Leading the way in technological advancement with cutting-edge solutions.',
                },
                {
                  title: 'Sustainability',
                  description: 'Committed to environmental responsibility and sustainable practices.',
                },
                {
                  title: 'Excellence',
                  description: 'Delivering exceptional quality and service in everything we do.',
                },
              ].map((feature) => (
                <div key={feature.title} className="flex flex-col">
                  <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">{feature.title}</h3>
                  <p className="mt-4 flex-auto text-base leading-7 text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 