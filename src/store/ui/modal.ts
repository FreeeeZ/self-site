import { defineStore } from "pinia";

import { IModalStore, IModalItem } from "@/store/interfaces/modal";

export const useModalStore = defineStore('modals', {
  state: (): IModalStore => ({
    openedModals: []
  }),
  actions: {
    openModal (modal: IModalItem): number {
      return this.openedModals.unshift(modal);
    },
    closeModal (modalName: string): unknown {
      return this.openedModals = this.openedModals.filter(modal => modal.modalName !== modalName);
    },
    closeAllModals () {
      this.openedModals = this.openedModals.splice(0, this.openedModals.length);
    },
  }
});
