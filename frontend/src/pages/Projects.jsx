import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Projects = () => {



   const location = useLocation(); // 2. Define location here

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
  return (
    <div className="bg-bg-color min-h-screen pb-20">
       {/* Hero / Ongoing Projects */}
       <section id="ongoing" className="bg-accent text-white py-20 relative overflow-hidden scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Ongoing Projects</h1>
          <p className="text-xl max-w-2xl mx-auto text-blue-50">Discover our active interventions and on-ground activities across various geographies.</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        
        {/* Project Highlights */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-3xl">🏢</span>
            <h2 className="text-3xl font-serif text-text-primary">Featured Active Projects</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 flex flex-col md:flex-row gap-6 hover:shadow-md transition-shadow">
              <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&q=80" alt="Project" className="w-full md:w-48 h-48 object-cover rounded-lg" />
              <div>
                <div className="text-xs font-bold text-accent uppercase tracking-wider mb-2">Health & Nutrition</div>
                <h3 className="text-2xl font-serif font-bold text-text-primary mb-2">Project Jeevan</h3>
                <p className="text-gray-600 text-sm mb-4">Implementing community-based management of acute malnutrition in rural districts.</p>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                  <span className="text-base mr-1">📍</span> District A, State X
                </div>
                <button className="bg-primary hover:bg-[#5a6425] text-white px-5 py-2 rounded font-medium text-sm transition-colors">
                  View Details
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 flex flex-col md:flex-row gap-6 hover:shadow-md transition-shadow">
              <img src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400&q=80" alt="Project" className="w-full md:w-48 h-48 object-cover rounded-lg" />
              <div>
                <div className="text-xs font-bold text-secondary uppercase tracking-wider mb-2">Education</div>
                <h3 className="text-2xl font-serif font-bold text-text-primary mb-2">Udaan Shiksha</h3>
                <p className="text-gray-600 text-sm mb-4">Upgrading 50 primary schools with digital classrooms and library facilities.</p>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                  <span className="text-base mr-1">📍</span> District B, State Y
                </div>
                <button className="bg-primary hover:bg-[#5a6425] text-white px-5 py-2 rounded font-medium text-sm transition-colors">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* State/District Map Placeholder & Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div id="listings" className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 p-8 overflow-hidden relative min-h-100 scroll-mt-24">
             <h3 className="text-xl font-serif font-bold text-text-primary mb-6 flex items-center gap-2">
               <span className="text-2xl mr-2">🗺️</span> State-wise / District-wise Listings
             </h3>
             <div className="w-full h-80 rounded-lg overflow-hidden relative group">
                 <img src="https://images.unsplash.com/photo-1526778548025-fa2fbf5946ce?q=80&w=800&auto=format&fit=crop" alt="Geographic Coverage" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                 <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors"></div>
                 {/* Map Pins overlay mock */}
                 <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-accent rounded-full border-2 border-white shadow-lg animate-ping"></div>
                 <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-accent rounded-full border-2 border-white shadow-lg animate-ping" style={{animationDelay: '0.5s'}}></div>
                 <div className="absolute bottom-1/3 right-1/4 w-4 h-4 bg-accent rounded-full border-2 border-white shadow-lg animate-ping" style={{animationDelay: '1s'}}></div>
             </div>
          </div>
          
          <div id="impact" className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 scroll-mt-24">
            <h3 className="text-xl font-serif font-bold text-text-primary mb-6 flex items-center gap-2">
               <span className="text-2xl mr-2">📊</span> Impact Snapshot
            </h3>
            <ul className="space-y-6">
              <li className="border-b pb-4">
                <div className="text-3xl font-bold text-primary mb-1">12</div>
                <div className="text-sm text-gray-600 uppercase tracking-wide">States Covered</div>
              </li>
              <li className="border-b pb-4">
                <div className="text-3xl font-bold text-secondary mb-1">45</div>
                <div className="text-sm text-gray-600 uppercase tracking-wide">Districts Operated In</div>
              </li>
              <li className="border-b pb-4">
                <div className="text-3xl font-bold text-accent mb-1">15+</div>
                <div className="text-sm text-gray-600 uppercase tracking-wide">Active Major Projects</div>
              </li>
              <li>
                <div className="text-3xl font-bold text-primary mb-1">2M+</div>
                <div className="text-sm text-gray-600 uppercase tracking-wide">Beneficiaries Reached</div>
              </li>
            </ul>
          </div>
        </div>

      </section>
    </div>
  );
};

export default Projects;
