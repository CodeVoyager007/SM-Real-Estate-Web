import Link from 'next/link';
import Image from 'next/image';

const properties = [
  {
    name: "H&S Residence",
    location: "DHA Phase 8, Karachi",
    price: "PKR 35,000,000",
    description: "H&S Residence is a luxury waterfront apartment complex offering a serene living experience along the Arabian Sea in Karachi. Designed by the renowned architecture firm Nikken Sekkei, this complex combines modern living with breathtaking sea views. The development includes a variety of apartment sizes, from 1 to 5-bedroom units, and top-tier amenities such as a gym, pools, and a business lounge.",
    images: ["/H&S.jpg"],
    keyFeatures: [
      "Luxury waterfront living",
      "Apartments ranging from 1 to 5 bedrooms",
      "Designed by Nikken Sekkei",
      "Close proximity to the beach and commercial areas"
    ],
    link: "mailto:shiraz.mughal@hotmail.com",
  },
  {
    name: "HMR Waterfront",
    location: "DHA Phase 8, Karachi",
    price: "PKR 40,000,000",
    description: "HMR Waterfront Project is a modern, luxurious gated community situated on the edge of the Great Arabian Sea. It features fourteen high-rise residential towers equipped with state-of-the-art amenities, including secure gated entry, landscaped green spaces, and a beach clubhouse.",
    images: ["/hmr.jpg"],
    keyFeatures: [
      "14 high-rise residential towers",
      "Beachfront location",
      "High-end amenities (gym, clubhouse, security)"
    ],
    link: "mailto:shiraz.mughal@hotmail.com",
  },
  {
    name: "North Town Residency",
    location: "North Karachi",
    price: "PKR 2,000,000",
    description: "NTR offers residential plots in a prime location in North Karachi. These 80 to 120 square yards plots are available on a 5-year installment plan, making it an attractive investment for potential homeowners and investors.",
    images: ["/NTR.jpg"],
    keyFeatures: [
      "5-year installment plan",
      "80-120 sq. yard plots",
      "Prime location in North Karachi"
    ],
    link: "mailto:shiraz.mughal@hotmail.com",
  },
  {
    name: "Roomi Boulevard",
    location: "Gulshan-e-Osman, Karachi",
    price: "PKR 1,976,000",
    description: "Roomi Boulevard is a premium residential project offering 2 to 4-bedroom apartments with modern designs and facilities. The apartments feature American kitchens, built-in wardrobes, wooden flooring, and false ceilings.",
    images: ["/RM.jpg"],
    keyFeatures: [
      "Variety of apartments (2-4 bedrooms)",
      "Modern amenities including a gym, daycare, and business lounge",
      "Ideal location in Gulshan-e-Osman Housing Society"
    ],
    link: "mailto:shiraz.mughal@hotmail.com",
  },
  {
    name: "Saima Business Center",
    location: "Clifton Block 7, Karachi",
    price: "PKR 13,900,000",
    description: "Saima Business Center offers premium office spaces ideal for businesses looking to establish themselves in one of Karachi’s most commercialized areas.",
    images: ["/SBC.jpg"],
    keyFeatures: [
      "Premium office spaces",
      "Modern infrastructure",
      "Located in the heart of Karachi's commercial hub"
    ],
    link: "mailto:shiraz.mughal@hotmail.com",
  },
];

const PropertiesPage = () => {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-4xl font-bold text-center mb-10 text-white">Properties for Sale</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6">
        {properties.map((property) => (
          <div
            key={property.name}
            className="bg-white hover:bg-gray-100 transition-all duration-300 ease-in-out transform hover:scale-105 rounded-lg overflow-hidden shadow-lg border-4 border-black"
          >
            <div className="relative h-56">
              <Image
                src={property.images[0]}
                alt={property.name}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold text-black">{property.name}</h2>
              <p className="text-lg text-teal-500">{property.location}</p>
              <p className="text-lg text-black mt-2">Price: {property.price}</p>
              <p className="text-sm text-gray-600 mt-2">{property.description}</p>
              <ul className="text-sm text-gray-600 mt-2">
                {property.keyFeatures.map((feature, index) => (
                  <li key={index}>- {feature}</li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center p-4">
              <Link
                href={property.link}
                className="px-6 py-2 bg-gradient-to-r from-blue-500 to-green-500 text-black rounded-lg font-semibold hover:bg-opacity-90 transition"
              >
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>
      {/* Testimonials Section */}
      <section className="px-8 py-12 bg-black">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">𝖶𝗁𝖺𝗍 𝖮𝗎𝗿 𝖢𝗅𝗂𝖾𝗇𝗍𝗌 𝖲𝖺𝗒</h2>
        <div className="max-w-4xl mx-auto grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <blockquote className="bg-white text-black p-6 rounded-lg shadow-lg">
            <p>&quot;SM Marketing helped me find my dream home with ease and professionalism. I couldn&apos;t be happier!&quot;</p>
            <footer className="mt-4 text-neonBlue">— Ahmed Madni,  GFS</footer>
          </blockquote>
          <blockquote className="bg-white text-black p-6 rounded-lg shadow-lg">
            <p>&quot;Their team was incredibly supportive throughout the buying process. Highly recommend!&quot;</p>
            <footer className="mt-4 text-neonBlue">— Haneef,  GFS</footer>
          </blockquote>
          <blockquote className="bg-white text-black p-6 rounded-lg shadow-lg">
            <p>&quot;SM Marketing provided exceptional service in helping me find a flat in North Town Residency. A smooth experience!&quot;</p>
            <footer className="mt-4 text-neonBlue">— Mudasir, North Town Residency</footer>
          </blockquote>
        </div>
      </section>
    </div>
  );
};

export default PropertiesPage;
