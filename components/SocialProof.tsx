import { Card, CardContent } from "@/components/ui/card";
export default function SocialProof(){
    return(<section className="py-12 bg-bgSecondary border-t border-gray-200 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-6">
                <h3 className="text-2xl font-semibold text-text">Built for Kenya — ready for the world</h3>
                <p className="text-gray-600 mt-2">Works beautifully with mobile data and mobile money. Cross-border ready.</p>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
                {["Mobile-money intergration","High Quality images","KYC & moderation"].map((text,i)=>(<Card key={i} className="rounded-2xl border border-gray-200"><CardContent className="p-6 text-center"><div className="font-medium text-text">{text}</div></CardContent></Card>))}
            </div>
        </div>
    </section>)}