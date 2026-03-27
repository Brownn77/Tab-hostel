import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-brand-dark text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
          <div className="col-span-1 lg:col-span-1">
            <h2 className="text-3xl font-serif mb-6 tracking-tighter">TAP HOTEL</h2>
            <p className="text-white/50 font-light leading-relaxed mb-8">
              Experience the best of Northern Ghana hospitality. Luxury, comfort, and culture 
              all in one place.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-gold transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-gold transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-gold transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-8">Quick Links</h3>
            <ul className="space-y-4 text-white/60 font-light">
              <li><a href="#home" className="hover:text-brand-gold transition-colors">Home</a></li>
              <li><a href="#rooms" className="hover:text-brand-gold transition-colors">Rooms & Suites</a></li>
              <li><a href="#amenities" className="hover:text-brand-gold transition-colors">Amenities</a></li>
              <li><a href="#about" className="hover:text-brand-gold transition-colors">About Us</a></li>
              <li><a href="#booking" className="hover:text-brand-gold transition-colors">Reservations</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-8">Contact Us</h3>
            <ul className="space-y-6 text-white/60 font-light">
              <li className="flex gap-4">
                <MapPin className="w-5 h-5 text-brand-gold shrink-0" />
                <span>Bolgatanga, Upper East Region, Ghana</span>
              </li>
              <li className="flex gap-4">
                <Phone className="w-5 h-5 text-brand-gold shrink-0" />
                <span>+233 24 123 4567</span>
              </li>
              <li className="flex gap-4">
                <Mail className="w-5 h-5 text-brand-gold shrink-0" />
                <span>info@taphotelbolga.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-8">Newsletter</h3>
            <p className="text-white/50 text-sm mb-6">Subscribe to get special offers and updates.</p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm outline-none focus:border-brand-gold transition-colors w-full"
              />
              <button className="bg-brand-gold px-4 py-2 rounded-lg text-sm font-bold">JOIN</button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-white/30 text-xs uppercase tracking-widest">
          <p>© 2026 TAP HOTEL BOLGATANGA. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
