import { ref } from 'vue';
import axios from 'axios';

// import { IContactModalObj } from "@/typescript/interfaces/contactModalInterfaces";

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
        value: ''
      },
      {
        name: 'email',
        label: 'Email',
        required: false,
        placeholder: 'Email',
        tag: 'input',
        type: 'email',
        value: ''
      },
      {
        name: 'message',
        label: 'Message',
        required: true,
        placeholder: 'Message',
        tag: 'textarea',
        value: ''
      }
    ],
    requestStatus: true,
    finallyMessage: ''
  })

  get contactModal () {
    return this.contactModalObj.value
  }

  clearFields () {
    this.contactModalObj.value.fields.forEach((field) => {
      field.value = '';
    })
  }

  setModalStatusAndMessage (message: string, status: boolean = true) {
    this.contactModalObj.value.finallyMessage = message
    this.contactModalObj.value.requestStatus = status
  }

  async confirmContactForm (e: Event): Promise<void> {
    e.preventDefault();

    const contactForm = document.getElementById('contactForm') as HTMLFormElement
    const formData = new FormData(contactForm);
    let object = {};
    formData.forEach((value, key) => {
      if (typeof value !== "string" || value?.length) {
        // @ts-ignore
        object[key] = value;
      }
    })
    let contactFormData = JSON.stringify(object);

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
  };
}

export default new $ContactForm()
