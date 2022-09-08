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
      <form class="contact-form" action="https://api.web3forms.com/submit" method="POST">
        <fieldset>
          <input type="hidden" name="access_key" value="791ad86b-6fa4-43e1-aa38-6ebe1b5f4652">
          <div class="contact-form__field" v-for="(field, index) in contactModalFields" :key="index">
            <label class="input-label" :for="field.name">
              {{ field.label }}<em v-if="field.required">*</em>
            </label>
            <input v-if="field.tag === 'input'" class="input input-primary" :type="field.type" :id="field.name" :placeholder="field.label" :required="field.required" />
            <textarea v-if="field.tag === 'textarea'" class="input input-primary" :id="field.name" :placeholder="field.label" rows="5" :required="field.required" />
          </div>
        </fieldset>
      </form>
    </div>
    <div class="modal-window__footer">
      <button class="button button-primary" type="submit">
        Confirm
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

import { useModalStore } from "@/store/ui/modalStore";

const modalStore = useModalStore();

const contactModalFields = ref([
  {
    name: 'name',
    label: 'Name',
    required: true,
    placeholder: 'Name',
    tag: 'input',
    type: 'text'
  },
  {
    name: 'email',
    label: 'Email',
    required: false,
    placeholder: 'Email',
    tag: 'input',
    type: 'email'
  },
  {
    name: 'message',
    label: 'Message',
    required: true,
    placeholder: 'Message',
    tag: 'textarea'
  }
])

function closeModal () {
  modalStore.closeModal('contact')
}

function submitForm (e: Event) {
  e.preventDefault();
}

function confirmForm () {
  return;
}
</script>

<style lang="scss" scoped>
@use './styles/contact-modal';
</style>
