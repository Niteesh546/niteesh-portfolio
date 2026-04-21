import { ScrollReveal } from "./ScrollReveal";

export const SectionHeader = ({
  title,
  subtitle,
  centered = false,
}: {
  title: string;
  subtitle: string;
  centered?: boolean;
}) => {
  return (
    <ScrollReveal>
      <div className={`mb-16 ${centered ? "text-center flex flex-col items-center" : ""}`}>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-4">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse-glow"></span>
          <span className="text-accent text-sm font-medium tracking-wide uppercase">{subtitle}</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
          {title.split(" ").map((word, i, arr) => (
            <span key={i} className={i === arr.length - 1 ? "text-accent" : ""}>
              {word}{" "}
            </span>
          ))}
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-accent to-transparent rounded-full opacity-50"></div>
      </div>
    </ScrollReveal>
  );
};
