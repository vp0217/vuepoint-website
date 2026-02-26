const Stats = () => {
  return (
    <section className="py-12 md:py-16 bg-foreground">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="grid grid-cols-2 gap-4 sm:gap-8">
            <div className="text-center">
              <p className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-secondary">10%</p>
              <p className="text-xs sm:text-sm text-background/70 mt-1 sm:mt-2">Top Developers Trained</p>
            </div>
            <div className="text-center">
              <p className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-secondary">90%</p>
              <p className="text-xs sm:text-sm text-background/70 mt-1 sm:mt-2">Hiring Rate for Graduates</p>
            </div>
          </div>
          <div className="text-center md:text-left">
            <p className="text-background/80 text-base md:text-lg leading-relaxed">
              We are turning individuals without skills into world-class skilled tech talents.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
