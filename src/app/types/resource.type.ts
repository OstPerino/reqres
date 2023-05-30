export interface IResource {
  id: number;
  name: string;
  year: number;
  color: string;
  pantone_value: string;
}

export interface IResourceResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: IResource[];
  support: any;
}
