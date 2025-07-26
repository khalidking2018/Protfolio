import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Download,
  Mail,
  Github,
  Linkedin,
  Twitter,
  ArrowDown,
  Sparkles,
  Zap,
  Code,
  Palette,
} from "lucide-react";

const Hero = () => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect) {
      import("vanta/dist/vanta.dots.min.js").then((VANTA) => {
        setVantaEffect(
          VANTA.default.dots({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
            color: 0x3b82f6,
            color2: 0x8b5cf6,
            backgroundColor: 0x0a0a0a,
            size: 3.0,
            spacing: 35.0,
            showLines: false,
          })
        );
      });
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  const floatingVariants = {
    float: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
    float2: {
      y: [0, 15, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1,
      },
    },
    float3: {
      y: [0, -25, 0],
      transition: {
        duration: 3.5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 2,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  // Name animation variants for smooth slide-in from left
  const nameVariants = {
    hidden: {
      opacity: 0,
      x: -50,
      filter: "blur(5px)",
    },
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.3, // Reduced delay for better flow
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 1.8, // Delayed to appear after name animation
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
      },
    },
  };

  const socialVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
        delay: 2.2, // Delayed to appear after buttons
      },
    },
  };

  const socialItemVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
      },
    },
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <section
      ref={vantaRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900"
    >
      {/* Animated Background Elements */}
      <motion.div
        variants={floatingVariants}
        animate="float"
        className="absolute top-20 left-20 w-20 h-20 bg-blue-500/20 rounded-full blur-xl"
      />
      <motion.div
        variants={floatingVariants}
        animate="float2"
        className="absolute top-40 right-32 w-32 h-32 bg-purple-500/20 rounded-full blur-xl"
      />
      <motion.div
        variants={floatingVariants}
        animate="float3"
        className="absolute bottom-32 left-1/4 w-24 h-24 bg-pink-500/20 rounded-full blur-xl"
      />

      {/* Floating Icons */}
      <motion.div
        variants={floatingVariants}
        animate="float"
        className="absolute top-1/4 right-1/4 text-blue-400/30"
      >
        <Code size={48} />
      </motion.div>
      <motion.div
        variants={floatingVariants}
        animate="float2"
        className="absolute bottom-1/4 left-1/3 text-purple-400/30"
      >
        <Palette size={40} />
      </motion.div>
      <motion.div
        variants={floatingVariants}
        animate="float3"
        className="absolute top-1/3 left-1/2 text-pink-400/30"
      >
        <Zap size={36} />
      </motion.div>

      <div className="container-custom text-center relative z-10">
        <motion.div
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Greeting */}
          <motion.div
            variants={letterVariants}
            className="flex items-center justify-center gap-2 text-lg text-blue-300 mb-4"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              👋
            </motion.div>
            <span>Hello, I'm</span>
          </motion.div>

          {/* Name with Smooth Slide-in Animation */}
          <motion.h1
            variants={nameVariants}
            initial="hidden"
            animate="visible"
            className="text-6xl md:text-8xl font-bold text-white mb-4 perspective-3d"
          >
            <span className="inline-block transform-3d hover:rotate-y-12 transition-transform duration-500 text-shadow">
              Khalid
            </span>
            <br />
            <span className="inline-block transform-3d hover:rotate-y-12 transition-transform duration-500 text-shadow">
              Ahmad Raza
            </span>
          </motion.h1>

          {/* Title with Typing Effect */}
          <motion.div variants={letterVariants} className="relative">
            <h2 className="text-2xl md:text-4xl font-semibold text-blue-300 mb-2">
              I'm a{" "}
              <span className="gradient-text font-bold">
                Frontend Developer
              </span>
            </h2>
            <motion.div
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block w-1 h-8 bg-blue-400 ml-1"
            />
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={letterVariants}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Crafting beautiful, responsive, and user-friendly web experiences
            with modern technologies and creative design solutions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
          >
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              className="btn-primary flex items-center gap-2 group"
            >
              <Download size={20} className="group-hover:animate-bounce" />
              Download Resume
            </motion.button>

            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              className="btn-secondary flex items-center gap-2 group"
            >
              <Mail size={20} className="group-hover:animate-pulse" />
              Get In Touch
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={socialVariants}
            initial="hidden"
            animate="visible"
            className="flex justify-center gap-6 mt-12"
          >
            {[
              { icon: Github, href: "#", label: "GitHub" },
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              { icon: Twitter, href: "#", label: "Twitter" },
              { icon: Mail, href: "#", label: "Email" },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                variants={socialItemVariants}
                whileHover="hover"
                href={social.href}
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 border border-white/20"
                aria-label={social.label}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center text-white/60"
            >
              <span className="text-sm mb-2">Scroll Down</span>
              <ArrowDown size={24} />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Particle Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
