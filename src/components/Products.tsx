import { useMemo, useState } from 'react';
import { ChevronRight, MessageCircle, Settings, Shield, Snowflake, Wrench } from 'lucide-react';

const solutionData = [
  {
    id: 1,
    category: 'AC Systems',
    title: 'AC Repair & Installation',
    image: '/images/professional-ac-system.jpg',
    description:
      'Repair, installation, gas checks, servicing, and performance optimization for home and business air conditioning units.',
    highlights: ['Split unit repair', 'Installation support', 'Cooling performance checks', 'Routine servicing'],
    details:
      'We handle weak cooling, leaking units, unusual noise, power issues, and planned AC servicing with a neat and professional approach.',
    icon: Wrench,
  },
  {
    id: 2,
    category: 'Refrigeration',
    title: 'Fridge & Freezer Maintenance',
    image: '/images/professional-refrigeration-unit.jpg',
    description:
      'Professional support for domestic and commercial refrigerators, freezers, and food preservation equipment.',
    highlights: ['Fault diagnosis', 'Compressor checks', 'Temperature repair', 'Preventive maintenance'],
    details:
      'We help restore stable cooling, correct temperature faults, improve efficiency, and reduce repeated breakdowns in refrigeration systems.',
    icon: Snowflake,
  },
  {
    id: 3,
    category: 'Cold Rooms',
    title: 'Cold Room Service & Upkeep',
    image: '/images/professional-cold-room.jpg',
    description:
      'Reliable maintenance and repair support for cold rooms used in shops, restaurants, storage spaces, and business operations.',
    highlights: ['Panel inspection', 'Cooling unit maintenance', 'Temperature stability', 'Breakdown response'],
    details:
      'Our cold room service focuses on keeping your cooling environment consistent, efficient, and ready for day-to-day operation.',
    icon: Shield,
  },
  {
    id: 4,
    category: 'Maintenance',
    title: 'Preventive Maintenance Plans',
    image: '/images/professional-service-equipment.jpg',
    description:
      'Scheduled service plans that help you avoid costly failures and keep your systems running smoothly for longer.',
    highlights: ['Routine inspections', 'Performance tracking', 'Priority support', 'Long-term care'],
    details:
      'Maintenance plans are ideal for businesses and homeowners who want dependable cooling performance and fewer emergency issues.',
    icon: Settings,
  },
];

const filters = ['All', 'AC Systems', 'Refrigeration', 'Cold Rooms', 'Maintenance'];

const Products = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedSolution, setSelectedSolution] = useState<number>(1);

  const filteredSolutions = useMemo(() => {
    if (activeFilter === 'All') return solutionData;
    return solutionData.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  const handleWhatsApp = (title: string) => {
    const message = `Hello BIGD Refrigeration Services, I need help with ${title}.`;
    window.open(`https://wa.me/0623047106?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="products" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-600 mb-3">Our Solutions</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Cooling Services Built for <span className="text-cyan-600">Real Work</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            We focus on practical refrigeration support for AC systems, fridges, freezers, and cold rooms — delivered with a more professional standard from first contact to final repair.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                activeFilter === filter
                  ? 'bg-slate-900 text-white shadow-lg'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-8 items-start">
          <div className="grid md:grid-cols-2 gap-6">
            {filteredSolutions.map((solution) => {
              const Icon = solution.icon;
              const isActive = selectedSolution === solution.id;

              return (
                <article
                  key={solution.id}
                  className={`overflow-hidden rounded-3xl border transition-all duration-300 ${
                    isActive
                      ? 'border-cyan-500 shadow-2xl shadow-cyan-100'
                      : 'border-slate-200 shadow-md hover:shadow-xl'
                  }`}
                >
                  <div className="relative h-60 overflow-hidden">
                    <img
                      src={solution.image}
                      alt={solution.title}
                      className="h-full w-full object-cover transition duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
                    <div className="absolute left-5 bottom-5 right-5 flex items-end justify-between gap-4">
                      <div>
                        <p className="mb-2 inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                          {solution.category}
                        </p>
                        <h3 className="text-2xl font-bold text-white">{solution.title}</h3>
                      </div>
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-white backdrop-blur-sm">
                        <Icon size={22} />
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-slate-600 leading-relaxed mb-4">{solution.description}</p>

                    <div className="grid grid-cols-2 gap-2 mb-5">
                      {solution.highlights.map((item) => (
                        <div key={item} className="rounded-xl bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700">
                          {item}
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <button
                        onClick={() => setSelectedSolution(solution.id)}
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                      >
                        View Details
                        <ChevronRight size={16} />
                      </button>
                      <button
                        onClick={() => handleWhatsApp(solution.title)}
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-600"
                      >
                        <MessageCircle size={16} />
                        WhatsApp Quote
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <aside className="sticky top-24 rounded-3xl border border-slate-200 bg-slate-950 p-8 text-white shadow-2xl">
            {solutionData
              .filter((item) => item.id === selectedSolution)
              .map((item) => (
                <div key={item.id}>
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300 mb-3">Selected Service</p>
                  <h3 className="text-3xl font-bold mb-4">{item.title}</h3>
                  <p className="text-slate-300 leading-relaxed mb-6">{item.details}</p>

                  <img
                    src={item.image}
                    alt={item.title}
                    className="mb-6 h-56 w-full rounded-2xl object-cover"
                  />

                  <div className="space-y-3 mb-8">
                    {item.highlights.map((point) => (
                      <div key={point} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                        <span className="h-2.5 w-2.5 rounded-full bg-cyan-300" />
                        <span className="text-slate-100">{point}</span>
                      </div>
                    ))}
                  </div>

                  <div className="grid gap-3">
                    <a
                      href="tel:0623047106"
                      className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 font-semibold text-slate-950 transition hover:bg-slate-100"
                    >
                      Call 0623047106
                    </a>
                    <button
                      onClick={() => handleWhatsApp(item.title)}
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
                    >
                      <MessageCircle size={18} />
                      Chat on WhatsApp
                    </button>
                  </div>
                </div>
              ))}
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Products;
