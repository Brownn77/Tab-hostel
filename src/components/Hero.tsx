import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1920&q=80"
          alt="Tap Hotel Exterior"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-center items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="text-brand-gold font-semibold tracking-[0.3em] uppercase mb-4 block">
            Welcome to Bolgatanga
          </span>
          <h1 className="text-5xl md:text-8xl font-serif text-white leading-tight mb-8">
            Refined Luxury <br />
            <span className="italic">in the North</span>
          </h1>
          <p className="text-white/80 text-lg md:text-xl mb-10 font-light leading-relaxed">
            Experience the perfect blend of traditional Ghanaian hospitality and modern comfort. 
            Your gateway to the Upper East Region starts here.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#rooms"
              className="bg-brand-gold text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all group"
            >
              EXPLORE ROOMS
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#about"
              className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all text-center"
            >
              OUR STORY
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-white/30 relative overflow-hidden">
          <motion.div
            animate={{ y: [-48, 48] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-full bg-brand-gold"
          />
        </div>
      </motion.div>
    </section>
  );
}
