"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-20 mask-image:linear-gradient(to_bottom,transparent,black,transparent)"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px] opacity-50 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <ScrollReveal delay={0.1}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-accent/20 text-accent text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse-glow"></span>
            Available for opportunities
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-6 leading-tight">
            Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">Niteesh</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <p className="text-xl md:text-2xl text-text-secondary max-w-2xl mx-auto mb-12 font-medium">
            Data Science student @ SVIT building AI systems and modern web applications that solve real problems.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="#projects"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-accent text-black font-bold text-lg hover:bg-accent-light transition-colors flex items-center justify-center gap-2 group"
            >
              View My Work
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <a
              href="https://github.com/Niteesh546"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full glass hover:bg-white/5 transition-colors text-white font-medium text-lg flex items-center justify-center gap-2"
            >
              <Code size={20} />
              GitHub Profile
            </a>
          </div>
        </ScrollReveal>

        {/* Impact Stats */}
        <ScrollReveal delay={0.5}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto p-8 rounded-3xl glass-panel relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/5 to-transparent animate-shimmer" style={{ backgroundSize: "200% 100%" }}></div>
            
            <div className="flex flex-col items-center justify-center text-center relative z-10">
              <span className="text-4xl font-bold text-white mb-2">982</span>
              <span className="text-sm text-text-secondary uppercase tracking-wider font-semibold">TCS CodeVita Rank</span>
            </div>
            
            <div className="flex flex-col items-center justify-center text-center relative z-10 md:border-l border-white/10">
              <span className="text-4xl font-bold text-white mb-2">100+</span>
              <span className="text-sm text-text-secondary uppercase tracking-wider font-semibold">LeetCode Solved</span>
            </div>
            
            <div className="flex flex-col items-center justify-center text-center relative z-10 md:border-l border-white/10">
              <span className="text-4xl font-bold text-white mb-2">4+</span>
              <span className="text-sm text-text-secondary uppercase tracking-wider font-semibold">Major Projects</span>
            </div>

            <div className="flex flex-col items-center justify-center text-center relative z-10 md:border-l border-white/10">
              <span className="text-4xl font-bold text-white mb-2">26&apos;</span>
              <span className="text-sm text-text-secondary uppercase tracking-wider font-semibold">UIDAI Hackathon</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
