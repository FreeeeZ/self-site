export interface IToastStore {
  openedToasts: IToastItem[];
}

export interface IToastItem {
  toastId?: number;
  toastName: string;
  toastType: string;
  toastTitle?: string;
  toastText: string;
  toastDuration: number;
}
