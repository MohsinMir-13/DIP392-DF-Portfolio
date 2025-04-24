import { motion } from 'framer-motion';

const Partners = () => {
  const partners = [
    { id: 1, logo: '../public/logo/partners/', name: 'Design Factory Global Network' },
    { id: 2, logo: '/dfgn-logo.svg', name: 'Design Factory Global Network' },
    { id: 3, logo: '/dfgn-logo.svg', name: 'Design Factory Global Network' },
    { id: 4, logo: '/dfgn-logo.svg', name: 'Design Factory Global Network' },
    { id: 5, logo: '/dfgn-logo.svg', name: 'Design Factory Global Network' }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="heading-2">Partners</h2>
          <p className="text-body-lg">Collaborating with industry leaders</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="w-full max-w-[150px] mx-auto"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-full h-auto filter dark:invert transition-transform hover:scale-105 duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;