import Layout from "@/components/Layout";
import OrdersTable from "@/components/OrdersTable";
import { requireAuth } from "@/lib/auth";
import orders from "@/data/orders.json";

export default function OrdersPage() {
  return (
    <Layout>
      <h1 className="text-2xl font-semibold mb-4">Pizza Orders</h1>
      <OrdersTable orders={orders} />
    </Layout>
  );
}

export const getServerSideProps = requireAuth;
