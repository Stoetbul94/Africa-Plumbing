export interface Product {
  id: string;
  name: string;
  category: "Plumbing" | "Electrical" | "Bathroom" | "Building";
  image: string;
  description: string;
  featured?: boolean;
}

export const products: Product[] = [
  // Plumbing Products
  {
    id: "pipes",
    name: "Plumbing Pipes & Fittings",
    category: "Plumbing",
    image: "/products/plumbing/pipes.jpg",
    description: "PVC, copper pipes and fittings for all plumbing needs.",
    featured: true,
  },
  {
    id: "traps",
    name: "Plumbing Traps",
    category: "Plumbing",
    image: "/products/plumbing/traps.jpg",
    description: "Quality traps for sinks, basins, and floor drains.",
  },
  {
    id: "valves",
    name: "Valves & Controls",
    category: "Plumbing",
    image: "/products/plumbing/valves.jpg",
    description: "Ball valves, gate valves, and control systems.",
  },
  {
    id: "fittings",
    name: "Pipe Fittings",
    category: "Plumbing",
    image: "/products/plumbing/fittings.jpg",
    description: "Elbows, tees, couplings, and connection fittings.",
  },
  // Electrical Products
  {
    id: "plugs",
    name: "Plugs & Sockets",
    category: "Electrical",
    image: "/products/electrical/plugs.jpg",
    description: "South African standard plugs, sockets, and adapters.",
    featured: true,
  },
  {
    id: "breakers",
    name: "Circuit Breakers",
    category: "Electrical",
    image: "/products/electrical/breakers.jpg",
    description: "MCBs, RCDs, and distribution boards.",
  },
  {
    id: "cable",
    name: "Electrical Cable",
    category: "Electrical",
    image: "/products/electrical/cable.jpg",
    description: "Copper and aluminum cables in various gauges.",
  },
  {
    id: "lights",
    name: "Lighting Solutions",
    category: "Electrical",
    image: "/products/electrical/lights.jpg",
    description: "LED lights, fixtures, and electrical accessories.",
  },
  // Bathroom Products
  {
    id: "toilets",
    name: "Toilets & Bathroom Sets",
    category: "Bathroom",
    image: "/products/bathroom/toilets.jpg",
    description: "Quality toilets and bathroom sets at unbeatable prices.",
    featured: true,
  },
  {
    id: "basins",
    name: "Basins & Vanities",
    category: "Bathroom",
    image: "/products/bathroom/basins.jpg",
    description: "Washbasins, pedestals, and vanity units.",
  },
  {
    id: "vanities",
    name: "Bathroom Vanities",
    category: "Bathroom",
    image: "/products/bathroom/vanities.jpg",
    description: "Complete vanity sets with mirrors and storage.",
  },
  {
    id: "sinks",
    name: "Kitchen & Bathroom Sinks",
    category: "Bathroom",
    image: "/products/bathroom/sinks.jpg",
    description: "Stainless steel and ceramic sink options.",
  },
  // Building Products
  {
    id: "cement",
    name: "Cement & Building Materials",
    category: "Building",
    image: "/products/building/cement.jpg",
    description: "Cement, sand, aggregates, and concrete supplies.",
    featured: true,
  },
  {
    id: "tools",
    name: "Building Tools",
    category: "Building",
    image: "/products/building/tools.jpg",
    description: "Hand tools, power tools, and construction equipment.",
  },
  {
    id: "accessories",
    name: "Building Accessories",
    category: "Building",
    image: "/products/building/accessories.jpg",
    description: "Nails, screws, anchors, and hardware accessories.",
  },
];

export const featuredProducts = products.filter((p) => p.featured);

export const getProductsByCategory = (category: Product["category"]) => {
  return products.filter((p) => p.category === category);
};

export const getProductById = (id: string) => {
  return products.find((p) => p.id === id);
};
