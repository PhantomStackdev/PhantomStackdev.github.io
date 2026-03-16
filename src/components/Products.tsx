export default function Products() {
  return (
    <section id="products" className="py-24 px-6 bg-[#080808]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent text-sm font-mono tracking-widest uppercase mb-4">Products</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">What We&apos;re Building</h2>
          <p className="text-muted max-w-2xl mx-auto text-lg">
            AI-powered products designed to simplify everyday tasks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* BiteBook */}
          <div className="bg-card-bg border border-card-border rounded-xl p-8 hover:border-accent/30 transition-all duration-300 hover:-translate-y-1 group">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent">
                  <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold">BiteBook</h3>
                <span className="text-xs bg-accent/10 text-accent px-2 py-0.5 rounded-full font-mono">
                  Coming Soon
                </span>
              </div>
            </div>
            <p className="text-muted mb-4">
              Your AI-powered dining journal. Scan menus with computer vision,
              log meals effortlessly, discover new restaurants, and build a
              personal food history — all in one beautiful app.
            </p>
            <ul className="space-y-2 text-sm text-muted">
              <li className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent shrink-0"><path d="M5 13l4 4L19 7" /></svg>
                Menu scanning with computer vision
              </li>
              <li className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent shrink-0"><path d="M5 13l4 4L19 7" /></svg>
                Smart restaurant discovery
              </li>
              <li className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent shrink-0"><path d="M5 13l4 4L19 7" /></svg>
                Personal dining history &amp; insights
              </li>
            </ul>
          </div>

          {/* Mission Control */}
          <div className="bg-card-bg border border-card-border rounded-xl p-8 hover:border-accent/30 transition-all duration-300 hover:-translate-y-1 group">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent">
                  <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Mission Control</h3>
                <span className="text-xs bg-green-500/10 text-green-400 px-2 py-0.5 rounded-full font-mono">
                  Active
                </span>
              </div>
            </div>
            <p className="text-muted mb-4">
              A unified command center for managing AI agents, workflows, and
              infrastructure. Real-time monitoring, task orchestration, and
              system health — all from one sleek dashboard.
            </p>
            <ul className="space-y-2 text-sm text-muted">
              <li className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent shrink-0"><path d="M5 13l4 4L19 7" /></svg>
                AI agent orchestration
              </li>
              <li className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent shrink-0"><path d="M5 13l4 4L19 7" /></svg>
                Real-time system monitoring
              </li>
              <li className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent shrink-0"><path d="M5 13l4 4L19 7" /></svg>
                Workflow automation &amp; task management
              </li>
            </ul>
          </div>

          {/* Dashboard-in-a-Box */}
          <div className="bg-card-bg border border-card-border rounded-xl p-8 hover:border-accent/30 transition-all duration-300 hover:-translate-y-1 group">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent">
                  <path d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Dashboard-in-a-Box</h3>
                <span className="text-xs bg-accent/10 text-accent px-2 py-0.5 rounded-full font-mono">
                  In Development
                </span>
              </div>
            </div>
            <p className="text-muted mb-4">
              Drop-in dashboard solution for any project. Beautiful, responsive
              admin panels with built-in auth, data visualization, and theming —
              ready to deploy in minutes, not weeks.
            </p>
            <ul className="space-y-2 text-sm text-muted">
              <li className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent shrink-0"><path d="M5 13l4 4L19 7" /></svg>
                Pre-built UI components &amp; layouts
              </li>
              <li className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent shrink-0"><path d="M5 13l4 4L19 7" /></svg>
                Plug-and-play data connectors
              </li>
              <li className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent shrink-0"><path d="M5 13l4 4L19 7" /></svg>
                Customizable cyberpunk theming
              </li>
            </ul>
          </div>

          {/* MenuMind */}
          <div className="bg-card-bg border border-card-border rounded-xl p-8 hover:border-accent/30 transition-all duration-300 hover:-translate-y-1 group">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent">
                  <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold">MenuMind</h3>
                <span className="text-xs bg-accent/10 text-accent px-2 py-0.5 rounded-full font-mono">
                  In Development
                </span>
              </div>
            </div>
            <p className="text-muted mb-4">
              AI-powered menu management for restaurants. Automatically digitize
              menus, optimize pricing with data insights, and deliver dynamic
              menus that adapt to inventory and demand.
            </p>
            <ul className="space-y-2 text-sm text-muted">
              <li className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent shrink-0"><path d="M5 13l4 4L19 7" /></svg>
                AI menu digitization &amp; OCR
              </li>
              <li className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent shrink-0"><path d="M5 13l4 4L19 7" /></svg>
                Dynamic pricing optimization
              </li>
              <li className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent shrink-0"><path d="M5 13l4 4L19 7" /></svg>
                Inventory-aware menu updates
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
