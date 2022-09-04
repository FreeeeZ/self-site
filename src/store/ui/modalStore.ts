import { defineStore } from "pinia";

interface ModalStore {
  openedModals: Array<string>
}

export const useModalStore = defineStore('modals', {
  state: (): ModalStore => ({
    openedModals: []
  }),
  actions: {
    openModal (modalName: string): any {
      return this.openedModals.unshift(modalName)
    },
    closeModal (modalName: string): any {
      return this.openedModals = this.openedModals.filter(item => item !== modalName)
    },
    closeAllModals () {
      this.openedModals = this.openedModals.splice(0, this.openedModals.length);
    },
  }
})
