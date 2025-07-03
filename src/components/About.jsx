import React from "react";

const About = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#020013] via-cyan-500/10 to-[#020013] text-base-content px-6 py-16">
      <div className="max-w-5xl mx-auto text-center">
        {/* Logo + Heading */}
        <div className="flex justify-center items-center mb-8">
          <span className="text-4xl font-mono text-cyan-400 drop-shadow-glow">
            &lt;&#9679;&gt;
          </span>
          <h2 className="ml-3 text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 text-transparent bg-clip-text">
            About Connect.dev
          </h2>
        </div>

        {/* Tagline */}
        <p className="text-lg text-white/80 max-w-2xl mx-auto mb-12">
          A social space where developers build real connections, beyond just
          code. Whether you're collaborating or just vibing — you're in.
        </p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 shadow-md">
          {[
            {
              title: "🤝 Dev-to-Dev Friendship",
              desc: "Make genuine friendships with devs worldwide — not just followers.",
            },
            {
              title: "🌐 Built for Collaboration",
              desc: "Connect based on tech stacks, shared passions, or project goals.",
            },
            {
              title: "💼 Human + Professional",
              desc: "Grow your career and your circle — both matter here.",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 shadow-md hover:shadow-xl hover:shadow-cyan-500/5 transition"
            >
              <h3 className="text-xl font-semibold text-cyan-300 mb-2">
                {card.title}
              </h3>
              <p className="text-sm text-white/70">{card.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16">
          <a
            href="/explore"
            className="btn btn-primary px-8 shadow-md hover:shadow-cyan-500/30 transition"
          >
            Start Connecting →
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
