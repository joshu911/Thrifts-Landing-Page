"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { trackMerchantApplyClicked } from "@/lib/analytics"

export function MobileStickyCta() {
  const router = useRouter()

  const handleClick = () => {
    trackMerchantApplyClicked()
    router.push("/apply/merchant")
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-white dark:bg-gray-900 border-t border-border md:hidden z-50">
      <Button
        onClick={handleClick}
        className="w-full bg-brand hover:bg-brand/90 text-white font-semibold py-3"
        size="lg"
      >
        Become a Merchant Partner
      </Button>
    </div>
  )
}
