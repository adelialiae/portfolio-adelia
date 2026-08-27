'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Database, 
  Workflow, 
  Layers, 
  Grid, 
  BarChart3, 
  Lightbulb, 
  ArrowDown, 
  CheckCircle2,
  Cpu
} from 'lucide-react';

const pipelineSteps = [
  {
    step: '01',
    name: 'DATA SOURCES',
    desc: 'Database Operasional & Raw Data',
    tech: 'PostgreSQL • MySQL • CSV',
    icon: Database,
    color: 'text-sky-400',
    border: 'border-sky-500/30',
    bg: 'bg-sky-500/10'
  },
  {
    step: '02',
    name: 'ETL PROCESS',
    desc: 'Extract, Transform & Cleanse Data',
    tech: 'Pentaho Data Integration (Kettle)',
    icon: Workflow,
    color: 'text-cyan-400',
    border: 'border-cyan-500/30',
    bg: 'bg-cyan-500/10'
  },
  {
    step: '03',
    name: 'DATA WAREHOUSE',
    desc: 'Centralized Analytical Schema',
    tech: 'PostgreSQL Relational DW',
    icon: Layers,
    color: 'text-indigo-400',
    border: 'border-indigo-500/30',
    bg: 'bg-indigo-500/10'
  },
  {
    step: '04',
    name: 'OLAP ENGINE',
    desc: 'Multidimensional & Drill-Down Analysis',
    tech: 'Mondrian OLAP',
    icon: Grid,
    color: 'text-purple-400',
    border: 'border-purple-500/30',
    bg: 'bg-purple-500/10'
  },
  {
    step: '05',
    name: 'DASHBOARD & BI',
    desc: 'Interactive Visualization',
    tech: 'Metabase • Power BI • Tableau',
    icon: BarChart3,
    color: 'text-emerald-400',
    border: 'border-emerald-500/30',
    bg: 'bg-emerald-500/10'
  },
  {
    step: '06',
    name: 'ACTIONABLE INSIGHT',
    desc: 'Data-Driven Decision Making',
    tech: 'Academic & Strategic Value',
    icon: Lightbulb,
    color: 'text-amber-400',
    border: 'border-amber-500/30',
    bg: 'bg-amber-500/10'
  }
];

export default function DataPipelineVisual() {
  return (
    <div className="relative rounded-2xl border border-slate-700/60 dark:border-slate-800 bg-slate-900/90 dark:bg-slate-950/90 p-5 sm:p-6 shadow-2xl backdrop-blur-xl overflow-hidden">
      {/* Decorative top header / Terminal styled bar */}
      <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800 text-xs">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
          </div>
          <span className="font-mono text-slate-400 ml-2 font-medium">data_pipeline_architecture.dwh</span>
        </div>
        <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/60">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
          <span>PIPELINE ACTIVE</span>
        </div>
      </div>

      {/* Pipeline Nodes List */}
      <div className="space-y-2.5 relative">
        {/* Animated vertical pulse line connecting nodes */}
        <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-gradient-to-b from-sky-500 via-cyan-400 via-indigo-500 via-purple-500 via-emerald-400 to-amber-400 opacity-30 z-0"></div>

        {pipelineSteps.map((item, idx) => {
          const Icon = item.icon;
          const isLast = idx === pipelineSteps.length - 1;

          return (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="relative z-10 group"
            >
              <div className={`flex items-center gap-3.5 p-2.5 rounded-xl border ${item.border} bg-slate-900/90 dark:bg-slate-900/60 hover:bg-slate-800/80 transition-all duration-300 shadow-sm`}>
                {/* Node Icon */}
                <div className={`w-9 h-9 rounded-lg ${item.bg} ${item.color} flex items-center justify-center shrink-0 border border-slate-700/50 group-hover:scale-105 transition-transform`}>
                  <Icon className="w-4 h-4" />
                </div>

                {/* Node Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-slate-100 tracking-wider flex items-center gap-2">
                      {item.name}
                      <span className="text-[10px] text-slate-500 font-normal">{item.step}</span>
                    </span>
                    <span className="text-[11px] font-mono text-slate-400 hidden sm:inline-block truncate max-w-[140px]">
                      {item.tech}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 truncate">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Connecting indicator */}
              {!isLast && (
                <div className="flex justify-center py-0.5 opacity-60">
                  <ArrowDown className="w-3.5 h-3.5 text-cyan-400 animate-bounce" style={{ animationDuration: '2s' }} />
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Bottom Summary Bar */}
      <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
        <div className="flex items-center gap-1.5 text-slate-300">
          <Cpu className="w-3.5 h-3.5 text-cyan-400" />
          <span>End-to-End Analytics Workflow</span>
        </div>
        <div className="flex items-center gap-1 text-emerald-400">
          <CheckCircle2 className="w-3 h-3" />
          <span>Validated Architecture</span>
        </div>
      </div>
    </div>
  );
}

