"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Package, ShieldCheck, LineChart, Check } from "lucide-react";
import landingContent from "@/content/landing.json";
import Link from "next/link";
import {
  trackAiAgentOpened,
  trackPartnersLinkInlineClicked,
} from "@/lib/analytics";

export default function AiAgents() {
  const [activeDemo, setActiveDemo] = useState<string | null>(null);

  // 4 core modules from the white paper
  const agents = [
    {
      id: "listings",
      title: "Auto-optimized listings",
      icon: LineChart,
      description:
        "AI writes titles & tags, suggests prices, and runs built-in A/B tests.",
      
    },
    {
      id: "bundling",
      title: "Smart bundling",
      icon: Package,
      description:
        "Create frequently-bought-together and outfit bundles with seller rules.",
      
    },
    {
      id: "discovery",
      title: "Personalized discovery",
      icon: Sparkles,
      description:
        "Taste-based recommendations and a live matching engine for shoppers.",
      
    },
    {
      id: "trust",
      title: "Trust built-in",
      icon: ShieldCheck,
      description:
        "Moderation, payment escrow, and verified merchants & reviews.",
      
    },
  ];

  const heading =
    (landingContent as any)?.aiIntro?.heading ?? "AI modules that do the work";
  const subtext =
    (landingContent as any)?.aiIntro?.subtext ??
    "Four models power discovery, bundling, listings, and trust—so selling feels effortless.";
  const inlinePartnersLinkLabel =
    (landingContent as any)?.aiIntro?.inlinePartnersLinkLabel ??
    "See partner opportunities →";

  const handleDemoClick = (agentId: string) => {
    trackAiAgentOpened("merchant");
    setActiveDemo((prev) => (prev === agentId ? null : agentId));
  };

  const handlePartnersLinkClick = () => {
    trackPartnersLinkInlineClicked();
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-6xl">
        {/* Intro */}
        <div className="text-center mb-14">
          <Badge
            variant="secondary"
            className="mb-3 bg-orange-100 text-slate-700"
          >
            AI Modules
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            {heading}
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto mt-3">
            {subtext}
          </p>
          <Link
            href="/company/partners"
            onClick={handlePartnersLinkClick}
            className="inline-block mt-3 text-sm text-slate-500 hover:text-slate-900 underline-offset-4 hover:underline transition-colors"
          >
            {inlinePartnersLinkLabel}
          </Link>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {agents.map((agent, i) => {
            const Icon = agent.icon;
            const isActive = activeDemo === agent.id;

            return (
              <motion.div
                key={agent.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-[28px] p-[1px] bg-gradient-to-tr from-slate-200/80 via-white to-white"
              >
                <Card className="group rounded-[26px] border border-slate-200/70 bg-white hover:shadow-xl hover:shadow-slate-200/60 transition">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-indigo-300/30 via-fuchsia-300/20 to-amber-200/20 blur-md opacity-0 group-hover:opacity-100 transition" />
                        <div className="relative grid h-10 w-10 place-items-center rounded-2xl bg-orange-500 text-white ring-1 ring-slate-900/10 shadow-sm">
                          <Icon className="h-5 w-5" />
                        </div>
                      </div>
                      <CardTitle className="text-xl text-slate-900">
                        {agent.title}
                      </CardTitle>
                    </div>
                    <p className="mt-2 text-sm text-slate-600">
                      {agent.description}
                    </p>
                  </CardHeader>

                  
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
