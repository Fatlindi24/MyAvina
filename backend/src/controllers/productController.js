// import prisma from '../lib/prisma.js'; // Import your single Prisma Client instance

// /**
//  * @description Fetch all products from the database
//  * @route       GET /api/products
//  * @access      Public
//  */
// export const getAllProducts = async (req, res) => {
//   try {
//     const products = await prisma.product.findMany();
//     res.status(200).json(products);
//   } catch (error) {
//     console.error('Error fetching products:', error);
//     res.status(500).json({ message: 'An error occurred while fetching products.' });
//   }
// };

// /**
//  * @description Fetch a single product by its unique slug
//  * @route       GET /api/products/:slug
//  * @access      Public
//  */
// export const getProductBySlug = async (req, res) => {
//   try {
//     const { slug } = req.params;

//     const product = await prisma.product.findUnique({
//       where: {
//         slug: slug,
//       },
//     });

//     if (product) {
//       res.status(200).json(product);
//     } else {
//       // If no product is found with that slug, return a 404
//       res.status(404).json({ message: 'Product not found.' });
//     }
//   } catch (error) {
//     console.error(`Error fetching product with slug ${req.params.slug}:`, error);
//     res.status(500).json({ message: 'An error occurred while fetching the product.' });
//   }
// };