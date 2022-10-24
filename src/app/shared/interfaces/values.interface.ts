import { Pagination } from './response.interface';

/**
 * This pagination Object is the default structure of
 * a Custom Laravel Eloquent Pagination Response
 *
 * @see https://laravel.com/docs/eloquent-resources#pagination
 */
export const pagination: Pagination = {
  total: 0,
  perPage: 0,
  currentPage: 0,
  nextPage: null,
  prevPage: null,
  firstPage: null,
  lastPage: null,
  from: 0,
  to: 0,
  totalPages: 0,
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
