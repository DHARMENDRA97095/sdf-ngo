import { Link } from "react-router-dom";
import CountUp from "react-countup";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-[#F9F6EA] overflow-hidden pt-12 pb-24 md:pt-20 md:pb-32">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-white/30 to-transparent"></div>
      <section className="relative bg-[#F9F6EA]/20 overflow-hidden pt-12 pb-24 md:pt-20 md:pb-32">
        <div className="absolute inset-0 z-0 opacity-40">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-white/0 to-transparent"></div>
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: "url('/banner/hero.png')" }}
          ></div>
          <div className="absolute inset-0 bg-white/15"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold leading-tight mb-6 mt-10">
              <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-accent">
                Empowering
              </span>{" "}
              Communities, <br />
              Sustaining the Future
            </h1>
            <p className="text-lg md:text-xl text-white mb-8 leading-relaxed max-w-xl">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat.
            </p>
            <button className="bg-primary hover:bg-[#5a6425] text-white px-8 py-3 rounded-full font-medium text-lg transition-colors shadow-lg">
              Learn More
            </button>
          </div>
        </div>

        {/* Curved bottom edge */}
        <div
          className="absolute bottom-0 w-full overflow-hidden leading-none z-10"
          style={{ transform: "translateY(1px)" }}
        >
          <svg
            className="w-full h-12 md:h-24 lg:h-32 drop-shadow-sm"
            preserveAspectRatio="none"
            viewBox="0 0 1440 320"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="var(--color-bg-color)"
              fillOpacity="1"
              d="M0,160L48,176C96,192,192,224,288,218.7C384,213,480,171,576,149.3C672,128,768,128,864,149.3C960,171,1056,213,1152,229.3C1248,245,1344,235,1392,229.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 relative bg-bg-color">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Left Content */}
            <div className="lg:w-1/3">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-2xl shadow-sm animate-float">
                  🌱
                </div>
                <h2 className="text-3xl md:text-4xl font-serif text-text-primary leading-tight">
                  About Our
                  <br />
                  Organization
                </h2>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Duis eterueh voie roiar ma inots elitrum velite ne cuolestieru
                cuigiatat llvoneaglut excepteur cillum dolore eua protert it.
                augait noes parrat teilisuntials idupiliees ipum.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 shrink-0"></span>
                  <span className="text-gray-600 text-sm">
                    Pesentector tappelpat, euell cocenata velf, colotiut nnos
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 shrink-0"></span>
                  <span className="text-gray-600 text-sm">
                    Uit fanlis sed dolem frigiats mulit zooflaits veilles
                  </span>
                </li>
              </ul>
              <Link to="/about">
                <button className="bg-primary hover:bg-[#5a6425] text-white px-8 py-2.5 rounded-full font-medium transition-colors">
                  View More
                </button>
              </Link>
            </div>

            {/* Right Cards */}
            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Water Conservation",
                  icon: "💧",
                  info: "Lorem ipsum dolor sit amet ociae idu ailsing elit, sed dini net gamtz.",
                  img: "about/2.jpg",
                },
                {
                  title: "Sustainable Agriculture",
                  icon: "🌿",
                  info: "Lorem ipsum dolor sit amet ociae idu ailsing elit, sed dini net gamtz.",
                  img: "about/2.jpg",
                },
                {
                  title: "Community Development",
                  icon: "👥",
                  info: "Lorem ipsum dolor sit amet ociae idu ailsing elit, sed dini net gamtz.",
                  img: "about/2.jpg",
                },
              ].map((card, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl shadow-sm text-center border border-gray-100 pb-6 flex flex-col h-full hover:shadow-md transition-shadow"
                >
                  <div className="p-4">
                    <img
                      src={card.img}
                      alt={card.title}
                      className="w-full h-32 object-cover rounded-xl shadow-sm"
                    />
                  </div>
                  <div className="p-5 grow flex flex-col">
                    <h3 className="text-xl font-serif text-text-primary mb-3">
                      {card.title}
                    </h3>
                    <p className="text-gray-500 text-sm mb-6 grow">
                      {card.info}
                    </p>
                    <button className="bg-primary hover:bg-[#5a6425] text-white px-6 py-2 rounded-full font-medium text-sm transition-colors self-start mt-auto">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas Slider / Stats */}
      <section className="py-16 bg-[#F3EFE4] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif text-text-primary mb-12">
            Our Stats Areas
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {/* Stat 1 */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300 flex items-center gap-4 justify-center border border-gray-100">
              <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center text-3xl">
                👥
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold text-text-primary">
                  <CountUp end={400} duration={5} />+
                </p>
                <p className="text-xs text-gray-500 uppercase tracking-wide">
                  Communities Empowered
                </p>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300 flex items-center gap-4 justify-center border border-gray-100">
              <div className="w-14 h-14 rounded-full bg-cyan-50 flex items-center justify-center text-3xl">
                💧
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold text-text-primary">
                  <CountUp end={2000} duration={5} />+
                </p>
                <p className="text-xs text-gray-500 uppercase tracking-wide">
                  Water Resources Restored
                </p>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300 flex items-center gap-4 justify-center border border-gray-100">
              <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center text-3xl">
                🧑‍🌾
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold text-text-primary">
                  <CountUp end={5500} duration={5} separator="," />+
                </p>
                <p className="text-xs text-gray-500 uppercase tracking-wide">
                  Farmers Trained
                </p>
              </div>
            </div>

            {/* Stat 4 */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300 flex items-center gap-4 justify-center border border-gray-100">
              <div className="w-14 h-14 rounded-full bg-emerald-50 flex items-center justify-center text-3xl">
                🌳
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold text-text-primary">
                  <CountUp end={25000} duration={5} separator="," />+
                </p>
                <p className="text-xs text-gray-500 uppercase tracking-wide">
                  Trees Planted
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Programs */}
      <section className="py-24 bg-bg-color">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif text-text-primary mb-12">
            Our Programs
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Rural Clean Water Initiative", img: "about/3.png" },
              { title: "Women Empowerment", img: "about/4.png" },
              { title: "Environmental Protection", img: "about/5.png" },
              { title: "Child Education", img: "about/6.png" },
            ].map((program, idx) => (
              <div
                key={idx}
                className="bg-white rounded border border-gray-100 text-left hover:shadow-lg transition-shadow overflow-hidden flex flex-col h-full rounded-b-xl rounded-t-xl"
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={program.img}
                    alt={program.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 grow flex flex-col">
                  <h3 className="text-xl font-serif font-bold text-text-primary mb-3 leading-tight">
                    {program.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-6 grow">
                    Duis a utrarn aluamiin emfeite in napires iensuqn euflt,
                    osie aliaiumi et thapo cuio.
                  </p>
                  {/* <button className="bg-primary hover:bg-[#5a6425] text-white px-6 py-2 rounded-full font-medium text-sm transition-colors self-start mt-auto">
                    Learn More
                  </button> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stories / Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif text-text-primary mb-4">
            Stories of Impact
          </h2>
          <p className="text-xl text-gray-500 mb-12">
            Hear directly from the communities we serve.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="bg-bg-color p-8 rounded-2xl relative">
              <div className="text-4xl text-primary opacity-20 absolute top-4 left-6">
                "
              </div>
              <p className="text-gray-700 italic mb-6 relative z-10">
                The clean water initiative completely transformed our village.
                Our children are healthier, and we no longer spend hours walking
                to fetch water.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-15 bg-gray-300 rounded-full overflow-hidden">
                  <img
                    src="testimonial/man.png"
                    alt="Amina"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-text-primary">Amina K.</h4>
                  <p className="text-sm text-gray-500">Community Leader</p>
                </div>
              </div>
            </div>

            <div className="bg-bg-color p-8 rounded-2xl relative">
              <div className="text-4xl text-accent opacity-20 absolute top-4 left-6">
                "
              </div>
              <p className="text-gray-700 italic mb-6 relative z-10">
                Thanks to the sustainable farming program, my crop yield has
                doubled this year. I can now afford to send both my daughters to
                school.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-15 bg-gray-300 rounded-full overflow-hidden">
                  <img
                    src="testimonial/women.png"
                    alt="Raj"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-text-primary">Sonali Singh</h4>
                  <p className="text-sm text-gray-500">Local Farmer</p>
                </div>
              </div>
            </div>

            <div className="bg-bg-color p-8 rounded-2xl relative">
              <div className="text-4xl text-secondary opacity-20 absolute top-4 left-6">
                "
              </div>
              <p className="text-gray-700 italic mb-6 relative z-10">
                The skill development workshop gave me the confidence to start
                my own tailoring business. I now employ three other women from
                my neighborhood.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-15 bg-gray-300 rounded-full overflow-hidden">
                  <img
                    src="testimonial/man.png"
                    alt="Sarah"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-text-primary">Sarah M.</h4>
                  <p className="text-sm text-gray-500">Small Business Owner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-24 bg-[#E9EFE1] relative">
        {/* Leaf decoration top right placeholder */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 relative">
          <h2 className="text-3xl font-serif text-text-primary mb-4">
            Get Involved
          </h2>
          <p className="text-xl text-gray-700 mb-12">
            Join Us in Making a Difference
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm relative group cursor-pointer h-80">
              <img
                src="about/vol.png"
                alt="Volunteer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h3 className="text-3xl text-white font-serif font-bold tracking-wide">
                  Volunteer With Us
                </h3>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm relative group cursor-pointer h-80">
              <img
                src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=1200&auto=format&fit=crop"
                alt="Donate"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-primary/40 flex items-center justify-center">
                <h3 className="text-3xl text-white font-serif font-bold tracking-wide">
                  Make a Donation
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-20 bg-primary/10 border-t border-primary/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-4xl mb-4 block animate-float">✉️</span>
          <h2 className="text-3xl font-serif text-text-primary mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Stay updated with our latest projects, success stories, and ways you
            can help. Join our community of changemakers today.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="grow px-6 py-4 rounded-full border border-gray-300 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 bg-white shadow-sm"
              required
            />
            <button
              type="submit"
              className="bg-primary hover:bg-[#5a6425] text-white px-8 py-4 rounded-full font-bold transition-all shadow-md hover:-translate-y-1 hover:shadow-lg whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
