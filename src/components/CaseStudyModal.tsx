'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Layers, 
  Database, 
  Workflow, 
  Grid, 
  BarChart3, 
  Globe, 
  CheckCircle2, 
  Target, 
  AlertCircle, 
  FileText,
  Image as ImageIcon
} from 'lucide-react';
import { featuredProjectData } from '@/data/projects';

interface CaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const sectionIcons: Record<string, any> = {
  'overview': FileText,
  'problem': AlertCircle,
  'objective': Target,
  'data-etl': Workflow,
  'data-warehouse': Database,
  'olap': Grid,
  'dashboard': BarChart3,
  'web-app': Globe,
  'result': CheckCircle2,
};

export default function CaseStudyModal({ isOpen, onClose }: CaseStudyModalProps) {
  const [activeTab, setActiveTab] = useState('overview');

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentSection = featuredProjectData.caseStudy.find(s => s.id === activeTab) || featuredProjectData.caseStudy[0];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-5xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] z-10"
        >
          {/* Modal Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30">
                  FEATURED CASE STUDY
                </span>
                <span className="text-xs text-slate-500 font-mono hidden sm:inline-block">
                  Final Project / Skripsi
                </span>
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mt-1">
                {featuredProjectData.title}
              </h2>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body: Two-column layout (Sidebar Nav + Content Panel) */}
          <div className="flex-1 overflow-y-auto grid grid-cols-1 md:grid-cols-12 min-h-0">
            
            {/* Left Nav Tabs */}
            <div className="md:col-span-4 border-b md:border-b-0 md:border-r border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/50 p-3 sm:p-4 space-y-1 overflow-y-auto">
              <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 px-3 py-1 font-semibold">
                Case Study Modules
              </div>
              {featuredProjectData.caseStudy.map((item) => {
                const Icon = sectionIcons[item.id] || FileText;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left text-xs sm:text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-cyan-500 text-white shadow-md shadow-cyan-500/20'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-200/60 dark:hover:bg-slate-800/60'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className={`font-mono text-xs font-bold ${isActive ? 'text-cyan-100' : 'text-slate-400 dark:text-slate-500'}`}>
                        {item.number}
                      </span>
                      <Icon className="w-4 h-4 shrink-0" />
                      <span className="truncate">{item.title}</span>
                    </div>
                  </button>
                );
              })}

              <div className="pt-4 mt-4 border-t border-slate-200 dark:border-slate-800 px-3">
                <div className="text-[11px] font-mono text-slate-400 mb-2 font-semibold">
                  Technologies Used
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {featuredProjectData.technologies.map(tech => (
                    <span key={tech} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Content View */}
            <div className="md:col-span-8 p-6 sm:p-8 space-y-6 overflow-y-auto">
              <div>
                <div className="flex items-center gap-2 font-mono text-cyan-600 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-1">
                  <span>Module {currentSection.number}</span>
                  <span>•</span>
                  <span>{currentSection.title}</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {currentSection.number} — {currentSection.title}
                </h3>
              </div>

              <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>{currentSection.content}</p>
              </div>

              {/* Standardized Placeholder Frame if available for this section */}
              {currentSection.placeholder && (
                <div className="mt-6 rounded-xl border-2 border-dashed border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950/60 p-8 text-center flex flex-col items-center justify-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-cyan-500/10 text-cyan-500 flex items-center justify-center">
                    <ImageIcon className="w-6 h-6" />
                  </div>
                  <div className="font-mono text-xs text-cyan-600 dark:text-cyan-400 font-bold px-3 py-1 rounded bg-cyan-500/10 border border-cyan-500/20">
                    {currentSection.placeholder}
                  </div>
                  <p className="text-xs text-slate-400 max-w-sm">
                    Slot visualisasi sistem asli. Gambar akan disematkan saat tangkapan layar/diagram terunggah.
                  </p>
                </div>
              )}

              {/* Workflow chain visual for the overview section */}
              {currentSection.id === 'overview' && (
                <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-3">
                    Project Pipeline Workflow
                  </h4>
                  <div className="flex flex-wrap items-center gap-2">
                    {featuredProjectData.workflow.map((node, i) => (
                      <React.Fragment key={node}>
                        <div className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 text-xs font-mono text-slate-800 dark:text-slate-200">
                          {node}
                        </div>
                        {i < featuredProjectData.workflow.length - 1 && (
                          <span className="text-cyan-500 font-bold">→</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Implementation Checklist */}
              {currentSection.id === 'objective' && (
                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Cakupan Implementasi
                  </h4>
                  {featuredProjectData.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>

          {/* Modal Footer */}
          <div className="px-6 py-3.5 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 flex items-center justify-between text-xs text-slate-500">
            <span>Business Intelligence Case Study</span>
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-lg bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-medium transition-colors"
            >
              Tutup Modal
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

