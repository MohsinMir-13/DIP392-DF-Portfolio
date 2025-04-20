import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PROJECTS_API_ENDPOINT } from '../config/api';

interface Project {
  id: string;
  name: string;
  role: string;
  contact: string;
  avatar: string;
  createdAt: string;
}

const FeaturedProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const response = await fetch(PROJECTS_API_ENDPOINT);
        
        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }
        
        const data = await response.json();
        
        // Log the API response
        console.log('API Response Data:', data);
        
        // Get the last 3 projects
        const latestProjects = data.slice(-3);
        console.log('Latest 3 Projects:', latestProjects);
        
        setProjects(latestProjects);
        setError(null);
      } catch (err) {
        setError('Error fetching projects. Please try again later.');
        console.error('Error fetching projects:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section className="relative py-20">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-white opacity-50" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="heading-2">
            Featured Projects
          </h2>
          <p className="text-body-lg">
            Discover our latest innovations and collaborations
          </p>
        </div>

        {loading && (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
          </div>
        )}

        {error && (
          <div className="text-center py-10">
            <p className="text-red-500">{error}</p>
          </div>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/80 dark:bg-black/80 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all"
              >
                <div className="relative h-48">
                  <img
                    src={project.avatar}
                    alt={project.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black dark:text-white mb-2">
                    {project.name}
                  </h3>
                  <p className="text-body mb-4">
                    {project.role}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 text-sm bg-black/5 dark:bg-white/5 text-black dark:text-white rounded-full">
                      {new Date(project.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  <a
                    href={`mailto:${project.contact}`}
                    className="link inline-flex items-center"
                  >
                    {project.contact.toLocaleLowerCase()}
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
                </div>
              </motion.div>
            ))}
          </div>
        )}

        <div className="text-center mt-12">
          <a
            href="/projects"
            className="btn-primary"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects; 