import { ref } from 'vue';
import axios from 'axios';

import { validateEmail } from "@/utility/regExpHelper";
import { CONTACT_FORM_ERRORS } from "@/constants/messages";
import { IContactFormObj } from "@/typescript/interfaces/contactForm";

export class ContactForm  {
  private contactFormObj = ref({
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
  } as IContactFormObj);

  clearFieldsValues () {
    this.getFieldsArray?.forEach((field) => {
      field.value = '';
    });
  }

  validateContactForm () {
    this.setErrorsArray = [];

    return this.getFieldsArray?.forEach((field) => {
      field.isError = false;

      if (field?.required && !field?.value?.length) {
        this.getErrorsArray?.push(field?.name);
        field.isError = true;
        field.errorText = CONTACT_FORM_ERRORS.CONTACT_FORM_FIELD_REQUIRED;
      }

      if (field?.name === 'email' && field?.value?.length && !validateEmail(field?.value)) {
        this.getErrorsArray?.push(field?.name);
        field.isError = true;
        field.errorText = CONTACT_FORM_ERRORS.CONTACT_FORM_FIELD_IS_NOT_VALID;
      }
    });
  }

  async confirmContactForm (e: Event): Promise<void> {
    const contactForm = document.getElementById('contactForm') as HTMLFormElement;
    const formData = new FormData(contactForm);
    const fieldValuesObj = {};
    let contactFormData = '';

    formData?.forEach((value, key) => {
      if (typeof value !== "string" || value?.length) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        fieldValuesObj[key] = value;
      }
    });

    contactFormData = JSON.stringify(fieldValuesObj);

    this.validateContactForm();

    if (!this.getErrorsArray?.length) {
      await axios(`${import.meta.env.VITE_WEB3_FORMS_API_URL}/submit`, {
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
            requestStatus: response?.data?.success
          };
        })
        .catch((error) => {
          this.setRequestStatusAndMessage = {
            finallyMessage: error?.response?.data?.message,
            requestStatus: error?.success
          };
        });
    }

    e.preventDefault();
  };

  clearFieldsErrors () {
    this.setErrorsArray = [];

    this.getFieldsArray?.forEach((field) => {
      field.isError = false;
    });
  }

  get getContactFormObj () {
    return this.contactFormObj?.value;
  }

  get getFieldsArray () {
    return this.contactFormObj?.value?.fields;
  }

  get getErrorsArray () {
    return this.contactFormObj?.value?.fieldsErrors;
  }

  get getRequestStatusAndMessage () {
    return {
      finallyMessage: this.contactFormObj.value.finallyMessage,
      requestStatus: this.contactFormObj.value.requestStatus
    };
  }

  set setErrorsArray (value: Array<string>) {
    this.contactFormObj.value.fieldsErrors = value;
  }

  set setRequestStatusAndMessage (value: IContactFormObj) {
    this.contactFormObj.value.finallyMessage = value.finallyMessage;
    this.contactFormObj.value.requestStatus = value.requestStatus;
  }
}

export default new ContactForm();
