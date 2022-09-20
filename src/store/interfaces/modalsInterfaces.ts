import { Component } from "vue";

export interface IModalStore {
  openedModals: Array<IModalItem>;
}

export interface IModalItem {
  modalName: string;
  content: Component;
  props?: object;
}
