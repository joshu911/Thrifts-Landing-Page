import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Sparkles, ShoppingBag } from "lucide-react";
export default function PersonaSplit(){
    return(
    <section id="pricing" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">
            <Card className="rounded-2xl border border-gray-200">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Sparkles className="h-5 w-5" /> For merchants</CardTitle>
                </CardHeader>
                <CardContent className="pt-0"><ul className="space-y-2 text-gray-700">
                    {["Zero setup — open a shop in minutes","Inventory tools & light analytics","Auto-bundles, dynamic pricing, and promos","Payouts via M-Pesa or bank"].map((p,i)=>(<li key={i} className="flex items-start gap-2">
                        <Check className="h-4 w-4 mt-1"/>{p}</li>))}</ul>
                        <div className="mt-6 flex items-center gap-3">
                            <Link href="/apply/merchant"><Button className="rounded-2xl">Start selling</Button></Link>
                            <Link href="/company/partners" className="text-sm text-gray-600 hover:text-gray-900">Merchant docs →</Link>
                        </div>
                </CardContent>
            </Card>
            <Card className="rounded-2xl border border-gray-200">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <ShoppingBag className="h-5 w-5" /> For shoppers</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                    <ul className="space-y-2 text-gray-700">
                        {["Personalized feed for your style","Trusted sellers and safe checkout","Outfit bundles and deals","Fast delivery & easy returns"].map((p,i)=>(<li key={i} className="flex items-start gap-2"><Check className="h-4 w-4 mt-1"/>{p}</li>))}
                    </ul>
                    <div className="mt-6 flex items-center gap-3">
                        <Link href="/explore"><Button className="rounded-2xl">Start shopping</Button></Link>
                        <Link href="/explore" className="text-sm text-gray-600 hover:text-gray-900">Explore featured shops →</Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    </section>)}