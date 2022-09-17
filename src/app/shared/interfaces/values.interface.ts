export const pagination = {
  total: 0,
  per_page: 0,
  current_page: 0,
  next_page: null,
  prev_page: null,
  first_page: null,
  last_page: null,
  from: 0,
  to: 0,
  total_pages: 0,
};

export const status = {
  pending: {
    label: 'PENDING',
    locale: 'En attente',
  },
  success: {
    label: 'SUCCESS',
    locale: 'Réussi',
  },
  failed: {
    label: 'FAILED',
    locale: 'Échoué',
  },
  rejected: {
    label: 'REJECTED',
    locale: 'Rejeté',
  },
  canceled: {
    label: 'CANCELED',
    locale: 'Annulé',
  },
  completed: {
    label: 'COMPLETED',
    locale: 'Terminé',
  },
  refunded: {
    label: 'REFUNDED',
    locale: 'Remboursé',
  },
  processing: {
    label: 'PROCESSING',
    locale: 'En cours',
  },
}