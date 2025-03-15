import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { ChevronRight, Leaf, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "wouter";

const navLinks = [
  { name: "Home", href: "#", isActive: true },
  { name: "About", href: "#about", isActive: false },
  { name: "Services", href: "#services", isActive: false },
  { name: "Technology", href: "#technology", isActive: false },
  { name: "Case Studies", href: "#case-studies", isActive: false },
  { name: "Blog", href: "#blog", isActive: false }
];

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("#");
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, staggerChildren: 0.1 }
    });
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      
      // Update active section based on scroll position
      const sections = document.querySelectorAll("section[id]");
      const scrollY = window.pageYOffset;
      
      sections.forEach(section => {
        const sectionId = "#" + section.getAttribute("id");
        const sectionEl = section as HTMLElement;
        const sectionHeight = sectionEl.offsetHeight;
        const sectionTop = sectionEl.offsetTop - 100;
        
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveLink(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <div 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#083932] shadow-xl shadow-[#083932]/20' 
          : 'bg-[#083932]/80 backdrop-blur-lg'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Link href="/" className="flex items-center group">
              <div className="w-10 h-10 rounded-full bg-[#B1D931] flex items-center justify-center overflow-hidden relative tech-glow group-hover:scale-110 transition-transform duration-300">
                <Leaf className="text-[#083932] h-5 w-5 z-10 group-hover:rotate-12 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
              </div>
              <span className="ml-3 text-xl font-bold text-white font-inter group-hover:text-[#B1D931] transition-colors duration-300">GadenFarm</span>
            </Link>
          </motion.div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link, i) => (
              <motion.a 
                key={i}
                href={link.href} 
                className={`relative py-2 ${
                  activeLink === link.href ? 'text-[#B1D931]' : 'text-white'
                } hover:text-[#B1D931] font-medium transition-colors overflow-hidden group`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
              >
                {link.name}
                {/* Animated underline on hover */}
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-[#B1D931] group-hover:w-full transition-all duration-300 ${activeLink === link.href ? 'w-full' : ''}`}></span>
              </motion.a>
            ))}
          </nav>
          
          <div className="flex items-center space-x-4">
            {/* CTA Button */}
            <motion.a 
              href="#booking" 
              className="hidden md:block bg-[#B1D931] hover:bg-[#B1D931]/90 text-[#083932] font-bold py-2 px-6 rounded-lg shadow-md transition-all relative overflow-hidden group"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span className="relative z-10 flex items-center">
                Get Started <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <span className="absolute inset-0 w-full transform -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-in-out"></span>
            </motion.a>
            
            {/* Mobile Menu Button */}
            <motion.button 
              type="button" 
              className="md:hidden text-white hover:text-[#B1D931] focus:outline-none transition-colors duration-300" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </motion.button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              className="md:hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#083932]/95 rounded-b-lg border-t border-[#B1D931]/20 backdrop-blur-lg">
                {navLinks.map((link, i) => (
                  <motion.a 
                    key={i}
                    href={link.href} 
                    className={`flex items-center px-3 py-2 rounded-md text-base font-medium ${
                      activeLink === link.href 
                        ? 'text-[#B1D931] bg-[#0A4B42]' 
                        : 'text-white hover:bg-[#0A4B42]/50 hover:text-[#B1D931]'
                    } transition-all duration-200 space-x-2`}
                    onClick={() => setMobileMenuOpen(false)}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i }}
                  >
                    <span>{link.name}</span>
                    {activeLink === link.href && <ChevronRight className="h-4 w-4" />}
                  </motion.a>
                ))}
                <motion.a 
                  href="#booking" 
                  className="block px-3 py-2 rounded-md text-base font-medium bg-[#B1D931] text-[#083932] group relative overflow-hidden"
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <span className="relative z-10 flex items-center">
                    Get Started <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <span className="absolute inset-0 w-full transform -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-in-out"></span>
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}