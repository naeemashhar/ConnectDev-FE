
const Premium = () => {
  return (
    <section className="py-20 text-white" style={{
        backgroundImage: "url('/main-bg.png')",
      }}>
      <div className="max-w-5xl mx-auto px-6 text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">
          Upgrade Your <span className="text-cyan-500">Connect.dev</span> Experience
        </h2>
        <p className="text-white/70 text-lg">
          Choose the plan that fits your goals — whether you're here to explore
          or to lead.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-6">
        {/* Silver Membership */}
        <div className="bg-cyan/5 backdrop-blur-md border border-white/10 rounded-xl p-8 flex flex-col shadow-md hover:shadow-gray-500/25 transition">
          <h3 className="text-2xl font-semibold text-gray-300 mb-2">
            🔘 Silver Membership
          </h3>
          <p className="text-white/70 mb-6">
            Ideal for growing developers looking to expand their network.
          </p>
          <div className="text-5xl font-bold mb-6">
            $9<span className="text-lg text-white/60">/mo</span>
          </div>

          <ul className="space-y-3 text-left text-white/70 mb-8">
            {[
              "Access to core Connect.dev features",
              "Community chat access",
              "Up to 10 profile connections",
              "Basic profile highlighting",
            ].map((feature, idx) => (
              <li key={idx} className="flex items-center">
                <svg
                  className="w-5 h-5 text-cyan-400 mr-2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                {feature}
              </li>
            ))}
          </ul>

          <button className="btn w-full bg-gray-600 hover:bg-gray-500">
            Choose Silver
          </button>
        </div>

        {/* Gold Membership */}
        <div className="relative backdrop-blur-lg border border-yellow-600 rounded-xl p-8 flex flex-col shadow-lg hover:shadow-yellow-400/30 transition">
          <div className="absolute top-0 right-0 bg-cyan-500 text-white text-sm font-semibold px-4 py-1 rounded-bl-lg rounded-tr-lg ">
            Best Value
          </div>
          <h3 className="text-2xl font-semibold text-yellow-300 mb-2">
            🟡 Gold Membership
          </h3>
          <p className="text-white/70 mb-6">
            Perfect for developers ready to stand out and lead the community.
          </p>
          <div className="text-5xl font-bold mb-6">
            $19<span className="text-lg text-white/60">/mo</span>
          </div>

          <ul className="space-y-3 text-left text-white/80 mb-8">
            {[
              "All Silver features included",
              "Unlimited profile connections",
              "Priority matching algorithm",
              "Gold badge on your profile",
              "Exclusive access to early features",
            ].map((feature, idx) => (
              <li key={idx} className="flex items-center">
                <svg
                  className="w-5 h-5 text-yellow-400 mr-2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                {feature}
              </li>
            ))}
          </ul>

          <button className="btn w-full bg-yellow-600 hover:bg-yellow-500">Go Gold</button>
        </div>
      </div>
    </section>
  );
};

export default Premium;
