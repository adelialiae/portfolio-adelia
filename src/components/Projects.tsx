'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FolderGit2, 
  Layers, 
  Database, 
  BarChart3, 
  Terminal, 
  Calendar, 
  Building2, 
  Workflow, 
  ExternalLink,
  ImageIcon,
  Sparkles,
  SearchCode,
  ArrowRight,
  Eye,
  Star
} from 'lucide-react';
import FeaturedProject from './FeaturedProject';
import { otherProjectsData, academicProjectsData, featuredProjectData } from '@/data/projects';

const filterCategories = [
  { id: 'all', label: 'All Projects' },
  { id: 'data-warehouse', label: 'Data Warehouse & ETL' },
  { id: 'bi-analytics', label: 'Data Analytics & BI' },
  { id: 'python', label: 'Python & Scraping' },
  { id: 'academic', label: 'Academic Projects' },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const celeratesProject = otherProjectsData.find(p => p.id === 'celerates-program');
  const sentimentProject = otherProjectsData.find(p => p.id === 'sentiment-analysis-tring');

  const showDW = activeFilter === 'all' || activeFilter === 'data-warehouse';
  const showBI = activeFilter === 'all' || activeFilter === 'bi-analytics';
  const showPython = activeFilter === 'all' || activeFilter === 'python';
  const showAcademic = activeFilter === 'all' || activeFilter === 'academic';

  return (
    <section id="projects" className="py-20 lg:py-28 bg-slate-50/60 dark:bg-slate-900/40 border-y border-slate-200/60 dark:border-slate-800/60 relative overflow-hidden">
      {/* Background glow */}
      <div className="floating-shape top-1/2 left-0 w-96 h-96 bg-cyan-500/10 animate-float-slow" />
      <div className="floating-shape bottom-10 right-0 w-96 h-96 bg-blue-600/10 animate-float-reverse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Orbit Section Title */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-badge mb-3"
          >
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Portfolio Showcase</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white"
          >
            Featured Projects &amp; Case Studies
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 dark:text-slate-400 mt-3 text-sm sm:text-base leading-relaxed"
          >
            Implementasi nyata Data Warehouse, ETL Pipelining, Dashboard Business Intelligence, Analisis Sentimen Python, dan Sistem Informasi.
          </motion.p>
        </div>

        {/* Orbit Category Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-2"
        >
          {filterCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                activeFilter === cat.id
                  ? 'bg-cyan-500 text-white shadow-md shadow-cyan-500/25'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700/80 border border-slate-200 dark:border-slate-700/60'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* 1. Featured Flagship Project (Skripsi) */}
        {showDW && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <FeaturedProject />
          </motion.div>
        )}

        {/* 2. Key Industry & Analytical Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Celerates Project Card */}
          {showBI && celeratesProject && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="orbit-card rounded-3xl p-7 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-between relative overflow-hidden group shadow-sm hover:shadow-xl"
            >
              <div className="feature-ribbon flex items-center gap-1">
                <Star className="w-3 h-3 fill-current" />
                <span>Industry Capstone</span>
              </div>

              <div className="space-y-4">
                {/* Category & Period */}
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                  <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border border-cyan-500/20 font-semibold">
                    {celeratesProject.category}
                  </span>
                  <span className="flex items-center gap-1 text-slate-400">
                    <Calendar className="w-3.5 h-3.5" />
                    {celeratesProject.period}
                  </span>
                </div>

                {/* Title & Organization */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white leading-tight">
                    {celeratesProject.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-cyan-600 dark:text-cyan-400 font-mono mt-1">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>{celeratesProject.organization} • {celeratesProject.subtitle}</span>
                  </div>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {celeratesProject.description}
                </p>

                {/* Final Project Info Box */}
                {celeratesProject.finalProjectInfo && (
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 text-xs">
                    <div className="font-mono font-bold text-slate-800 dark:text-slate-200 mb-1.5 flex items-center gap-1.5">
                      <BarChart3 className="w-4 h-4 text-cyan-500" />
                      Final Project Implementation:
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {celeratesProject.finalProjectInfo}
                    </p>
                  </div>
                )}

                {/* Tools & Tech Chips */}
                {celeratesProject.tools && (
                  <div className="space-y-1.5 pt-2">
                    <span className="text-[11px] font-mono text-slate-400 uppercase font-semibold">Key Tools &amp; Stack:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {celeratesProject.tools.map((t) => (
                        <span key={t} className="text-xs font-mono px-2.5 py-1 rounded-lg bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20 font-medium">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Placeholder / Meta Bar */}
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span className="flex items-center gap-1.5 text-cyan-600 dark:text-cyan-400 font-medium">
                  <ImageIcon className="w-3.5 h-3.5" />
                  {celeratesProject.placeholders?.image}
                </span>
                <span>PT. Mitra Talenta Grup</span>
              </div>
            </motion.div>
          )}

          {/* Sentiment Analysis Project Card */}
          {showPython && sentimentProject && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="orbit-card rounded-3xl p-7 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-between relative overflow-hidden group shadow-sm hover:shadow-xl"
            >
              <div className="space-y-4">
                {/* Category */}
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-semibold">
                    {sentimentProject.category}
                  </span>
                  <span className="flex items-center gap-1 text-slate-400">
                    <SearchCode className="w-3.5 h-3.5 text-cyan-400" />
                    Google Play Store Scraping
                  </span>
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white leading-tight">
                    {sentimentProject.title}
                  </h3>
                  <p className="text-xs font-mono text-slate-500 mt-1">
                    Python NLP &amp; Customer Review Mining
                  </p>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {sentimentProject.description}
                </p>

                {/* Analysis Pipeline */}
                {sentimentProject.workflow && (
                  <div className="space-y-2 pt-1">
                    <span className="text-[11px] font-mono text-slate-400 uppercase font-semibold">Analysis Pipeline:</span>
                    <div className="flex flex-wrap items-center gap-1.5">
                      {sentimentProject.workflow.map((step, idx) => (
                        <React.Fragment key={step}>
                          <span className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 text-[11px] font-mono text-slate-700 dark:text-slate-300 font-medium">
                            {step}
                          </span>
                          {idx < (sentimentProject.workflow?.length || 0) - 1 && (
                            <span className="text-emerald-500 text-xs font-bold font-mono">→</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                )}

                {/* Technologies */}
                {sentimentProject.technologies && (
                  <div className="space-y-1.5 pt-2">
                    <span className="text-[11px] font-mono text-slate-400 uppercase font-semibold">Libraries &amp; Tech:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {sentimentProject.technologies.map((tech) => (
                        <span key={tech} className="text-xs font-mono px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Placeholder / Meta Bar */}
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-medium">
                  <ImageIcon className="w-3.5 h-3.5" />
                  {sentimentProject.placeholders?.image}
                </span>
                <span>Tring Reviews Dataset</span>
              </div>
            </motion.div>
          )}

        </div>

        {/* 3. Academic Projects Grid */}
        {showAcademic && (
          <div className="space-y-6 pt-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-white">
                <Terminal className="w-5 h-5 text-indigo-500" />
                <span>Academic Projects &amp; Web Systems</span>
              </div>
              <span className="text-xs font-mono text-slate-400">UPN &ldquo;Veteran&rdquo; Jawa Timur</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {academicProjectsData.map((acad, idx) => (
                <motion.div
                  key={acad.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="orbit-card rounded-2xl p-6 flex flex-col justify-between bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm"
                >
                  <div className="space-y-3">
                    <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                      {acad.category}
                    </span>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white">
                      {acad.title}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {acad.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-1.5">
                    {acad.tools.map(tool => (
                      <span key={tool} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                        {tool}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Orbit Style CTA Section Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl bg-gradient-to-r from-slate-900 via-slate-850 to-cyan-950 p-8 sm:p-12 text-white overflow-hidden border border-cyan-500/30 shadow-2xl mt-12"
        >
          {/* Orbit Floating Geometric Shapes */}
          <div className="floating-shape top-0 right-0 w-64 h-64 bg-cyan-500/20 blur-2xl" />
          <div className="floating-shape bottom-0 left-0 w-64 h-64 bg-blue-600/20 blur-2xl" />

          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 text-xs font-mono font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              Ready to Collaborate?
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
              Transforming Complex Datasets Into High-Impact Visualizations
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Tertarik mendiskusikan implementasi Data Warehouse, ETL pipeline dengan Pentaho, atau pembuatan dashboard Power BI &amp; Tableau?
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-lg shadow-cyan-500/30 transition-all hover:scale-[1.02]"
              >
                <span>Get In Touch</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-slate-800/80 hover:bg-slate-800 text-white border border-slate-700 font-medium text-xs transition-colors"
              >
                <span>Explore Services</span>
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

