import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MapPin, Clock, Maximize, Tag, ArrowRight, Grid3X3 } from "lucide-react";
import { NavLink } from "react-router-dom";
import { projectsData } from "../data/projects";
import Testimonials from "./Testimonials";

const Projects = () => {
  const [currentFilter, setCurrentFilter] = useState("all");
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [refSection, inViewSection] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => setShowAll(false), [currentFilter]);

  const fadeIn = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

  const filteredProjects = currentFilter === "all"
    ? projectsData
    : projectsData.filter((project) => project.category === currentFilter);

  const getDisplayProjects = () => {
    if (!isMobile || showAll) return filteredProjects;
    if (currentFilter === "all") {
      const categories = ["residential", "commercial"];
      return categories.map(cat => projectsData.find(p => p.category === cat)).filter(Boolean);
    }
    return filteredProjects.slice(0, 1);
  };

  const displayProjects = getDisplayProjects();
  const hasMoreProjects = isMobile && !showAll && displayProjects.length < filteredProjects.length;

  const filters = [
    { id: "all", name: "All Projects" },
    { id: "residential", name: "Residential" },
    { id: "commercial", name: "Commercial" },
    { id: "Photography", name: "Photography" },
  ];

  return (
    <section id="projects" className="py-5 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={refSection}
          initial="hidden"
          animate={inViewSection ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="flex justify-center mt-8 md:mt-12 px-4"
        >
          <div className="text-center">
            <h2 className="font-serif text-2xl md:text-4xl font-bold text-primary-800 dark:text-primary-200 mb-3 md:mb-4">
              Our Projects
            </h2>
            <div className="w-16 md:w-20 h-1 bg-accent-500 mx-auto mb-4 md:mb-4"></div>
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto flex items-center justify-center mb-8">
              <Grid3X3 size={18} className="mr-2 md:w-5 md:h-5" />
              Explore our portfolio of exceptional interior design projects
              <ArrowRight size={14} className="ml-2 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </p>
          </div>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12 px-4">
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setCurrentFilter(filter.id)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                currentFilter === filter.id
                  ? "bg-primary-600 dark:bg-primary-500 text-white shadow-lg"
                  : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 shadow-md"
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 px-2 md:px-0">
          {displayProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial="hidden"
              animate={inViewSection ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl md:rounded-2xl shadow-lg bg-white dark:bg-gray-800 hover:shadow-2xl transition-all duration-500"
            >
              <NavLink to={`/project/${project.id}`}>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.mainImage}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-2 md:top-4 left-2 md:left-4 z-10">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${
                      project.category === "residential" ? "bg-emerald-500" :
                      project.category === "commercial" ? "bg-blue-500" :
                      project.category === "Photography" ? "bg-red-500" : "bg-gray-400"
                    }`}>
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 p-3 md:p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <div className="text-white">
                      <h3 className="font-serif text-lg md:text-xl font-bold mb-1 md:mb-2">{project.title}</h3>
                      <p className="text-xs md:text-sm text-gray-200 mb-2 md:mb-4 line-clamp-2">{project.description}</p>
                      <div className="grid grid-cols-2 gap-2 md:gap-3 mb-2 md:mb-4 text-xs">
                        <div className="flex items-center space-x-1"><MapPin size={10} className="md:w-3 md:h-3 text-gray-300" /><span className="text-gray-300">{project.location}</span></div>
                        <div className="flex items-center space-x-1"><Maximize size={10} className="md:w-3 md:h-3 text-gray-300" /><span className="text-gray-300">{project.area}</span></div>
                        <div className="flex items-center space-x-1"><Clock size={10} className="md:w-3 md:h-3 text-gray-300" /><span className="text-gray-300">{project.duration}</span></div>
                        <div className="flex items-center space-x-1"><Tag size={10} className="md:w-3 md:h-3 text-gray-300" /><span className="text-gray-300">{project.style}</span></div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs md:text-sm font-medium">View Project</span>
                        <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </div>
              </NavLink>
            </motion.div>
          ))}
        </div>

        {hasMoreProjects && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex justify-center mt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAll(true)}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Grid3X3 size={20} className="mr-2" />
              View All Projects
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
          </motion.div>
        )}

        {/* <Testimonials /> */}
      </div>
    </section>
  );
};

export default Projects;
