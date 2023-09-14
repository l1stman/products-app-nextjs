import Link from "next/link";

export default async function Products() {
  const response = await fetch("https://dummyjson.com/products/");
  const result = await response.json();

  const Products = () => {
    return result.products.map((product) => {
      return (
        <center>
          <Link href={`/products/${product.id}`}>
            <div
              key={product.id}
              className="flex flex-col justify-center items-center p-4 m-2 w-5/6 rounded-lg bg-black"
            >
              <h1 className="text-white font-bold text-lg">
                {product.title} - ${product.price}
              </h1>
              <hr />
              <p className="text-white">{product.description}</p>
            </div>
          </Link>
        </center>
      );
    });
  };

  return (
    <div>
      <center>
        <h1 className="text-bold font-mono text-2xl">Products</h1>
      </center>

      <Products />
    </div>
  );
}
