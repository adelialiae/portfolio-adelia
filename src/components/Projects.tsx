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
  ExternalLink,
  Sparkles,
  ArrowRight,
  Star
} from 'lucide-react';
import FeaturedProject from './FeaturedProject';
import { otherProjectsData } from '@/data/projects';

const filterCategories = [
  { id: 'all', label: 'All Projects' },
  { id: 'data-warehouse', label: 'Data Warehouse & ETL' },
  { id: 'bi-analytics', label: 'Data Analytics & BI' },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const celeratesProject = otherProjectsData.find(p => p.id === 'celerates-program');
  const tableauProject = otherProjectsData.find(p => p.id === 'customer-complaint-tableau-dashboard');
  const northwindProject = otherProjectsData.find(p => p.id === 'northwind-executive-summary-tableau');
  const skuProject = otherProjectsData.find(p => p.id === 'sku-usage-dashboard');

  const showDW = activeFilter === 'all' || activeFilter === 'data-warehouse';
  const showBI = activeFilter === 'all' || activeFilter === 'bi-analytics';

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

                {celeratesProject.placeholders?.image && (
                  <div className="overflow-hidden rounded-2xl border border-cyan-500/20 bg-slate-100 dark:bg-slate-950">
                    <img
                      src={celeratesProject.placeholders.image}
                      alt="DVD Rental dashboard created for the Celerates project"
                      className="block h-auto w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                    <p className="px-3 py-2 text-center text-[11px] text-slate-500 dark:text-slate-400">
                      Dashboard DVD Rental
                    </p>
                  </div>
                )}

                {celeratesProject.placeholders?.dataWarehouse && (
                  <div className="overflow-hidden rounded-2xl border border-cyan-500/20 bg-slate-100 dark:bg-slate-950">
                    <img
                      src={celeratesProject.placeholders.dataWarehouse}
                      alt="DVD Rental data mart design for the Celerates project"
                      className="block h-auto w-full object-contain"
                    />
                    <p className="px-3 py-2 text-center text-[11px] text-slate-500 dark:text-slate-400">
                      Data Warehouse / Data Mart
                    </p>
                  </div>
                )}
              </div>

              {celeratesProject.placeholders?.link && (
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                  <a
                    href={celeratesProject.placeholders.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 dark:hover:text-cyan-300 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Lihat Dashboard di Tableau Public
                  </a>
                </div>
              )}
            </motion.div>
          )}

          {/* Tableau Public Customer Complaint Dashboard */}
          {showBI && tableauProject && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="orbit-card rounded-3xl p-7 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-between relative overflow-hidden group shadow-sm hover:shadow-xl"
            >
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                  <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-500/20 font-semibold">
                    {tableauProject.category}
                  </span>
                  <span className="text-slate-400">Tableau Public</span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white leading-tight">
                    {tableauProject.title}
                  </h3>
                  <p className="text-xs font-mono text-slate-500 mt-1">
                    {tableauProject.subtitle}
                  </p>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {tableauProject.description}
                </p>

                <div className="overflow-hidden rounded-2xl border border-blue-500/20 bg-slate-100 dark:bg-slate-950">
                  <img
                    src="/images/customer-complaint-dashboard.png"
                    alt="Customer Complaint dashboard created with Tableau"
                    className="block h-auto w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>

                {tableauProject.placeholders?.detailImage && (
                  <div className="overflow-hidden rounded-2xl border border-blue-500/20 bg-slate-100 dark:bg-slate-950">
                    <img
                      src={tableauProject.placeholders.detailImage}
                      alt="Customer Complaint dashboard detail status"
                      className="block h-auto w-full object-contain"
                    />
                  </div>
                )}

                {tableauProject.technologies && (
                  <div className="flex flex-wrap gap-1.5">
                    {tableauProject.technologies.map((technology) => (
                      <span key={technology} className="text-xs font-mono px-2.5 py-1 rounded-lg bg-blue-500/10 text-blue-700 dark:text-blue-300 border border-blue-500/20 font-medium">
                        {technology}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {tableauProject.placeholders?.link && (
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                  <a
                    href={tableauProject.placeholders.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Lihat Dashboard di Tableau Public
                  </a>
                </div>
              )}
            </motion.div>
          )}

          {/* Tableau Public Northwind Executive Summary */}
          {showBI && northwindProject && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="orbit-card rounded-3xl p-7 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-between relative overflow-hidden group shadow-sm hover:shadow-xl"
            >
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                  <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border border-cyan-500/20 font-semibold">
                    {northwindProject.category}
                  </span>
                  <span className="text-slate-400">Tableau Public</span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white leading-tight">
                    {northwindProject.title}
                  </h3>
                  <p className="text-xs font-mono text-slate-500 mt-1">
                    {northwindProject.subtitle}
                  </p>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {northwindProject.description}
                </p>

                <div className="overflow-hidden rounded-2xl border border-cyan-500/20 bg-slate-100 dark:bg-slate-950">
                  <img
                    src="/images/northwind-executive-summary.png"
                    alt="Northwind Executive Summary dashboard created with Tableau"
                    className="block h-auto w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>

                {northwindProject.technologies && (
                  <div className="flex flex-wrap gap-1.5">
                    {northwindProject.technologies.map((technology) => (
                      <span key={technology} className="text-xs font-mono px-2.5 py-1 rounded-lg bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20 font-medium">
                        {technology}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {northwindProject.placeholders?.link && (
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                  <a
                    href={northwindProject.placeholders.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 dark:hover:text-cyan-300 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Lihat Dashboard di Tableau Public
                  </a>
                </div>
              )}
            </motion.div>
          )}

          {/* SKU Usage Dashboard */}
          {showBI && skuProject && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="orbit-card rounded-3xl p-7 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-between relative overflow-hidden group shadow-sm hover:shadow-xl"
            >
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 font-semibold">
                    {skuProject.category}
                  </span>
                  <span className="text-slate-400">Looker Studio Dashboard</span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white leading-tight">
                    {skuProject.title}
                  </h3>
                  <p className="text-xs font-mono text-slate-500 mt-1">
                    {skuProject.subtitle}
                  </p>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {skuProject.description}
                </p>

                {skuProject.placeholders?.image && (
                  <div className="overflow-hidden rounded-2xl border border-emerald-500/20 bg-slate-100 dark:bg-slate-950">
                    <img
                      src={skuProject.placeholders.image}
                      alt="Dashboard analisis penggunaan SKU"
                      className="block h-auto w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                )}

                {skuProject.tools && (
                  <div className="flex flex-wrap gap-1.5">
                    {skuProject.tools.map((tool) => (
                      <span key={tool} className="text-xs font-mono px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 font-medium">
                        {tool}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {skuProject.placeholders?.link && (
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                  <a
                    href={skuProject.placeholders.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 dark:hover:text-emerald-300 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Lihat Dashboard
                  </a>
                </div>
              )}
            </motion.div>
          )}

        </div>

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

