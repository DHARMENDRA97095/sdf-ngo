const Donate = () => {
  return (
    <div className="bg-bg-color min-h-screen pb-24">
      {/* Hero */}
      <section className="bg-accent text-white py-20 relative overflow-hidden h-100">
        <div className="absolute inset-0  opacity-60">
           <img src="banner/donate-page.png" className="w-full h-full object-cover" alt="Background" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white mt-8">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Invest in Sustainable Change</h1>
          <p className="text-xl max-w-2xl mx-auto text-blue-50">Your donation directly empowers marginalized communities. Together, we can build a thriving, equitable future.</p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-10 relative z-20">
         <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
            
            {/* Left Box (Info) */}
            <div className="bg-primary p-12 text-white md:w-2/5 flex flex-col justify-between">
               <div>
                 <span className="text-5xl mb-6 block animate-float">🎁</span>
                 <h2 className="text-3xl font-serif font-bold mb-6 text-white">Why Donate?</h2>
                 <ul className="space-y-4">
                   <li className="flex items-start gap-3">
                     <span className="text-accent text-xl mt-1">✓</span>
                     <p className="text-primary-50">90% of funds go directly into grassroots programmes.</p>
                   </li>
                   <li className="flex items-start gap-3">
                     <span className="text-accent text-xl mt-1">✓</span>
                     <p className="text-primary-50">100% Tax Deductible under section 80G in India.</p>
                   </li>
                   <li className="flex items-start gap-3">
                     <span className="text-accent text-xl mt-1">✓</span>
                     <p className="text-primary-50">Complete transparency with annual impact statements sent directly to your inbox.</p>
                   </li>
                 </ul>
               </div>
               <div className="mt-12 p-6 bg-white/10 rounded-xl">
                 <p className="text-sm font-bold uppercase tracking-wider text-primary-50 mb-2">Our Promise</p>
                 <p className="italic font-serif">"Every dollar you donate becomes a building block for a child's future."</p>
               </div>
            </div>

            {/* Right Box (Form Mock) */}
            <div className="p-12 md:w-3/5">
                <h3 className="text-2xl font-serif font-bold text-text-primary mb-8 border-b pb-4">Make a Secure Donation</h3>
                
                <div className="mb-8">
                  <p className="font-bold text-gray-700 mb-4">Choose Donation Frequency:</p>
                  <div className="flex gap-4">
                    <label className="flex-1 cursor-pointer">
                      <input type="radio" name="frequency" className="hidden peer" defaultChecked />
                      <div className="border border-gray-200 rounded-lg py-3 text-center peer-checked:bg-primary/10 peer-checked:border-primary peer-checked:text-primary font-bold transition-all">
                        One Time
                      </div>
                    </label>
                    <label className="flex-1 cursor-pointer">
                      <input type="radio" name="frequency" className="hidden peer" />
                      <div className="border border-gray-200 rounded-lg py-3 text-center peer-checked:bg-primary/10 peer-checked:border-primary peer-checked:text-primary font-bold transition-all flex items-center justify-center gap-2">
                         Monthly <span className="bg-accent text-white text-[10px] px-2 py-1 rounded-full uppercase tracking-wider">Impact</span>
                      </div>
                    </label>
                  </div>
                </div>

                <div className="mb-8">
                  <p className="font-bold text-gray-700 mb-4">Select Amount:</p>
                  <div className="grid grid-cols-3 gap-3 mb-3">
                     {['₹1,000', '₹2,500', '₹5,000', '₹10,000', '₹25,000'].map(amt => (
                       <button key={amt} className="border border-gray-200 rounded-lg py-3 hover:border-primary focus:bg-primary focus:text-white focus:border-primary text-gray-700 font-bold transition-colors">
                         {amt}
                       </button>
                     ))}
                     <button className="border border-gray-200 rounded-lg py-3 focus:bg-primary focus:text-white focus:border-primary text-gray-700 font-bold transition-colors">
                         Other Amount
                     </button>
                  </div>
                </div>

                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="First Name" className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary w-full" required />
                    <input type="text" placeholder="Last Name" className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary w-full" required />
                  </div>
                  <input type="email" placeholder="Email Address" className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary w-full" required />
                  <input type="tel" placeholder="Phone Number" className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary w-full" required />
                  
                  <button type="submit" className="w-full bg-accent hover:bg-[#237586] text-white py-4 rounded-xl font-bold text-lg shadow-md hover:-translate-y-1 transition-all mt-4 flex items-center justify-center gap-2">
                    <span className="text-xl">💳</span> Proceed to Payment
                  </button>
                </form>
                <p className="text-center text-xs text-gray-400 mt-6 flex flex-col items-center gap-2">
                  <span className="text-xl">🔒</span> Secure AES-256 Encrypted Payment Gateway
                </p>
            </div>
         </div>
      </div>
    </div>
  );
};

export default Donate;
