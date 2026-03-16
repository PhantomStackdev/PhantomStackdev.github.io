export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-[#0d1117] to-background animate-gradient opacity-80" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/3 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <p className="text-accent text-sm font-mono tracking-widest uppercase mb-6 animate-fade-in-up">
          AI-Powered Solutions
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          Building the Future
          <br />
          <span className="text-accent">with Intelligence</span>
        </h1>
        <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          We build intelligent tools and help businesses embrace AI.
          From custom applications to strategic consulting, we turn
          ambitious ideas into production-ready solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <a
            href="#contact"
            className="bg-accent hover:bg-accent-hover text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors"
          >
            Get in Touch
          </a>
          <a
            href="#products"
            className="border border-card-border hover:border-accent/50 text-foreground px-8 py-3 rounded-lg text-lg font-medium transition-colors"
          >
            Our Work
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-muted">
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
        </svg>
      </div>
    </section>
  );
}
