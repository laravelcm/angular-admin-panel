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
  per_page: number;
  current_page: number;
  next_page: string | null;
  prev_page: string | null;
  first_page: string | null;
  last_page: string | null;
  from: number;
  to: number;
  total_pages: number;
}
