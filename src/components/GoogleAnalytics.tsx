import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const MEASUREMENT_ID = "G-1DS4F6RJRC";

type GoogleTag = (command: "event", eventName: "page_view", parameters: {
  page_title: string;
  page_location: string;
  page_path: string;
}) => void;

function getGoogleTag(): GoogleTag | undefined {
  const { gtag } = window as Window & { gtag?: GoogleTag };
  return gtag;
}

export function GoogleAnalytics() {
  const location = useLocation();
  const hasTrackedInitialPage = useRef(false);

  useEffect(() => {
    const gtag = getGoogleTag();
    if (!gtag) return;

    const pagePath = `${location.pathname}${location.search}${location.hash}`;
    gtag("event", "page_view", {
      page_title: document.title,
      page_location: window.location.href,
      page_path: pagePath,
    });
    hasTrackedInitialPage.current = true;
  }, [location.pathname, location.search, location.hash]);

  return null;
}
