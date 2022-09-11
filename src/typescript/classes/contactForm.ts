import { ref } from 'vue';
import axios from 'axios';

import { IContactModalObj } from "@/typescript/interfaces/contactModalInterfaces";

export class $ContactForm  {
  private contactModalObj = ref({
    fields: [
      {
        name: 'name',
        label: 'Name',
        required: true,
        placeholder: 'Name',
        tag: 'input',
        type: 'text',
        value: '',
        isError: false
      },
      {
        name: 'email',
        label: 'Email',
        required: false,
        placeholder: 'Email',
        tag: 'input',
        type: 'email',
        value: '',
        isError: false
      },
      {
        name: 'message',
        label: 'Message',
        required: true,
        placeholder: 'Message',
        tag: 'textarea',
        value: '',
        isError: false
      }
    ],
    fieldsErrors: [],
    requestStatus: true,
    finallyMessage: ''
  } as IContactModalObj)

  get contactModal () {
    return this.contactModalObj?.value
  }

  clearFields () {
    this.contactModalObj?.value?.fields?.forEach((field) => {
      field.value = '';
    })
  }

  setModalStatusAndMessage (message: string, status: boolean = true) {
    this.contactModalObj.value.finallyMessage = message
    this.contactModalObj.value.requestStatus = status
  }

  validateContactForm () {
    this.contactModalObj.value.fieldsErrors = []

    return this.contactModalObj?.value?.fields?.forEach((field) => {
      field.isError = false

      if (field?.required && !field?.value?.length) {
        this.contactModalObj?.value?.fieldsErrors?.push(field?.name)
        field.isError = true
      }
    })
  }

  async confirmContactForm (e: Event): Promise<void> {
    const contactForm = document.getElementById('contactForm') as HTMLFormElement
    const formData = new FormData(contactForm);
    let object: object = {};
    let contactFormData: string = '';

    formData?.forEach((value, key) => {
      if (typeof value !== "string" || value?.length) {
        // @ts-ignore
        object[key] = value;
      }
    })

    contactFormData = JSON.stringify(object)

    this.validateContactForm()

    if (!this.contactModalObj.value.fieldsErrors?.length) {
      try {
        await axios("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          data: contactFormData
        })
          .then((response) => {
            this.clearFields()
            this.setModalStatusAndMessage(response.data.message, response.data.success)
          })
          .catch((error) => {
            this.setModalStatusAndMessage(error.response.data.message, error.success)
          })
      } catch (e) {
        console.error(e)
      }
    }

    e.preventDefault();
  };
}

export default new $ContactForm()
