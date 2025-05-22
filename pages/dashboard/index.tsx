import { useSession, signOut } from "next-auth/react";
import Layout from "../../components/Layout";
import { requireAuth } from "@/lib/auth";

export default function Dashboard() {
  const { data: session } = useSession();
  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">
        Hello, {session?.user?.name}!
      </h1>
    </Layout>
  );
}

export const getServerSideProps = requireAuth;
