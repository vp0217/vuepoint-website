const Partners = () => {
  const partners = [
    "Google", "Microsoft", "Amazon", "Meta", "IBM",
    "Cisco", "Oracle", "Shopify", "Stripe", "Flutterwave",
  ];

  return (
    <section className="section-padding section-light">
      <div className="container mx-auto text-center">
        <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Trusted By</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
          Our Hiring Partners & Affiliates
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 max-w-4xl mx-auto">
          {partners.map((partner) => (
            <div
              key={partner}
              className="bg-background border border-border rounded-xl px-8 py-4 text-muted-foreground font-heading font-bold text-sm hover:text-foreground hover:shadow-md transition-all duration-300"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
