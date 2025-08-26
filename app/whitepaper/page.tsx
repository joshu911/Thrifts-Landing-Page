// app/whitepaper/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { Download, ArrowLeft, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Thrifts White Paper – Product Thesis & Roadmap",
  description:
    "Comprehensive overview of Thrifts’ AI-first marketplace strategy, technology, and growth roadmap.",
  alternates: { canonical: "/whitepaper" },
  openGraph: {
    title: "Thrifts White Paper – Product Thesis & Roadmap",
    description:
      "Comprehensive overview of Thrifts’ AI-first marketplace strategy, technology, and growth roadmap.",
    type: "article",
    url: "/whitepaper",
  },
};

export default function WhitepaperPage() {
  const pdfPath = "/whitepaper.pdf"; // place the file in /public/whitepaper.pdf

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-5xl">
        {/* Back link */}
        <div className="mb-8">
          <Link
            href="/company/partners"
            className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 font-medium"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Partners
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Thrifts White Paper
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Product thesis, technology framework, and growth roadmap.
          </p>
        </div>

        {/* Actions */}
        <div className="mb-6 flex items-center justify-center gap-3">
          <Button asChild size="lg" className="rounded-xl bg-orange-500 hover:bg-orange-600 text-white">
            <a href={pdfPath} download="Thrifts-Whitepaper.pdf">
              <Download className="h-4 w-4 mr-2" />
              Download PDF
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-xl">
            <a href={pdfPath} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-2" />
              Open in new tab
            </a>
          </Button>
        </div>

        {/* Embedded viewer (with graceful fallback) */}
        <Card className="bg-white dark:bg-gray-800 border-0 shadow-lg rounded-2xl">
          <CardContent className="p-0">
            {/* Try <iframe> first for broad support */}
            <div className="h-[80vh] w-full overflow-hidden rounded-2xl">
              <iframe
                src={`${pdfPath}#toolbar=1&navpanes=0&view=FitH`}
                title="Thrifts White Paper PDF"
                className="h-full w-full"
              />
            </div>

            {/* Fallback for browsers that block iframes for PDFs */}
            <noscript>
              <div className="p-6 text-center">
                <p className="text-sm text-gray-600">
                  PDF preview unavailable without JavaScript.{" "}
                  <a className="underline" href={pdfPath}>
                    Download the PDF
                  </a>
                  .
                </p>
              </div>
            </noscript>
          </CardContent>
        </Card>

        {/* Small note */}
        <p className="mt-4 text-center text-xs text-gray-500 dark:text-gray-400">
          Can’t see the preview? Your browser may block embedded PDFs—use “Open in new tab” or “Download”.
        </p>
      </div>
    </main>
  );
}
