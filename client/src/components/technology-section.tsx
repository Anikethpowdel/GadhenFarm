import { fadeInLeft, fadeInRight } from "@/lib/animations";
import { motion } from "framer-motion";
import {
  Brain,
  Cog,
  Database,
  Globe,
  HardDrive,
  Microchip, Satellite,
  Smartphone
} from "lucide-react";

const hardwareComponents = [
  {
    icon: <Microchip className="text-white" />,
    title: " Microcontrollers",
    description: "Dual-core processors with built-in Wi-Fi and Bluetooth connectivity."
  },
  {
    icon: <Satellite className="text-white" />,
    title: "Sensor Arrays",
    description: "Precision environmental monitors for temperature, humidity, soil conditions, and more."
  },
  {
    icon: <Cog className="text-white" />,
    title: "Actuator Systems",
    description: "Motors, pumps, and relays to control irrigation, ventilation, and other greenhouse systems."
  },
  {
    icon: <HardDrive className="text-white" />,
    title: "Edge Computing",
    description: "Raspberry Pi gateway for local data processing and system management."
  }
];

const softwareFramework = [
  {
    icon: <Smartphone className="text-white" />,
    title: "Mobile Application",
    description: "React Native cross-platform app for Android and iOS with real-time monitoring and control."
  },
  {
    icon: <Globe className="text-white" />,
    title: "Web Dashboard",
    description: "Next.js web application with advanced analytics and administration features."
  },
  {
    icon: <Database className="text-white" />,
    title: "Cloud Infrastructure",
    description: "Scalable MongoDB database and Docker containerization for reliability and performance."
  },
  {
    icon: <Brain className="text-white" />,
    title: "AI Engine",
    description: "Machine learning models for predictive analytics and optimization algorithms."
  }
];

export function TechnologySection() {
  return (
    <section id="technology" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary font-inter mb-4">Our Technology</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Cutting-edge IoT architecture designed for reliability and performance.</p>
        </div>

        
             
             
                
               
        {/* Hardware & Software Integration */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div 
            className="bg-white rounded-xl shadow-lg overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInLeft}
          >
            <div className="p-8">
              <h3 className="text-2xl font-bold text-primary font-inter mb-6">Hardware Components</h3>
              <ul className="space-y-4">
                {hardwareComponents.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">{item.title}</h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-white rounded-xl shadow-lg overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInRight}
          >
            <div className="p-8">
              <h3 className="text-2xl font-bold text-primary font-inter mb-6">Software Framework</h3>
              <ul className="space-y-4">
                {softwareFramework.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-10 h-10 bg-coolBlue rounded-full flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">{item.title}</h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}