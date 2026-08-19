export interface GalleryItem {
  id: string;
  modelNumber: string;
  title: string;
  category: 'Regalos & Símbolos' | 'Decoración Floral' | 'Geometría Modular' | 'Ocasiones Especiales';
  description: string;
  image: string;
  paperType: string;
  technique: string;
  difficulty: 'Intermedio' | 'Avanzado' | 'Maestro';
  foldingTime: string;
  foldsCount: string;
  colors: string[];
  dimensions: string;
  tags: string[];
  highlightFeature: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: 'grullas-senbazuru',
    modelNumber: 'MOD-01',
    title: 'Grulla Japonesa de Ceremonia (Tsuru)',
    category: 'Regalos & Símbolos',
    description: 'Símbolo ancestral de paz, salud y esperanza. Plegada con absoluta simetría sobre pliego cuadrangular, cuidando la tensión en las aristas de las alas y el ángulo del pico.',
    image: '/images/gallery/mod-01.webp',
    paperType: 'Papel Kami Washi 90g (Fibras de Kozo)',
    technique: 'Plegado Tradicional Simétrico',
    difficulty: 'Intermedio',
    foldingTime: '35 - 45 min',
    foldsCount: '34 pliegues de precisión',
    colors: ['#C25E3E', '#F6F4EF', '#1E4D3B'],
    dimensions: '14 cm x 12 cm x 8 cm',
    tags: ['Tradicional', 'Paz & Fortuna', 'Simbología'],
    highlightFeature: 'Aristas vivas con alas extendidas en 120°',
  },
  {
    id: 'flor-loto-modular',
    modelNumber: 'MOD-02',
    title: 'Flor de Loto & Lirios de Agua',
    category: 'Decoración Floral',
    description: 'Composición floral tridimensional en capas concéntricas con curvado suave de pétalos exteriores y cáliz interior texturado para decoración de mesas y vitrinas.',
    image: '/images/gallery/Mod-02.jpg',
    paperType: 'Papel Fibra Algodón 120g Tintado',
    technique: 'Curvado Húmedo & Capas Facetadas',
    difficulty: 'Avanzado',
    foldingTime: '1 hr 15 min',
    foldsCount: '48 facetas invertidas',
    colors: ['#C25E3E', '#D9826C', '#ECE8DE'],
    dimensions: '16 cm ø x 7 cm alto',
    tags: ['Flores', 'Centro de Mesa', 'Hogar'],
    highlightFeature: '8 pétalos cóncavos con relieve orgánico',
  },
  {
    id: 'lampara-geometrica',
    modelNumber: 'MOD-03',
    title: 'Poliedro Icosaédrico Modular Sonobe',
    category: 'Geometría Modular',
    description: 'Escultura geométrica poliédrica compuesta por 30 módulos entrelazados por fricción pura sin adhesivo, diseñada para refractar la luz cálida en múltiples facetas.',
    image: '/images/gallery/Mod-03.jpg',
    paperType: 'Papel Pergamino Satinado Translúcido 100g',
    technique: 'Ensamblaje Modular Sonobe 3D',
    difficulty: 'Maestro',
    foldingTime: '3 hrs 30 min',
    foldsCount: '30 módulos / 180 pliegues',
    colors: ['#ECE8DE', '#DDD8CB', '#C25E3E'],
    dimensions: '20 cm ø esférico',
    tags: ['Geometría', 'Modular 3D', 'Lámpara'],
    highlightFeature: 'Auto-portante sin pegamento ni soportes',
  },
  {
    id: 'caja-sorpresa-mariposas',
    modelNumber: 'MOD-04',
    title: 'Caja Mecánica con Despliegue de Mariposas',
    category: 'Regalos & Símbolos',
    description: 'Caja explosiva con mecanismo de solapas plegadas que se abre en cruz, desplegando 4 mariposas tridimensionales en vuelo suspendido con espacio para mensaje.',
    image: '/images/gallery/mod-04.jpg',
    paperType: 'Cartulina Texturada 180g & Papel Seda',
    technique: 'Estructura Mecánica Plegable',
    difficulty: 'Avanzado',
    foldingTime: '2 hrs',
    foldsCount: '26 piezas ensambladas',
    colors: ['#1B1E23', '#C25E3E', '#ECE8DE'],
    dimensions: '12 cm x 12 cm x 12 cm',
    tags: ['Sorpresa', 'Aniversario', 'Dedicatoria'],
    highlightFeature: 'Apertura dinámica con solapas en 4 direcciones',
  },
  {
    id: 'guirnalda-eventos',
    modelNumber: 'MOD-05',
    title: 'Guirnalda Cascada de Micro-Grullas',
    category: 'Ocasiones Especiales',
    description: 'Tira vertical suspendida con 8 micro-tsurus graduados en escala y degradé tonal, rematada con cuenta de madera de bambú y pliego de cota artesanal.',
    image: '/images/gallery/mod-05.jpg',
    paperType: 'Papel Chiyogami & Washi 70g',
    technique: 'Micro-Plegado & Enfilado Guiado',
    difficulty: 'Maestro',
    foldingTime: '2 hrs 45 min',
    foldsCount: '8 figuras / 272 micro-dobleces',
    colors: ['#1E4D3B', '#3B7A60', '#ECE8DE'],
    dimensions: '100 cm longitud vertical',
    tags: ['Matrimonios', 'Eventos', 'Colgante'],
    highlightFeature: 'Micro-tsurus desde 3 cm hasta 7 cm de envergadura',
  },
  {
    id: 'ramo-rosas-kawasaki',
    modelNumber: 'MOD-06',
    title: 'Ramo de Rosas Eternas Kawasaki',
    category: 'Decoración Floral',
    description: 'Composición de rosas plegadas a partir de un solo cuadrado continuo mediante la espiral geométrica de Toshikazu Kawasaki, preservando volumen eterno.',
    image: '/images/gallery/mod-06.jpg',
    paperType: 'Papel Kraft Satinado 110g Alta Densidad',
    technique: 'Algoritmo Espiral Kawasaki',
    difficulty: 'Maestro',
    foldingTime: '4 hrs (ramo completo)',
    foldsCount: '6 rosas / 360 pliegues',
    colors: ['#C25E3E', '#934027', '#1E4D3B'],
    dimensions: '28 cm alto x 22 cm ø',
    tags: ['Rosas Eternas', 'Elegancia', 'Regalo'],
    highlightFeature: 'Volumen hiperrealista de una sola pieza de papel',
  },
];
