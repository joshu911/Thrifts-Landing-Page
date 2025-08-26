// Feature flags and context detection
// Currently supports investor context detection

export const isInvestorContext = (): boolean => {
  if (typeof window === 'undefined') return false
  
  // Check URL param
  const params = new URLSearchParams(window.location.search)
  if (params.get('utm') === 'investor') return true
  
  // Check cookie
  const cookies = document.cookie.split(';')
  return cookies.some(cookie => 
    cookie.trim().startsWith('thrifts_investor=1')
  )
}

export const setInvestorContext = () => {
  // Set cookie for 30 days
  const d = new Date()
  d.setTime(d.getTime() + (30 * 24 * 60 * 60 * 1000))
  document.cookie = `thrifts_investor=1;expires=${d.toUTCString()};path=/`
}
