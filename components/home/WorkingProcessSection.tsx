import React from "react";
import { MessageSquare, Search, FileText, CheckCircle2 } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: MessageSquare,
    title: "Understand Your Needs",
    description:
      "We discuss your business structure, transaction volumes, current financial bottlenecks, and the specific level of support you require.",
  },
  {
    step: "02",
    icon: Search,
    title: "Review Your Records",
    description:
      "We inspect the state of your existing books, bank/M-Pesa statements, and statutory schedules to understand historical data and initial cleanup needs.",
  },
  {
    step: "03",
    icon: FileText,
    title: "Agree on a Service Plan",
    description:
      "We clearly define the scope of work, timelines, reporting frequencies, client responsibilities, and engagement terms.",
  },
  {
    step: "04",
    icon: CheckCircle2,
    title: "Provide Ongoing Support",
    description:
      "We execute structured bookkeeping routines, reconcile accounts, prepare management schedules, and deliver agreed monthly reports.",
  },
];

export default function WorkingProcessSection() {
  return (
    <section className="py-20 bg-white border-b border-brand-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
            How We Work Together
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-forest tracking-tight">
            Straightforward Support, From Start to Ongoing Management
          </h2>
          <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
            Our engagement framework is designed to provide complete clarity at
            every step, ensuring responsibilities, schedules, and deliverables
            are transparent.
          </p>
        </div>

        {/* 4 Steps Process */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="relative p-6 rounded-2xl bg-brand-ivory border border-brand-border/70 hover:border-brand-primary/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-brand-primary bg-white px-2.5 py-1 rounded-full border border-brand-border/60">
                      Step {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-forest text-brand-accent flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-forest mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-brand-charcoal/80 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Scope disclaimer */}
        <p className="mt-10 text-center text-xs text-brand-muted max-w-xl mx-auto">
          Please note that the exact workflow, timeline, and deliverables are
          tailored to the specific terms agreed in your written client
          engagement agreement.
        </p>
      </div>
    </section>
  );
}
