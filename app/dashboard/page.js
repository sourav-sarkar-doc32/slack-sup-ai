// pages/dashboard.js
"use client";
import { useSession, signOut } from 'next-auth/react';

export default function Dashboard() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-200">
        <div className="max-w-4xl mx-auto py-12">
          <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
          <p className="mb-2"><p>You&apos;re logged in as {session.user.email}</p></p>
          <button
            onClick={() => signOut()}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Sign out
          </button>
        </div>
      </div>
    );
  }

  // Redirect or show a message if not authenticated
  return <p>Not Logged in...<a href="/">Goto Home Page</a></p>;
}
