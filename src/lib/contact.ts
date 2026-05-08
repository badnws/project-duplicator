// Centraliza dados de contato.
export const WHATSAPP_NUMBER = "5543988323233";
export const DEFAULT_WHATSAPP_MESSAGE =
  "Olá, Matheus. Vim pelo site e gostaria de conversar sobre uma perícia de IA!";

export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}