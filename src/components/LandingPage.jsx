import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { Info, LogIn, SunMoon } from "lucide-react";
import {
  RiMenu2Fill,
  RiMenu3Fill,
  RiMenuFold2Fill,
  RiMenuUnfold2Fill,
} from "@remixicon/react";

gsap.registerPlugin(ScrollTrigger);

const LandingPage = () => {
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const howItWorksRef = useRef(null);
  const ctaRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const fadeIn = (element) => {
      gsap.fromTo(
        element,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    };

    fadeIn(heroRef.current);
    fadeIn(featuresRef.current);
    fadeIn(howItWorksRef.current);
    fadeIn(ctaRef.current);
  }, []);

  return (
    <div
      ref={scrollRef}
      data-scroll-section
      className="min-h-screen bg-[#020013] text-white"
    >
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-3 border-b border-white/10 bg-[#020013]/50 backdrop-blur">
        {/* Left: Logo */}
        <div className="flex items-center gap-2 flex-1">
          <span className="text-xl sm:text-2xl font-mono text-cyan-500">
            &lt;&#9679;&gt;
          </span>
          <Link
            to="/"
            className="text-xl sm:text-2xl font-bold text-white whitespace-nowrap"
          >
            Connect.<span className="text-cyan-500">dev</span>
          </Link>
        </div>

        {/* Right: Desktop Options */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Theme Toggle */}
          <label className="swap swap-rotate">
            <input
              type="checkbox"
              data-toggle-theme="dark,light"
              data-act-class="ACTIVECLASS"
            />
            <svg
              className="swap-on fill-current w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64 17.66A9 9 0 0012 21a9 9 0 000-18 9 9 0 00-6.36 15.66z" />
            </svg>
            <svg
              className="swap-off fill-current w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 2a1 1 0 011 1v2a1 1 0 01-2 0V3a1 1 0 011-1zM4.22 4.22a1 1 0 011.42 0l1.42 1.42a1 1 0 01-1.42 1.42L4.22 5.64a1 1 0 010-1.42zM2 13a1 1 0 011-1h2a1 1 0 010 2H3a1 1 0 01-1-1zm1.22 7.78a1 1 0 001.42 0l1.42-1.42a1 1 0 10-1.42-1.42L3.64 19.36a1 1 0 000 1.42zM13 22a1 1 0 01-1-1v-2a1 1 0 012 0v2a1 1 0 01-1 1zm7.78-1.22a1 1 0 000-1.42l-1.42-1.42a1 1 0 10-1.42 1.42l1.42 1.42a1 1 0 001.42 0zM22 13a1 1 0 00-1-1h-2a1 1 0 000 2h2a1 1 0 001-1zm-1.22-7.78a1 1 0 00-1.42 0L17.94 6.36a1 1 0 001.42 1.42l1.42-1.42a1 1 0 000-1.42z" />
            </svg>
          </label>

          <Link className="btn btn-ghost text-sm sm:text-lg" to="/about">
            About
          </Link>

          <Link to="/login">
            <button className="text-sm sm:text-base cursor-pointer px-4 py-2 border border-cyan-400 text-cyan-400 rounded hover:bg-cyan-500 hover:text-black transition-all">
              Login to your account
            </button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="sm:hidden dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <RiMenu3Fill className="w-5 h-5" />
          </label>

          <ul
            tabIndex={0}
            className="dropdown-content mt-3 z-[1] p-3 shadow-xl bg-base-200 rounded-xl w-52 text-sm text-[#D9DFF2] space-y-2"
          >
            <li>
              <Link
                to="/about"
                className="border-b-[0.1px] border-gray-600 flex items-center gap-2 px-3 py-2 hover:bg-base-300 transition"
              >
                <Info className="w-4 h-4 text-cyan-400" />
                About
              </Link>
            </li>

            <li>
              <Link
                to="/login"
                className="border-b-[0.1px] border-gray-600 flex items-center gap-2 px-3 py-2 hover:bg-base-300 transition"
              >
                <LogIn className="w-4 h-4 text-cyan-400" />
                Login
              </Link>
            </li>

            <li>
              <div className="flex justify-between items-center px-3 py-2 rounded-md hover:bg-base-300 transition">
                <span className="flex items-center gap-2">
                  <SunMoon className="w-4 h-4 text-cyan-400" />
                  Theme
                </span>
                <input
                  type="checkbox"
                  data-toggle-theme="dark,light"
                  data-act-class="ACTIVECLASS"
                  className="toggle toggle-xs"
                />
              </div>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        ref={heroRef}
        data-scroll-section
        className="mt-10 px-8 py-20 text-center max-w-3xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-6 leading-tight">
          Connect with Developers{" "}
          <span className="text-cyan-400">Worldwide 🌍</span>
        </h2>
        <p className="text-lg text-white/80">
          Whether you're a student, fresher, or pro — Connect.dev helps you grow
          your tech network, collaborate on projects, and build lasting
          professional relationships.
        </p>

        <div className="mt-10">
          <Link to="/signup">
            <button className="px-6 py-3 bg-cyan-500 text-black rounded-lg font-semibold shadow-lg hover:bg-cyan-400 transition">
              Join Connect.dev — It's Free 🚀
            </button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section
        ref={featuresRef}
        data-scroll-section
        className="px-8 py-16 bg-[#0c0c1f]"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-8 text-cyan-400">
            What you get ?
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            <div className="bg-[#14142a] p-6 rounded-lg shadow hover:shadow-lg transition">
              <h4 className="text-xl font-semibold mb-2">
                👥 Developer Matching
              </h4>
              <p className="text-white/80">
                Swipe through curated developer profiles based on your skills
                and interests.
              </p>
            </div>
            <div className="bg-[#14142a] p-6 rounded-lg shadow hover:shadow-lg transition">
              <h4 className="text-xl font-semibold mb-2">
                📚 Learn & Collaborate
              </h4>
              <p className="text-white/80">
                Find collaborators for open-source, startup ideas, or coding
                challenges.
              </p>
            </div>
            <div className="bg-[#14142a] p-6 rounded-lg shadow hover:shadow-lg transition">
              <h4 className="text-xl font-semibold mb-2">
                💬 Real-time Connections
              </h4>
              <p className="text-white/80">
                Chat with matched developers and expand your professional
                circle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section
        ref={howItWorksRef}
        className="px-8 py-20 text-center max-w-4xl mx-auto"
      >
        <h3 className="text-2xl font-bold text-cyan-400 mb-6">How it works ?</h3>
        <ol className="text-white/90 space-y-4 list-decimal list-inside text-left">
          <li>
            <strong>Sign up</strong> with basic details and choose your skills.
          </li>
          <li>
            <strong>Get matched</strong> with like-minded developers worldwide.
          </li>
          <li>
            <strong>Start collaborating</strong> on side-projects, freelancing,
            or just networking!
          </li>
        </ol>
      </section>

      {/* Final CTA */}
      <section ref={ctaRef} className="px-8 py-20 bg-[#0e0e24] text-center">
        <h3 className="text-3xl font-bold mb-4 text-white">
          Ready to build your developer network?
        </h3>
        <p className="text-white/70 mb-8">
          Get started today and connect with devs who match your goals.
        </p>
        <Link to="/signup">
          <button className="px-8 py-4 bg-cyan-500 text-black font-semibold rounded-full hover:bg-cyan-400 transition">
            Get Started Free
          </button>
        </Link>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-white/50 text-sm">
        © {new Date().getFullYear()} Connect.dev — Built for Developers, by
        Developer.
      </footer>
    </div>
  );
};

export default LandingPage;
