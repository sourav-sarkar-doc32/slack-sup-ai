"use client";

import { SessionProvider } from 'next-auth/react';
import { signOut } from "next-auth/react";
import Component from "../components/userData";

export default function Home() {
  return (
    <SessionProvider>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900">
        <header className="w-full py-5 flex justify-between items-center px-6 bg-white dark:bg-gray-800 shadow-md">
          <h1 className="text-xl font-semibold text-gray-700 dark:text-white">Slack Support AI</h1>
          <button
            onClick={() => signOut()}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Sign out
          </button>
        </header>

        <main className="flex flex-1 flex-col items-center justify-center w-full px-6">
          <Component />
          <p className="mt-8 text-center text-gray-600 dark:text-gray-400">
            Enhance your Slack experience with our AI support. Ask questions, get support, and more.
          </p>
        </main>

        <footer className="w-full h-24 flex items-center justify-center border-t border-gray-200 dark:border-gray-700 mt-8">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Powered by Next.js & TailwindCSS.
          </p>
        </footer>
      </div>
    </SessionProvider>
  );
}
