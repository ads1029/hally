import Image from "next/image";
import Navigation from "./components/Navigation";

const photos = [
  { src: "/placeholder1.jpg", width: 1200, height: 800 },
  { src: "/placeholder2.jpg", width: 800, height: 1200 },
  { src: "/placeholder3.jpg", width: 1600, height: 900 },
  { src: "/placeholder4.jpg", width: 900, height: 1600 },
  { src: "/placeholder5.jpg", width: 1200, height: 800 },
  { src: "/placeholder6.jpg", width: 800, height: 1200 },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Navigation />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Jane Doe Photography</h1>
        
        <section className="mb-16 max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6 text-center">About Me</h2>
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 md:p-8">
            <p className="text-lg mb-4 leading-relaxed">
              Hello! I&apos;m 🐔🍐, a passionate photographer with over a decade of experience capturing life&apos;s beautiful moments. My journey in photography began with a simple point-and-shoot camera and has evolved into a lifelong pursuit of visual storytelling.
            </p>
            <p className="text-lg mb-4 leading-relaxed">
              I specialize in landscape, portrait, and street photography, always seeking to reveal the extraordinary in the ordinary. My work has been featured in national magazines and exhibitions, but my greatest joy comes from sharing the world&apos;s beauty through my lens with you.
            </p>
            <p className="text-lg leading-relaxed">
              Whether I&apos;m trekking through remote wilderness or exploring bustling city streets, I&apos;m always in search of that perfect shot that tells a compelling story. I invite you to explore my portfolio and see the world through my eyes.
            </p>
          </div>
        </section>

        <h2 className="text-3xl font-semibold mb-8 text-center">Featured Works</h2>
        <div className="space-y-24">
          {photos.map((photo, index) => (
            <div key={index} className={`flex justify-${index % 2 === 0 ? 'start' : 'end'}`}>
              <div className={`relative w-full md:w-2/3 ${photo.height > photo.width ? 'h-[32rem]' : 'h-96'} overflow-hidden rounded-lg shadow-lg`}>
                <Image
                  src={photo.src}
                  alt={`Gallery photo ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 66vw"
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
