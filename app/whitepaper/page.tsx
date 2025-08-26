import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, ArrowLeft } from "lucide-react"
import Link from "next/link"
import whitepaperContent from "@/content/whitepaper.json"

export const metadata: Metadata = {
  title: "Thrifts White Paper - Product Thesis and Roadmap",
  description:
    "Comprehensive overview of Thrifts marketplace strategy, AI technology, and growth roadmap for Africa's secondhand economy.",
}

export default function WhitepaperPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link
            href="/company/partners"
            className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 font-medium"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Partners
          </Link>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {whitepaperContent.meta.title}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">{whitepaperContent.meta.description}</p>
          <div className="flex items-center justify-center gap-4 text-sm text-gray-500 dark:text-gray-400">
            <span>Last updated: {whitepaperContent.meta.lastUpdated}</span>
          </div>
        </div>

        <div className="mb-8">
          <Card className="bg-white dark:bg-gray-800 border-0 shadow-lg rounded-2xl">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Download className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {whitepaperContent.downloadCta}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Complete analysis including financial projections and technical architecture
              </p>
              <Button
                asChild
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-xl"
              >
                <a href="/whitepaper.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="h-4 w-4 mr-2" />
                  Download PDF
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8">
          {whitepaperContent.sections.map((section, index) => (
            <Card key={index} className="bg-white dark:bg-gray-800 border-0 shadow-sm rounded-2xl">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{section.h2}</h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{section.p}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
