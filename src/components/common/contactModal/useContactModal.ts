import { onBeforeUnmount, ref } from 'vue';

import { useModalStore } from '@/store/ui/modal';
import { useToastStore } from '@/store/ui/toast';

import { UI_VALUES } from '@/constants/ui';
import contactFormService from '@/typescript/models/contactForm';
import type { IContactFormField } from '@/typescript/interfaces/contactForm';

export default function useContactModal() {
  const modalStore = useModalStore();
  const toastStore = useToastStore();

  const formProcessingValue = ref(false);

  const contactFormObj = ref(contactFormService.getContactFormObj);

  const updateContactFormObj = () => {
    contactFormObj.value = contactFormService.getContactFormObj;
  };

  async function confirmForm(event: Event) {
    formProcessingValue.value = true;

    try {
      await contactFormService.confirmContactForm(event);

      updateContactFormObj();

      const hasValidationErrors = contactFormService.getErrorsArray.length > 0;

      if (!hasValidationErrors) {
        const result = contactFormService.getRequestStatusAndMessage;

        toastStore.openToast({
          toastType: result.requestStatus ? 'success' : 'error',
          toastTitle: result.requestStatus ? 'Success' : 'Error',
          toastName: 'contact-modal-message',
          toastText: result.finallyMessage,
          toastDuration: UI_VALUES.TOAST_DEFAULT_DURATION_VALUE,
        });

        await closeModal();
      }
    } catch (error) {
      toastStore.openToast({
        toastType: 'error',
        toastTitle: 'Error',
        toastName: 'contact-modal-error',
        toastText: error instanceof Error ? error.message : 'An error occurred',
        toastDuration: UI_VALUES.TOAST_DEFAULT_DURATION_VALUE,
      });
    } finally {
      formProcessingValue.value = false;
    }
  }

  function changeFieldValue(field: IContactFormField, e: Event) {
    const value = (e.target as HTMLInputElement | HTMLTextAreaElement).value;

    contactFormService.updateFieldValue(field.name, value);
    updateContactFormObj();
  }

  async function closeModal(): Promise<void> {
    try {
      modalStore.closeModal('contact');
      contactFormService.reset();
    } catch (error) {
      toastStore.openToast({
        toastType: 'error',
        toastTitle: 'Error',
        toastName: 'contact-modal-error',
        toastText: error instanceof Error ? error.message : 'An error occurred',
        toastDuration: UI_VALUES.TOAST_DEFAULT_DURATION_VALUE,
      });
    }
  }

  onBeforeUnmount(() => {
    closeModal();
  });

  return {
    contactFormObj,
    formProcessingValue,
    closeModal,
    confirmForm,
    changeFieldValue,
  };
}
