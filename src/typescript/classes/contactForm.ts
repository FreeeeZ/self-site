import { ref } from 'vue';
import axios from 'axios';

import { validateEmail } from "@/utility/regExpHelper";

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
        maxLength: 52,
        value: '',
        isError: false,
        errorText: ''
      },
      {
        name: 'email',
        label: 'Email',
        required: false,
        placeholder: 'Email',
        tag: 'input',
        type: 'email',
        maxLength: 52,
        value: '',
        isError: false,
        errorText: ''
      },
      {
        name: 'message',
        label: 'Message',
        required: true,
        placeholder: 'Message',
        tag: 'textarea',
        maxLength: 300,
        value: '',
        isError: false,
        errorText: ''
      }
    ],
    fieldsErrors: [],
    requestStatus: true,
    finallyMessage: ''
  } as IContactModalObj);

  clearFieldsValues () {
    this.getFieldsArray?.forEach((field) => {
      field.value = '';
    })
  }

  validateContactForm () {
    this.setErrorsArray = [];

    return this.getFieldsArray?.forEach((field) => {
      field.isError = false;

      if (field?.required && !field?.value?.length) {
        this.getErrorsArray?.push(field?.name);
        field.isError = true;
        field.errorText = 'Field required';
      }

      if (field?.name === 'email' && field?.value?.length && !validateEmail(field?.value)) {
        this.getErrorsArray?.push(field?.name);
        field.isError = true;
        field.errorText = 'Field is not valid';
      }
    })
  }

  async confirmContactForm (e: Event): Promise<void> {
    const contactForm = document.getElementById('contactForm') as HTMLFormElement;
    const formData = new FormData(contactForm);
    let fieldValuesObj: object = {};
    let contactFormData: string;

    formData?.forEach((value, key) => {
      if (typeof value !== "string" || value?.length) {
        // @ts-ignore
        fieldValuesObj[key] = value;
      }
    })

    contactFormData = JSON.stringify(fieldValuesObj);

    this.validateContactForm();

    if (!this.getErrorsArray?.length) {
      try {
        await axios(`${import.meta.env.VITE_WEB3_FORMS_API_URI}/submit`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          data: contactFormData
        })
          .then((response) => {
            this.clearFieldsValues();
            this.setRequestStatusAndMessage = {
              finallyMessage: response?.data?.message,
              finallyStatus: response?.data?.success
            };
          })
          .catch((error) => {
            this.setRequestStatusAndMessage = {
              finallyMessage: error?.response?.data?.message,
              finallyStatus: error?.success
            };
          })
      } catch (e) {
        console.error(e)
      }
    }

    e.preventDefault();
  };

  clearFieldsErrors () {
    this.setErrorsArray = [];

    this.getFieldsArray?.forEach((field) => {
      field.isError = false;
    })
  }

  get getContactModal () {
    return this.contactModalObj?.value;
  }

  get getFieldsArray () {
    return this.contactModalObj?.value?.fields;
  }

  get getErrorsArray () {
    return this.contactModalObj?.value?.fieldsErrors;
  }

  get getRequestStatusAndMessage () {
    return {
      finallyMessage: this.contactModalObj.value.finallyMessage,
      requestStatus: this.contactModalObj.value.requestStatus
    }
  }

  set setErrorsArray (value: any) {
    this.contactModalObj.value.fieldsErrors = value;
  }

  set setRequestStatusAndMessage (value: any) {
    this.contactModalObj.value.finallyMessage = value.finallyMessage;
    this.contactModalObj.value.requestStatus = value.finallyStatus;
  }
}

export default new $ContactForm();
