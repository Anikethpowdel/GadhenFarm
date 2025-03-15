import { motion, useAnimation, Variants } from "framer-motion";
import { ArrowRight, Droplets, Leaf, Zap } from "lucide-react";
import { useEffect } from "react";

// Basic animation variants
const fadeInUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom, duration: 0.6 }
  })
};

const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    transition: { delay: custom, duration: 0.6 }
  })
};

// Container and letter variants for letter-by-letter animation
const textContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05 }
  }
};

const letterVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.05 }
  }
};

// Utility function to split text into letters
const renderLetters = (text: string) =>
  text.split("").map((char, index) => (
    <motion.span key={index} variants={letterVariants}>
      {char === " " ? "\u00A0" : char}
    </motion.span>
  ));

export function HeroSection() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    });
  }, [controls]);

  const headingText = "The Future of Farming";
  const subheadingText = "For Bhutanese Agriculture";

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background Color with Gradient */}
      <div className="absolute inset-0 w-full h-full -z-10 bg-gradient-to-br from-[#083932] via-[#072f29] to-[#0a443b]"></div>

      {/* Tech Patterns */}
      <div className="absolute inset-0 w-full h-full -z-5 opacity-20">
        <div className="absolute top-20 right-20 w-72 h-72 rounded-full border-2 border-[#B1D931] rotate-slow"></div>
        <div className="absolute top-40 right-40 w-96 h-96 rounded-full border border-[#B1D931] rotate-medium"></div>
        <div className="absolute bottom-40 left-40 w-64 h-64 rounded-full border border-[#B1D931] rotate-slow"></div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-[#B1D931]/5 rounded-full float-slow"></div>
        <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-[#B1D931]/5 rounded-full float-medium"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-[#B1D931]/5 rounded-full float-slow"></div>

        {/* Animated dots */}
        <div className="hidden lg:block">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-[#B1D931] rounded-full pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`
              }}
            ></div>
          ))}
        </div>

        {/* Grid lines */}
        <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 h-full">
          {[...Array(7)].map((_, i) => (
            <div key={i} className="border-l border-[#B1D931]/10 h-full"></div>
          ))}
        </div>
        <div className="absolute inset-0 grid grid-rows-2 md:grid-rows-4 lg:grid-rows-6 w-full">
          {[...Array(7)].map((_, i) => (
            <div key={i} className="border-t border-[#B1D931]/10 w-full"></div>
          ))}
        </div>
      </div>

      {/* Futuristic Graphics */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#083932] to-transparent z-10"></div>
        <div className="absolute top-20 right-20 w-72 h-72 rounded-full border border-[#B1D931]/20 opacity-30"></div>
        <div className="absolute top-40 right-40 w-96 h-96 rounded-full border border-[#B1D931]/10 opacity-20"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 rounded-full border border-[#B1D931]/30 opacity-25"></div>
      </div>

      {/* Animated Tech Grid */}
      <div className="absolute inset-0 grid-scan"></div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <motion.div
          className="md:max-w-3xl lg:max-w-4xl"
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          custom={0.3}
        >
          <motion.span
            className="inline-block px-4 py-1 mb-6 text-xs font-semibold tracking-wider text-[#083932] bg-[#B1D931] rounded-full uppercase"
            variants={fadeInUpVariants}
            custom={0.1}
          >
            Smart Greenhouse Technology
          </motion.span>

          <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight font-inter mb-6 tracking-tight">
            <motion.div
              variants={textContainerVariants}
              initial="hidden"
              animate="visible"
              className="inline-block"
            >
              {renderLetters(headingText)}
            </motion.div>
            <br />
            <motion.div
              variants={textContainerVariants}
              initial="hidden"
              animate="visible"
              className="inline-block"
            >
              {renderLetters(subheadingText)}
            </motion.div>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl"
            variants={fadeInUpVariants}
            custom={0.3}
          >
            Advanced IoT and AI technology delivering precise climate control,
            real-time data analytics, and optimal growth conditions.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6"
            variants={fadeInUpVariants}
            custom={0.4}
          >
            <a
              href="#features"
              className="group relative overflow-hidden btn-primary text-center"
            >
              <span className="relative z-10 flex items-center justify-center">
                Explore Solutions{" "}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <span className="absolute inset-0 w-full transform -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-in-out"></span>
            </a>
            <a
              href="#booking"
              className="group relative overflow-hidden btn-secondary text-center"
            >
              <span className="relative z-10">Get Started</span>
              <span className="absolute inset-0 w-full transform -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 ease-in-out"></span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Tech Accents */}
      <div className="absolute bottom-10 right-10 flex gap-3">
        <div className="tech-accent w-20 h-1 glow-effect"></div>
        <div className="tech-accent w-10 h-1 bg-white"></div>
        <div className="tech-accent w-5 h-1"></div>
      </div>

      {/* Animated Feature Icons */}
      <div className="hidden md:block">
        <motion.div
          className="absolute top-1/4 right-20 bg-[#083932]/80 p-4 rounded-lg border border-[#B1D931]/30 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <Zap className="text-[#B1D931] h-8 w-8 float-medium" />
          <p className="text-white text-sm mt-2">Smart Energy</p>
        </motion.div>

        <motion.div
          className="absolute top-1/2 right-40 bg-[#083932]/80 p-4 rounded-lg border border-[#B1D931]/30 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <Leaf className="text-[#B1D931] h-8 w-8 float-slow" />
          <p className="text-white text-sm mt-2">Eco System</p>
        </motion.div>

        <motion.div
          className="absolute bottom-1/4 right-60 bg-[#083932]/80 p-4 rounded-lg border border-[#B1D931]/30 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
        >
          <Droplets className="text-[#B1D931] h-8 w-8 float-medium" />
          <p className="text-white text-sm mt-2">Water Control</p>
        </motion.div>
      </div>
    </section>
  );
}