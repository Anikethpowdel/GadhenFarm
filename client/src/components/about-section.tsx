import { fadeInLeft, fadeInRight, fadeInUp, staggerContainer } from "@/lib/animations";
import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";

const teamMembers = [
  {
    name: "Suzal Wakhley",
    title: "Head of Design and Development and Co-Founder",
    image: "/images/assets/team/Suzal.png"
  },
  {
    name: "Aniketh Powdel",
    title: "CTO & Co-Founder",
    image: "/images/assets/team/Aniketh.png"
  },
  {
    name: "Sherab Choejur Dorji",
    title: "CEO & Co-Founder",
    image: "/images/assets/team/Sherab.png"
  },
  {
    name: "Nima Tamang",
    title: "IOT Specialist and Co-Founder",
    image: "/images/assets/team/Nima.png"
  },
  {
    name: "Tenzin Pelden",
    title: "Finance Specialist",
    image: "/images/assets/team/Tenzin.png"
  }
  ,
  {
    name: "Tshering Kibu",    
    title: "Marketing Specialist and founder of Urban Farm ",
    image: "/images/assets/team/Kibu.png"
  }           
 
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap -mx-4">
          <motion.div 
            className="w-full lg:w-1/2 px-4 mb-10 lg:mb-0"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary font-inter mb-6">Our Story & Vision</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              GreenSense was born from a vision to address the unique challenges faced by Bhutanese farmers. Traditional greenhouse farming in Bhutan is labor-intensive and often struggles with unpredictable climate conditions, limited resources, and inconsistent yields.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our team of agricultural engineers and technology specialists set out to create a solution that would empower local farmers with the latest in IoT and AI technologies, specially adapted for the Bhutanese context.
            </p>
            <div className="p-6 bg-lightBlue rounded-lg border-l-4 border-coolBlue">
              <h3 className="text-xl font-bold text-primary font-inter mb-2">Our Mission</h3>
              <p className="text-gray-700">
                To empower Bhutanese farmers with accessible, sustainable technology that increases crop yields, reduces resource waste, and creates climate-resilient agricultural systems.
              </p>
            </div>
          </motion.div>
          <motion.div 
            className="w-full lg:w-1/2 px-4"
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-60"></div>
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <h3 className="text-2xl font-bold font-inter mb-2">Sustainable Agriculture</h3>
                <p>Creating resilient farming systems for Bhutan's future</p>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Team Section */}
        <div className="mt-20">
          <h3 className="text-2xl md:text-3xl font-bold text-primary font-inter mb-10 text-center">Our Team & Partners</h3>
          <motion.div 
            className="flex space-x-8 overflow-x-auto pb-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index}
                className="min-w-[250px] bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                variants={fadeInUp}
                custom={index * 0.1}
              >
                <div className="h-60 overflow-hidden">
                  <img 
                    src={member.image}
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 text-center">
                  <h4 className="text-lg font-bold text-primary font-inter">{member.name}</h4>
                  <p className="text-gray-600 text-sm">{member.title}</p>
                  <div className="mt-3 flex justify-center space-x-3">
                    <a href="#" className="text-coolBlue hover:text-primary transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a href="#" className="text-coolBlue hover:text-primary transition-colors">
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}