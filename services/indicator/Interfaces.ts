export interface CreateIndicatorDto {
  title: string;
  value: number;
  type: 'min' | 'max';
}

export interface UpdateIndicatorDto {
  title?: string;
  value?: number;
  type?: 'min' | 'max';
}

export interface Indicator {
  id: number;
  title: string;
  value: number;
  type: 'min' | 'max';
  createdAt: string;
  updatedAt: string;
}
