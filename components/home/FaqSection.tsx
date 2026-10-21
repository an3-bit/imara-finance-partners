"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { faqData } from "@/lib/faq-data";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white border-b border-brand-border/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-ivory border border-brand-border text-xs font-semibold uppercase tracking-wider text-brand-primary">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-forest tracking-tight">
            Clear Answers to Common Questions
          </h2>
          <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
            Understanding how outsourced accounting and advisory services work
            helps you determine the right support structure for your business.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-xl border border-brand-border/80 bg-brand-ivory/40 transition-colors overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-bold text-forest text-base hover:text-brand-primary transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span>{item.question}</span>
                  <div
                    className={`w-7 h-7 rounded-full bg-white border border-brand-border flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-forest text-brand-accent" : "text-forest"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${index}`}
                    className="px-6 pb-5 pt-1 text-sm text-brand-charcoal/85 leading-relaxed border-t border-brand-border/40"
                  >
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10 p-5 rounded-xl bg-brand-ivory text-center border border-brand-border/60">
          <p className="text-xs text-brand-muted">
            Have a question not addressed here?{" "}
            <a
              href="/contact"
              className="text-brand-primary font-semibold hover:underline"
            >
              Reach out directly
            </a>{" "}
            and we will be glad to provide clarification.
          </p>
        </div>
      </div>
    </section>
  );
}
