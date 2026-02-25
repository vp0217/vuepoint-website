const techs = [
  "React", "Node.js", "Python", "MongoDB", "MySQL", "Kotlin", "Java", "Dart", "Flutter", "Power BI", "Bootstrap", "TypeScript"
];

const TechMarquee = () => {
  return (
    <section className="py-6 bg-foreground overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...techs, ...techs].map((tech, i) => (
          <span
            key={i}
            className="mx-8 text-sm font-semibold text-background/80 uppercase tracking-widest"
          >
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
};

export default TechMarquee;
