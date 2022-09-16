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
      <form class="contact-form" id="contactForm">
        <fieldset>
          <input type="hidden" name="access_key" value="791ad86b-6fa4-43e1-aa38-6ebe1b5f4652">
          <div class="contact-form__field" v-for="(field, index) in contactModalObj?.fields" :key="index">
            <label :for="field?.name">
              {{ field?.label }}<em v-if="field?.required">*</em>
            </label>
            <component
              :is="field?.tag"
              class="input input-primary"
              :class="field?.tag === 'textarea' ? 'input_resize-disabled' : null"
              :type="field?.type"
              :name="field?.name"
              :id="field?.name"
              :placeholder="field?.label"
              :rows="field?.tag === 'textarea' ? '5' : null"
              :required="field?.required"
              :value="field?.value"
              :maxLength="field?.maxLength"
              @input="changeFieldValue(field, $event)"
            />
            <p
              class="contact-form__error"
              v-if="field?.isError"
            >
              {{ field?.errorText }}
            </p>
          </div>
        </fieldset>
      </form>
    </div>
    <div class="modal-window__footer">
      <button class="modal-window__processing" v-if="formProcessingValue" disabled>
        <LoadingIcon />
        Processing...
      </button>
      <button class="button button-primary" @click="confirmForm" v-else>
        Confirm
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onBeforeUnmount, ref } from "vue";

import { useModalStore } from "@/store/ui/modalStore";
import { useToastStore } from "@/store/ui/toastStore";
import EX_$ContactForm from '@/typescript/classes/contactForm'
import { IContactModalField } from "@/typescript/interfaces/contactModalInterfaces";

import LoadingIcon from "@/components/ui/icons/LoadingIcon.vue";

const modalStore = useModalStore();
const toastStore = useToastStore();

const formProcessingValue = ref(false);
const contactModalObj = ref(EX_$ContactForm.getContactModal);

async function confirmForm (e: Event) {
  formProcessingValue.value = true;

  await EX_$ContactForm?.confirmContactForm(e)
    .then(() => {

    })
    .finally(() => {
      formProcessingValue.value = false;

      if (!EX_$ContactForm?.getErrorsArray?.length) {
        toastStore.openToast({
          toastType: EX_$ContactForm?.getRequestStatusAndMessage?.requestStatus ? 'success' : 'error',
          toastTitle: EX_$ContactForm?.getRequestStatusAndMessage?.requestStatus ? 'Success' : 'Error',
          toastName: 'contact-modal-message',
          toastText: EX_$ContactForm?.getRequestStatusAndMessage?.finallyMessage,
          toastDuration: 5000
        })
      }
    });
}

function changeFieldValue (field: IContactModalField, e: Event) {
  field.value = (e.target as HTMLInputElement | HTMLTextAreaElement).value
}

function closeModal () {
  modalStore?.closeModal('contact')
  EX_$ContactForm.setRequestStatusAndMessage = {}
  EX_$ContactForm.clearFieldsErrors()
  EX_$ContactForm.clearFieldsValues()
}

onBeforeUnmount(() => {
  closeModal()
})
</script>

<style lang="scss" scoped>
@use './styles/contact-modal';
</style>
