import { clerkMiddleware } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const clerkPublishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
const hasClerk = clerkPublishableKey && !clerkPublishableKey.includes("placeholder");

// To learn more how to use clerkMiddleware to protect pages in your app, check out https://clerk.com/docs/references/nextjs/clerk-middleware
export default hasClerk 
  ? clerkMiddleware()
  : (req: NextRequest) => NextResponse.next()

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}