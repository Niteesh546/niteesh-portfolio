"use client";

import { Trophy, Code, Activity } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { ScrollReveal } from "./ScrollReveal";

export const CompetitiveProgramming = () => {
  return (
    <section id="stats" className="py-24 relative bg-surface-light border-y border-white/5">
      <div className="container mx-auto px-6 max-w-5xl">
        <SectionHeader title="Competitive Edge" subtitle="Stats" centered />

        <ScrollReveal delay={0.1}>
          <div className="mb-12 flex justify-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass border border-accent/20">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
              </span>
              <span className="text-white font-medium">Actively grinding LeetCode</span>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          <ScrollReveal delay={0.2}>
            <div className="glass-panel p-8 rounded-3xl h-full border border-white/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-[50px] group-hover:bg-blue-500/20 transition-colors"></div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center">
                  <Trophy size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">TCS CodeVita</h3>
                  <p className="text-text-secondary text-sm">Global Coding Contest</p>
                </div>
              </div>
              
              <div className="space-y-2">
                <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                  #982
                </span>
                <p className="text-white font-medium">Ranked in Top 1000</p>
                <p className="text-text-secondary text-sm pt-2">Out of hundreds of thousands of participants worldwide, demonstrating strong problem-solving and algorithmic skills under time pressure.</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="glass-panel p-8 rounded-3xl h-full border border-white/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 blur-[50px] group-hover:bg-yellow-500/20 transition-colors"></div>
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-yellow-500/10 text-yellow-500 flex items-center justify-center">
                    <Code size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">LeetCode</h3>
                    <p className="text-text-secondary text-sm">Problem Solving</p>
                  </div>
                </div>
                <a href="https://leetcode.com/u/niteesh_001/" target="_blank" rel="noopener noreferrer" className="text-sm border border-white/10 rounded-full px-4 py-1.5 hover:bg-white/5 transition-colors text-white">Profile</a>
              </div>
              
              <div className="space-y-6">
                <div>
                  <span className="text-4xl font-bold text-white">100+</span>
                  <span className="text-text-secondary ml-2">Problems Solved</span>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-emerald-400">Easy</span>
                      <span className="text-white">~50%</span>
                    </div>
                    <div className="h-2 w-full bg-surface rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-400 w-1/2 rounded-full"></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-amber-400">Medium</span>
                      <span className="text-white">~40%</span>
                    </div>
                    <div className="h-2 w-full bg-surface rounded-full overflow-hidden">
                      <div className="h-full bg-amber-400 w-2/5 rounded-full"></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-red-400">Hard</span>
                      <span className="text-white">~10%</span>
                    </div>
                    <div className="h-2 w-full bg-surface rounded-full overflow-hidden">
                      <div className="h-full bg-red-400 w-[10%] rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
