// TypeScript interfaces for menu data structure

export interface PriceVariant {
  size: string;
  price: number;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number; // base price (0 if variants are used)
  variants?: PriceVariant[]; // e.g. [{ size: "Mediana", price: 15000 }, { size: "Grande", price: 18000 }]
  allergens?: Array<'gluten' | 'dairy' | 'nuts' | 'shellfish' | 'soy' | 'eggs'>;
  isDailySpecial?: boolean;
  isVegetarian?: boolean;
  dishType?: string;
  image: string | null; // relative path starting with /assets/
}

export interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
}

export interface MenuData {
  categories: MenuCategory[];
}
