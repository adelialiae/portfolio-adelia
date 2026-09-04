'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUp, Database, Github, Linkedin, Mail, MapPin, Download } from 'lucide-react';
import { profileData } from '@/data/profile';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-600 dark:text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-slate-100 dark:border-slate-800/80">
          
          {/* Column 1: Brand & Bio (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="#home" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-600 to-blue-600 flex items-center justify-center text-white shadow-md shadow-cyan-500/20">
                <Database className="w-4 h-4" />
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-white">
                Adelia<span className="text-cyan-500">.</span>
              </span>
            </Link>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed max-w-sm">
              Sarjana Komputer berfokus pada Data Analytics, Business Intelligence, perancangan Data Warehouse, dan arsitektur ETL.
            </p>
            <div className="flex items-center gap-2.5 pt-2">
              <a
                href={profileData.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 hover:bg-cyan-500 hover:text-slate-950 text-slate-600 dark:text-slate-300 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={profileData.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 hover:bg-cyan-500 hover:text-slate-950 text-slate-600 dark:text-slate-300 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${profileData.socialLinks.email}`}
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 hover:bg-cyan-500 hover:text-slate-950 text-slate-600 dark:text-slate-300 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-wider text-slate-900 dark:text-white font-mono">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="#home" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  About Me
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#projects" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Focus Areas (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-wider text-slate-900 dark:text-white font-mono">
              Specializations
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
                <span>Data Warehouse &amp; OLAP</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
                <span>Pentaho Kettle ETL Pipeline</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
                <span>Power BI &amp; Tableau Dashboards</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
                <span>PostgreSQL &amp; MySQL Optimization</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
                <span>PHP, Laravel &amp; Bootstrap</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Direct Info & CV (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-wider text-slate-900 dark:text-white font-mono">
              Location &amp; CV
            </h4>
            <div className="space-y-2 text-xs">
              <p className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-cyan-500 shrink-0" />
                <span>{profileData.location}</span>
              </p>
              <p className="text-[11px] text-slate-500">
                UPN &ldquo;Veteran&rdquo; Jawa Timur Graduate (IPK 3.84)
              </p>
              <div className="pt-2">
                <a
                  href={profileData.cvPath}
                  download
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800 font-medium text-xs transition-colors"
                >
                  <Download className="w-3.5 h-3.5 text-cyan-500" />
                  <span>Download Resume (PDF)</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Orbit Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[11px] text-slate-500 dark:text-slate-400">
          <div>
            © {new Date().getFullYear()} <strong className="text-slate-800 dark:text-slate-200">{profileData.name}</strong>. All Rights Reserved.
          </div>
          
          <div className="flex items-center gap-4 font-mono">
            <span>Designed with Orbit Template Style</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-900 hover:bg-cyan-500 hover:text-slate-950 text-slate-700 dark:text-slate-300 transition-colors border border-slate-200 dark:border-slate-800"
              aria-label="Scroll to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

