import { redirect } from 'next/navigation';

// Root route for the docs site. We immediately send users to the introduction page so
// that they don’t land on a 404 when visiting http://localhost:3000/ (or the deployed root).
// Keeping this logic inside the app router avoids reliance on Next.js redirect configuration
// that can sometimes be skipped in dev mode.
export default function Home() {
  redirect('/docs/introduction');
}
