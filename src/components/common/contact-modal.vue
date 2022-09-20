<template>
  <div class="modal-window">
    <div class="modal-window__header">
      Contact Form
      <div class="modal-window__header-cross" @click="closeModal">
        <span />
        <span />
      </div>
    </div>
    <div class="modal-window__main">
      <form id="contactForm" class="contact-form">
        <fieldset>
          <input type="hidden" name="access_key" :value="contactFormAccessKey">
          <div v-for="(field, index) in contactFormObj?.fields" :key="index" class="contact-form__field">
            <label :for="field?.name">
              {{ field?.label }}<em v-if="field?.required">*</em>
            </label>
            <component
              :is="field?.tag"
              :id="field?.name"
              class="input input-primary"
              :class="field?.tag === 'textarea' ? 'input_resize-disabled' : null"
              :type="field?.type"
              :name="field?.name"
              :placeholder="field?.label"
              :rows="field?.tag === 'textarea' ? '5' : null"
              :required="field?.required"
              :value="field?.value"
              :max-length="field?.maxLength"
              @input="changeFieldValue(field, $event)"
            />
            <p
              v-if="field?.isError"
              class="contact-form__error"
            >
              {{ field?.errorText }}
            </p>
          </div>
        </fieldset>
      </form>
    </div>
    <div class="modal-window__footer">
      <app-button v-if="formProcessingValue" button-type="primary-with-icon" disabled @click="confirmForm">
        <LoadingIcon />
        Processing...
      </app-button>
      <app-button v-else button-type="primary" @click="confirmForm">
        Contact
      </app-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onBeforeUnmount, ref } from "vue";

import { useModalStore } from "@/store/ui/modalStore";
import { useToastStore } from "@/store/ui/toastStore";

import EX_$ContactForm from '@/typescript/classes/contactForm';
import { IContactFormField } from "@/typescript/interfaces/contactFormInterfaces";

import AppButton from "@/components/ui/buttons/app-button.vue";
import LoadingIcon from "@/components/ui/icons/LoadingIcon.vue";

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
</script>

<style lang="scss" scoped>
@use './styles/contact-modal';
</style>
