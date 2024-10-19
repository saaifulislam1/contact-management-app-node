import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Middleware to redirect logged-in users from login page to dashboard
export function middleware(request: NextRequest) {
  const token = request.cookies.get('accessToken')?.value;

  console.log('FROM MIDDLEWARE', token); // Debugging log

  // If a token exists and the user is trying to access the login page, redirect to dashboard
  const isLoginPage = request.nextUrl.pathname === '/auth/login';
  
  if (token && isLoginPage) {
    // Redirect to dashboard if already authenticated
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  // Allow the request to continue if no token is found or if it's not the login page
  return NextResponse.next();
}

// Apply middleware only on the login page
export const config = {
  matcher: ['/auth/login'],
  
};
