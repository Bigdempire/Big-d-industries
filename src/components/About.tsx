import { Award, CheckCircle, Shield, Wrench, Zap } from 'lucide-react';

const About = () => {
  const strengths = [
    'Reliable AC repair and servicing',
    'Fridge and freezer maintenance support',
    'Cold room repair and upkeep',
    'Quick response for urgent breakdowns',
    'Neat, professional work on every visit',
    'Direct support by phone, WhatsApp, or email',
  ];

  const values = [
    {
      icon: Award,
      title: 'Professional Quality',
      description: 'We focus on dependable workmanship and clean finishing on every refrigeration job.',
    },
    {
      icon: Wrench,
      title: 'Practical Expertise',
      description: 'We work on real cooling problems every day, from AC faults to fridge and cold room issues.',
    },
    {
      icon: Zap,
      title: 'Fast Response',
      description: 'When cooling systems fail, we aim to respond quickly so your home or business is not disrupted.',
    },
    {
      icon: Shield,
      title: 'Trusted Support',
      description: 'We build trust through honest communication, straightforward service, and long-term client care.',
    },
  ];

  return (
    <section id="about" className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-600 mb-3">About BIGD</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            A More Professional Standard for <span className="text-cyan-600">Refrigeration Service</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            BIGD Refrigeration Services is focused on keeping AC systems, refrigerators, freezers, and cold rooms working properly through timely repair, careful maintenance, and dependable support.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-slate-900 mb-5">Built around service, reliability, and real cooling needs</h3>
            <p className="text-slate-600 text-lg leading-relaxed mb-5">
              We work with customers who need their cooling systems running properly — whether that means fixing an AC unit, restoring a faulty fridge, or keeping a cold room stable for daily business use.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Our goal is simple: deliver practical refrigeration support that feels professional, responsive, and easy to trust. That means clear communication, quality work, and fast ways for clients to reach us.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {strengths.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-sm border border-slate-200">
                  <CheckCircle size={20} className="text-cyan-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-cyan-200 blur-3xl opacity-50" />
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl">
              <img
                src="/images/professional-service-equipment.jpg"
                alt="Professional refrigeration equipment"
                className="h-[460px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/15 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="grid grid-cols-3 gap-3">
                  <div className="rounded-2xl bg-white/95 p-4 text-center text-slate-900">
                    <p className="text-2xl font-bold text-cyan-700">AC</p>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Repair</p>
                  </div>
                  <div className="rounded-2xl bg-white/95 p-4 text-center text-slate-900">
                    <p className="text-2xl font-bold text-cyan-700">Fridge</p>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Service</p>
                  </div>
                  <div className="rounded-2xl bg-white/95 p-4 text-center text-slate-900">
                    <p className="text-2xl font-bold text-cyan-700">Cold</p>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Rooms</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mb-16">
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <article key={value.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl transition">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900 text-cyan-300">
                  <Icon size={26} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.description}</p>
              </article>
            );
          })}
        </div>

        <div className="rounded-[2rem] bg-gradient-to-r from-slate-950 to-cyan-900 p-8 sm:p-10 text-white">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300 mb-3">Need service now?</p>
              <h3 className="text-3xl font-bold mb-4">We make it easy to reach BIGD Refrigeration Services</h3>
              <p className="text-slate-200 text-lg leading-relaxed">
                If your AC is not cooling, your fridge has stopped working, or your cold room needs maintenance, contact us directly for fast support and a professional response.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <a
                href="tel:0623047106"
                className="rounded-2xl bg-white px-6 py-4 text-center font-bold text-slate-950 transition hover:bg-slate-100"
              >
                Call 0623047106
              </a>
              <a
                href="mailto:bigdempre59@gmail.com"
                className="rounded-2xl bg-cyan-400 px-6 py-4 text-center font-bold text-slate-950 transition hover:bg-cyan-300"
              >
                Send Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
