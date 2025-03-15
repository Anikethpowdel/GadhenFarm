import { fadeInUp, staggerContainer } from "@/lib/animations";
import { motion } from "framer-motion";
import { Bot, LineChart, Smartphone, Wrench } from "lucide-react";

const valueProps = [
  {
    icon: <LineChart className="h-10 w-10" />,
    title: "Real-Time Monitoring",
    description: "Monitor your greenhouse conditions 24/7 with precision sensors and real-time alerts.",
    color: "#B1D931"
  },
  {
    icon: <Bot className="h-10 w-10" />,
    title: "AI-Driven Decision Support",
    description: "Optimize your crop yield with predictive analytics and AI-powered recommendations.",
    color: "#083932"
  },
  {
    icon: <Wrench className="h-10 w-10" />,
    title: "Predictive Maintenance",
    description: "Reduce downtime with proactive alerts and maintenance scheduling before issues occur.",
    color: "#5EB1BF"
  },
  {
    icon: <Smartphone className="h-10 w-10" />,
    title: "Remote Control",
    description: "Control your greenhouse environment from anywhere using our secure mobile application.",
    color: "#B1D931"
  }
];

export function ValueProposition() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#083932] mb-4">Transforming Greenhouse Management</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Our smart system brings cutting-edge technology to traditional farming practices.</p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {valueProps.map((prop, index) => (
            <motion.div 
              key={index}
              className="group bg-white rounded-xl shadow-md p-8 border-b-4 border-[#083932] transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              variants={fadeInUp}
              custom={index * 0.1}
            >
              <div className="mb-4 transition-all duration-300 group-hover:scale-110" style={{ color: prop.color }}>
                {prop.icon}
              </div>
              <h3 className="text-xl font-bold text-[#083932] mb-3">{prop.title}</h3>
              <p className="text-gray-600">{prop.description}</p>
              
              {/* Geometric accent */}
              <div className="absolute -bottom-2 -right-2 w-12 h-12 rounded-tr-xl opacity-10" style={{ backgroundColor: prop.color }}></div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Decorative elements */}
        <div className="mt-16 flex justify-center">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-[#B1D931]"></div>
            <div className="w-20 h-1 bg-[#083932] rounded-full"></div>
            <div className="w-3 h-3 rounded-full bg-[#B1D931]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}