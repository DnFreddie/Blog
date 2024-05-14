import posthog from 'posthog-js'
import { browser } from '$app/environment';

export const load = async () => {

  if (browser) {
    posthog.init(
      'phx_IKwihFUbgeYUtvnLl0sz5HiRO5UoLOshO28q9r3LOUB',
      {
        api_host:'"https://us.i.posthog.com"',
        capture_pageview: false,
        capture_pageleave: false
      }
    )
  }
  return
};
