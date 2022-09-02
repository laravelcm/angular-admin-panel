/**
 * Ajoute des sauts de ligne automatiquement sur une chaine
 *
 * @param {string} str
 * @return {string}
 */
export function nl2br(str: string) {
  return str.replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1<br>$2');
}

/**
 * Formate un nombre en fonction de la devise
 *
 * @param {number} amount
 * @param {string} currency
 * @return {string}
 */
export function formatMoney(amount: number, currency: string = 'XAF') {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency,
  }).format(amount);
}