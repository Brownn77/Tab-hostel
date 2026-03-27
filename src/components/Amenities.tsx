import { motion } from "motion/react";
import { Utensils, Beer, Users, Waves, ShieldCheck, WashingMachine } from "lucide-react";

const amenities = [
  { name: "Fine Dining", icon: Utensils, desc: "Authentic local and continental dishes." },
  { name: "Lounge Bar", icon: Beer, desc: "Relax with our selection of premium drinks." },
  { name: "Conferences", icon: Users, desc: "Modern facilities for your business meetings." },
  { name: "Swimming Pool", icon: Waves, desc: "A refreshing oasis in the Bolga sun." },
  { name: "Security", icon: ShieldCheck, desc: "24/7 professional security for your peace of mind." },
  { name: "Laundry", icon: WashingMachine, desc: "Professional cleaning services for our guests." },
];

export default function Amenities() {
  return (
    <section id="amenities" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-xl">
            <span className="text-brand-gold font-semibold tracking-widest uppercase text-sm mb-4 block">
              Our Services
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-dark">
              Everything you need for a <span className="italic">perfect stay</span>
            </h2>
          </div>
          <p className="text-gray-500 font-light max-w-sm">
            Beyond comfortable rooms, we offer a range of facilities designed to make your 
            visit to Bolgatanga productive and enjoyable.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {amenities.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="mb-6 inline-block p-4 bg-brand-cream rounded-2xl group-hover:bg-brand-gold group-hover:text-white transition-all duration-300">
                <item.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-serif text-brand-dark mb-2">{item.name}</h3>
              <p className="text-gray-500 text-sm font-light leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
