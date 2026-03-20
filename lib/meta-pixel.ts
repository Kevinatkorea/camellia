declare global {
  interface Window {
    fbq: (...args: unknown[]) => void;
  }
}

export const PIXEL_ID = "YOUR_PIXEL_ID";

export function trackPageView() {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "PageView");
  }
}

export function trackViewContent(contentId: string) {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "ViewContent", {
      content_ids: [contentId],
      content_type: "product",
    });
  }
}

export function trackInitiateCheckout() {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "InitiateCheckout", {
      content_ids: ["sarajoo-camellia-gua-sha"],
      content_type: "product",
      value: 79000,
      currency: "KRW",
    });
  }
}

export function trackCustomEvent(
  eventName: string,
  params?: Record<string, unknown>
) {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("trackCustom", eventName, params);
  }
}

export function trackSocialProofView() {
  trackCustomEvent("SocialProofView");
}

export function trackFAQInteraction(question: string) {
  trackCustomEvent("FAQInteraction", { question });
}

export function trackMicroConversion(type: string) {
  trackCustomEvent("MicroConversion", { type });
}
