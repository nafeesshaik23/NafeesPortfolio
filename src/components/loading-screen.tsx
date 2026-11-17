"use client";

export function LoadingScreen() {
  return (
    <div className="system-loading-screen">
      {/* LAYER 0: Deep Cyberpunk Background */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay pointer-events-none z-0"></div>
      <div className="digital-rain-bg z-0"></div>

      <div className="intro-sequence-container flex flex-col items-center justify-center w-full h-full z-10 relative">
        
        {/* PHASE 1: Boot Sequence (0.0s - 0.7s) */}
        <div className="boot-phase absolute inset-0 flex items-center justify-center z-10">
          <p className="font-mono text-[10px] md:text-xs text-[var(--paper-soft)] tracking-[0.4em] uppercase init-text">
            // Initializing Data Core
          </p>
        </div>

        {/* PHASE 2: Data Convergence (0.7s - 1.4s) */}
        <div className="data-convergence absolute inset-0 flex items-center justify-center z-10">
          <span className="float-data data-1">SAP</span>
          <span className="float-data data-2">PYTHON</span>
          <span className="float-data data-3">SQL</span>
          <span className="float-data data-4">ETL</span>
          <span className="float-data data-5">SUPPLY CHAIN</span>
        </div>

        {/* PHASE 3 & 5: The Ronin (Materializes, then becomes atmospheric background) */}
        <div className="ronin-phase absolute inset-0 flex items-center justify-center pointer-events-none z-10">
          <div className="ronin-wrapper w-64 h-96 md:w-96 md:h-[32rem] relative">
            <img 
              src="/ronin-hero.jpg" 
              alt="" 
              className="ronin-image w-full h-full object-contain" 
            />
          </div>
        </div>

        {/* PHASE 4: The Katana Data Slash (2.4s) */}
        <div className="katana-slash-container absolute inset-0 flex items-center justify-center pointer-events-none z-50">
          <div className="katana-slash"></div>
          <div className="slash-flash"></div>
        </div>

        {/* PHASE 5: Identity Reveal (Foreground - 3.0s - 5.0s) */}
        <div className="identity-phase absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-30">
          <h1 className="reveal-name font-bold text-[var(--paper)] text-center mb-2 md:mb-4">
            NAFEES SHAIK
          </h1>
          <div className="reveal-subtitle-container flex flex-col items-center gap-3 text-center">
            <h2 className="reveal-subtitle text-[10px] md:text-sm font-mono text-[var(--teal)] tracking-[0.4em] font-bold">
              DATA ANALYTICS & AUTOMATION
            </h2>
            <p className="reveal-tech text-[8px] md:text-[10px] font-mono text-[var(--paper-soft)] tracking-[0.3em]">
              SAP · PYTHON · SQL · POWER BI · SUPPLY CHAIN
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}