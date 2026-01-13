import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">A1 Gardening Services</h3>
            <p className="text-green-200">
              Professional gardening services across Northumberland and surrounding areas.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#services" className="text-green-200 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-green-200 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="text-green-200 hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-green-200 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-green-200">
              <li>📞 07366 472856</li>
              <li>✉️ chris@a1g.co.uk</li>
              <li>📍 44 Cedar Grove, Alnwick</li>
              <li>🕐 Open 24 hours</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="space-y-2">
              <a
                href="https://www.facebook.com/A1GardeingServices/?locale=en_GB"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-green-200 hover:text-white transition-colors"
              >
                <span>📘</span>
                Facebook
              </a>
              <a
                href="https://www.google.com/search?q=A1+Gardening+Services+Alnwick"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-green-200 hover:text-white transition-colors"
              >
                <span>⭐</span>
                Google Reviews
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-green-800 mt-8 pt-8 text-center text-green-200">
          <p>&copy; 2024 A1 Gardening Services. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Serving Northumberland: Alnwick, Morpeth, Berwick-upon-Tweed, and surrounding areas
          </p>
        </div>
      </div>
    </footer>
  );
}
