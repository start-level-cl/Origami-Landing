export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  description: string;
  paperType: string;
  colors: string[];
  dimensions?: string;
  tags: string[];
}

export const galleryItems: GalleryItem[] = [
  {
    id: 'grullas-senbazuru',
    title: 'Grulla Japonesa Tradicional (Tsuru)',
    category: 'Regalos & Símbolos',
    description: 'Símbolo milenario de paz, salud y buenos augurios. Plegada con precisión milimétrica en papel artesanal texturado.',
    paperType: 'Papel Kami Washi 90g',
    colors: ['#F3B6C8', '#B8A9D9', '#FFF9F0'],
    dimensions: '12 cm x 10 cm',
    tags: ['Tradicional', 'Paz & Fortuna', 'Regalo'],
  },
  {
    id: 'flor-loto-modular',
    title: 'Flor de Loto & Lirios de Agua',
    category: 'Decoración Floral',
    description: 'Composición floral multicapa con pétalos curvados suavemente que recrean la serenidad del loto florecido.',
    paperType: 'Papel Fibra Algodón 120g',
    colors: ['#FCE7ED', '#F3B6C8', '#BE4668'],
    dimensions: '14 cm diámetro',
    tags: ['Flores', 'Decoración', 'Centro de Mesa'],
  },
  {
    id: 'lampara-geometrica',
    title: 'Lámpara Modular Sonobe',
    category: 'Diseño Decorativo',
    description: 'Poliedro geométrico tridimensional compuesto por 30 módulos ensamblados sin adhesivos, ideal para ambientar con luz cálida.',
    paperType: 'Papel Pergamino Translúcido',
    colors: ['#FFFDF9', '#EFEAF8', '#B8A9D9'],
    dimensions: '18 cm diámetro',
    tags: ['Geometría', 'Modular', 'Ambientes'],
  },
  {
    id: 'caja-sorpresa-mariposas',
    title: 'Caja Regalo con Vuelo de Mariposas',
    category: 'Regalos Personalizados',
    description: 'Caja explosiva que al abrirse despliega una cascada de mariposas de origami en tonos pastel con espacio para dedicatoria.',
    paperType: 'Cartulina Perlada & Papel Origami',
    colors: ['#F3B6C8', '#B8A9D9', '#FFF9F0'],
    dimensions: '10 cm x 10 cm x 10 cm',
    tags: ['Sorpresa', 'Aniversario', 'Cumpleaños'],
  },
  {
    id: 'guirnalda-eventos',
    title: 'Guirnalda de Micro-Grullas Colgantes',
    category: 'Eventos Especiales',
    description: 'Tira vertical con 10 grullas miniatura graduadas en degradé de color pastel, terminadas con cuentas de madera y borla.',
    paperType: 'Papel Chiyogami & Kami Fino',
    colors: ['#F8CFDC', '#CABBE7', '#FFF9F0'],
    dimensions: '90 cm de longitud',
    tags: ['Matrimonios', 'Baby Shower', 'Decoración'],
  },
  {
    id: 'ramo-rosas-kawasaki',
    title: 'Ramo de Rosas Eternas Kawasaki',
    category: 'Regalos & Ocasiones',
    description: 'Ramo de 6 a 12 rosas plegadas mediante el complejo método de espiral Kawasaki, nunca se marchitan.',
    paperType: 'Papel Kraft Satinado & Tintado',
    colors: ['#E78AA6', '#765FA8', '#D45D81'],
    dimensions: '25 cm x 18 cm',
    tags: ['Rosas Eternas', 'Romántico', 'Hecho a Mano'],
  },
];
