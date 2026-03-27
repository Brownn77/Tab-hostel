import { motion } from "motion/react";
import { ROOM_TYPES } from "@/src/constants";
import { Wifi, Wind, Tv, Coffee, Utensils, Waves } from "lucide-react";

export default function Rooms() {
  return (
    <section id="rooms" className="py-24 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-brand-dark mb-4">
            Luxurious Accommodations
          </h2>
          <div className="w-24 h-[1px] bg-brand-gold mx-auto mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto font-light">
            Each of our rooms is designed with your comfort in mind, featuring elegant decor 
            and modern amenities to ensure a restful stay.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ROOM_TYPES.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white group overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-brand-dark text-white px-4 py-2 text-sm font-bold">
                  GHS {room.price} / night
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-serif text-brand-dark mb-3">{room.name}</h3>
                <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                  {room.description}
                </p>
                
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-1 text-xs text-gray-400">
                    <Wifi className="w-3 h-3" /> Wi-Fi
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-400">
                    <Wind className="w-3 h-3" /> AC
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-400">
                    <Tv className="w-3 h-3" /> TV
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-400">
                    <Coffee className="w-3 h-3" /> Breakfast
                  </div>
                </div>
                
                <button className="w-full border border-brand-dark py-3 text-sm font-bold tracking-widest hover:bg-brand-dark hover:text-white transition-all">
                  VIEW DETAILS
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
