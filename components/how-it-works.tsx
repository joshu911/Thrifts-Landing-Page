import { Card, CardContent } from "@/components/ui/card";
import { Camera, Settings, CreditCard } from "lucide-react";
import landingContent from "@/content/landing.json";

export default function HowItWorks() {
  const icons = [Camera, Settings, CreditCard];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            How it works for merchants
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Start selling in minutes with our streamlined process
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {landingContent.howItWorksMerchants.map((step, index) => {
            const Icon = icons[index];
            return (
              <Card key={index} className="bg-white border-0 shadow-lg rounded-2xl">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Icon className="h-8 w-8 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
