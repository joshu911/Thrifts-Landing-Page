import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Sparkles, Package, ShieldCheck, LineChart, Check } from 'lucide-react';

type Feature = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  bullets: string[];
};

const features: Feature[] = [
  {
    icon: LineChart,
    title: 'Auto-optimized listings',
    description:
      'AI writes titles & tags, suggests prices, and runs built-in A/B tests to boost visibility.',
    bullets: [
      'AI-written titles & tags',
      'Smart price suggestions',
      'A/B tests built in',
    ],
  },
  {
    icon: Package,
    title: 'Smart bundling',
    description:
      'Create frequently-bought-together and outfit bundles to lift average order value.',
    bullets: [
      'FBT & outfit bundles',
      'Rule-based bundling',
      'AOV up through incentives',
    ],
  },
  {
    icon: Sparkles,
    title: 'Personalized discovery',
    description:
      'Taste-based recommendations and a live matching engine help buyers find the right items fast.',
    bullets: [
      'Live matching engine',
      'Taste & size awareness',
      'Onboarding quiz signals',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Trust built-in',
    description:
      'Proactive content moderation, payment escrow, and verified merchants & reviews.',
    bullets: [
      'Content moderation',
      'Payment escrow',
      'Verified sellers & reviews',
    ],
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            AI features that do the work
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Four core modules power listings, bundling, discovery, and trust—so
            selling feels effortless.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="bg-card border-border hover:shadow-xl transition-shadow group rounded-2xl"
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 rounded-full w-fit bg-foreground text-background group-hover:scale-105 transition-transform">
                    <Icon className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-card-foreground">
                    {feature.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <CardDescription className="text-center text-muted-foreground leading-relaxed">
                    {feature.description}
                  </CardDescription>

                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {feature.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="h-4 w-4 mt-0.5 opacity-70" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
