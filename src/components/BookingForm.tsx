import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "motion/react";
import { Calendar, Users, Home, CheckCircle2 } from "lucide-react";
import { useState } from "react";

const bookingSchema = z.object({
  checkIn: z.string().min(1, "Check-in date is required"),
  checkOut: z.string().min(1, "Check-out date is required"),
  guests: z.string().min(1, "Number of guests is required"),
  roomType: z.string().min(1, "Please select a room type"),
  name: z.string().min(2, "Full name is required"),
  email: z.string().email("Invalid email address"),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

export default function BookingForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
  });

  const onSubmit = (data: BookingFormValues) => {
    console.log("Booking data:", data);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section id="booking" className="py-24 bg-brand-dark text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white/5 backdrop-blur-lg p-12 rounded-3xl border border-white/10"
          >
            <CheckCircle2 className="w-20 h-20 text-brand-gold mx-auto mb-6" />
            <h2 className="text-4xl font-serif mb-4">Request Received!</h2>
            <p className="text-white/60 mb-8">
              Thank you for choosing Tap Hotel. Our reservation team will contact you shortly 
              to confirm your booking details.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="text-brand-gold font-bold underline underline-offset-8"
            >
              Make another request
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="py-24 bg-brand-dark text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/10 blur-[100px] rounded-full -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-gold/5 blur-[100px] rounded-full -ml-48 -mb-48" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-brand-gold font-semibold tracking-widest uppercase text-sm mb-4 block">
              Reservations
            </span>
            <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">
              Book your stay <br />
              <span className="italic text-brand-gold">with us today</span>
            </h2>
            <p className="text-white/60 text-lg font-light leading-relaxed mb-8">
              Planning a visit to Bolgatanga? Secure your room now and enjoy our 
              premium hospitality. For urgent bookings, call us directly at 
              <span className="text-white font-medium ml-2">+233 24 123 4567</span>.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                  <CheckCircle2 className="w-6 h-6 text-brand-gold" />
                </div>
                <span className="text-white/80">Instant confirmation for online requests</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                  <CheckCircle2 className="w-6 h-6 text-brand-gold" />
                </div>
                <span className="text-white/80">No hidden charges or booking fees</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl text-brand-dark">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Check-In</label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="date"
                      {...register("checkIn")}
                      className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-brand-gold/20 focus:border-brand-gold outline-none transition-all"
                    />
                  </div>
                  {errors.checkIn && <p className="text-red-500 text-[10px] mt-1">{errors.checkIn.message}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Check-Out</label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="date"
                      {...register("checkOut")}
                      className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-brand-gold/20 focus:border-brand-gold outline-none transition-all"
                    />
                  </div>
                  {errors.checkOut && <p className="text-red-500 text-[10px] mt-1">{errors.checkOut.message}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Guests</label>
                  <div className="relative">
                    <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <select
                      {...register("guests")}
                      className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-brand-gold/20 focus:border-brand-gold outline-none transition-all appearance-none"
                    >
                      <option value="">Select guests</option>
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4+ Guests</option>
                    </select>
                  </div>
                  {errors.guests && <p className="text-red-500 text-[10px] mt-1">{errors.guests.message}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Room Type</label>
                  <div className="relative">
                    <Home className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <select
                      {...register("roomType")}
                      className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-brand-gold/20 focus:border-brand-gold outline-none transition-all appearance-none"
                    >
                      <option value="">Select room</option>
                      <option value="standard">Standard Room</option>
                      <option value="deluxe">Deluxe Room</option>
                      <option value="executive">Executive Suite</option>
                    </select>
                  </div>
                  {errors.roomType && <p className="text-red-500 text-[10px] mt-1">{errors.roomType.message}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  {...register("name")}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-brand-gold/20 focus:border-brand-gold outline-none transition-all"
                />
                {errors.name && <p className="text-red-500 text-[10px] mt-1">{errors.name.message}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Email Address</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  {...register("email")}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-brand-gold/20 focus:border-brand-gold outline-none transition-all"
                />
                {errors.email && <p className="text-red-500 text-[10px] mt-1">{errors.email.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full bg-brand-gold text-white py-4 rounded-xl font-bold tracking-widest hover:bg-opacity-90 transition-all shadow-lg shadow-brand-gold/20"
              >
                REQUEST BOOKING
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
