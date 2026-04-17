import { ChevronRight, Phone, Shield, Snowflake, Wrench } from 'lucide-react';

const fallingIce = [
  { left: '4%', size: 18, delay: '0s', duration: '13s' },
  { left: '11%', size: 10, delay: '2s', duration: '11s' },
  { left: '19%', size: 14, delay: '5s', duration: '14s' },
  { left: '27%', size: 22, delay: '1s', duration: '16s' },
  { left: '35%', size: 12, delay: '4s', duration: '10s' },
  { left: '44%', size: 16, delay: '3s', duration: '15s' },
  { left: '53%', size: 24, delay: '6s', duration: '17s' },
  { left: '61%', size: 11, delay: '1.5s', duration: '12s' },
  { left: '70%', size: 20, delay: '4.5s', duration: '14s' },
  { left: '78%', size: 13, delay: '7s', duration: '11s' },
  { left: '86%', size: 17, delay: '2.5s', duration: '15s' },
  { left: '94%', size: 9, delay: '5.5s', duration: '10s' },
];

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(34,211,238,0.18),_transparent_32%),radial-gradient(circle_at_bottom_left,_rgba(59,130,246,0.2),_transparent_28%)]" />
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:56px_56px]" />
      <div className="ice-flow-layer absolute inset-0 pointer-events-none" aria-hidden="true">
        {fallingIce.map((piece, index) => (
          <span
            key={index}
            className="ice-piece"
            style={{
              left: piece.left,
              width: `${piece.size}px`,
              height: `${piece.size * 1.8}px`,
              animationDelay: piece.delay,
              animationDuration: piece.duration,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-18 sm:py-24 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200 mb-6">
              <Snowflake size={16} />
              Trusted AC, Fridge & Cold Room Specialists
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Professional Refrigeration
              <span className="block text-cyan-300">Repair & Maintenance</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-200 leading-relaxed max-w-2xl mb-8">
              BIGD Refrigeration Services provides reliable AC repair, fridge servicing, and cold room maintenance for homes, shops, restaurants, and businesses. Fast response, neat workmanship, and dependable cooling support when you need it most.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/20 text-cyan-300">
                  <Wrench size={20} />
                </div>
                <h3 className="font-semibold text-white">AC Repairs</h3>
                <p className="text-sm text-slate-300 mt-1">Diagnostics, repairs, installation, and servicing.</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/20 text-cyan-300">
                  <Snowflake size={20} />
                </div>
                <h3 className="font-semibold text-white">Fridge Service</h3>
                <p className="text-sm text-slate-300 mt-1">Domestic and commercial refrigeration support.</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/20 text-cyan-300">
                  <Shield size={20} />
                </div>
                <h3 className="font-semibold text-white">Cold Rooms</h3>
                <p className="text-sm text-slate-300 mt-1">Maintenance plans and quick breakdown support.</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-8 py-4 text-base font-bold text-slate-950 transition hover:bg-cyan-300"
              >
                Request a Free Quote
                <ChevronRight size={20} />
              </button>

              <a
                href="tel:0623047106"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-8 py-4 text-base font-bold text-white transition hover:bg-white/10"
              >
                <Phone size={18} />
                Call 0623047106
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 max-w-2xl">
              <div>
                <p className="text-3xl font-bold text-cyan-300">24/7</p>
                <p className="text-sm text-slate-300 mt-1">Emergency response</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-cyan-300">Fast</p>
                <p className="text-sm text-slate-300 mt-1">Repair turnaround</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-cyan-300">Clean</p>
                <p className="text-sm text-slate-300 mt-1">Professional finish</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-5 rounded-[2rem] bg-cyan-400/15 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900 shadow-2xl">
              <img
                src="/images/professional-ac-system.jpg"
                alt="Professional air conditioning system"
                className="h-[420px] sm:h-[520px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/10 to-transparent" />

              <div className="absolute bottom-5 left-5 right-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl bg-white/95 p-4 text-slate-900 shadow-lg">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700">Service Focus</p>
                  <p className="mt-2 text-lg font-bold">Cooling systems handled with care</p>
                  <p className="mt-1 text-sm text-slate-600">Residential, commercial, and cold storage support.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-950/75 p-4 text-white backdrop-blur-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">BIGD Promise</p>
                  <p className="mt-2 text-lg font-bold">Reliable repairs. Professional results.</p>
                  <p className="mt-1 text-sm text-slate-300">Call or WhatsApp anytime for quick assistance.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
