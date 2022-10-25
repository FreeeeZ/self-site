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
import AppButton from "@/components/ui/buttons/appButton.vue";
import LoadingIcon from "@/components/ui/icons/loadingIcon.vue";

import useContactModal from "@/components/common/contactModal/useContactModal";

const {
  contactFormObj,
  formProcessingValue,
  contactFormAccessKey,
  closeModal,
  confirmForm,
  changeFieldValue
} = useContactModal();
</script>

<style lang="scss" scoped>
@use './styles/contact-modal';
</style>
