import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Moving Banner */}
      <div className="bg-green-800 text-white py-2 overflow-hidden">
        <div className="flex animate-scroll whitespace-nowrap">
          <div className="flex items-center space-x-8 px-4">
            <span className="flex items-center gap-2">
              <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
              <span className="font-semibold">5.0 Google Rating</span>
            </span>
            <span className="flex items-center gap-2">
              <span>📞</span>
              <span>Call: 07366 472856</span>
            </span>
            <span className="flex items-center gap-2">
              <span>✉️</span>
              <span>chris@a1g.co.uk</span>
            </span>
            <span className="flex items-center gap-2">
              <span>🕐</span>
              <span>Open 24 Hours</span>
            </span>
            <span className="flex items-center gap-2">
              <span>📍</span>
              <span>Serving Northumberland</span>
            </span>
            <span className="flex items-center gap-2">
              <span>✅</span>
              <span>Fully Insured</span>
            </span>
            <span className="flex items-center gap-2">
              <span>🏆</span>
              <span>Professional Service</span>
            </span>
            <span className="flex items-center gap-2">
              <span>💚</span>
              <span>Free Quotes Available</span>
            </span>
          </div>
          {/* Duplicate for seamless loop */}
          <div className="flex items-center space-x-8 px-4">
            <span className="flex items-center gap-2">
              <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
              <span className="font-semibold">5.0 Google Rating</span>
            </span>
            <span className="flex items-center gap-2">
              <span>📞</span>
              <span>Call: 07366 472856</span>
            </span>
            <span className="flex items-center gap-2">
              <span>✉️</span>
              <span>chris@a1g.co.uk</span>
            </span>
            <span className="flex items-center gap-2">
              <span>🕐</span>
              <span>Open 24 Hours</span>
            </span>
            <span className="flex items-center gap-2">
              <span>📍</span>
              <span>Serving Northumberland</span>
            </span>
            <span className="flex items-center gap-2">
              <span>✅</span>
              <span>Fully Insured</span>
            </span>
            <span className="flex items-center gap-2">
              <span>🏆</span>
              <span>Professional Service</span>
            </span>
            <span className="flex items-center gap-2">
              <span>💚</span>
              <span>Free Quotes Available</span>
            </span>
          </div>
        </div>
      </div>
      
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-green-100 py-20 px-4 min-h-screen flex items-end pb-32">
        {/* Background Logo */}
        <div className="absolute inset-0 opacity-10 z-0">
          <Image
            src="/main_logo.svg"
            alt="A1 Gardening Services"
            fill
            className="object-contain"
            priority
          />
        </div>
        
        {/* Content Overlay */}
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-green-900 mb-4 leading-tight">
            Professional Gardening Services
          </h1>
          <p className="text-xl text-green-700 mb-16 max-w-2xl mx-auto leading-relaxed">
            Expert lawn mowing, hedge trimming, and general gardening services across Northumberland
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-green-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-700 transition-colors"
            >
              Get Free Quote
            </a>
            <a
              href="tel:07366472856"
              className="bg-white text-green-600 border-2 border-green-600 px-8 py-4 rounded-full font-semibold hover:bg-green-50 transition-colors"
            >
              Call: 07366 472856
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-green-900 mb-12">
            Our Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mb-4 aspect-w-16 aspect-h-12">
                <Image
                  src="/photos/mow_lawn.webp"
                  alt="Lawn Mowing"
                  width={400}
                  height={300}
                  className="rounded-lg mx-auto w-full h-64 object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-2">Lawn Mowing</h3>
              <p className="text-gray-600">
                Professional lawn care to keep your grass healthy and perfectly manicured
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 aspect-w-16 aspect-h-12">
                <Image
                  src="/photos/trim_hedge.webp"
                  alt="Hedge Trimming"
                  width={400}
                  height={300}
                  className="rounded-lg mx-auto w-full h-64 object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-2">Hedge Trimming</h3>
              <p className="text-gray-600">
                Expert hedge shaping and maintenance for a neat, tidy appearance
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 aspect-w-16 aspect-h-12">
                <Image
                  src="/photos/gardener.webp"
                  alt="General Gardening"
                  width={400}
                  height={300}
                  className="rounded-lg mx-auto w-full h-64 object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-2">General Gardening</h3>
              <p className="text-gray-600">
                Complete garden maintenance including weeding, planting, and cleanup
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-6">
                About A1 Gardening Services
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Based in Alnwick, Northumberland, we provide professional gardening services 
                to homeowners and businesses throughout the region. With years of experience 
                and a commitment to quality, we take pride in transforming outdoor spaces.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">Fully insured and qualified</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">Reliable and punctual service</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">Competitive pricing</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">Free, no-obligation quotes</span>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/photos/stock_images/AdobeStock_369082214.jpeg"
                alt="Beautiful Garden"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 px-4 bg-green-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-8">
            What Our Customers Say
          </h2>
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
            <div className="flex justify-center mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-2xl">★</span>
                ))}
              </div>
            </div>
            <p className="text-lg text-gray-700 mb-6">
              "Excellent service! Very professional and did a fantastic job on our garden. 
              Would definitely recommend to anyone looking for a reliable gardener."
            </p>
            <div className="text-sm text-gray-600">
              <p className="font-semibold">Happy Customer</p>
              <p>Verified Google Review</p>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-center gap-4">
                <span className="text-lg font-semibold text-green-900">5.0</span>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-xl">★</span>
                  ))}
                </div>
                <span className="text-gray-600">(7 Google Reviews)</span>
              </div>
              <a
                href="https://www.google.com/search?q=A1+Gardening+Services+Alnwick"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-green-600 hover:text-green-700 font-medium"
              >
                Read all reviews →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-green-900 mb-12">
            Get Your Free Quote
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-green-800 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-semibold">📞</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Phone</p>
                    <a href="tel:07366472856" className="text-green-600 hover:text-green-700">
                      07366 472856
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-semibold">✉️</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <a href="mailto:chris@a1g.co.uk" className="text-green-600 hover:text-green-700">
                      chris@a1g.co.uk
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-semibold">📍</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Address</p>
                    <p className="text-gray-600">44 Cedar Grove, Alnwick, England NE66 1DX</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-semibold">🕐</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Business Hours</p>
                    <p className="text-gray-600">Open 24 hours</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <a
                  href="https://www.facebook.com/A1GardeingServices/?locale=en_GB"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium"
                >
                  <span>📘</span>
                  Visit our Facebook page
                </a>
              </div>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
