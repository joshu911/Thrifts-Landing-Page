import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Home, Search } from "lucide-react"
import Link from "next/link"
import notFoundContent from "@/content/404.json"

export const metadata: Metadata = {
  title: "Page Not Found - Thrifts",
  description: "The page you're looking for doesn't exist",
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-2xl mx-auto">
        <Card className="bg-white dark:bg-gray-800 border-0 shadow-lg rounded-2xl">
          <CardContent className="p-16 text-center">
            <div className="text-8xl font-bold text-orange-500 mb-6">404</div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{notFoundContent.title}</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">{notFoundContent.body}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-xl"
              >
                <Link href="/">
                  <Home className="h-4 w-4 mr-2" />
                  {notFoundContent.ctaPrimary}
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-orange-200 hover:border-orange-300 hover:bg-orange-50 dark:border-orange-800 dark:hover:bg-orange-900/20 px-6 py-3 rounded-xl bg-transparent"
              >
                <Link href="/explore">
                  <Search className="h-4 w-4 mr-2" />
                  {notFoundContent.ctaSecondary}
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
