import { markRaw } from "vue";

import { useModalStore } from "@/store/ui/modal";
import ContactModal from "@/components/common/contactModal/ContactModal.vue";

export default function useHomeHero () {
  const modalStore = useModalStore();

  function openContactModal () {
    modalStore.openModal({ modalName: 'contact', content: markRaw(ContactModal) });
  }

  return {
    openContactModal
  };
}
