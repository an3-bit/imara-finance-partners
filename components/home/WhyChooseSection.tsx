import React from "react";
import Image from "next/image";
import { CheckCircle2, Lock, Target, Briefcase, Sparkles } from "lucide-react";

const propositions = [
  {
    icon: CheckCircle2,
    title: "Accuracy and Organization",
    description:
      "Structured financial records, consistent transaction categorization, and rigorous reconciliations across bank and mobile-money channels.",
  },
  {
    icon: Briefcase,
    title: "Professional Service",
    description:
      "A coordinated, responsive approach to accounting and business finance support, tailored to your operating schedule and reporting cycles.",
  },
  {
    icon: Lock,
    title: "Confidentiality",
    description:
      "Strict respect for the privacy and security of client financial information, sensitive payroll data, and proprietary records.",
  },
  {
    icon: Target,
    title: "Business-Focused Advice",
    description:
      "Practical insights that connect financial figures directly to operational decisions, cost management, and commercial planning.",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="py-20 bg-white border-b border-brand-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Authentic African Professional Image Card */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-brand-border/80 group">
              <div
                className="relative h-[480px] w-full"
                style={{
                  position: "relative",
                  height: "480px",
                  minHeight: "480px",
                  width: "100%",
                }}
              >
                <Image
                  src="/imara1.jpg"
                  alt="LedgerBridge Accountants - Professional accounting and financial advisory"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                {/* Subtle bottom green gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-transparent to-transparent" />
              </div>

              {/* Floating pill badge on the image (reminiscent of the reference screenshot) */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-forest-dark/90 backdrop-blur-md border border-white/20 text-white">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-brand-accent text-forest flex items-center justify-center font-bold text-sm">
                    LB
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">
                      Structured Financial Discipline
                    </h4>
                    <p className="text-xs text-gray-300">
                      Helping businesses worldwide operate with clarity &amp; peace of mind.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & 4 Propositions */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
                Why LedgerBridge Accountants
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-forest tracking-tight">
                A Practical, Professional Approach to Your Finances
              </h2>
              <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
                We believe that financial administration should never be an
                afterthought or a source of constant stress. We combine
                organized recordkeeping with commercial awareness to help
                business owners maintain complete control over their operations.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
              {propositions.map((prop, idx) => {
                const Icon = prop.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-brand-ivory border border-brand-border/70 hover:border-brand-primary/40 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-lg bg-forest text-brand-accent flex items-center justify-center mb-3">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-bold text-forest mb-1.5">
                      {prop.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-brand-charcoal/80 leading-relaxed">
                      {prop.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
