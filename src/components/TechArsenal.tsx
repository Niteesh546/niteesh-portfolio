"use client";

import { Code2, Cpu, Wrench, Globe, Database } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { ScrollReveal } from "./ScrollReveal";

export const TechArsenal = () => {
  const categories = [
    {
      title: "Core Languages",
      icon: <Code2 />,
      skills: ["Python", "Java", "C", "Dart", "TypeScript"],
    },
    {
      title: "AI & Machine Learning",
      icon: <Cpu />,
      skills: ["PyTorch", "TensorFlow", "Scikit", "OpenCV", "Transformers", "MedGemma"],
    },
    {
      title: "Web & Backend",
      icon: <Globe />,
      skills: ["Next.js", "React", "FastAPI", "Flask", "Gradio", "Node.js"],
    },
    {
      title: "Data & DBs",
      icon: <Database />,
      skills: ["Pandas", "NumPy", "MySQL", "Firebase", "PostgreSQL"],
    },
    {
      title: "Tools & DevOps",
      icon: <Wrench />,
      skills: ["Git", "Docker", "AWS SageMaker", "Hugging Face", "Linux"],
    },
  ];

  return (
    <section id="skills" className="py-24 relative bg-surface-light border-y border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/5 via-background to-background"></div>
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeader title="Technical Arsenal" subtitle="Skills" centered />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 max-w-6xl mx-auto">
          {categories.map((category, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="glass p-8 rounded-3xl h-full border-t border-l border-white/10 hover:-translate-y-2 transition-transform duration-300 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)]">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-accent">{category.icon}</div>
                  <h3 className="text-lg font-bold text-white">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg bg-surface text-text-secondary text-sm font-medium border border-white/5 hover:border-accent/40 hover:text-white transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
