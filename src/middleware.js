/* eslint-disable import/prefer-default-export */
/* eslint-disable no-console */
import { NextResponse } from 'next/server';

// Remove all NextAuth usage and authentication logic for build
export async function middleware(req) {
  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/home', '/generate-ticket/:path*', '/tickets/:path*'],
};
