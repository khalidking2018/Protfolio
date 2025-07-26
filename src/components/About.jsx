import { motion } from "framer-motion";
import { Code, Palette, Smartphone, Globe, GitBranch, Zap } from "lucide-react";
// Import profile image
import profileImage from "../assets/pic.jpg";

const About = () => {
  const technologies = [
    { name: "HTML", category: "Markup", icon: Code },
    { name: "CSS", category: "Styling", icon: Palette },
    { name: "JavaScript", category: "Language", icon: Code },
    { name: "React.js", category: "Framework", icon: Code },
    { name: "Tailwind CSS", category: "Styling", icon: Palette },
    { name: "Bootstrap", category: "Framework", icon: Palette },
    { name: "GitHub", category: "Version Control", icon: GitBranch },
    { name: "Vercel", category: "Deployment", icon: Zap },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 100 }, // Start from right
    visible: {
      opacity: 1,
      x: 0, // Slide to center
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-dark-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get to know me better and discover what drives my passion for web
            development
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-80 h-80 mx-auto">
              {/* Profile Image */}
              <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={profileImage}
                  alt="Khalid Ahmad Raza"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold shadow-lg"
              >
                <Code size={24} />
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-400 rounded-full flex items-center justify-center text-white font-bold shadow-lg"
              >
                <Palette size={20} />
              </motion.div>
            </div>
          </motion.div>

          {/* Bio Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Aspiring Frontend Developer & Tech Enthusiast
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                I'm a passionate and enthusiastic fresher with a strong
                foundation in web development technologies. I love creating
                beautiful, responsive, and user-friendly web applications using
                modern frameworks and tools. My journey in web development
                started with curiosity and has evolved into a deep passion for
                crafting digital experiences.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm constantly learning and exploring new technologies, always
                eager to expand my skills and knowledge. I believe in writing
                clean, maintainable code and staying up-to-date with the latest
                industry trends. I'm excited to contribute to meaningful
                projects and grow as a developer while making a positive impact
                in the tech community.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Technologies Auto Slider */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mt-20"
        >
          <motion.h3
            variants={itemVariants}
            className="text-3xl font-bold text-center mb-12"
          >
            Technologies I <span className="gradient-text">Work With</span>
          </motion.h3>

          {/* Auto Slider Container */}
          <div className="relative overflow-hidden">
            <div className="flex animate-slide">
              {/* First set of technologies */}
              {technologies.map((tech, index) => (
                <div
                  key={`first-${tech.name}`}
                  className="flex-shrink-0 w-48 mx-4"
                >
                  <div className="skill-card text-center group">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/20 dark:to-primary-800/20 rounded-xl flex items-center justify-center group-hover:shadow-lg transition-all duration-300">
                      <tech.icon
                        size={32}
                        className="text-primary-600 dark:text-primary-400"
                      />
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {tech.name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {tech.category}
                    </p>
                  </div>
                </div>
              ))}

              {/* Duplicate set for seamless loop */}
              {technologies.map((tech, index) => (
                <div
                  key={`second-${tech.name}`}
                  className="flex-shrink-0 w-48 mx-4"
                >
                  <div className="skill-card text-center group">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/20 dark:to-primary-800/20 rounded-xl flex items-center justify-center group-hover:shadow-lg transition-all duration-300">
                      <tech.icon
                        size={32}
                        className="text-primary-600 dark:text-primary-400"
                      />
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {tech.name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {tech.category}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
