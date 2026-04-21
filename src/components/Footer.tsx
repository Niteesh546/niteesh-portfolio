import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-8 border-t border-white/5 bg-background relative z-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-text-secondary text-sm">
          © {new Date().getFullYear()} Niteesh Seetaram Naik. All rights reserved.
        </p>
        
        <div className="flex items-center gap-6">
          <p className="text-text-secondary text-sm">
            Built with <span className="text-white font-medium">Next.js</span> & <span className="text-white font-medium">Tailwind CSS</span>
          </p>
          
          <a 
            href="#" 
            className="w-10 h-10 rounded-full bg-surface border border-white/5 flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent/50 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};
