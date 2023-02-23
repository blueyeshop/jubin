import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Jubin',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Parvin',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      //_id: '1',
      name: 'Nike Slim Shirt',
      slug: 'nike-slim-shirt',
      category: 'Shirts',
      image: '/images/p1.jpg',
      price: 120,
      countInStock: 10,
      brand: 'Nike',
      rating: 3.5,
      numReviews: 10,
      description: 'Hith quality shirts',
    },
    {
      //_id: '2',
      name: 'Adidas Slim Shirt',
      slug: 'adidas-slim-shirt',
      category: 'Shirts',
      image: '/images/p2.jpg',
      price: 250,
      countInStock: 0,
      brand: 'Adidas',
      rating: 2.5,
      numReviews: 10,
      description: 'Hith quality shirts',
    },
    {
      //_id: '3',
      name: 'Nike Slim Pant',
      slug: 'nike-slim-pant',
      category: 'Pant',
      image: '/images/p3.jpg',
      price: 220,
      countInStock: 10,
      brand: 'Nike',
      rating: 1.5,
      numReviews: 10,
      description: 'Hith quality pant ',
    },
    {
      //_id: '4',
      name: 'Adidas Fit Pant',
      slug: 'adidas-fit-pant',
      category: 'Pants',
      image: '/images/p4.jpg',
      price: 190,
      countInStock: 10,
      brand: 'Adidas',
      rating: 4.5,
      numReviews: 10,
      description: 'Hith quality pant',
    },
  ],
};

export default data;
