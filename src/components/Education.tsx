'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, Sparkles, CheckCircle2 } from 'lucide-react';
import { educationData } from '@/data/education';

export default function Education() {
  return (
    <section id="education" className="py-20 lg:py-28 bg-slate-50/50 dark:bg-slate-900/30 border-t border-slate-200/60 dark:border-slate-800/60 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-badge mb-3"
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white"
          >
            Education &amp; Coursework
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 dark:text-slate-400 mt-3 text-sm sm:text-base leading-relaxed"
          >
            Fondasi akademik formal dalam bidang Sistem Informasi, Basis Data, dan Analisis Data.
          </motion.p>
        </div>

        {/* Education Highlight Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="data-card rounded-3xl p-6 sm:p-8 lg:p-10 bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-xl"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-slate-200 dark:border-slate-800">
            
            {/* University & Degree */}
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-mono font-semibold">
                <span>{educationData.period}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                {educationData.degree}
              </h3>
              <p className="text-sm sm:text-base font-medium text-slate-600 dark:text-slate-300">
                {educationData.university}
              </p>
            </div>

            {/* GPA Badge */}
            <div className="flex sm:flex-col items-center sm:items-end justify-between bg-slate-50 dark:bg-slate-950/80 p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shrink-0">
              <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold mb-1">
                <Sparkles className="w-4 h-4" />
                <span>Cumulative GPA</span>
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold font-mono text-slate-900 dark:text-white">
                {educationData.gpa}
              </div>
            </div>

          </div>

          {/* Relevant Coursework Compact Tags */}
          <div className="pt-8 space-y-4">
            <div className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white">
              <BookOpen className="w-4 h-4 text-cyan-500" />
              <span>Relevant Coursework &amp; Academic Focus:</span>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {educationData.coursework.map((course, idx) => {
                const isDataFocus = [
                  "Data Warehouse dan OLAP", 
                  "Data Analis", 
                  "Business Intelligence", 
                  "Visualisasi Data", 
                  "Data Mining", 
                  "Structure Query Language (SQL)",
                  "Basis Data",
                  "Administrasi Basis Data"
                ].includes(course);

                return (
                  <motion.div
                    key={course}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.04 }}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all ${
                      isDataFocus
                        ? 'bg-cyan-500/10 dark:bg-cyan-950/40 text-cyan-700 dark:text-cyan-300 border border-cyan-500/30 font-semibold shadow-sm'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
                    }`}
                  >
                    <CheckCircle2 className={`w-3.5 h-3.5 ${isDataFocus ? 'text-cyan-500' : 'text-slate-400'}`} />
                    <span>{course}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}

