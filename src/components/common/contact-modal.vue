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
              :required="field?.required"
              :value="field?.value"
              :rows="field?.tag === 'textarea' ? '5' : null"
            />
          </div>
        </fieldset>
        <p
          class="contact-form__status"
          :class="{
            'contact-form__status_success': contactModalObj?.requestStatus,
            'contact-form__status_failed': !contactModalObj?.requestStatus
          }"
        >
          {{ contactModalObj?.finallyMessage }}
        </p>
      </form>
    </div>
    <div class="modal-window__footer">
      <button class="button button-primary" @click="confirmForm">
        Confirm
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {onBeforeUnmount, ref} from "vue";

import { useModalStore } from "@/store/ui/modalStore";
import EX_$ContactForm from '@/typescript/classes/contactForm'

const modalStore = useModalStore();

const contactModalObj = ref(EX_$ContactForm.contactModal);

async function confirmForm (e: Event) {
  await EX_$ContactForm.confirmContactForm(e);
}

function closeModal () {
  modalStore?.closeModal('contact')
  EX_$ContactForm.setModalStatusAndMessage('')
}

onBeforeUnmount(() => {
  closeModal()
})
</script>

<style lang="scss" scoped>
@use './styles/contact-modal';
</style>
