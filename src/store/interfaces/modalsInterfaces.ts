export interface IModalStore {
  openedModals: Array<IModalItem>;
}

export interface IModalItem {
  modalName: string;
  content: any;
  props?: object;
}
