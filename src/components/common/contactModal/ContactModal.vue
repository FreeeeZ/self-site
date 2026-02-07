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
          <div
            v-for="field in contactFormObj?.fields"
            :key="field.name"
            class="contact-form__field"
          >
            <label :for="field.name"> {{ field.label }}<em v-if="field.required">*</em> </label>
            <component
              :is="field.tag"
              :id="field.name"
              class="input input-primary"
              :class="field?.tag === 'textarea' ? 'input_resize-disabled' : undefined"
              :type="field.type"
              :name="field.name"
              :placeholder="field.placeholder || field.label"
              :rows="field.tag === 'textarea' ? '5' : null"
              :required="field.required"
              :value="field.value"
              :maxlength="field.maxLength"
              @input="changeFieldValue(field, $event)"
            />
            <p v-if="field.isError" class="contact-form__error">
              {{ field.errorText }}
            </p>
          </div>
        </fieldset>
      </form>
    </div>
    <div class="modal-window__footer">
      <AppButton
        type="submit"
        form="contactForm"
        :button-type="formProcessingValue ? 'primary-with-icon' : 'primary'"
        :disabled="formProcessingValue"
        @click="confirmForm"
      >
        <template v-if="formProcessingValue">
          <LoadingIcon color="#000000" />
          Processing...
        </template>
        <template v-else> Send message </template>
      </AppButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
import useContactModal from '@/components/common/contactModal/useContactModal';
import LoadingIcon from '@/components/icons/LoadingIcon.vue';
import AppButton from '@/components/ui/buttons/AppButton.vue';

const { contactFormObj, formProcessingValue, closeModal, confirmForm, changeFieldValue } =
  useContactModal();
</script>

<style lang="scss" scoped>
@use './styles/contact-modal';
</style>
