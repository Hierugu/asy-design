export interface Product {
  id: string;
  name: string;
  category:
    | 'tables'
    | 'beds'
    | 'shelving'
    | 'chairs'
    | 'mirrors'
    | 'sofas'
    | 'rugs'
    | 'lamps';
  price: number;
  description: string;
  shortDescription: string;
  image: string;
  images?: string[];
  inStock: boolean;
  materials?: string[];
  dimensions?: {
    width: number;
    height: number;
    depth?: number;
  };
  manufacturerUrl?: string;
}
