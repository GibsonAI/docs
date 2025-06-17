import { createApiClient } from '@neondatabase/api-client';
import { neon } from '@neondatabase/serverless';
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

import { findClosestRegion } from './regions';

const RATE_LIMIT_REQUESTS = 10;
const RATE_LIMIT_WINDOW = '10 s';
const DATABASE_QUOTA_BYTES = 250000000; // 250MB
const PG_VERSION = 17;
const MIN_COMPUTE_UNITS = 0.25;
const MAX_COMPUTE_UNITS = 0.25;
const SUSPEND_TIMEOUT_SECONDS = 120; // 2 minutes
const PROJECT_COOKIE_MAX_AGE_SECONDS = 3600; // 1 hour
const PROJECT_COOKIE_NAME = 'neon-project';

// const neonApiClient = createApiClient({
//   apiKey: process.env.DEPLOY_POSTGRES_NEON_API_KEY,
// });

// const ratelimit = new Ratelimit({
//   redis: new Redis({
//     url: process.env.DEPLOY_POSTGRES_UPSTASH_REDIS_REST_URL,
//     token: process.env.DEPLOY_POSTGRES_UPSTASH_REDIS_REST_TOKEN,
//   }),
//   limiter: Ratelimit.slidingWindow(RATE_LIMIT_REQUESTS, RATE_LIMIT_WINDOW),
//   analytics: true,
// });

// Disabled Upstash Redis and ticket creation for build
export async function POST(request) {
  return new Response(
    JSON.stringify({
      result: null,
      success: false,
      error: {
        message: 'Ticket creation and Upstash Redis are disabled for build.',
        code: 'DISABLED',
      },
    }),
    { status: 200 }
  );
}
