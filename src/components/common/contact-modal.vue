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
      <form class="contact-form">
        <fieldset>
          <div class="contact-form__field" v-for="(field, index) in contactModalFields" :key="index">
            <label class="input-label" :for="field.name">
              {{ field.label }}
              <em v-if="field.required">*</em>
            </label>
            <input v-if="field.tag === 'input'" class="input input-primary" :type="field.type" :id="field.name" :placeholder="field.label" />
            <textarea v-if="field.tag === 'textarea'" class="input input-primary" :id="field.name" :placeholder="field.label" rows="5" />
          </div>
        </fieldset>
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

function confirmForm () {
  console.log('Confirm')
}
</script>

<style lang="scss" scoped>
@use './styles/contact-modal';
</style>
