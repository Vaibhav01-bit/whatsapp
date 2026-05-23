import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Headset,
  Calendar,
  MessageSquare,
  Target,
  Zap,
  Shield,
  CheckCircle2,
  User,
} from "lucide-react";
import { clientServer } from "../../config/api";

function Step({ number, title, desc }) {
  return (
    <div className="flex gap-6 items-start relative group">
      <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-black text-xl shrink-0 shadow-lg group-hover:scale-110 transition-transform">
        {number}
      </div>
      <div>
        <h4 className="text-xl font-black text-white mb-2">{title}</h4>
        <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

export default function Consultant() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    goals: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const response = await clientServer.post(
        "/api/leads/consultation",
        formData,
      );

      setSuccess(response.data.message || "Consultation booked successfully");

      setFormData({
        name: "",
        email: "",
        company: "",
        goals: "",
      });
    } catch (err) {
      setError(
        err.response?.data?.message || "Failed to submit consultation request",
      );
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 font-['Outfit'] selection:bg-blue-500/30 pt-32 pb-20">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8"
            >
              <Headset size={14} className="text-blue-400" />
              <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">
                Expert Advisory
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight tracking-tight"
            >
              Free Expert <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                Consultation
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-400 mb-12 leading-relaxed"
            >
              Scale your business with a tailored WhatsApp strategy. Our experts
              will help you design the perfect automation workflow for your
              unique needs.
            </motion.p>

            <div className="space-y-6">
              {[
                {
                  icon: <Target className="text-red-400" />,
                  text: "Identify key automation opportunities",
                },
                {
                  icon: <Zap className="text-yellow-400" />,
                  text: "Workflow design and optimization",
                },
                {
                  icon: <Shield className="text-green-400" />,
                  text: "Compliance and best practice advisory",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 text-white font-bold"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                    {item.icon}
                  </div>
                  {item.text}
                </div>
              ))}
            </div>
          </div>

          {/* Consultation Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="p-10 rounded-[3rem] bg-white/5 border border-white/10 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <User size={120} className="text-white" />
            </div>
            <h3 className="text-2xl font-black text-white mb-8 relative z-10">
              Book Your Session
            </h3>
            <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        name: e.target.value,
                      })
                    }
                    className="w-full h-14 rounded-2xl bg-white/5 border border-white/10 px-6 text-white outline-none focus:border-blue-500/50 transition-all"
                  />{" "}
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">
                    Work Email
                  </label>
                  <input
                    type="email"
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        email: e.target.value,
                      })
                    }
                    className="w-full h-14 rounded-2xl bg-white/5 border border-white/10 px-6 text-white outline-none focus:border-blue-500/50 transition-all"
                  />{" "}
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">
                  Company Name
                </label>
                <input
                  type="text"
                  placeholder="Acme Inc."
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      company: e.target.value,
                    })
                  }
                  className="w-full h-14 rounded-2xl bg-white/5 border border-white/10 px-6 text-white outline-none focus:border-blue-500/50 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">
                  How can we help?
                </label>
                <textarea
                  placeholder="Tell us about your goals..."
                  value={formData.goals}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      goals: e.target.value,
                    })
                  }
                  className="w-full h-32 rounded-2xl bg-white/5 border border-white/10 p-6 text-white outline-none focus:border-blue-500/50 transition-all resize-none"
                ></textarea>{" "}
              </div>
              {success && (
                <div className="text-green-400 font-medium">{success}</div>
              )}

              {error && <div className="text-red-400 font-medium">{error}</div>}

              <button
                type="submit"
                disabled={loading}
                className="w-full h-16 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white rounded-2xl font-black text-lg transition-all shadow-xl shadow-blue-500/20 active:scale-95 flex items-center justify-center gap-2"
              >
                {loading ? "Scheduling..." : "Schedule Now"}

                <Calendar size={20} />
              </button>
              <p className="text-center text-[10px] text-slate-500 uppercase tracking-widest font-bold">
                No commitment required • 100% Free
              </p>
            </form>
          </motion.div>
        </div>

        {/* The Process */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white mb-4">
              Our Simple Process
            </h2>
            <p className="text-slate-400">
              Get your automation roadmap in 3 easy steps.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <Step
              number="1"
              title="Initial Discovery"
              desc="We learn about your business goals, current challenges, and technical requirements."
            />
            <Step
              number="2"
              title="Strategy Design"
              desc="Our experts create a custom WhatsApp automation blueprint tailored to your needs."
            />
            <Step
              number="3"
              title="Growth Roadmap"
              desc="Receive a detailed implementation plan and expected ROI metrics for your project."
            />
          </div>
        </div>

        {/* Proof Section */}
        <div className="p-12 rounded-[3rem] bg-gradient-to-br from-blue-600/10 to-indigo-600/10 border border-white/10 text-center">
          <h3 className="text-2xl font-black text-white mb-12">
            Trusted by 2,000+ Enterprises
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Successful Projects", val: "500+" },
              { label: "Hours of Consultation", val: "10,000+" },
              { label: "ROI Delivered", val: "₹1.2Cr+" },
              { label: "Expert Consultants", val: "24" },
            ].map((stat, i) => (
              <div key={i}>
                <h5 className="text-3xl font-black text-white mb-2">
                  {stat.val}
                </h5>
                <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
