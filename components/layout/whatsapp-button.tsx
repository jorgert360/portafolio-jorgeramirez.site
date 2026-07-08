import { WhatsappIcon } from "@/components/icons/brand";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/573124249342?text=Hola%20Jorge%2C%20vi%20tu%20portafolio%20y%20quiero%20consultar%20por%20una%20automatizaci%C3%B3n"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_30px_-6px_rgba(37,211,102,0.6)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_-8px_rgba(37,211,102,0.8)]"
    >
      <WhatsappIcon className="size-7" />
    </a>
  );
}
