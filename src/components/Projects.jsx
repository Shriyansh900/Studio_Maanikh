import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MapPin, Clock, Maximize, Tag, ArrowRight } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { projectsData } from "../data/projects";

const Projects = () => {
  const [currentFilter, setCurrentFilter] = useState("all");
  const [refSection, inViewSection] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const filteredProjects =
    currentFilter === "all"
      ? projectsData
      : projectsData.filter((project) => project.category === currentFilter);

  const filters = [
    { id: "all", name: "All Projects" },
    { id: "residential", name: "Residential" },
    { id: "commercial", name: "Commercial" },
    { id: "Photography", name: "Photography" },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={refSection}
          initial="hidden"
          animate={inViewSection ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mb-16 text-center"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-800 dark:text-primary-200 mb-4">
            Our Projects
          </h2>
          <div className="w-20 h-1 bg-accent-500 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Explore our portfolio of exceptional interior design projects, each
            crafted with attention to detail and innovative solutions.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
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
        <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial="hidden"
              animate={inViewSection ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg bg-white dark:bg-gray-800 hover:shadow-2xl transition-all duration-500"
            >
              <NavLink to={`/project/${project.id}`}>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.mainImage}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium text-white ${
                        project.category === "residential"
                          ? "bg-emerald-500"
                          : project.category === "commercial"
                          ? "bg-blue-500"
                          : project.category === "Photography"
                          ? "bg-red-500"
                          : "bg-gray-400"
                      }`}
                    >
                      {project.category === "residential"
                        ? "Residential"
                        : project.category === "commercial"
                        ? "Commercial"
                        : project.category === "Photography"
                        ? "Photography"
                        : "Other"}
                    </span>
                  </div>

                  {/* Hover Content Overlay */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <div className="text-white">
                      <h3 className="font-serif text-xl font-bold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-200 mb-4 line-clamp-2">
                        {project.description}
                      </p>

                      {/* Project Details */}
                      <div className="grid grid-cols-2 gap-3 mb-4 text-xs">
                        <div className="flex items-center space-x-1">
                          <MapPin size={12} className="text-gray-300" />
                          <span className="text-gray-300">
                            {project.location}
                          </span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Maximize size={12} className="text-gray-300" />
                          <span className="text-gray-300">{project.area}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock size={12} className="text-gray-300" />
                          <span className="text-gray-300">
                            {project.duration}
                          </span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Tag size={12} className="text-gray-300" />
                          <span className="text-gray-300">{project.style}</span>
                        </div>
                      </div>

                      {/* View Project Button */}
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">
                          View Project
                        </span>
                        <ArrowRight
                          size={16}
                          className="transform group-hover:translate-x-1 transition-transform duration-300"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Content (Always Visible) */}
                {/* <div className="p-6 group-hover:bg-gray-50 dark:group-hover:bg-gray-700 transition-colors duration-300">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-accent-600 dark:text-accent-400 uppercase tracking-wider">
                      {project.category === 'residential' ? 'Residential' : 'Commercial'} • {project.year}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-primary-800 dark:text-primary-200 mb-2 group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div> */}
              </NavLink>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
