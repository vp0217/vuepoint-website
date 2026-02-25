const Stats = () => {
  return (
    <section className="py-16 bg-foreground">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="grid grid-cols-2 gap-8">
            <div className="text-center">
              <p className="text-5xl font-heading font-extrabold text-secondary">10%</p>
              <p className="text-sm text-background/70 mt-2">Top Developers Trained</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-heading font-extrabold text-secondary">90%</p>
              <p className="text-sm text-background/70 mt-2">Hiring Rate for Graduates</p>
            </div>
          </div>
          <div className="text-center md:text-left">
            <p className="text-background/80 text-lg leading-relaxed">
              We are turning individuals without skills into world-class skilled tech talents.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
