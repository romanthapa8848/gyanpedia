import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative bg-black text-white py-16 text-center">
      <div className="container mx-auto">
        <Image 
          src="/gyanpedia-logo.svg" 
          alt="Gyanpedia Logo" 
          width={150} 
          height={50} 
          className="mx-auto"
        />
        <h1 className="text-4xl font-bold mt-4">Welcome to Gyanpedia</h1>
        <p className="text-gray-400 mt-2 text-lg">
          A digital encyclopedia powered by AI, making learning easier.
        </p>
        <div className="mt-6">
          <a
            href="#syllabus"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-medium"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}
