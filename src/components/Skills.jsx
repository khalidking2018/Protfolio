import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import {
  Code,
  Palette,
  Database,
  Smartphone,
  Globe,
  Zap,
  GitBranch,
  Shield,
  Cpu,
  Cloud,
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend Development",
      icon: Palette,
      skills: [
        { name: "React", level: 90, color: "#61DAFB" },
        { name: "TypeScript", level: 85, color: "#3178C6" },
        { name: "JavaScript", level: 95, color: "#F7DF1E" },
        { name: "HTML/CSS", level: 90, color: "#E34F26" },
        { name: "Tailwind CSS", level: 88, color: "#06B6D4" },
        { name: "Next.js", level: 80, color: "#000000" },
      ],
    },
    {
      category: "Backend Development",
      icon: Code,
      skills: [
        { name: "Node.js", level: 85, color: "#339933" },
        { name: "Express.js", level: 80, color: "#000000" },
        { name: "Python", level: 75, color: "#3776AB" },
        { name: "MongoDB", level: 70, color: "#47A248" },
        { name: "PostgreSQL", level: 65, color: "#336791" },
        { name: "Firebase", level: 75, color: "#FFCA28" },
      ],
    },
    {
      category: "Mobile Development",
      icon: Smartphone,
      skills: [
        { name: "React Native", level: 80, color: "#61DAFB" },
        { name: "Expo", level: 75, color: "#000020" },
        { name: "Flutter", level: 60, color: "#02569B" },
        { name: "iOS Development", level: 65, color: "#000000" },
        { name: "Android Development", level: 60, color: "#3DDC84" },
      ],
    },
    {
      category: "Tools & Technologies",
      icon: Zap,
      skills: [
        { name: "Git", level: 90, color: "#F05032" },
        { name: "Docker", level: 70, color: "#2496ED" },
        { name: "AWS", level: 65, color: "#FF9900" },
        { name: "Figma", level: 75, color: "#F24E1E" },
        { name: "Webpack", level: 70, color: "#8DD6F9" },
        { name: "Jest", level: 80, color: "#C21325" },
      ],
    },
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section
      id="skills"
      className="section-padding bg-gray-50 dark:bg-dark-800"
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My technical skills and proficiency levels across various
            technologies and tools
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              variants={itemVariants}
              className="group"
            >
              <Tilt
                tiltMaxAngleX={5}
                tiltMaxAngleY={5}
                perspective={1000}
                glareEnable={true}
                glareMaxOpacity={0.2}
                glareColor="lightblue"
                glarePosition="bottom"
                glareBorderRadius="20px"
                scale={1.02}
                transitionSpeed={2000}
                className="h-full"
              >
                <div className="skill-card h-full p-6 group-hover:shadow-2xl transition-all duration-500">
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/30 dark:to-primary-800/30 rounded-xl flex items-center justify-center">
                      <category.icon
                        size={24}
                        className="text-primary-600 dark:text-primary-400"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {category.category}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: categoryIndex * 0.1 + skillIndex * 0.05,
                        }}
                        viewport={{ once: true }}
                        className="group/skill"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            {skill.name}
                          </span>
                          <span className="text-sm font-bold text-primary-600 dark:text-primary-400">
                            {skill.level}%
                          </span>
                        </div>

                        {/* Progress Bar */}
                        <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{
                              duration: 1,
                              delay:
                                categoryIndex * 0.1 + skillIndex * 0.05 + 0.5,
                              ease: "easeOut",
                            }}
                            viewport={{ once: true }}
                            className="h-full rounded-full relative overflow-hidden"
                            style={{ backgroundColor: skill.color }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                          </motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            Additional <span className="gradient-text">Skills</span>
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { name: "Redux", icon: GitBranch },
              { name: "GraphQL", icon: Globe },
              { name: "Testing", icon: Shield },
              { name: "Performance", icon: Zap },
              { name: "CI/CD", icon: Cloud },
              { name: "Architecture", icon: Cpu },
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="skill-card text-center p-4"
              >
                <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/20 dark:to-primary-800/20 rounded-xl flex items-center justify-center">
                  <skill.icon
                    size={24}
                    className="text-primary-600 dark:text-primary-400"
                  />
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
