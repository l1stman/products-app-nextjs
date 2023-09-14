export default async function Products({ params }) {
  const id = params.id;

  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const result = await response.json();

  return (
    <div>
      <center>
        <h1 className="text-bold font-mono text-3xl">{result.title}</h1>

        <div className="flex flex-col justify-center items-center p-4 m-2 w-5/6 rounded-lg bg-black">
          <h1 className="text-white font-bold text-lg">${result.price}</h1>
          <hr />
          <p className="text-white">{result.description}</p>

          <div className="flex justify-center mt-4">
            <div className="flex">
              {result.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Product Image ${index + 1}`}
                  className="w-24 h-24 m-2 rounded-lg"
                />
              ))}
            </div>
          </div>

          <div className="mt-4 p-4 bg-white rounded-lg">
            <p>Discount Percentage: {result.discountPercentage}%</p>
            <p>Rating: {result.rating}</p>
            <p>Stock: {result.stock}</p>
            <p>Brand: {result.brand}</p>
            <p>Category: {result.category}</p>
          </div>
        </div>
      </center>
    </div>
  );
}
