export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  highlight: string;
  iconName: 'Search' | 'Sparkles' | 'MessageCircle' | 'PackageCheck';
}

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Elige tu Diseño',
    description: 'Explora nuestra colección de figuras, decoraciones o cuéntanos la idea que tienes en mente para tu ocasión especial.',
    highlight: 'Eliges modelo, tamaño o referencia visual',
    iconName: 'Search',
  },
  {
    number: '02',
    title: 'Personaliza los Detalles',
    description: 'Selecciona tus colores preferidos, papeles especiales, dedicatoria o especificaciones particulares del pedido.',
    highlight: 'Paletas pastel, texturas y mensajes personalizados',
    iconName: 'Sparkles',
  },
  {
    number: '03',
    title: 'Coordina por WhatsApp',
    description: 'Envíanos tu solicitud y afinamos juntos disponibilidad, medio de pago, fecha de entrega o despacho a convenir.',
    highlight: 'Atención cercana, directa y sin intermediarios',
    iconName: 'MessageCircle',
  },
  {
    number: '04',
    title: 'Recibe y Sorprende',
    description: 'Confeccionamos cada pliegue a mano con dedicación y te entregamos una pieza lista para regalar, decorar o atesorar.',
    highlight: 'Empaque delicado y seguro para proteger cada doblez',
    iconName: 'PackageCheck',
  },
];
