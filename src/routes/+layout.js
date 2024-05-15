import posthog from "posthog-js";
import { browser } from "$app/environment";

export const load = async () => {
  if (browser) {
    posthog.init("phc_1DjJ8v4fRqQ6lEzd8iSaaj5tp5DkLeEbk53bQrsFiiB", {
      api_host: '"https://us.i.posthog.com"',
      capture_pageview: false,
      capture_pageleave: false,
    });
  }
  return;
};
