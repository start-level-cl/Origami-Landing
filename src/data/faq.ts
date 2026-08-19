export interface FAQItem {
  question: string;
  answer: string;
}

export const faqData: FAQItem[] = [
  {
    question: '¿Cómo puedo realizar una compra?',
    answer: 'Selecciona el diseño que te interesa y completa el formulario de pedido. Recibirás la información de tu solicitud directamente por WhatsApp para coordinar los detalles de la compra.',
  },
  {
    question: '¿Puedo solicitar un origami personalizado?',
    answer: 'Sí. Puedes indicar en el formulario qué figura, colores, cantidad u otros detalles especiales necesitas y coordinaremos contigo la posibilidad de realizarlo.',
  },
  {
    question: '¿Cómo se coordina la entrega?',
    answer: 'Una vez recibido tu pedido, coordinaremos contigo los detalles de entrega o retiro según disponibilidad.',
  },
  {
    question: '¿Qué medios de pago aceptan?',
    answer: 'Los medios de pago disponibles se informarán al momento de coordinar tu pedido por WhatsApp.',
  },
  {
    question: '¿Cuánto demora un pedido?',
    answer: 'El tiempo de preparación depende del tipo, cantidad y personalización de los origamis. Te confirmaremos el plazo al momento de coordinar tu pedido.',
  },
];
