'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Workflow, 
  Search, 
  Layers, 
  BarChart3, 
  CheckCircle2, 
  ArrowRight,
  TrendingUp,
  Cpu,
  Database,
  LineChart,
  ShieldCheck,
  Award
} from 'lucide-react';

const methodologySteps = [
  {
    step: '01',
    title: 'Ingest & Discover',
    subtitle: 'Requirements & Raw Sourcing',
    description: 'Mengidentifikasi sumber data mentah (RDBMS, flat files, APIs), memahami kebutuhan bisnis, dan memetakan flow data awal.',
    icon: Search
  },
  {
    step: '02',
    title: 'Model & ETL Pipeline',
    subtitle: 'Dimensional Design & Cleansing',
    description: 'Merancang skema bintang/salju (Star/Snowflake Schema) dan membangun alur ETL menggunakan Pentaho Kettle untuk validasi data.',
    icon: Layers
  },
  {
    step: '03',
    title: 'Visualize & Analyze',
    subtitle: 'Interactive BI Dashboards',
    description: 'Membangun dashboard interaktif di Power BI / Tableau / Metabase dengan metrik KPI dinamis dan filter multidimensi (OLAP).',
    icon: BarChart3
  },
  {
    step: '04',
    title: 'Optimize & Deliver',
    subtitle: 'Actionable Business Insights',
    description: 'Menyajikan interpretasi data yang siap digunakan oleh stakeholder untuk pengambilan keputusan strategis berbasis data.',
    icon: TrendingUp
  }
];

const capabilities = [
  {
    title: 'Data Precision',
    description: 'Integritas data terjaga melalui verifikasi ketat pada tahap ETL dan normalisasi skema.',
    icon: ShieldCheck
  },
  {
    title: 'Modular Architecture',
    description: 'Pemisahan tabel fakta dan dimensi yang terstruktur rapi untuk mempermudah ekspansi data.',
    icon: Database
  },
  {
    title: 'Actionable Visuals',
    description: 'Visualisasi visual yang fokus pada KPI bisnis esensial tanpa clutter informasi.',
    icon: LineChart
  }
];

export default function Methodology() {
  return (
    <section id="methodology" className="py-20 lg:py-28 bg-white dark:bg-slate-950 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="floating-shape top-10 right-1/4 w-80 h-80 bg-cyan-500/10 animate-float-slow" />
      <div className="floating-shape bottom-10 left-1/4 w-80 h-80 bg-indigo-500/10 animate-float-reverse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Orbit Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-badge mb-3"
          >
            <Workflow className="w-3.5 h-3.5" />
            <span>Structured Process</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white"
          >
            Why My Approach &amp; Proven Methodology
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 dark:text-slate-400 mt-3 text-sm sm:text-base leading-relaxed"
          >
            Menjamin akurasi dan kegunaan data melalui alur kerja berstandar industri dari eksplorasi hingga penyajian keputusan.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Orbit Approach & Value Stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 text-xs font-mono font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Value Proposition</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                Transforming Complex Raw Data into High-Value Business Insights
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Kombinasi latar belakang akademik Sistem Informasi yang kuat (IPK 3.84) dengan pengalaman praktis dalam perancangan Data Warehouse, ETL, dan visualisasi interaktif.
              </p>
            </div>

            {/* Stat Cards Stack */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="orbit-card p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center">
                <div className="text-2xl font-extrabold font-mono text-cyan-600 dark:text-cyan-400">100%</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 font-medium">Pipeline Focus</div>
              </div>
              <div className="orbit-card p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center">
                <div className="text-2xl font-extrabold font-mono text-emerald-600 dark:text-emerald-400">3.84</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 font-medium">Academic Rigor</div>
              </div>
              <div className="orbit-card p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center">
                <div className="text-2xl font-extrabold font-mono text-blue-600 dark:text-blue-400">5+</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 font-medium">Certifications</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium text-xs shadow-lg shadow-cyan-500/25 transition-all hover:scale-[1.02]"
              >
                <span>Discuss a Project</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="#skills"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800 font-medium text-xs transition-colors"
              >
                <span>View Tech Stack</span>
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Orbit 4-Step Methodology Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Timeline Header */}
            <div className="flex items-center gap-2 text-base font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-3">
              <Workflow className="w-4 h-4 text-cyan-500" />
              <span>4-Stage End-to-End Analytical Workflow</span>
            </div>

            {/* Orbit Timeline Steps Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {methodologySteps.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.step}
                    className="orbit-card p-5 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 relative group hover:border-cyan-500/40"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center font-bold text-xs font-mono">
                        {item.step}
                      </div>
                      <Icon className="w-5 h-5 text-slate-400 group-hover:text-cyan-500 transition-colors" />
                    </div>

                    <h4 className="text-base font-bold text-slate-900 dark:text-white">
                      {item.title}
                    </h4>
                    <div className="text-[11px] font-mono text-cyan-600 dark:text-cyan-400 font-semibold mb-2">
                      {item.subtitle}
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* 3 Orbit Capability Badges */}
            <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-4">
                What I Bring to Every Project:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {capabilities.map((cap) => {
                  const Icon = cap.icon;
                  return (
                    <div key={cap.title} className="space-y-1.5">
                      <div className="flex items-center gap-2">
                        <Icon className="w-4 h-4 text-cyan-500 shrink-0" />
                        <span className="text-xs font-bold text-slate-800 dark:text-slate-200">{cap.title}</span>
                      </div>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
                        {cap.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
