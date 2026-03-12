import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Programs = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  const programsList = [
    {
      id: "health",
      title: "Health & Nutrition",
      icon: "🏥",
      desc: "Improving maternal and child health outcomes, combatting malnutrition, and facilitating access to quality healthcare in remote areas.",
      img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
      stats: { beneficiaries: "50k+", regions: "4 States" },
    },
    {
      id: "education",
      title: "Education & Early Childhood Care",
      icon: "📚",
      desc: "Providing foundational learning, upgrading school infrastructure, and training educators to ensure holistic development for all children.",
      img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
      stats: { beneficiaries: "120k+", regions: "6 States" },
    },
    {
      id: "livelihoods",
      title: "Livelihoods & Skill Development",
      icon: "💼",
      desc: "Equipping youth and marginalized groups with vocational skills and promoting micro-enterprises for financial independence.",
      img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80",
      stats: { beneficiaries: "25k+", regions: "3 States" },
    },
    {
      id: "women",
      title: "Women & Youth Empowerment",
      icon: "👩🏽‍🎓",
      desc: "Creating safe spaces, fostering leadership, and advocating for equal rights to ensure active participation in socio-economic streams.",
      img: "https://images.unsplash.com/photo-1596443686812-2f45229eebc3?w=800&q=80",
      stats: { beneficiaries: "80k+", regions: "8 States" },
    },
    {
      id: "agriculture",
      title: "Agriculture & Climate Resilience",
      icon: "🌾",
      desc: "Promoting organic farming, climate-smart agriculture techniques, and supporting farmers to navigate the impacts of climate change.",
      img: "https://images.unsplash.com/photo-1592982537447-6f2cfdd4a2e5?q=80&w=800&auto=format&fit=crop",
      stats: { beneficiaries: "15k+", regions: "5 States" },
    },
    {
      id: "environment",
      title: "Environment & WASH",
      icon: "🚰",
      desc: "Ensuring access to clean water, promoting sanitation hygiene, and conserving local ecosystems for a healthier environment.",
      img: "https://images.unsplash.com/photo-1516641396056-0ce60a85d49f?w=800&q=80",
      stats: { beneficiaries: "200k+", regions: "7 States" },
    },
  ];

  return (
    <div className="bg-bg-color min-h-screen pb-20">
      {/* Hero */}
      <section className="bg-secondary text-white py-20 bg-opacity-90 relative">
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2000')] bg-cover bg-center"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Our Programmes
          </h1>
          <p className="text-xl max-w-2xl mx-auto text-green-50">
            Impact-driven initiatives targeting the most critical challenges
            facing our communities today.
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programsList.map((program, idx) => (
            <div
              key={idx}
              id={program.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group flex flex-col scroll-mt-28"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={program.img}
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 relative flex-grow flex flex-col">
                <div className="absolute -top-10 right-6 w-20 h-20 bg-white rounded-full flex items-center justify-center text-4xl shadow-xl border border-gray-50 hover:scale-110 transition-transform duration-300">
                  {program.icon}
                </div>
                <h3 className="text-2xl font-serif font-bold text-text-primary mb-4 mt-4 leading-tight">
                  {program.title}
                </h3>
                <p className="text-gray-600 mb-6 flex-grow">{program.desc}</p>
                <div className="flex items-center gap-2 mt-auto pt-4 border-t border-gray-100">
                  <span className="bg-[#E9EFE1] text-primary text-xs font-bold px-3 py-1 rounded-full">
                    {program.stats.beneficiaries} Beneficiaries
                  </span>
                  <span className="bg-blue-50 text-accent text-xs font-bold px-3 py-1 rounded-full">
                    {program.stats.regions} Active
                  </span>
                </div>
                <button className="text-primary font-bold hover:text-secondary uppercase tracking-wider text-sm self-start transition-colors">
                  Explore Programme &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Programs;
