export type Product = {
  id: string;
  title: string;
  price: number;
  image: string;  // remote URL
  tag?: 'New' | 'Sale' | string;
};

export const products: Product[] = [
  { id: '1', title: 'Ripped Skinny Jeans', price: 24.99, image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1200&auto=format&fit=crop' },
  { id: '2', title: 'Mega Ripped Jeans', price: 19.99, image: 'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?q=80&w=1200&auto=format&fit=crop', tag: 'New' },
  { id: '3', title: 'Washed Skinny Jeans', price: 20.5,  image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=1200&auto=format&fit=crop' },
  { id: '4', title: 'Vintage Skinny Jeans', price: 14.99, image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop', tag: 'Sale' },
  { id: '5', title: 'Blue Denim Slim', price: 21.0, image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop' },
  { id: '6', title: 'Stonewash Straight', price: 18.99, image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop', tag: 'New' },
  { id: '7', title: 'Black Stretch Jeans', price: 22.49, image: 'https://images.unsplash.com/photo-1484516396415-4971641de8e0?q=80&w=1200&auto=format&fit=crop' },
  { id: '8', title: 'Classic Bootcut', price: 16.75, image: 'https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=1200&auto=format&fit=crop' },
];
