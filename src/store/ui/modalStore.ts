import { defineStore } from "pinia";

interface IModalStore {
  openedModals: Array<object>
}

interface IModalItem {
  modalName: string,
  content: any,
  props?: object,
}

export const useModalStore = defineStore('modals', {
  state: (): IModalStore => ({
    openedModals: []
  }),
  actions: {
    openModal (modal: IModalItem): any {
      return this.openedModals.unshift(modal)
    },
    closeModal (modalName: string): any {
      // @ts-ignore
      return this.openedModals = this.openedModals.filter((item: IModalItem) => item.modalName !== modalName)
    },
    closeAllModals () {
      this.openedModals = this.openedModals.splice(0, this.openedModals.length);
    },
  }
})
