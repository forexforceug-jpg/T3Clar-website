'use client'

import { motion } from 'framer-motion'
import { 
  Globe, 
  Smartphone, 
  Cloud, 
  Compass,
  Palette,
  GitBranch,
  BarChart3,
  CreditCard,
  ArrowRight
} from 'lucide-react'

const services = [
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Custom websites and web applications built with React, Next.js, and modern frameworks.',
    tags: ['React', 'Next.js', 'Node.js'],
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile solutions for iOS and Android using Flutter and React Native.',
    tags: ['iOS', 'Android', 'Flutter'],
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and DevOps automation with AWS, Azure, and GCP.',
    tags: ['AWS', 'DevOps', 'Docker'],
  },
  {
    icon: Compass,
    title: 'Digital Strategy',
    description: 'Technology consulting and digital transformation roadmaps tailored to your business.',
    tags: ['Strategy', 'Consulting', 'Planning'],
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'User-centered design creating exceptional digital experiences that convert visitors.',
    tags: ['Figma', 'Prototyping', 'Research'],
  },
  {
    icon: GitBranch,
    title: 'API Integration',
    description: 'Seamless third-party integrations and custom API development for your platforms.',
    tags: ['REST', 'GraphQL', 'Microservices'],
  },
  {
    icon: BarChart3,
    title: 'Data Analytics',
    description: 'Business intelligence solutions and real-time data visualization dashboards.',
    tags: ['Analytics', 'Dashboards', 'Reports'],
  },
  {
    icon: CreditCard,
    title: 'Payment Systems',
    description: 'Secure payment gateways with mobile money, cards, and bank transfer integration.',
    tags: ['Mobile Money', 'Stripe', 'PayPal'],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 },
  },
}

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-[#4A9EFF]/10 border border-[#4A9EFF]/20 
                         rounded-full text-[#4A9EFF] text-xs font-semibold tracking-wider uppercase mb-4">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technology Solutions That{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              Drive Growth
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Comprehensive digital services tailored to transform your business and accelerate your success
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group relative bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] 
                       rounded-2xl p-6 cursor-pointer overflow-hidden
                       hover:bg-white/[0.04] hover:border-[#4A9EFF]/20 
                       transition-all duration-500"
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#4A9EFF]/0 via-transparent to-transparent 
                           group-hover:from-[#4A9EFF]/5 transition-all duration-500 rounded-2xl" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-12 h-12 bg-[#4A9EFF]/10 rounded-xl flex items-center justify-center mb-5
                             group-hover:bg-[#4A9EFF]/20 group-hover:scale-110 
                             transition-all duration-500">
                  <service.icon className="w-6 h-6 text-[#4A9EFF]" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#4A9EFF] 
                             transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-4 group-hover:text-gray-300 
                            transition-colors duration-300">
                  {service.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 rounded-md bg-white/[0.03] text-gray-500 
                               border border-white/[0.05] group-hover:border-[#4A9EFF]/10 
                               group-hover:text-gray-400 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Learn More Link */}
                <div className="flex items-center gap-2 text-sm font-medium text-[#4A9EFF] 
                             opacity-0 group-hover:opacity-100 transition-all duration-300 
                             translate-y-2 group-hover:translate-y-0">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent 
                           via-[#4A9EFF]/0 to-transparent group-hover:via-[#4A9EFF]/30 
                           transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 text-sm mb-6">
            Need a custom solution? We&apos;ve got you covered.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group inline-flex items-center gap-2 px-8 py-3 border-2 border-white/20 
                     text-white rounded-full font-semibold hover:border-[#4A9EFF] hover:text-[#4A9EFF] 
                     transition-all duration-300"
          >
            View All Services
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}