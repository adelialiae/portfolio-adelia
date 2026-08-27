'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Calendar, CheckCircle2, Award } from 'lucide-react';
import { organizationData } from '@/data/organization';

export default function Organization() {
  return (
    <section id="organization" className="py-20 lg:py-28 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-badge mb-3"
          >
            <Users className="w-3.5 h-3.5" />
            <span>Organizational Leadership</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white"
          >
            Organizational Experience
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 dark:text-slate-400 mt-3 text-sm sm:text-base leading-relaxed"
          >
            Pengalaman kepemimpinan, komunikasi eksternal, dan publikasi informasi di lingkungan kampus.
          </motion.p>
        </div>

        {/* Organization Timeline */}
        <div className="relative border-l-2 border-cyan-500/30 dark:border-cyan-500/20 ml-4 sm:ml-8 space-y-12">
          {organizationData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="relative pl-6 sm:pl-10 group"
            >
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-cyan-500 group-hover:scale-125 transition-transform flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
              </div>

              {/* Organization Card */}
              <div className="data-card rounded-2xl p-6 sm:p-7 bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-cyan-600 dark:text-cyan-400 font-semibold">
                    <Award className="w-4 h-4" />
                    <span>{item.organization}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-500 bg-slate-100 dark:bg-slate-800/80 px-2.5 py-1 rounded-md">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.period}</span>
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                  {item.role}
                </h3>

                {/* Details List */}
                <div className="space-y-2.5 mt-4">
                  {item.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

