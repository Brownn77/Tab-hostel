import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
                alt="Hotel Lobby"
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative background box */}
            <div className="absolute -bottom-10 -right-10 w-full h-full bg-brand-cream -z-10 rounded-3xl" />
            
            <div className="absolute -top-10 -left-10 bg-brand-gold p-8 rounded-2xl text-white hidden md:block">
              <span className="text-4xl font-serif block mb-1">15+</span>
              <span className="text-[10px] uppercase tracking-widest font-bold">Years of Excellence</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-gold font-semibold tracking-widest uppercase text-sm mb-4 block">
              Our Story
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-dark mb-8 leading-tight">
              A Tradition of <br />
              <span className="italic">Northern Hospitality</span>
            </h2>
            <div className="space-y-6 text-gray-600 font-light leading-relaxed">
              <p>
                Tap Hotel has been a landmark of hospitality in Bolgatanga for over a decade. 
                We pride ourselves on providing a sanctuary for travelers who appreciate 
                the finer things in life while staying connected to the local culture.
              </p>
              <p>
                Our architecture reflects the strength and beauty of the Upper East Region, 
                while our interiors offer the modern luxury you expect from a world-class hotel. 
                Whether you're here for a conference or to explore the famous Bolga market and 
                Tongo Hills, we ensure your stay is unforgettable.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-brand-dark font-serif text-xl mb-2">Our Mission</h4>
                <p className="text-sm text-gray-500 font-light">To provide exceptional service that exceeds expectations.</p>
              </div>
              <div>
                <h4 className="text-brand-dark font-serif text-xl mb-2">Our Vision</h4>
                <p className="text-sm text-gray-500 font-light">To be the leading hospitality destination in Northern Ghana.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
