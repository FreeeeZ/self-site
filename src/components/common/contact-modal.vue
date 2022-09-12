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
        <p
          class="contact-form__status"
          :class="{
            'contact-form__status_success': contactModalObj?.requestStatus,
            'contact-form__status_failed': !contactModalObj?.requestStatus
          }"
          v-if="!!contactModalObj?.finallyMessage"
        >
          {{ contactModalObj?.finallyMessage }}
        </p>
      </form>
    </div>
    <div class="modal-window__footer">
      <p v-if="formProcessingValue">
        Processing...
      </p>
      <button class="button button-primary" @click="confirmForm" v-else>
        Confirm
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onBeforeUnmount, ref } from "vue";

import { useModalStore } from "@/store/ui/modalStore";
import EX_$ContactForm from '@/typescript/classes/contactForm'
import { IContactModalField } from "@/typescript/interfaces/contactModalInterfaces";

const modalStore = useModalStore();

const contactModalObj = ref(EX_$ContactForm.contactModal);
const formProcessingValue = ref(false);

async function confirmForm (e: Event) {
  formProcessingValue.value = true
  await EX_$ContactForm.confirmContactForm(e)
    .then(() => formProcessingValue.value = false)
    .catch(() => formProcessingValue.value = false);
}

function changeFieldValue (field: IContactModalField, e: Event) {
  field.value = (e.target as HTMLInputElement | HTMLTextAreaElement).value
}

function closeModal () {
  modalStore?.closeModal('contact')
  EX_$ContactForm.setModalStatusAndMessage('')
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
