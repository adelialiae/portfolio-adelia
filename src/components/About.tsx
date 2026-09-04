'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  Layers, 
  GraduationCap, 
  Award, 
  CheckCircle2,
  ArrowRight,
  Mail,
  Sparkles,
  Database,
  LineChart,
  Server
} from 'lucide-react';
import { profileData } from '@/data/profile';

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-slate-50/50 dark:bg-slate-900/30 border-y border-slate-200/60 dark:border-slate-800/60 relative overflow-hidden">
      {/* Background shapes */}
      <div className="floating-shape top-1/3 left-0 w-72 h-72 bg-cyan-500/10 animate-float-slow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Showcase & Experience Badge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Visual Card */}
              <div className="orbit-card p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-850 to-slate-950 text-white shadow-2xl relative z-10 border border-slate-700/60">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                  </div>
                  <span className="text-[11px] font-mono text-cyan-400">data_profile.config</span>
                </div>

                <div className="space-y-4 font-mono text-xs">
                  <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/50">
                    <div className="text-slate-400 text-[11px]">Primary Focus</div>
                    <div className="text-cyan-300 font-bold text-sm mt-0.5">Data Analytics &amp; Business Intelligence</div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/50">
                    <div className="text-slate-400 text-[11px]">Core Architecture</div>
                    <div className="text-slate-200 font-medium mt-0.5">Data Warehouse, OLAP &amp; ETL (Pentaho)</div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/50">
                    <div className="text-slate-400 text-[11px]">Key Tech Stack</div>
                    <div className="flex flex-wrap gap-1.5 mt-1.5">
                      {['PostgreSQL', 'Pentaho Kettle', 'Power BI', 'Tableau', 'MySQL', 'PHP/Laravel'].map((t) => (
                        <span key={t} className="px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800/50 text-[10px]">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Orbit-style Floating Experience Badge */}
                <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-4 sm:p-5 rounded-2xl shadow-xl shadow-cyan-500/30 flex items-center gap-3.5 border border-cyan-300/30">
                  <div className="text-3xl sm:text-4xl font-extrabold font-mono leading-none">
                    3.84
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-wider leading-tight">
                    IPK / GPA<br /><span className="text-[10px] font-normal opacity-90">UPN &quot;Veteran&quot; Jatim</span>
                  </div>
                </div>

              </div>

              {/* Decorative background outline */}
              <div className="absolute -inset-2 rounded-3xl border-2 border-dashed border-cyan-500/20 -z-10 transform -rotate-1 pointer-events-none"></div>
            </div>
          </motion.div>

          {/* Right Column: Orbit About Narrative & Features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Section Badge */}
            <div className="section-badge">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Who I Am</span>
            </div>

            {/* Orbit Heading */}
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
              Innovating for Insight &amp; Impact Through Structured Data
            </h2>

            {/* Lead & Narrative */}
            <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
              {profileData.summary}
            </p>

            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Fokus utama saya mencakup keseluruhan rantai analitik: dari proses ekstraksi, transformasi, dan pemuatan data (*ETL*), perancangan skema *Data Warehouse (Star, Snowflake, dan Fact Constellation)*, pemodelan multidimensi (*OLAP*), hingga visualisasi metrik bisnis yang mudah dipahami oleh pengambil keputusan.
            </p>

            {/* Orbit Features 4-Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="w-7 h-7 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">ETL Pipeline &amp; Data Warehouse</span>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="w-7 h-7 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">BI &amp; Interactive Dashboards</span>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="w-7 h-7 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">Database &amp; SQL Query Tuning</span>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="w-7 h-7 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">Web App Development Support</span>
              </div>
            </div>

            {/* Orbit Stats Row */}
            <div className="grid grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center">
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-cyan-600 dark:text-cyan-400">3</div>
                <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400 mt-1">Projects Done</div>
              </div>
              <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center">
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-emerald-600 dark:text-emerald-400">3.84</div>
                <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400 mt-1">Academic IPK</div>
              </div>
              <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center">
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-blue-600 dark:text-blue-400">98%</div>
                <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400 mt-1">Data Precision</div>
              </div>
            </div>

            {/* Orbit Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="#services"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 hover:bg-slate-800 dark:bg-cyan-500 dark:hover:bg-cyan-400 text-white font-medium text-xs transition-all shadow-md"
              >
                <span>Discover Competencies</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <div className="flex items-center gap-3 px-4 py-2 rounded-2xl bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60">
                <div className="w-8 h-8 rounded-full bg-cyan-500/10 text-cyan-500 flex items-center justify-center">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">Direct Contact</div>
                  <a href={`mailto:${profileData.socialLinks.email}`} className="text-xs font-semibold text-slate-800 dark:text-slate-200 hover:text-cyan-500">
                    {profileData.socialLinks.email}
                  </a>
                </div>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}

