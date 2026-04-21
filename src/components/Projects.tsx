"use client";

import { OuterLink, Code, Database } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { ScrollReveal } from "./ScrollReveal";

export const Projects = () => {
  const projects = [
    {
      title: "MedGemma AI Insight",
      desc: "Clinical-grade diagnostic platform for advanced medical imaging and patient management. Focuses on high-precision analysis for SPECT scans using AI-driven capabilities.",
      problem: "Limited access to AI-powered clinical imaging analysis tools.",
      solution: "Built a full diagnostic platform with SPECT scan analysis, patient records, and report export.",
      tech: ["TypeScript", "Next.js", "AI/ML", "Material 3"],
      repo: "https://github.com/Niteesh546/Medgemma_Ai",
      accent: "from-purple-500 to-indigo-500",
      bgAccent: "group-hover:shadow-[0_0_40px_rgba(139,92,246,0.15)]",
    },
    {
      title: "Multimodal Video Sentiment Analyzer",
      desc: "AI model fusing BERT (text), R3D_18 (video), and 1D-CNN (audio) to predict emotions and sentiment from video clips using the MELD dataset.",
      problem: "Understanding sentiment requires analyzing text, audio, and visual cues together.",
      solution: "Multimodal fusion model classifying 7 emotions & 3 sentiment levels with a Gradio web interface.",
      tech: ["Python", "PyTorch", "BERT", "Whisper", "Gradio"],
      repo: "https://github.com/Niteesh546/vedio_sen",
      accent: "from-blue-500 to-cyan-500",
      bgAccent: "group-hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]",
    },
    {
      title: "Project APAN (Aadhaar Hackathon)",
      desc: "Interactive data analysis dashboard created for the UIDAI Data Hackathon 2026 to tackle Aadhaar data integrity challenges at a national scale.",
      problem: "Identifying anomalies and extracting insights from massive Aadhaar datasets is complex.",
      solution: "Developed an interactive dashboard and complete analysis pipeline using Pandas and Plotly.",
      tech: ["Python", "Pandas", "Jupyter", "Plotly"],
      repo: "https://github.com/Niteesh546/Aadhar_HACK_Analysis",
      accent: "from-orange-500 to-amber-500",
      bgAccent: "group-hover:shadow-[0_0_40px_rgba(249,115,22,0.15)]",
    },
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <SectionHeader title="Featured Projects" subtitle="Portfolio" />

        <div className="grid grid-cols-1 gap-8 mt-12">
          {projects.map((project, i) => (
            <ScrollReveal key={i} delay={0.1}>
              <div className={`glass-panel rounded-3xl p-8 md:p-10 transition-all duration-500 border border-white/5 relative overflow-hidden group ${project.bgAccent}`}>
                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${project.accent} opacity-5 blur-[100px] group-hover:opacity-20 transition-opacity duration-500`}></div>
                
                <div className="flex flex-col md:flex-row gap-8 relative z-10">
                  <div className="flex-1 space-y-6">
                    <h3 className="text-3xl font-bold text-white tracking-tight">{project.title}</h3>
                    <p className="text-text-secondary text-lg leading-relaxed">{project.desc}</p>
                    
                    <div className="space-y-4 bg-surface rounded-2xl p-6 border border-white/5">
                      <div>
                        <span className="flex items-center gap-2 text-red-400 font-medium mb-1">
                          <span className="w-2 h-2 rounded-full bg-red-400"></span> Problem
                        </span>
                        <p className="text-text-secondary text-sm">{project.problem}</p>
                      </div>
                      <div className="h-px w-full bg-border"></div>
                      <div>
                        <span className="flex items-center gap-2 text-emerald-400 font-medium mb-1">
                          <span className="w-2 h-2 rounded-full bg-emerald-400"></span> Solution
                        </span>
                        <p className="text-text-secondary text-sm">{project.solution}</p>
                      </div>
                    </div>
                  </div>

                  <div className="md:w-1/3 flex flex-col justify-between space-y-8">
                    <div>
                      <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span key={tech} className="px-3 py-1 rounded-full bg-white/5 text-text-secondary text-xs font-medium border border-white/10">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <a 
                      href={project.repo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-white hover:text-accent transition-colors py-3 w-fit font-medium group/link"
                    >
                      <Code size={20} />
                      View Source Code
                      <svg className="w-5 h-5 -rotate-45 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
