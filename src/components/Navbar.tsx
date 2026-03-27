import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/src/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Rooms", href: "#rooms" },
    { name: "Amenities", href: "#amenities" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <span className={cn(
            "text-2xl font-serif font-bold tracking-tighter",
            isScrolled ? "text-brand-dark" : "text-white"
          )}>
            TAP HOTEL
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium uppercase tracking-widest hover:text-brand-gold transition-colors",
                isScrolled ? "text-brand-dark" : "text-white"
              )}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#booking"
            className="bg-brand-gold text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-opacity-90 transition-all"
          >
            BOOK NOW
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? "text-brand-dark" : "text-white"} />
          ) : (
            <Menu className={isScrolled ? "text-brand-dark" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-brand-dark text-lg font-serif border-b border-gray-100 pb-2"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#booking"
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-brand-gold text-white text-center py-3 rounded-lg font-bold"
            >
              BOOK NOW
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
