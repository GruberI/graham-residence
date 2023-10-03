import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import SingleProduct from "@components/SingleProduct/SingleProduct"

export default function ProductPage() {
  const router = useRouter();
  return (
    <Layout>
    <SingleProduct>{router.query.productId}</SingleProduct>
    </Layout>
  );
}
