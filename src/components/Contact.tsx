"use client";

import { Mail, User, Code } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { ScrollReveal } from "./ScrollReveal";

export const Contact = () => {
  const links = [
    {
      name: "GitHub",
      value: "Niteesh546",
      icon: <Code size={24} />,
      href: "https://github.com/Niteesh546",
      color: "hover:border-white/40 hover:text-white",
    },
    {
      name: "LinkedIn",
      value: "Niteesh Seetaram Naik",
      icon: <User size={24} />,
      href: "https://www.linkedin.com/in/niteesh-seetaram-naik-003856390",
      color: "hover:border-blue-500 hover:text-blue-400",
    },
    {
      name: "Email",
      value: "niteeshnaikmuroor@gmail.com",
      icon: <Mail size={24} />,
      href: "mailto:niteeshnaikmuroor@gmail.com",
      color: "hover:border-accent hover:text-accent",
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent/10 rounded-[100%] blur-[120px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10 max-w-5xl">
        <SectionHeader title="Get In Touch" subtitle="Contact" centered />

        <ScrollReveal delay={0.1}>
          <p className="text-center text-text-secondary text-lg mb-12 max-w-2xl mx-auto">
            I&apos;m currently looking for new opportunities in Data Science and AI/ML. 
            Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {links.map((link, i) => (
            <ScrollReveal key={i} delay={0.2 + i * 0.1}>
              <a 
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex flex-col items-center justify-center p-8 glass-panel rounded-3xl border border-white/5 text-text-secondary transition-all duration-300 group h-full ${link.color} hover:-translate-y-2 hover:bg-white/5`}
              >
                <div className="w-16 h-16 rounded-full bg-surface flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/5 group-hover:border-current">
                  {link.icon}
                </div>
                <h3 className="text-white font-bold text-xl mb-2">{link.name}</h3>
                <p className="text-sm font-medium text-center break-all">{link.value}</p>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
