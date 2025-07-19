import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Award,
  Users,
  Target,
  Lightbulb,
  Heart,
  Star,
  CheckCircle,
  ArrowRight,
  Building,
  Home,
  Palette,
  Compass,
} from "lucide-react";
import GlareHover from "../UI/GlareHover";

const About = () => {
  const [refHero, inViewHero] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [refFounder, inViewFounder] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [refStats, inViewStats] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [refBackground, inViewBackground] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [refTeam, inViewTeam] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const stats = [
    { number: "100+", label: "Projects Completed", icon: Building },
    // { number: "11", label: "Years of Experience", icon: Award },
    { number: "100+", label: "Happy Clients", icon: Users },
    { number: "8", label: "Years of Excellence", icon: Star },
  ];

  const teamMembers = [
    {
      name: "Sarah doe",
      role: "Founder & Creative Director",
      image:
        "https://images.pexels.com/photos/4467687/pexels-photo-4467687.jpeg",
      experience: "15+ years",
      expertise: "Luxury Residential Design & Creative Direction",
      description:
        "Sarah founded Studio Maanikh with a vision to create timeless, sophisticated spaces that reflect individual personalities.",
    },
    {
      name: "Michael Chen",
      role: "Senior Interior Designer",
      image:
        "https://images.pexels.com/photos/450214/pexels-photo-450214.jpeg",
      experience: "12+ years",
      expertise: "Sustainable Design & Modern Aesthetics",
      description:
        "Michael specializes in creating environmentally conscious designs that blend functionality with contemporary style.",
    },
    {
      name: "Emma Rodriguez",
      role: "Project Manager & Design Coordinator",
      image:
        "https://images.pexels.com/photos/3894377/pexels-photo-3894377.jpeg",
      experience: "8+ years",
      expertise: "Project Management & Client Relations",
      description:
        "Emma ensures seamless project execution from concept to completion, maintaining the highest standards of quality.",
    },
  ];

  return (
    <section id="about" className="bg-white dark:bg-slate-800">
      {/* Hero Section */}
      <div
        ref={refHero}
        className="relative h-[30vh] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <motion.div
          initial="hidden"
          animate={inViewHero ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white max-w-4xl mx-auto px-4"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={inViewHero ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-5xl md:text-6xl font-bold mb-6"
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inViewHero ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl font-light"
          >
            interior Designer Company based in Indore
          </motion.p>
        </motion.div>
      </div>

      {/* Founder Section */}
      <div ref={refFounder} className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            animate={inViewFounder ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-black  dark:text-yellow-400 mb-8">
                Nikhil Kachawa
              </h2>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-primary-800 dark:text-primary-200 mb-2">
                  Designer & VISUALIZER | FOUNDER
                </h3>
              </div>
              <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  Hello, I’m Nikhil Kachawa, the founder and creative mind
                  behind Studio Maanikh. My journey into interior design started
                  with a simple curiosity—how spaces can influence moods and
                  memories. From a young age, I was fascinated by how textures,
                  light, and colors can transform a room. That passion led me to
                  study interior design formally and gain hands-on experience
                  with some of the most talented designers in the industry
                  before starting my own studio.
                </p>
                <p>
                  With Studio Maanikh, my goal has always been to create spaces
                  that not only look beautiful but also feel personal and
                  functional. Every project is a new story—whether it’s a cozy
                  home, a modern office, or a vibrant café, I love blending
                  clean minimalism with warmth, using natural materials, elegant
                  colors, and thoughtful details.
                </p>
                <p>
                  My design philosophy is simple: listen first, design second. I
                  take time to understand every client’s lifestyle, preferences,
                  and dreams before shaping their space. For me, the real
                  success of a project is when it reflects the personality of
                  the people living or working in it while offering timeless
                  comfort and elegance.
                </p>
                <p>
                  I’m always excited to take on new challenges and explore
                  creative possibilities. If you’re looking to transform your
                  space into something that truly feels like yours, I’d love to
                  help bring your vision to life.
                </p>
                <p className="font-medium text-primary-700 dark:text-primary-300">
                  “I don’t have the luxury to stand still—every space I create
                  must move forward with purpose and meaning.”
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              {/* gsap animation idhar aayga */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  inViewFounder
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative"
              >
                <GlareHover
                  glareColor="#ffffff"
                  glareOpacity={0.3}
                  glareAngle={-30}
                  glareSize={300}
                  transitionDuration={800}
                  playOnce={false}
                >
                  <img
                    src="/studio_maanikh_founder.jpeg"
                    alt="Nikhil Kachawa , Founder"
                    className="w-80 h-96 object-cover rounded-lg shadow-2xl"
                  />
                </GlareHover>
                <div className="absolute -bottom-6 -right-6 bg-primary-600 text-white p-4 rounded-lg shadow-lg">
                  <p className="font-semibold">Nikhil Kachawa</p>
                  <p className="text-sm opacity-90">Founder</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Statistics Section */}
      <div ref={refStats} className="py-16 bg-white dark:bg-gray-900 ">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            animate={inViewStats ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="flex flex-row justify-evenly  "
          >
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial="hidden"
                  animate={inViewStats ? "visible" : "hidden"}
                  variants={fadeIn}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="text-white" size={28} />
                  </div>
                  <div className="text-4xl font-bold text-primary-700 dark:text-primary-300 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 font-medium text-sm uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Background Section */}
      {/* <div ref={refBackground} className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            animate={inViewBackground ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-800 dark:text-primary-200 mb-8 text-center">
              Background
            </h2>
            <div className="space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                Rajat Arora Visualizations based in Delhi, was founded by Architect Rajat Arora in the year 2019. It's a way of creativity in making Leader rendering where they make 
                dreams to be visualized. The company has been in the field of 3D Visualization for Architects, Engineers, Builders, Developers and Real Estate Agents.
              </p>
              <p>
                RAV has built a strong resilience among the architectural and interior design community. Rajat from starting with the Revit, 
                moved to the industry standard 3ds Max and V-Ray for Rendering, which has been the backbone of the company.
              </p>
              <p>
                Rajat completed his architecture from Aayojan School of Architecture, Jaipur while pursuing college he started to work as a freelancer for small scale projects and then 
                slowly advancing to become a world renowned Architect Gautam Bhatia, who played an important role in shaping his life and career. Rajat from starting with the Revit, 
                moved to the industry standard 3ds Max and V-Ray for Rendering, which has been the backbone of the company.
              </p>
              <p>
                In the field of visualization, with a little consultation he was able to produce Render After working at Avant for about a year as an architect, he moved to Morpheus 
                Rajat completed his architecture from Aayojan School of Architecture.
              </p>
            </div>
          </motion.div>
        </div>
      </div> */}

      {/* Team Section */}
      <div ref={refTeam} className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            animate={inViewTeam ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-800 dark:text-primary-200 mb-4">
              Our Team
            </h2>
            <div className="w-20 h-1 bg-accent-500 mx-auto mb-6"></div>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Meet our talented team of designers, architects, and visualization
              experts who bring creativity and expertise to every project.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate={inViewTeam ? "visible" : "hidden"}
                variants={fadeIn}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-w-1 aspect-h-1 h-80 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary-800 dark:text-primary-200 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-accent-600 dark:text-accent-400 font-medium mb-2">
                    {member.role}
                  </p>
                  <div className="mb-3">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Experience:{" "}
                    </span>
                    <span className="text-sm font-medium text-primary-700 dark:text-primary-300">
                      {member.experience}
                    </span>
                  </div>
                  <div className="mb-4">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Expertise:{" "}
                    </span>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {member.expertise}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {member.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      {/* <div className="py-16 bg-gradient-to-r from-primary-600 to-accent-600">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial="hidden"
            animate={inViewTeam ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-white"
          >
            <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4">
              Ready to Visualize Your Dream Space?
            </h3>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Let our experienced team transform your architectural concepts into stunning 3D visualizations that bring your vision to life.
            </p>
            <button className="inline-flex items-center px-8 py-3 bg-white text-primary-700 font-medium rounded-lg hover:bg-gray-100 transition-colors">
              Get Started Today
              <ArrowRight size={20} className="ml-2" />
            </button>
          </motion.div>
        </div>
      </div> */}
    </section>
  );
};

export default About;
