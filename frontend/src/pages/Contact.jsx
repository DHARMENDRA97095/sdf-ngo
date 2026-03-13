
const Contact = () => {
  return (
    <div className="bg-bg-color min-h-screen">
       {/* Hero */}
       <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-2xl mx-auto text-primary-50">Get in touch with us to learn more, partner, or share your thoughts.</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h2 className="text-2xl font-serif font-bold text-text-primary mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-white w-12 h-12 rounded-full shadow-sm flex items-center justify-center text-xl shrink-0 border border-gray-100">
                    📍
                  </div>
                  <div>
                    <h3 className="font-bold text-text-primary mb-1">Head Office Location</h3>
                    <p className="text-gray-600 text-sm">123 Development Avenue, NGO District, City, Country, 10001</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white w-12 h-12 rounded-full shadow-sm flex items-center justify-center text-xl shrink-0 border border-gray-100">
                    📞
                  </div>
                  <div>
                    <h3 className="font-bold text-text-primary mb-1">Phone Number</h3>
                    <p className="text-gray-600 text-sm">+19 1234584548 <br/> +91 8485289745</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white w-12 h-12 rounded-full shadow-sm flex items-center justify-center text-xl shrink-0 border border-gray-100">
                    ✉️
                  </div>
                  <div>
                    <h3 className="font-bold text-text-primary mb-1">Email Address</h3>
                    <p className="text-gray-600 text-sm">contact@sdfoundation.org <br/> info@sdfoundation.org</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white w-12 h-12 rounded-full shadow-sm flex items-center justify-center text-xl shrink-0 border border-gray-100">
                    🕒
                  </div>
                  <div>
                    <h3 className="font-bold text-text-primary mb-1">Working Hours</h3>
                    <p className="text-gray-600 text-sm">Monday - Sunday <br/> Full Time</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Verification Google Maps Placeholder */}
            <div className="w-full h-48 bg-gray-200 rounded-xl overflow-hidden shadow-inner border border-gray-300 relative flex items-center justify-center">
               <span className="text-gray-500 font-medium">Google Maps Embed Placeholder</span>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10">
            <h2 className="text-3xl font-serif font-bold text-text-primary mb-2">Write to Us</h2>
            <p className="text-gray-500 mb-8">Fill out the form below and our team will get back to you shortly.</p>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                  <input type="text" id="firstName" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="John" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                  <input type="text" id="lastName" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="Doe" />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="john@example.com" />
              </div>

               <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                <select id="subject" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-white">
                  <option value="">Select a subject...</option>
                  <option value="general">General Inquiry</option>
                  <option value="volunteer">Volunteering</option>
                  <option value="partnership">Partnership</option>
                  <option value="donation">Donation Queries</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Your Message *</label>
                <textarea id="message" rows="5" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-none" placeholder="How can we help you?"></textarea>
              </div>

              <button type="submit" className="bg-primary hover:-translate-y-1 hover:shadow-lg focus:ring-4 focus:ring-primary/20 hover:bg-[#5a6425] text-white px-8 py-4 rounded-lg font-medium text-lg transition-all shadow-md w-full md:w-auto flex items-center justify-center gap-2">
                <span className="text-xl">📤</span> Send Message
              </button>
            </form>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Contact;
