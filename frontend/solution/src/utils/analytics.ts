type AnalyticsEvent =
  | {
    type: "add_to_cart";
    sku: string;
    quantity: number;
    timestamp: number;
  };

export const trackEvent = (event: AnalyticsEvent) => {
  console.log("📊 EVENT:", event);
};