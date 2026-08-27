'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  ExternalLink, 
  CheckCircle, 
  Database, 
  Layers, 
  ArrowRight,
  Maximize2,
  FileCode2,
  Cpu
} from 'lucide-react';
import { featuredProjectData } from '@/data/projects';
import CaseStudyModal from './CaseStudyModal';

export default function FeaturedProject() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="data-card rounded-3xl p-6 sm:p-8 lg:p-10 border border-cyan-500/30 bg-gradient-to-br from-slate-900/90 via-slate-900/60 to-slate-950/90 shadow-2xl relative overflow-hidden group"
      >
        {/* Subtle top accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Case Study Header & Details */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top Tag & Category */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 text-xs font-mono font-bold tracking-wide">
                <Sparkles className="w-3.5 h-3.5" />
                FEATURED FINAL PROJECT / SKRIPSI
              </span>
              <span className="text-xs font-mono text-slate-500">
                {featuredProjectData.category}
              </span>
            </div>

            {/* Project Title */}
            <div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                {featuredProjectData.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
                {featuredProjectData.description}
              </p>
            </div>

            {/* Workflow Pipeline Badge Sequence */}
            <div className="space-y-2 pt-1">
              <div className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">
                End-to-End Pipeline Workflow:
              </div>
              <div className="flex flex-wrap items-center gap-1.5">
                {featuredProjectData.workflow.map((item, idx) => (
                  <React.Fragment key={item}>
                    <span className="px-2.5 py-1 rounded-md bg-slate-800 text-slate-200 border border-slate-700 text-xs font-mono">
                      {item}
                    </span>
                    {idx < featuredProjectData.workflow.length - 1 && (
                      <span className="text-cyan-400 text-xs font-bold font-mono">→</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Implementation Details List */}
            <div className="space-y-2 pt-2">
              <div className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">
                Lingkup Pengerjaan &amp; Implementasi:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 dark:text-slate-300">
                {featuredProjectData.details.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Chips */}
            <div className="pt-2">
              <div className="flex flex-wrap gap-2">
                {featuredProjectData.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg text-xs font-mono bg-cyan-500/10 dark:bg-slate-800 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20 dark:border-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action to open 01-09 modal */}
            <div className="pt-4">
              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/20 transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                <span>Buka Detail Case Study (01 — 09)</span>
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Right Column: Visual Architecture Preview & Standardized Placeholders */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Dashboard Screenshot Placeholder Card */}
            <div className="rounded-2xl border-2 border-dashed border-slate-700/80 bg-slate-950/70 p-6 flex flex-col items-center justify-center text-center relative overflow-hidden group/preview min-h-[220px]">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-3">
                <Database className="w-6 h-6" />
              </div>
              <div className="px-3 py-1 rounded-md bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 font-mono text-xs font-bold tracking-wider">
                {featuredProjectData.placeholders.dashboard}
              </div>
              <p className="text-xs text-slate-400 mt-2 max-w-xs">
                Interactive Metabase &amp; Mondrian OLAP Dashboard visualization
              </p>
              
              <button
                onClick={() => setModalOpen(true)}
                className="mt-4 text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1 underline underline-offset-4"
              >
                Eksplorasi modul 01–09 <ArrowRight className="w-3 h-3" />
              </button>
            </div>

            {/* Mini Placeholders Grid */}
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-dashed border-slate-800 bg-slate-950/40 p-3.5 text-center flex flex-col items-center justify-center">
                <Layers className="w-5 h-5 text-indigo-400 mb-1.5" />
                <span className="font-mono text-[10px] text-slate-300 font-semibold">
                  {featuredProjectData.placeholders.dataWarehouse}
                </span>
              </div>

              <div className="rounded-xl border border-dashed border-slate-800 bg-slate-950/40 p-3.5 text-center flex flex-col items-center justify-center">
                <Cpu className="w-5 h-5 text-purple-400 mb-1.5" />
                <span className="font-mono text-[10px] text-slate-300 font-semibold">
                  {featuredProjectData.placeholders.system}
                </span>
              </div>
            </div>

            {/* Quick Summary Note */}
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 text-xs text-slate-400 leading-relaxed font-mono">
              <span className="text-cyan-400 font-bold">&gt; Architecture Note:</span> Skripsi ini menggabungkan seluruh tahapan data lifecycle dari PostgreSQL, Pentaho ETL, Mondrian OLAP, hingga Metabase dashboard dalam web berbasis Laravel &amp; Next.js.
            </div>

          </div>

        </div>
      </motion.div>

      {/* 01-09 Detailed Modal */}
      <CaseStudyModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
}

