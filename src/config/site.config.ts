export interface NavItem {
  label: string;
  href: string;
}

export interface SiteConfig {
  brand: {
    name: string;
    legalName?: string;
    slogan: string;
    description: string;
    industry: string;
    foundedYear?: number;
    logo: string;
    favicon: string;
    ogImage: string;
    colors: {
      primary: string;
      accent: string;
      background: string;
    };
  };
  contact: {
    phone?: string;
    whatsappNumber: string;
    whatsappDefaultMessage: string;
    email?: string;
    address: string;
    commune: string;
    city: string;
    country: string;
    openingHours: string;
    googleMapsEmbedUrl?: string;
  };
  social: {
    instagram?: string;
    facebook?: string;
    whatsapp?: string;
  };
  seo: {
    siteUrl: string;
    defaultTitle: string;
    defaultDescription: string;
    locale: string;
  };
  navigation: {
    main: NavItem[];
    footer: NavItem[];
  };
  legal?: {
    enabled?: boolean;
    privacyNotice?: string;
    dataProtectionStandard?: string;
  };
  developerCredit?: {
    enabled?: boolean;
    text?: string;
    url?: string;
    label?: string;
  };
}

// ─── 1. DATOS BASE DEL CLIENTE (Configurar una sola vez) ───────────
const brandName = 'Origami';
const whatsappNumber = '56912345678';
const whatsappDefaultMessage = `Hola ${brandName}, me gustaría consultar por una compra.`;

// Helper para generar enlaces de WhatsApp sin duplicar números ni textos
export const buildWhatsAppUrl = (number: string = whatsappNumber, message: string = whatsappDefaultMessage): string => {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
};

// ─── 2. CONFIGURACIÓN CENTRALIZADA (DRY) ───────────────────────────
export const siteConfig: SiteConfig = {
  brand: {
    name: brandName,
    legalName: undefined, // Opcional: no posee razón social informada
    slogan: 'Dobla tus ideas, crea momentos',
    description: 'Creaciones de papel hechas a mano para regalar, decorar y sorprender con detalles únicos e inolvidables.',
    industry: 'Artesanía / Origami / Regalos y decoración hechos a mano',
    logo: '/logo.avif',
    favicon: '/favicon.avif',
    ogImage: '/logo.avif',
    colors: {
      primary: '#C25E3E', // Terracota taller
      accent: '#1E4D3B', // Verde bosque taller
      background: '#F6F4EF', // Mesa de papel artesanal
    },
  },
  contact: {
    whatsappNumber,
    whatsappDefaultMessage,
    address: 'Avenida Vicuña Mackenna 3939',
    commune: 'San Joaquín',
    city: 'Santiago',
    country: 'Chile',
    openingHours: 'Todos los días de 08:00 a 22:00 hrs',
    googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3327.915729785868!2d-70.62777892348574!3d-33.48834469888914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662d01e1d3e8e25%3A0xc3d15b81a7b4588e!2sAv.%20Vicu%C3%B1a%20Mackenna%203939%2C%20San%20Joaqu%C3%ADn%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses!2scl!4v1700000000000!5m2!1ses!2scl',
  },
  social: {
    instagram: 'https://instagram.com/origami.cl',
    facebook: 'https://facebook.com/origami.cl',
    whatsapp: buildWhatsAppUrl(whatsappNumber, whatsappDefaultMessage),
  },
  seo: {
    siteUrl: 'https://www.origami.cl',
    defaultTitle: `${brandName} | Origamis hechos a mano y diseños para regalar`,
    defaultDescription: `Descubre ${brandName}, creaciones de papel hechas a mano para regalar, decorar y sorprender. Conoce nuestros diseños y realiza tu pedido de forma fácil y rápida.`,
    locale: 'es_CL',
  },
  navigation: {
    main: [
      { label: 'Inicio', href: '#inicio' },
      { label: 'Nosotros', href: '#nosotros' },
      { label: 'Creaciones', href: '#servicios' },
      { label: 'Proceso', href: '#proceso' },
      { label: 'Galería', href: '#galeria' },
      { label: 'Opciones', href: '#precios' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Pedido & Contacto', href: '#contacto' },
    ],
    footer: [
      { label: 'Inicio', href: '#inicio' },
      { label: 'Nosotros', href: '#nosotros' },
      { label: 'Creaciones Destacadas', href: '#servicios' },
      { label: 'Cómo Ordenar', href: '#proceso' },
      { label: 'Galería de Diseños', href: '#galeria' },
      { label: 'Precios & Opciones', href: '#precios' },
      { label: 'Preguntas Frecuentes', href: '#faq' },
      { label: 'Contacto Directo', href: '#contacto' },
    ],
  },
  // Opcional: deshabilitado o undefined para proyectos que no requieren sección legal formal
  legal: undefined,
  // Opcional: Crédito de autoría técnica a Inspy Tech (configurable según requerimiento)
  developerCredit: {
    enabled: true,
    text: 'Desarrollado por',
    url: 'https://inspytech.cl',
    label: 'inspytech.cl',
  },
};
