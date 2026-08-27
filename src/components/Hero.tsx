'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Download, 
  Mail, 
  Linkedin, 
  Github, 
  Sparkles, 
  GraduationCap, 
  MapPin,
  Rocket,
  Database,
  Layers,
  Award,
  Activity
} from 'lucide-react';
import { profileData } from '@/data/profile';
import DataPipelineVisual from './DataPipelineVisual';

export default function Hero() {
  const [showPipeline, setShowPipeline] = useState(false);

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center bg-grid-pattern overflow-hidden">
      {/* Orbit floating background glows */}
      <div className="floating-shape top-20 left-10 w-80 h-80 bg-cyan-500/15 animate-float-slow" />
      <div className="floating-shape bottom-20 right-10 w-96 h-96 bg-blue-600/15 animate-float-reverse" />
      <div className="floating-shape top-1/2 right-1/3 w-64 h-64 bg-indigo-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Orbit Hero Tag Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="hero-tag"
            >
              <span className="tag-dot"></span>
              <span className="tag-text font-mono text-xs">Data Analytics &amp; Business Intelligence</span>
              <span className="text-slate-400 dark:text-slate-600">•</span>
              <span className="flex items-center gap-1 text-[11px] text-slate-600 dark:text-slate-300">
                <MapPin className="w-3 h-3 text-cyan-500" /> {profileData.location}
              </span>
            </motion.div>

            {/* Orbit Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
                Crafting Actionable Data &amp;{' '}
                <span className="bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 bg-clip-text text-transparent">
                  Business Intelligence
                </span>{' '}
                Solutions<span className="text-cyan-500">.</span>
              </h1>

              {/* Subheadline & Lead */}
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed font-normal">
                {profileData.subheadline}
              </p>
            </motion.div>

            {/* Quick Education Badge Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap items-center gap-3 pt-1 text-xs text-slate-600 dark:text-slate-400"
            >
              <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300">
                <GraduationCap className="w-3.5 h-3.5 text-cyan-500" />
                <span>UPN &ldquo;Veteran&rdquo; Jawa Timur (2022–2026)</span>
              </div>
              <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 dark:bg-emerald-950/40 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 font-semibold">
                <Sparkles className="w-3 h-3" />
                <span>IPK: 3.84 / 4.0</span>
              </div>
            </motion.div>

            {/* Orbit Dual Action Buttons (CTA) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <Link
                href="#projects"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/35 transition-all hover:scale-[1.02] focus:outline-none"
              >
                <span>Explore Portfolio</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <button
                type="button"
                onClick={() => setShowPipeline(!showPipeline)}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800 font-medium text-sm transition-all hover:scale-[1.02]"
              >
                <Activity className="w-4 h-4 text-cyan-500" />
                <span>{showPipeline ? 'Hide Data Pipeline' : 'View ETL Pipeline'}</span>
              </button>

              <a
                href={profileData.cvPath}
                download
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 font-medium text-sm transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </a>
            </motion.div>

            {/* Social Links Row */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-4 pt-4 border-t border-slate-200 dark:border-slate-800/80 text-slate-600 dark:text-slate-400 text-xs"
            >
              <span className="font-mono text-slate-500">Connect:</span>
              <a
                href={profileData.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <a
                href={profileData.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href={`mailto:${profileData.socialLinks.email}`}
                className="flex items-center gap-1.5 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </a>
            </motion.div>

          </div>

          {/* Right Column: Orbit 2x2 Stat Cards Grid & Interactive Pipeline */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Orbit 2x2 Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              
              {/* Stat Card 1: Primary */}
              <div className="orbit-card p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border-cyan-500/30 relative overflow-hidden group">
                <div className="w-12 h-12 rounded-xl bg-cyan-500 text-white flex items-center justify-center mb-4 shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-transform">
                  <Rocket className="w-6 h-6" />
                </div>
                <div className="text-3xl font-extrabold font-mono text-slate-900 dark:text-white">
                  15+
                </div>
                <div className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 mt-1">
                  Projects &amp; Dashboards
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                  ETL, OLAP &amp; Web Apps
                </p>
              </div>

              {/* Stat Card 2: Academic Excellence */}
              <div className="orbit-card p-6 rounded-2xl bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 relative overflow-hidden group">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Award className="w-6 h-6" />
                </div>
                <div className="text-3xl font-extrabold font-mono text-slate-900 dark:text-white">
                  3.84
                </div>
                <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 mt-1">
                  Grade Point Average
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                  Scale 4.0 / High Honors
                </p>
              </div>

              {/* Stat Card 3: Experience & Studies */}
              <div className="orbit-card p-6 rounded-2xl bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 relative overflow-hidden group">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Layers className="w-6 h-6" />
                </div>
                <div className="text-3xl font-extrabold font-mono text-slate-900 dark:text-white">
                  5+
                </div>
                <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 mt-1">
                  Certifications &amp; Badges
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                  Data, BI &amp; DB Verified
                </p>
              </div>

              {/* Stat Card 4: Accent */}
              <div className="orbit-card p-6 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-purple-600/10 border-indigo-500/30 relative overflow-hidden group">
                <div className="w-12 h-12 rounded-xl bg-indigo-500 text-white flex items-center justify-center mb-4 shadow-lg shadow-indigo-500/30 group-hover:scale-110 transition-transform">
                  <Database className="w-6 h-6" />
                </div>
                <div className="text-3xl font-extrabold font-mono text-slate-900 dark:text-white">
                  100%
                </div>
                <div className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 mt-1">
                  End-to-End Analytics
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                  From Raw SQL to Insights
                </p>
              </div>

            </div>

            {/* Toggleable / Dynamic Pipeline Visual */}
            {showPipeline && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden pt-2"
              >
                <DataPipelineVisual />
              </motion.div>
            )}

          </motion.div>

        </div>
      </div>
    </section>
  );
}

