export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  tag: string;
  iconName: 'Sparkles' | 'Gift' | 'Palette' | 'HeartHandshake';
  features: string[];
  idealFor: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: 'decorativos',
    title: 'Origamis Decorativos',
    shortDescription: 'Figuras de papel hechas a mano para decorar espacios y dar un toque especial.',
    fullDescription: 'Piezas artesanales de origami diseñadas para embellecer hogares, oficinas, estantes y vitrinas. Cada doblez aporta calidez, equilibrio y una armonía visual inspirada en el arte tradicional del papel.',
    tag: 'Espacios & Ambientes',
    iconName: 'Sparkles',
    features: [
      'Papeles especiales de alta textura y gramaje resistente',
      'Modelos modulares, flores y figuras geométricas',
      'Diseños listos para colgar o apoyar en muebles',
      'Tratamiento protector para mayor durabilidad',
    ],
    idealFor: 'Salas de estar, escritorios, vitrinas comerciales y rincones de meditación.',
  },
  {
    id: 'regalo',
    title: 'Origamis para Regalo',
    shortDescription: 'Creaciones pensadas para sorprender y acompañar momentos especiales.',
    fullDescription: 'Regala emociones dobladas con amor y dedicación. Diseñamos piezas en cajas de presentación delicadas, acompañadas de tarjetas con mensajes y una presentación inolvidable para quien lo recibe.',
    tag: 'Momentos Inolvidables',
    iconName: 'Gift',
    features: [
      'Presentación en caja o cúpula transparente de exhibición',
      'Grullas de la fortuna, mariposas y ramos de flores eternas',
      'Opción de incluir tarjeta manuscrita o dedicatoria',
      'Paleta de colores a elección según la ocasión',
    ],
    idealFor: 'Cumpleaños, aniversarios, agradecimientos y sorpresas con significado.',
  },
  {
    id: 'personalizados',
    title: 'Pedidos Personalizados',
    shortDescription: 'Diseños adaptados a la ocasión, colores y preferencias del cliente.',
    fullDescription: 'Transformamos tu idea en una escultura de papel única. Tú eliges la figura, el tipo de papel, los colores de tu preferencia y la escala del proyecto para crear una obra verdaderamente irrepetible.',
    tag: '100% a Tu Medida',
    iconName: 'Palette',
    features: [
      'Asesoría directa por WhatsApp para definir colores y formas',
      'Diseños exclusivos a partir de referencias fotográficas',
      'Escalas desde miniaturas delicadas hasta piezas centrales',
      'Muestras previas de paleta de papel antes del armado final',
    ],
    idealFor: 'Regalos corporativos, fechas conmemorativas y creaciones temáticas.',
  },
  {
    id: 'ocasiones-especiales',
    title: 'Detalles para Ocasiones Especiales',
    shortDescription: 'Origamis para celebraciones, eventos y regalos únicos.',
    fullDescription: 'Recuerdos y ambientaciones en papel para matrimonios, baby showers, bautizos, graduaciones y eventos corporativos. Detalles que los invitados guardarán con cariño como una pieza de arte.',
    tag: 'Eventos & Celebraciones',
    iconName: 'HeartHandshake',
    features: [
      'Packs por volumen con precios preferenciales',
      'Guirnaldas, móviles y centros de mesa plegados',
      'Etiquetas personalizadas con nombres y fechas',
      'Coordinación de tiempos de entrega para el evento',
    ],
    idealFor: 'Matrimonios, baby showers, fiestas temáticas y eventos de marca.',
  },
];
