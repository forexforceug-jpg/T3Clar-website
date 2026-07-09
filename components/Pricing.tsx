'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Basic',
    description: 'Perfect for small businesses getting started',
    price: '999',
    features: [
      '5-Page Website',
      'Responsive Design',
      'Contact Form',
      'Basic SEO',
      '1 Month Support',
    ],
    featured: false,
    cta: 'Get Started',
  },
  {
    name: 'Standard',
    description: 'Ideal for growing businesses',
    price: '2,499',
    features: [
      '10-Page Website',
      'Custom Design',
      'CMS Integration',
      'Advanced SEO',
      '3 Months Support',
      'Analytics Setup',
    ],
    featured: false,
    cta: 'Get Started',
  },
  {
    name: 'Premium',
    description: 'For enterprises that need the best',
    price: '4,999',
    features: [
      'Unlimited Pages',
      'Premium Design',
      'Full CMS',
      'Enterprise SEO',
      '12 Months Support',
      'Custom Integrations',
      'Performance Optimization',
      'Priority Support',
    ],
    featured: true,
    cta: 'Choose Premium',
  },
  {
    name: 'Payment Add-on',
    description: 'Add payment processing to any plan',
    price: '1,499',
    period: '/add-on',
    features: [
      'Payment Gateway',
      'Mobile Money',
      'Bank Transfer',
      'Card Processing',
      'Transaction Dashboard',
    ],
    featured: false,
    cta: 'Learn More',
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-32 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#4A9EFF] text-sm font-semibold tracking-wider uppercase">
            Pricing
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Simple, Transparent{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              Pricing
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Choose the perfect plan for your business needs. No hidden fees.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className={`relative bg-white/[0.02] backdrop-blur-xl rounded-2xl p-8 
                       transition-all duration-500 group ${
                         plan.featured 
                           ? 'border-2 border-[#4A9EFF] shadow-[0_0_30px_rgba(74,158,255,0.15)]' 
                           : 'border border-white/[0.05] hover:border-white/[0.1]'
                       }`}
            >
              {/* Popular Badge */}
              {plan.featured && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 
                           bg-gradient-to-r from-[#4A9EFF] to-[#2563EB] rounded-full 
                           text-white text-xs font-semibold tracking-wide shadow-lg"
                >
                  Most Popular
                </motion.div>
              )}

              {/* Plan Name & Description */}
              <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-gray-400 text-sm mb-6">{plan.description}</p>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-sm text-gray-400">$</span>
                  <span className="text-5xl font-black text-white">{plan.price}</span>
                </div>
                <span className="text-gray-500 text-sm">
                  {plan.period || '/project'}
                </span>
              </div>

              {/* Features List */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check className="w-4 h-4 text-[#4A9EFF] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3.5 rounded-full font-semibold text-sm 
                         transition-all duration-300 ${
                           plan.featured
                             ? 'bg-[#4A9EFF] text-white shadow-[0_0_20px_rgba(74,158,255,0.3)] hover:shadow-[0_0_30px_rgba(74,158,255,0.5)]'
                             : 'border-2 border-white/20 text-white hover:border-[#4A9EFF] hover:text-[#4A9EFF] bg-transparent'
                         }`}
              >
                {plan.cta}
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8 text-gray-500 text-sm"
        >
          All plans include free hosting for the first year.{' '}
          <a href="#" className="text-[#4A9EFF] hover:underline">Contact us</a> for custom enterprise pricing.
        </motion.p>
      </div>
    </section>
  )
}