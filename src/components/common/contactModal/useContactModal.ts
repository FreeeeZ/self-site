import { onBeforeUnmount, ref } from "vue";

import { useModalStore } from "@/store/ui/modalStore";
import { useToastStore } from "@/store/ui/toastStore";

import EX_$ContactForm from "@/typescript/models/contactForm";
import { IContactFormField } from "@/typescript/interfaces/contactFormInterfaces";

export default function useContactModal () {
  const modalStore = useModalStore();
  const toastStore = useToastStore();

  const formProcessingValue = ref(false);
  const contactFormAccessKey = import.meta.env.VITE_WEB3_ACCESS_KEY;
  const contactFormObj = ref(EX_$ContactForm.getContactFormObj);

  async function confirmForm (e: Event) {
    formProcessingValue.value = true;

    await EX_$ContactForm?.confirmContactForm(e)
      .finally(() => {
        formProcessingValue.value = false;

        if (!EX_$ContactForm?.getErrorsArray?.length) {
          toastStore.openToast({
            toastType: EX_$ContactForm?.getRequestStatusAndMessage?.requestStatus ? 'success' : 'error',
            toastTitle: EX_$ContactForm?.getRequestStatusAndMessage?.requestStatus ? 'Success' : 'Error',
            toastName: 'contact-modal-message',
            toastText: EX_$ContactForm?.getRequestStatusAndMessage?.finallyMessage,
            toastDuration: 5000
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
      EX_$ContactForm.setRequestStatusAndMessage = { finallyMessage: '', requestStatus: true };
      EX_$ContactForm.clearFieldsErrors();
      EX_$ContactForm.clearFieldsValues();
      resolve(true);
    })
      .catch((e) => {
        toastStore.openToast({
          toastType: "error",
          toastTitle: "Error",
          toastName: "contact-modal-error",
          toastText: e,
          toastDuration: 5000
        });
      });
  }

  onBeforeUnmount(() => {
    closeModal().then(() => {
      EX_$ContactForm.setRequestStatusAndMessage = { finallyMessage: '', requestStatus: true };
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
