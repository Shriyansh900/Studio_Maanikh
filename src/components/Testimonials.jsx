import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Homeowner',
      location: 'Manhattan, NY',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
      rating: 5,
      text: 'Studio Maanikh transformed our apartment into a stunning modern sanctuary. Their attention to detail was exceptional.',
      project: 'Modern Minimalist Living'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Business Owner',
      location: 'SoHo, NY',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
      rating: 5,
      text: 'The team created an inspiring office space that perfectly balances productivity with aesthetic appeal.',
      project: 'Modern Office Space'
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      role: 'Interior Design Enthusiast',
      location: 'Greenwich, CT',
      image: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
      rating: 5,
      text: 'Working with Studio Maanikh was a dream come true. They elevated our vision beyond expectations.',
      project: 'Contemporary Family Home'
    },
    {
      id: 4,
      name: 'David Thompson',
      role: 'Real Estate Developer',
      location: 'Upper East Side, NY',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
      rating: 5,
      text: 'The luxury penthouse design exceeded all expectations. Every detail was meticulously planned.',
      project: 'Luxury Penthouse Suite'
    },
    {
      id: 5,
      name: 'Lisa Wilson',
      role: 'Chef & Restaurateur',
      location: 'Westchester, NY',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
      rating: 5,
      text: 'The gourmet kitchen they designed is both beautiful and incredibly functional for a professional chef.',
      project: 'Gourmet Kitchen Design'
    }
  ];

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={16}
        className={`${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-16 bg-white dark:bg-gray-900 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary-800 dark:text-primary-200 mb-3">
            Client Reviews
          </h2>
          <div className="w-16 h-0.5 bg-accent-500 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto text-sm">
            Discover what our clients say about their experience working with us
          </p>
        </motion.div>

        {/* Testimonials Container */}
        <div className="max-w-4xl mx-auto relative">
          {/* Navigation Arrows */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 md:-translate-x-8 w-10 h-10 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 z-10"
          >
            <ChevronLeft size={18} />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 md:translate-x-8 w-10 h-10 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 z-10"
          >
            <ChevronRight size={18} />
          </motion.button>

          {/* Testimonial Cards */}
          <div className="relative h-48 md:h-40">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ 
                  duration: 0.5,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                className="absolute inset-0 bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-lg"
              >
                <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6 h-full">
                  {/* Client Image */}
                  <div className="flex-shrink-0">
                    <img
                      src={testimonials[currentTestimonial].image}
                      alt={testimonials[currentTestimonial].name}
                      className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-3 border-white dark:border-gray-700 shadow-md"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    {/* Stars */}
                    <div className="flex items-center space-x-1 mb-3">
                      {renderStars(testimonials[currentTestimonial].rating)}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-gray-700 dark:text-gray-300 text-sm md:text-base leading-relaxed mb-4 italic">
                      "{testimonials[currentTestimonial].text}"
                    </blockquote>

                    {/* Client Info */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <h4 className="font-semibold text-primary-800 dark:text-primary-200 text-sm">
                          {testimonials[currentTestimonial].name}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400 text-xs">
                          {testimonials[currentTestimonial].role} • {testimonials[currentTestimonial].location}
                        </p>
                      </div>
                      <div className="mt-2 sm:mt-0">
                        <span className="text-xs text-accent-600 dark:text-accent-400 font-medium bg-accent-50 dark:bg-accent-900/20 px-2 py-1 rounded-full">
                          {testimonials[currentTestimonial].project}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Indicators */}
          <div className="flex items-center justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => goToTestimonial(index)}
                className={`transition-all duration-300 ${
                  index === currentTestimonial
                    ? 'w-6 h-1.5 bg-primary-600 dark:bg-primary-400 rounded-full'
                    : 'w-1.5 h-1.5 bg-gray-300 dark:bg-gray-600 rounded-full hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
              >
                {index === currentTestimonial && (
                  <motion.div
                    layoutId="activeTestimonialIndicator"
                    className="w-full h-full bg-primary-600 dark:bg-primary-400 rounded-full"
                    transition={{ 
                      type: "spring", 
                      bounce: 0.2, 
                      duration: 0.6 
                    }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Stats Row */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-3 gap-4 mt-12 max-w-2xl mx-auto"
        >
          {[
            { number: '100+', label: 'Happy Clients' },
            { number: '5.0', label: 'Average Rating' },
            { number: '100%', label: 'Satisfaction' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              className="text-center bg-gray-50 dark:bg-gray-800 rounded-xl p-4"
            >
              <div className="text-xl md:text-2xl font-bold text-primary-700 dark:text-primary-300 mb-1">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-xs font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;