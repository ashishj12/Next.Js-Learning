export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}

export default async function ProductsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <h1>
      Product with {id} rendered at {new Date().toLocaleTimeString()}
    </h1>
  );
}
