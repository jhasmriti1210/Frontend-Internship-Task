import Link from "next/link";
import { signOut } from "next-auth/react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex">
      <nav className="w-64 bg-gray-800 text-white p-4 space-y-4">
        <h2 className="text-xl font-bold">Dashboard</h2>
        <ul>
          <li><Link href="/dashboard">Home</Link></li>
          <li><Link href="/dashboard/orders">Pizza Orders</Link></li>
          <li><button onClick={() => signOut()} className="mt-4 text-red-300">Logout</button></li>
        </ul>
      </nav>
      <main className="flex-1 p-8 bg-gray-100">{children}</main>
    </div>
  );
}
