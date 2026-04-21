"use client";

import { BookOpen, Target, Brain } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { ScrollReveal } from "./ScrollReveal";

export const About = () => {
  const cards = [
    {
      icon: <BookOpen className="text-accent" size={24} />,
      title: "Education",
      desc: "B.Tech Data Science @ SVIT. Strong foundation in mathematics, algorithms, and computational thinking.",
    },
    {
      icon: <Target className="text-accent" size={24} />,
      title: "Goal",
      desc: "Aspiring AI/ML Engineer focused on building scalable, real-world systems that deliver measurable impact.",
    },
    {
      icon: <Brain className="text-accent" size={24} />,
      title: "Focus Areas",
      desc: "Medical AI, Computer Vision, and Multimodal Deep Learning architectures.",
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <SectionHeader title="About Me" subtitle="Who I Am" />

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {cards.map((card, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="glass-panel p-8 rounded-3xl h-full hover:border-accent/40 transition-colors group">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
                <p className="text-text-secondary leading-relaxed">{card.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
