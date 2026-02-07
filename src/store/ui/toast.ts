import { defineStore } from 'pinia';

import type { IToastStore, IToastItem } from '@/store/interfaces/toast';

export const useToastStore = defineStore('toasts', {
  state: (): IToastStore => ({
    openedToasts: [],
  }),
  actions: {
    openToast(toast: IToastItem): void {
      this.openedToasts.unshift(toast);

      const timeout = setTimeout(() => {
        this.closeAllToasts();
        clearTimeout(timeout);
      }, toast?.toastDuration);
    },
    closeToast(toastId: number): void {
      this.openedToasts?.splice(toastId, 1);
    },
    closeAllToasts() {
      this.openedToasts?.splice(0, this.openedToasts?.length);
    },
  },
});
