import { motion } from 'framer-motion';

const AboutContent = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          About Design Factory
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          We're a creative studio that combines innovation with design excellence
        </p>
      </motion.div>

      {/* Main Content with SVG Characters */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <img
            src="/1.svg"
            alt="Creative Character"
            className="w-full max-w-[200px] h-auto mx-auto hover:scale-105 transition-transform duration-300"
          />
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg">
              To create meaningful digital experiences that inspire and connect with people,
              pushing the boundaries of what's possible in design and technology.
            </p>
          </div>
        </motion.div>

        {/* Right Column */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative"
        >
          <img
            src="/2.svg"
            alt="Innovative Character"
            className="w-full max-w-[200px] h-auto mx-auto hover:scale-105 transition-transform duration-300"
          />
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-lg">
              To be at the forefront of digital innovation, setting new standards in
              design while fostering creativity and collaboration in everything we do.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Values Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-20 text-center"
      >
        <h2 className="text-3xl font-bold mb-12">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white/80 dark:bg-black/80 backdrop-blur-sm rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-3">Innovation</h3>
            <p>Pushing boundaries and exploring new possibilities in design</p>
          </div>
          <div className="p-6 bg-white/80 dark:bg-black/80 backdrop-blur-sm rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-3">Collaboration</h3>
            <p>Working together to achieve exceptional results</p>
          </div>
          <div className="p-6 bg-white/80 dark:bg-black/80 backdrop-blur-sm rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-3">Excellence</h3>
            <p>Striving for the highest quality in everything we do</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutContent;