import { computed, watch } from 'vue';
import { useModalStore } from '@/store/ui/modal';

export default function useAppModal() {
  const modalStore = useModalStore();

  const modalIsOpen = computed(() => modalStore?.openedModals?.length !== 0);

  watch(
    () => modalIsOpen.value,
    (value) => {
      const documentElement = document.documentElement;

      if (documentElement) {
        if (value) {
          documentElement.classList.add('page-locked');
        } else {
          documentElement.classList.remove('page-locked');
        }
      }
    }
  );

  return {
    modalStore,
  };
}
