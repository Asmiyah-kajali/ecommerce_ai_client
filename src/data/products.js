const products = [

  // SHOES (10)
  { id: 1, name: "Running Shoes", price: 1200, category: "shoes", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff" },
  { id: 2, name: "Sports Shoes", price: 1500, category: "shoes", image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519" },
  { id: 3, name: "Sneakers", price: 2000, category: "shoes", image: https:"" },
  { id: 4, name: "Formal Shoes", price: 2500, category: "shoes", image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5" },
  { id: 5, name: "Casual Shoes", price: 1300, category: "shoes", image: "https://images.unsplash.com/photo-1519741497674-611481863552" },
  { id: 6, name: "Nike Style Shoes", price: 3000, category: "shoes", image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db" },
  { id: 7, name: "Adidas Sneakers", price: 2800, category: "shoes", image: "https://images.unsplash.com/photo-1584735175315-9d5df23be620" },
  { id: 8, name: "White Sneakers", price: 2200, category: "shoes", image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77" },
  { id: 9, name: "Black Shoes", price: 2100, category: "shoes", image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86" },
  { id: 10, name: "Gym Shoes", price: 1700, category: "shoes", image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a" },

  // PHONES (10)
  { id: 11, name: "iPhone 17 Pro Max", price: 129999, category: "phones", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9" },
  { id: 12, name: "Android Phone", price: 20000, category: "phones", image: "https://images.unsplash.com/photo-1580910051074-3eb694886505" },
  { id: 13, name: "Samsung Galaxy", price: 50000, category: "phones", image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97" },
  { id: 14, name: "OnePlus Phone", price: 35000, category: "phones", image: "https://images.unsplash.com/photo-1616348436168-de43ad0db179" },
  { id: 15, name: "Realme Phone", price: 18000, category: "phones", image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb" },
  { id: 16, name: "iPhone Mini", price: 60000, category: "phones", image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad" },
  { id: 17, name: "Gaming Phone", price: 45000, category: "phones", image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab" },
  { id: 18, name: "Budget Phone", price: 10000, category: "phones", image: "https://images.unsplash.com/photo-1580910051074-3eb694886505" },
  { id: 19, name: "Fold Phone", price: 120000, category: "phones", image: "https://images.unsplash.com/photo-1678911820864-e6d4b0bfb7c1" },
  { id: 20, name: "Smartphone Pro", price: 70000, category: "phones", image: "https://images.unsplash.com/photo-1510552776732-03e61cf4b144" },

  // HEADPHONES (10)
  { id: 21, name: "Wireless Headphones", price: 2200, category: "headphones", image: "https://images.unsplash.com/photo-1577174881658-0f30ed549adc" },
  { id: 22, name: "Gaming Headset", price: 3500, category: "headphones", image: "https://images.unsplash.com/photo-1580894908361-967195033215" },
  { id: 23, name: "Sony Headphones", price: 5000, category: "headphones", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e" },
  { id: 24, name: "Noise Cancelling", price: 7000, category: "headphones", image: "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd" },
  { id: 25, name: "Bluetooth Headphones", price: 1800, category: "headphones", image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b" },
  { id: 26, name: "Studio Headphones", price: 9000, category: "headphones", image: "https://images.unsplash.com/photo-1484704849700-f032a568e944" },
  { id: 27, name: "Bass Boost Headphones", price: 2500, category: "headphones", image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad" },
  { id: 28, name: "Earbuds", price: 1500, category: "headphones", image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df" },
  { id: 29, name: "Wireless Earbuds", price: 2000, category: "headphones", image: "https://images.unsplash.com/photo-1598331668826-20cecc596b86" },
  { id: 30, name: "Premium Headphones", price: 10000, category: "headphones", image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb" },

  // DRESSES (10)
  { id: 31, name: "Casual Dress", price: 1500, category: "dresses", image: "https://images.unsplash.com/photo-1495121605193-b116b5b09a24" },
  { id: 32, name: "Party Dress", price: 2500, category: "dresses", image: "https://images.unsplash.com/photo-1521335629791-ce4aec67dd53" },
  { id: 33, name: "Summer Dress", price: 1800, category: "dresses", image: "https://images.unsplash.com/photo-1509631179647-0177331693ae" },
  { id: 34, name: "Evening Gown", price: 4000, category: "dresses", image: "https://images.unsplash.com/photo-1520975922203-b3c3b3c3b3c3" },
  { id: 35, name: "Floral Dress", price: 1700, category: "dresses", image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c" },
  { id: 36, name: "Designer Dress", price: 5000, category: "dresses", image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d" },
  { id: 37, name: "Maxi Dress", price: 2200, category: "dresses", image: "https://images.unsplash.com/photo-1520974735194-1b68f0b3f8c3" },
  { id: 38, name: "Formal Dress", price: 3000, category: "dresses", image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956" },
  { id: 39, name: "Wedding Dress", price: 10000, category: "dresses", image: "https://images.unsplash.com/photo-1520975922203-b3c3b3c3b3c3" },
  { id: 40, name: "Casual Outfit", price: 1200, category: "dresses", image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b" }
];

export default products;