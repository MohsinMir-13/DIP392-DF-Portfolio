import { motion } from 'framer-motion';

const AboutPreview = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              About Design Factory
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              We are an innovative learning environment where students, academics, and industry partners collaborate to solve real-world challenges through design thinking and interdisciplinary approaches.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">What We Offer</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Design Thinking</li>
                  <li>Project-Based Learning</li>
                  <li>Industry Collaboration</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Our Focus</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Innovation</li>
                  <li>Sustainability</li>
                  <li>User Experience</li>
                </ul>
              </div>
            </div>
            <a
              href="/about"
              className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:underline"
            >
              Learn more about us
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
              <img
                src="/about-preview.jpg"
                alt="Design Factory workspace"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview; 