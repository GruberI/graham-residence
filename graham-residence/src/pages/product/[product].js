import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import SingleProduct from "@/components/SingleProduct/SingleProduct";
import { artwork } from "../../components/Shop/ArtSection";

export default function ProductPage() {
  const router = useRouter();
  const productId = parseInt(router.query.product);
  const product = artwork.find((art) => art.id === productId);

  if (product === undefined) {
    return null;
  }

  return (
    <Layout>
      <SingleProduct product={product} />
    </Layout>
  );
}
