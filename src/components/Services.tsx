'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  LineChart, 
  BarChart2, 
  Layers, 
  Database, 
  Code2, 
  ShieldCheck, 
  ArrowRight, 
  Star, 
  Sparkles,
  TrendingUp,
  Workflow
} from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Data Analytics & Statistical Insights',
    description: 'Transforming raw data into clear, actionable business trends and exploratory analyses using structured statistical models.',
    icon: LineChart,
    featured: false,
    tags: ['Exploratory Analysis', 'Trend Forecasting', 'Metrics Modeling']
  },
  {
    id: 2,
    title: 'Business Intelligence & KPI Dashboards',
    description: 'Designing intuitive, executive-ready dashboards in Power BI and Tableau for real-time performance tracking and decision-making.',
    icon: BarChart2,
    featured: false,
    tags: ['Power BI', 'Tableau', 'Interactive Reporting']
  },
  {
    id: 3,
    title: 'Data Warehouse & ETL Pipelines',
    description: 'Architecting robust multidimensional Star/Snowflake schemas and building automated ETL workflows using Pentaho Kettle.',
    icon: Layers,
    featured: true,
    badgeText: 'Core Specialty',
    tags: ['Pentaho Kettle', 'Star Schema', 'OLAP Cube']
  },

];

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-white dark:bg-slate-950 relative overflow-hidden">
      {/* Background glow */}
      <div className="floating-shape top-1/4 right-0 w-80 h-80 bg-cyan-500/10 animate-float-slow" />
      <div className="floating-shape bottom-10 left-10 w-80 h-80 bg-blue-600/10 animate-float-reverse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Orbit Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-badge mb-3"
          >
            <Workflow className="w-3.5 h-3.5" />
            <span>Core Competencies</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white"
          >
            Services &amp; Specializations
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 dark:text-slate-400 mt-3 text-sm sm:text-base leading-relaxed"
          >
            Comprehensive data lifecycle capabilities—from raw database engineering and ETL pipelining to executive dashboards.
          </motion.p>
        </div>

        {/* Orbit 6-Card Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`orbit-card rounded-2xl p-7 relative flex flex-col justify-between ${
                  service.featured
                    ? 'border-cyan-500/50 dark:border-cyan-400/50 bg-gradient-to-b from-cyan-500/[0.04] to-blue-500/[0.08] dark:from-cyan-950/30 dark:to-slate-900 shadow-lg shadow-cyan-500/10'
                    : 'bg-white dark:bg-slate-900/80 border-slate-200 dark:border-slate-800'
                }`}
              >
                {/* Feature ribbon if featured */}
                {service.featured && (
                  <div className="feature-ribbon flex items-center gap-1">
                    <Star className="w-3 h-3 fill-current" />
                    <span>{service.badgeText}</span>
                  </div>
                )}

                <div>
                  {/* Orbit Icon Wrapper */}
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${
                      service.featured
                        ? 'bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30'
                        : 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20'
                    }`}
                  >
                    <Icon className="w-7 h-7" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2.5">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100 dark:border-slate-800/80 mb-4">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Orbit Bottom Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-slate-200 dark:divide-slate-800">
            <div className="pt-4 md:pt-0">
              <div className="text-3xl font-extrabold font-mono text-slate-900 dark:text-white">3</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">Projects Delivered</div>
            </div>
            <div className="pt-4 md:pt-0">
              <div className="text-3xl font-extrabold font-mono text-cyan-600 dark:text-cyan-400">98%</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">Analytics Accuracy</div>
            </div>
            <div className="pt-4 md:pt-0">
              <div className="text-3xl font-extrabold font-mono text-slate-900 dark:text-white">4</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">Years Active Studies</div>
            </div>
            <div className="pt-4 md:pt-0">
              <div className="text-3xl font-extrabold font-mono text-emerald-600 dark:text-emerald-400">3.84</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">Academic GPA</div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
