/**
 * This pagination Object is the default structure of
 * Laravel Eloquent Pagination Response
 * @see https://laravel.com/docs/eloquent/pagination
 */
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
    locale: $localize`En attente`,
  },
  success: {
    label: 'SUCCESS',
    locale: $localize`Réussi`,
  },
  failed: {
    label: 'FAILED',
    locale: $localize`Échoué`,
  },
  rejected: {
    label: 'REJECTED',
    locale: $localize`Rejeté`,
  },
  canceled: {
    label: 'CANCELED',
    locale: $localize`Annulé`,
  },
  completed: {
    label: 'COMPLETED',
    locale: $localize`Terminé`,
  },
  refunded: {
    label: 'REFUNDED',
    locale: $localize`Remboursé`,
  },
  processing: {
    label: 'PROCESSING',
    locale: $localize`En cours`,
  },
};
