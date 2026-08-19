export interface PricingOption {
  id: string;
  name: string;
  badge?: string;
  priceNote: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
}

export const pricingData: PricingOption[] = [
  {
    id: 'pieza-individual',
    name: 'Pieza Individual',
    badge: 'Para un detalle especial',
    priceNote: 'Valores accesibles por unidad',
    description: 'Figura de origami única ideal para regalar un gesto significativo o decorar un espacio personal.',
    features: [
      '1 figura artesanal (Grulla, Flor, Mariposa o Geométrica)',
      'Selección de colores dentro de la paleta disponible',
      'Presentación básica protegida para transporte',
      'Coordinación directa por WhatsApp',
    ],
    isPopular: false,
    ctaText: 'Consultar por Pieza',
  },
  {
    id: 'set-regalo-box',
    name: 'Set de Regalo en Caja',
    badge: 'El más solicitado',
    priceNote: 'Presentación premium lista para regalar',
    description: 'Arreglo de origami en caja de regalo o cúpula transparente con tarjeta dedicatoria personalizada.',
    features: [
      'Set de 3 a 5 figuras combinadas o ramo floral',
      'Caja de presentación delicada o cúpula protectora',
      'Tarjeta personalizada con tu mensaje especial',
      'Paleta de colores a elección (Rosa, Lavanda, Crema)',
      '1 ronda de revisión de colores previa al armado',
    ],
    isPopular: true,
    ctaText: 'Pedir Set de Regalo',
  },
  {
    id: 'pack-eventos',
    name: 'Pack para Eventos & Recuerdos',
    badge: 'Celebraciones y Matrimonios',
    priceNote: 'Precios preferenciales por cantidad',
    description: 'Volumen de origamis diseñados como recuerdos para invitados o ambientación completa de eventos.',
    features: [
      'Desde 20 unidades con descuento por escala',
      'Etiquetas con nombres, fecha o logo del evento',
      'Empaque individual o en lote protegido',
      'Guirnaldas, móviles o centros de mesa complementarios',
      'Planificación con calendario de entrega anticipado',
    ],
    isPopular: false,
    ctaText: 'Cotizar Pack Evento',
  },
  {
    id: 'diseno-personalizado',
    name: 'Creación a Medida',
    badge: 'Proyecto Exclusivo',
    priceNote: 'Presupuesto según complejidad',
    description: 'Desarrollo de figuras inéditas, esculturas complejas o modelos especiales según tu requerimiento.',
    features: [
      'Diseño exclusivo basado en tu idea o referencia',
      'Papeles especiales importados y acabados únicos',
      'Asesoría técnica y visual durante todo el proceso',
      'Dimensiones y escalas a medida del proyecto',
      'Seguimiento fotográfico de avances por WhatsApp',
    ],
    isPopular: false,
    ctaText: 'Cotizar Proyecto Especial',
  },
];
