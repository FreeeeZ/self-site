import type { Component } from 'vue';

export interface IModalStore {
  openedModals: IModalItem[];
}

export interface IModalItem {
  modalName: string;
  content: Component;
  props?: object;
}
