import { Shield, CreditCard, Truck, Star } from 'lucide-react';

export default function TrustRow() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-bgSecondary border-b border-black/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-8 mb-8">
          <div className="flex items-center gap-2">
            <CreditCard className="h-6 w-6 text-green-600" />
            <span className="font-semibold text-text">M-Pesa</span>
          </div>

          <div className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-interactive" />
            <span className="font-semibold text-text">Secure Payments</span>
          </div>

          <div className="flex items-center gap-2">
            <Truck className="h-6 w-6 text-brand" />
            <span className="font-semibold text-text">Fast Delivery</span>
          </div>

          <div className="flex items-center gap-2">
            <Star className="h-6 w-6 text-yellow-500" />
            <span className="font-semibold text-text">Trusted Platform</span>
          </div>
        </div>

        <div className="text-center">
          <p className="text-sm text-textMuted">
            Powered by <span className="font-semibold text-brand">pirple</span>
          </p>
        </div>
      </div>
    </section>
  );
}
