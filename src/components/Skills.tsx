'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Database, 
  Layers, 
  BarChart3, 
  Code2, 
  Layout, 
  Wrench, 
  UserCheck,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { skillsData } from '@/data/skills';

const iconMap: Record<string, any> = {
  Database,
  Layers,
  BarChart3,
  Code2,
  Layout,
  Wrench,
  UserCheck,
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 lg:py-28 bg-slate-50/50 dark:bg-slate-900/30 border-t border-slate-200/60 dark:border-slate-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-badge mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Skills</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white"
          >
            Skills &amp; Capabilities
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 dark:text-slate-400 mt-3 text-sm sm:text-base leading-relaxed"
          >
            Keahlian teknis yang berpusat pada ekosistem Data &amp; Business Intelligence, didukung kemampuan Web Development.
          </motion.p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((category, idx) => {
            const Icon = iconMap[category.iconName] || Database;
            const isPrimary = [
              "Database & Query", 
              "Data Warehouse & ETL", 
              "Business Intelligence & Visualization"
            ].includes(category.category);

            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className={`data-card rounded-2xl p-6 flex flex-col justify-between ${
                  isPrimary
                    ? 'border-cyan-500/30 bg-white dark:bg-slate-900/80 shadow-md'
                    : 'border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-900/50'
                }`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      isPrimary 
                        ? 'bg-cyan-500/10 text-cyan-500 border border-cyan-500/30' 
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 dark:text-white">
                        {category.category}
                      </h3>
                      {isPrimary && (
                        <span className="text-[10px] font-mono text-cyan-600 dark:text-cyan-400 uppercase font-semibold">
                          Core Focus
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Skills Tag Cloud / List */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`text-xs font-mono px-3 py-1.5 rounded-lg transition-colors ${
                          isPrimary
                            ? 'bg-cyan-500/10 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 border border-cyan-500/20 dark:border-slate-700/60'
                            : 'bg-slate-100 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/50'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-1.5 text-[11px] text-slate-400 font-mono">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500" />
                  <span>Verified Competency</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

