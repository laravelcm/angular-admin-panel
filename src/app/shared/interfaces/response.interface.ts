export interface PaginationResponse<T> {
  data: T[];
  pagination: Pagination;
  filters: IFilterParams;
}

export type IFilterParams = {
  [key: string]: string | number | boolean;
};

export interface Pagination {
  total: number;
  perPage: number;
  currentPage: number;
  nextPage: string | null;
  prevPage: string | null;
  firstPage: string | null;
  lastPage: string | null;
  from: number;
  to: number;
  totalPages: number;
}
