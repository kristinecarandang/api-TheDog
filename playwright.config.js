// @ts-check

import { defineConfig } from '@playwright/test';
export default defineConfig({
  use: {
    //base url for dog api
    baseURL: 'https://api.thedogapi.com/v1',
    extraHTTPHeaders: {
      'x-api-key': 'live_1y0b2d3e4f5g6h7i8j9k0l1m2n3o4p5q6r7s8t9u0v1w2x3y4z5a6b7c8d9e0f1g2h3i4j5k6l7m8n9o0p1q2r3s4t5u6v7w8x9y0z',
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  }
});


