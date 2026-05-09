import { ArrowRight, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroAvatar from "@/components/HeroAvatar";
import { motion } from "framer-motion";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({ top: element.offsetTop - 80, behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #020810 0%, #060f1e 50%, #020d1a 100%)" }}
    >
      {/* Ambient glow orb top-right */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: "radial-gradient(circle at 70% 20%, rgba(0,102,255,0.12) 0%, transparent 60%)",
        }}
      />

      {/* Ambient glow orb bottom-left */}
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(circle at 30% 80%, rgba(0,212,255,0.07) 0%, transparent 60%)",
        }}
      />

      {/* Horizontal glowing line */}
      <div
        className="absolute left-0 right-0 pointer-events-none"
        style={{
          top: "50%",
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(0,212,255,0.15), transparent)",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left: Text */}
          <div className="order-2 lg:order-1 text-center lg:text-left">

            {/* Terminal badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full text-xs font-mono"
              style={{
                background: "rgba(0,212,255,0.07)",
                border: "1px solid rgba(0,212,255,0.2)",
                color: "#00d4ff",
              }}
            >
              <Terminal className="w-3 h-3" />
              <span>AI/ML Engineer & Developer</span>
              <span
                className="inline-block w-1.5 h-3 ml-1"
                style={{
                  background: "#00d4ff",
                  animation: "pulse 1s step-end infinite",
                }}
              />
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight"
              style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "-0.03em" }}
            >
              <span style={{ color: "#e8f4ff" }}>Hi, I'm </span>
              <span
                style={{
                  background: "linear-gradient(135deg, #0066ff, #00d4ff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  filter: "drop-shadow(0 0 20px rgba(0,212,255,0.3))",
                }}
              >
                Syed Yousaf Raza
              </span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="text-lg sm:text-xl mb-10 leading-relaxed font-mono"
              style={{ color: "#5a7a9a" }}
            >
              Code. Create. Conquer.{" "}
              <span style={{ color: "#3a5a7a" }}>(and yes, I sell accessories too)</span>
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={() => scrollToSection("projects")}
                className="btn-glow inline-flex items-center justify-center px-8 py-3 rounded-lg text-white font-semibold text-sm tracking-wide"
                style={{
                  background: "linear-gradient(135deg, #0055dd, #00aaff)",
                  boxShadow: "0 0 20px rgba(0,102,255,0.4), 0 0 40px rgba(0,212,255,0.1)",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLButtonElement).style.boxShadow =
                    "0 0 30px rgba(0,102,255,0.6), 0 0 60px rgba(0,212,255,0.2)";
                  (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLButtonElement).style.boxShadow =
                    "0 0 20px rgba(0,102,255,0.4), 0 0 40px rgba(0,212,255,0.1)";
                  (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
                }}
              >
                View My Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>

              <button
                onClick={() => scrollToSection("contact")}
                className="inline-flex items-center justify-center px-8 py-3 rounded-lg font-semibold text-sm tracking-wide"
                style={{
                  background: "transparent",
                  border: "1px solid rgba(0,212,255,0.3)",
                  color: "#00d4ff",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLButtonElement).style.background =
                    "rgba(0,212,255,0.08)";
                  (e.currentTarget as HTMLButtonElement).style.borderColor =
                    "rgba(0,212,255,0.6)";
                  (e.currentTarget as HTMLButtonElement).style.boxShadow =
                    "0 0 15px rgba(0,212,255,0.15)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                  (e.currentTarget as HTMLButtonElement).style.borderColor =
                    "rgba(0,212,255,0.3)";
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = "none";
                }}
              >
                Get In Touch
              </button>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex gap-8 mt-12 justify-center lg:justify-start"
            >
              {[
                { value: "10+", label: "Projects" },
                { value: "3+", label: "Years Coding" },
                { value: "AI/ML", label: "Specialization" },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div
                    className="text-2xl font-extrabold"
                    style={{
                      color: "#00d4ff",
                      fontFamily: "'Syne', sans-serif",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs font-mono mt-0.5" style={{ color: "#3a5a7a" }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center relative"
          >
            {/* Glow ring behind avatar */}
            <div
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
              <div
                style={{
                  width: "340px",
                  height: "340px",
                  borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(0,102,255,0.15) 0%, transparent 70%)",
                  animation: "pulse 3s ease-in-out infinite",
                }}
              />
            </div>

            {/* Rotating dashed ring */}
            <div
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
              <div
                style={{
                  width: "360px",
                  height: "360px",
                  borderRadius: "50%",
                  border: "1px dashed rgba(0,212,255,0.2)",
                  animation: "spin 20s linear infinite",
                }}
              />
            </div>

            <style>{`
              @keyframes spin {
                from { transform: rotate(0deg); }
                to   { transform: rotate(360deg); }
              }
            `}</style>

            <HeroAvatar />
          </motion.div>

        </div>
      </div>
    </section>
  );
}