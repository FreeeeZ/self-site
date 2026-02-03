import { onBeforeUnmount, ref } from "vue";

import { useModalStore } from "@/store/ui/modal";
import { useToastStore } from "@/store/ui/toast";

import { UI_VALUES } from "@/constants/ui";
import ContactForm from "@/typescript/models/contactForm";
import { IContactFormField } from "@/typescript/interfaces/contactForm";

export default function useContactModal () {
  const modalStore = useModalStore();
  const toastStore = useToastStore();

  const formProcessingValue = ref(false);
  const contactFormAccessKey = import.meta.env.VITE_WEB3_ACCESS_KEY;
  const contactFormObj = ref(ContactForm.getContactFormObj);

  async function confirmForm (e: Event) {
    formProcessingValue.value = true;

    await ContactForm?.confirmContactForm(e)
      .finally(() => {
        formProcessingValue.value = false;

        if (!ContactForm?.getErrorsArray?.length) {
          toastStore.openToast({
            toastType: ContactForm?.getRequestStatusAndMessage?.requestStatus ? 'success' : 'error',
            toastTitle: ContactForm?.getRequestStatusAndMessage?.requestStatus ? 'Success' : 'Error',
            toastName: 'contact-modal-message',
            toastText: ContactForm?.getRequestStatusAndMessage?.finallyMessage,
            toastDuration: UI_VALUES.TOAST_DEFAULT_DURATION_VALUE
          });
        }
      });
  }

  function changeFieldValue (field: IContactFormField, e: Event) {
    field.value = (e.target as HTMLInputElement | HTMLTextAreaElement).value;
  }

  function closeModal () {
    return new Promise((resolve) => {
      modalStore?.closeModal("contact");
      ContactForm.setRequestStatusAndMessage = { finallyMessage: '', requestStatus: true };
      ContactForm.clearFieldsErrors();
      ContactForm.clearFieldsValues();
      resolve(true);
    })
      .catch((e) => {
        toastStore.openToast({
          toastType: "error",
          toastTitle: "Error",
          toastName: "contact-modal-error",
          toastText: e,
          toastDuration: UI_VALUES.TOAST_DEFAULT_DURATION_VALUE
        });
      });
  }

  onBeforeUnmount(() => {
    closeModal().then(() => {
      ContactForm.setRequestStatusAndMessage = { finallyMessage: '', requestStatus: true };
    });
  });

  return {
    contactFormObj,
    formProcessingValue,
    contactFormAccessKey,
    closeModal,
    confirmForm,
    changeFieldValue
  };
}
