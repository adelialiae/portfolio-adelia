'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, CheckCircle2, ShieldCheck, ExternalLink } from 'lucide-react';
import { certificationsData } from '@/data/certifications';

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 lg:py-28 bg-white dark:bg-slate-950 border-t border-slate-200/60 dark:border-slate-800/60 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-badge mb-3"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Credentials</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white"
          >
            Certifications
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 dark:text-slate-400 mt-3 text-sm sm:text-base leading-relaxed"
          >
            Sertifikasi kompetensi nasional terstandarisasi BNSP.
          </motion.p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {certificationsData.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="data-card rounded-2xl p-6 sm:p-7 bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center border border-cyan-500/20">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="flex items-center gap-1 text-xs font-mono text-slate-500 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-md">
                    <Calendar className="w-3.5 h-3.5" />
                    {cert.year}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-mono text-cyan-600 dark:text-cyan-400 font-semibold mt-1">
                    {cert.issuer}
                  </p>
                </div>

                {(cert.score || cert.validity) && (
                  <div className="grid grid-cols-2 gap-3">
                    {cert.score && (
                      <div className="rounded-xl bg-cyan-500/10 border border-cyan-500/20 p-3">
                        <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                          Score
                        </div>
                        <div className="text-2xl font-bold font-mono text-cyan-700 dark:text-cyan-300">
                          {cert.score}
                        </div>
                      </div>
                    )}
                    {cert.validity && (
                      <div className="rounded-xl bg-slate-100 dark:bg-slate-800 p-3">
                        <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                          Validity
                        </div>
                        <div className="text-sm font-semibold font-mono text-slate-700 dark:text-slate-200 mt-1">
                          {cert.validity}
                        </div>
                      </div>
                    )}
                  </div>
                )}

              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-mono">
                <CheckCircle2 className="w-4 h-4" />
                <span>{cert.verificationLabel || 'BNSP Certified Professional'}</span>
              </div>

              {cert.certificateLink && (
                <a
                  href={cert.certificateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-500 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-cyan-400"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Lihat Sertifikat
                </a>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

