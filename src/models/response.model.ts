export interface Data {
  id: number;
  documentId: string;
  name: string;
  title: string;
  opinion: string;
  calification: number;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
}

export interface Product {
  id: number;
  documentId: string;
  name: string;
  description: string;
  price: number;
  slug: string;
  calification: number;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  category: Category;
  images: Image[];
}

export interface Category {
  id: number;
  documentId: string;
  name: string;
  slug: string;
  description: string;
  icon: {
    id: number;
    url: string;
    documentId: string;
  };
}

export interface Meta {
  pagination: Pagination;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface Image {
  id: number;
  name: string;
  documentId: string;
  url: string;
}
