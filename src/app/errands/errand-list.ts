import { Errand } from "./errand";

export interface ErrandList {
    hasPreviousPage: boolean;
    hasNextPage: boolean;
    items: Errand[];
    pageIndex: number;
    totalCount: number;
    totalPages: number;
}
