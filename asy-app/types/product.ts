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
  // Additional characteristics
  countryOfOrigin?: string;
  style?: string[];
  colors?: string[];
  typeName?: string; // e.g., Письменный, Журнальный, Распашной, Со спинкой
  composition?: string[]; // rugs etc.
  mechanism?: string; // диваны/кровати
  liftingMechanism?: boolean; // кровати
  hasStorage?: boolean; // ящик для хранения
  maxLoadKg?: number; // generic max load
  lampType?: string; // for lamps
  frameMaterial?: string;
  upholsteryMaterial?: string;
  legMaterial?: string;
  finishMaterial?: string;
  fixtureMaterial?: string;
  manufacturerUrl?: string;
}
