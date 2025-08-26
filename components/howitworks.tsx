// app/how-it-works/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Sparkles,
  Package,
  ShieldCheck,
  LineChart,
  ArrowRight,
  Check,
  CreditCard,
  Shield,
  TrendingUp,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "How Thrifts Works",
  description:
    "See how Thrifts helps merchants sell more with AI—auto-optimized listings, smart bundling, personalized discovery, and built-in trust.",
};

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              How it works
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
              The marketplace that <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-muted-foreground">sells for you</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              AI handles listings, pricing, bundling, and discovery—so you focus on great products and customers.
            </p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <Link href="/signup?role=seller">
                <Button className="rounded-2xl">
                  Start selling <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/signup?role=buyer" className="text-sm text-muted-foreground hover:text-foreground">
                I want to shop →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Three-step for Merchants */}
      <section className="py-12 bg-secondary/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-semibold text-foreground">For merchants: 3 simple steps</h2>
            <p className="text-muted-foreground mt-2">From upload to payout—streamlined and safe.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                n: 1,
                title: "Create your shop",
                desc:
                  "Upload inventory or list items from your phone. Thrifts drafts titles, tags, and pricing suggestions.",
                icon: LineChart,
              },
              {
                n: 2,
                title: "Let AI optimize",
                desc:
                  "Listings get A/B tests, are bundled into outfits/FBT, and promoted to the right buyers in real time.",
                icon: Sparkles,
              },
              {
                n: 3,
                title: "Get paid your way",
                desc:
                  "Escrow protects both sides. Payouts via M-Pesa and cards after delivery confirmation.",
                icon: CreditCard,
              },
            ].map(({ n, title, desc, icon: Icon }) => (
              <Card key={n} className="rounded-2xl border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="h-9 w-9 grid place-items-center rounded-xl bg-foreground text-background text-sm font-semibold">
                      {n}
                    </div>
                    {title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0 text-muted-foreground">
                  <p className="leading-relaxed">{desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* The 4 AI Modules */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-semibold text-foreground">
              The AI modules doing the heavy lifting
            </h2>
            <p className="text-muted-foreground mt-2">Four capabilities power selling end to end.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: LineChart,
                title: "Auto-optimized listings",
                bullets: ["AI-written titles & tags", "Smart price suggestions", "A/B tests built in"],
              },
              {
                icon: Package,
                title: "Smart bundling",
                bullets: ["FBT & outfit bundles", "Seller rules (size/style)", "Boost AOV with incentives"],
              },
              {
                icon: Sparkles,
                title: "Personalized discovery",
                bullets: ["Taste-based recommendations", "Live matching engine", "Onboarding quiz signals"],
              },
              {
                icon: ShieldCheck,
                title: "Trust built-in",
                bullets: ["Content moderation", "Payment escrow", "Verified merchants & reviews"],
              },
            ].map(({ icon: Icon, title, bullets }, i) => (
              <Card key={i} className="rounded-2xl border-border bg-card hover:shadow-xl transition">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-3">
                    <div className="h-10 w-10 grid place-items-center rounded-2xl bg-foreground text-background">
                      <Icon className="h-5 w-5" />
                    </div>
                    {title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {bullets.map((b, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="mt-[2px] h-4 w-4 opacity-70" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Behind the Scenes Flow */}
      <section className="py-12 bg-secondary/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-semibold text-foreground">Behind the scenes</h2>
            <p className="text-muted-foreground mt-2">A data flywheel that improves itself with every interaction.</p>
          </div>

          <div className="grid lg:grid-cols-4 gap-6">
            {[
              {
                title: "Data",
                desc: "Events from views, clicks, carts, purchases, reviews, and moderation feedback.",
                icon: Users,
              },
              {
                title: "Models",
                desc: "Listing rankers, pricing suggesters, bundling & recommendation models.",
                icon: TrendingUp,
              },
              {
                title: "Actions",
                desc: "Optimized titles/tags, dynamic pricing tests, bundle offers, and ranked feeds.",
                icon: Sparkles,
              },
              {
                title: "Feedback",
                desc: "Outcomes re-train models—better matches, higher AOV, lower returns over time.",
                icon: LineChart,
              },
            ].map(({ title, desc, icon: Icon }, i) => (
              <Card key={i} className="rounded-2xl border-border">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-3 text-base">
                    <div className="h-9 w-9 grid place-items-center rounded-xl bg-foreground text-background">
                      <Icon className="h-5 w-5" />
                    </div>
                    {title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0 text-sm text-muted-foreground">{desc}</CardContent>
              </Card>
            ))}
          </div>

          <p className="mt-6 text-xs text-muted-foreground text-center">
            Privacy-first design and aggregate learning signals; no public exposure of private seller data.
          </p>
        </div>
      </section>

      {/* Trust & Payments */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-semibold text-foreground">Trust & payments</h2>
            <p className="text-muted-foreground mt-2">Fewer surprises, safer transactions, happier customers.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: "Content moderation",
                desc: "Prevents counterfeits & unsafe content; keeps the catalog clean.",
              },
              {
                icon: CreditCard,
                title: "Escrow & payouts",
                desc: "Funds held until delivery confirmation. Payouts via M-Pesa & cards.",
              },
              {
                icon: ShieldCheck,
                title: "Verified merchants",
                desc: "KYC checks and transparent reviews increase buyer confidence.",
              },
            ].map(({ icon: Icon, title, desc }, i) => (
              <Card key={i} className="rounded-2xl border-border">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-3 text-base">
                    <div className="h-9 w-9 grid place-items-center rounded-xl bg-foreground text-background">
                      <Icon className="h-5 w-5" />
                    </div>
                    {title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0 text-sm text-muted-foreground">{desc}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
