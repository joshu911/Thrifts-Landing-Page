// Analytics helper functions for tracking user interactions
// These are no-op wrappers that will be wired to actual analytics later

type AiAgentSegment = 'merchant'
type AiAction = string
type PartnersTab = 'merchant' | 'external'
type LeadType = 'merchant' | 'external'

export const trackLandingViewed = () => {
  console.debug('[Analytics] Landing page viewed')
}

export const trackMerchantApplyClicked = () => {
  console.debug('[Analytics] Merchant apply CTA clicked')
}

export const trackAiAgentOpened = (segment: AiAgentSegment) => {
  console.debug(`[Analytics] AI agent opened`, { segment })
}

export const trackAiPromptSubmitted = (segment: AiAgentSegment, action: AiAction) => {
  console.debug(`[Analytics] AI prompt submitted`, { segment, action })
}

export const trackAiSuggestionClicked = (segment: AiAgentSegment, action: AiAction) => {
  console.debug(`[Analytics] AI suggestion clicked`, { segment, action })
}

export const trackPartnersLinkInlineClicked = () => {
  console.debug('[Analytics] Partners inline link clicked')
}

export const trackPartnersLinkFooterClicked = () => {
  console.debug('[Analytics] Partners footer link clicked')
}

export const trackPartnersPageViewed = () => {
  console.debug('[Analytics] Partners page viewed')
}

export const trackPartnersTabSelected = (tab: PartnersTab) => {
  console.debug(`[Analytics] Partners tab selected: ${tab}`)
}

export const trackPartnersLeadSubmitted = (type: LeadType) => {
  console.debug(`[Analytics] Partners lead submitted`, { type })
}
