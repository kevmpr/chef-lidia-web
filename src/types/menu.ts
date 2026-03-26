// TypeScript interfaces for menu data structure

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number; // in cents
  allergens?: Array<'gluten' | 'dairy' | 'nuts' | 'shellfish' | 'soy' | 'eggs'>;
  isDailySpecial?: boolean;
  image: string; // relative path starting with /assets/
}

export interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
}

export interface MenuData {
  categories: MenuCategory[];
}
