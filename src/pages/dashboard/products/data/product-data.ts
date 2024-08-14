const data = [
  {
    id: "728ed52f",
    price: 100,
    product: "Sapatilla to guapa ",
    img: "/img/products/product-1.webp",
    createdAt: new Date(),
    published: true,
    stock: 100,
    alertStock: 50,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. A obcaecati adipisci aperiam. Aliquam numquam repellat quibusdam cum? Qui quibusdam possimus consequatur sint odit sapiente error? Corrupti temporibus quam veritatis accusantium!",
    views: 100,
    likes: 50,
  },
  {
    id: "728ed52ff",
    price: 100,
    product: "Durakitos Sa.",
    img: "/img/products/product-2.webp",
    createdAt: new Date(),
    published: false,
    stock: 90,
    alertStock: 600,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. A obcaecati adipisci aperiam. Aliquam numquam repellat quibusdam cum? Qui quibusdam possimus consequatur sint odit sapiente error? Corrupti temporibus quam veritatis accusantium!",
    views: 100,
    likes: 20,
  },
  // ...
];

const getProducts = async () => {
  setTimeout(() => {
    return data;
  }, 2000);
};

export default getProducts;
