import { ref } from 'vue';
import axios from 'axios';

import { IContactModalObj } from "@/typescript/interfaces/contactModalInterfaces";
import { validateEmail } from "@/utility/regExpHelper";

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
    this.fieldsArray?.forEach((field) => {
      field.value = '';
    })
  }

  setModalStatusAndMessage (message: string, status: boolean = true) {
    this.contactModalObj.value.finallyMessage = message;
    this.contactModalObj.value.requestStatus = status;
  }

  validateContactForm () {
    this.setErrorsArray = [];

    return this.fieldsArray?.forEach((field) => {
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
        await axios("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          data: contactFormData
        })
          .then((response) => {
            this.clearFieldsValues();
            this.setModalStatusAndMessage(response.data.message, response.data.success);
          })
          .catch((error) => {
            this.setModalStatusAndMessage(error.response.data.message, error.success);
          })
      } catch (e) {
        console.error(e)
      }
    }

    e.preventDefault();
  };

  clearFieldsErrors () {
    this.setErrorsArray = [];

    this.fieldsArray?.forEach((field) => {
      field.isError = false;
    })
  }

  get contactModal () {
    return this.contactModalObj?.value;
  }

  get fieldsArray () {
    return this.contactModalObj.value.fields;
  }

  get getErrorsArray () {
    return this.contactModalObj.value.fieldsErrors;
  }

  set setErrorsArray (value: any) {
    this.contactModalObj.value.fieldsErrors = value;
  }
}

export default new $ContactForm();
