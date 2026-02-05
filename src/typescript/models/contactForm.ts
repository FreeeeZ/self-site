import { reactive } from 'vue';
import axios, { type AxiosError } from 'axios';

import { validateEmail } from '@/utility/regExpHelper';
import { CONTACT_FORM_ERRORS } from '@/constants/messages';
import type { IContactFormField, IContactFormObj } from '@/typescript/interfaces/contactForm';

interface FieldConfig {
  name: string;
  label: string;
  required: boolean;
  placeholder: string;
  tag: 'input' | 'textarea';
  type?: string;
  maxLength: number;
}

interface SubmissionResult {
  finallyMessage: string;
  requestStatus: boolean;
}

interface FormValues {
  [key: string]: string;
}

class ContactFormService {
  private readonly fieldConfigs: FieldConfig[] = [
    {
      name: 'name',
      label: 'Name',
      required: true,
      placeholder: 'Name',
      tag: 'input',
      type: 'text',
      maxLength: 52,
    },
    {
      name: 'email',
      label: 'Email',
      required: false,
      placeholder: 'Email',
      tag: 'input',
      type: 'email',
      maxLength: 52,
    },
    {
      name: 'message',
      label: 'Message',
      required: true,
      placeholder: 'Message',
      tag: 'textarea',
      maxLength: 300,
    },
  ];

  private readonly state = reactive({
    fields: this.fieldConfigs.map(config => ({
      ...config,
      value: '',
      isError: false,
      errorText: '',
    })) as IContactFormField[],
    fieldsErrors: [] as string[],
    isProcessing: false,
    submissionResult: {
      finallyMessage: '',
      requestStatus: true,
    } as SubmissionResult,
  });

  get getContactFormObj(): IContactFormObj {
    return {
      fields: this.state.fields,
      fieldsErrors: this.state.fieldsErrors,
      requestStatus: this.state.submissionResult.requestStatus,
      finallyMessage: this.state.submissionResult.finallyMessage,
    };
  }

  get getErrorsArray(): string[] {
    return this.state.fieldsErrors;
  }

  get getRequestStatusAndMessage(): SubmissionResult {
    return { ...this.state.submissionResult };
  }

  private validateField(field: IContactFormField): boolean {
    if (field.required && !field.value.trim()) {
      field.errorText = CONTACT_FORM_ERRORS.CONTACT_FORM_FIELD_REQUIRED;

      return false;
    }

    if (field.name === 'email' && field.value && !validateEmail(field.value)) {
      field.errorText = CONTACT_FORM_ERRORS.CONTACT_FORM_FIELD_IS_NOT_VALID;

      return false;
    }

    return true;
  }

  validateContactForm(): void {
    this.state.fieldsErrors = [];

    this.state.fields.forEach(field => {
      field.isError = false;

      if (!this.validateField(field)) {
        field.isError = true;
        this.state.fieldsErrors.push(field.name);
      }
    });
  }

  clearFieldsValues(): void {
    this.state.fields.forEach(field => {
      field.value = '';
    });
    this.clearFieldsErrors();
  }

  clearFieldsErrors(): void {
    this.state.fieldsErrors = [];
    this.state.fields.forEach(field => {
      field.isError = false;
      field.errorText = '';
    });
  }

  updateFieldValue(fieldName: string, value: string): void {
    const field = this.state.fields.find(f => f.name === fieldName);

    if (field) {
      field.value = value;

      if (field.isError) {
        field.isError = false;
        field.errorText = '';
        const errorIndex = this.state.fieldsErrors.indexOf(fieldName);
        if (errorIndex > -1) {
          this.state.fieldsErrors.splice(errorIndex, 1);
        }
      }
    }
  }

  private async submitFormData(formData: string): Promise<SubmissionResult> {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_WEB3_FORMS_API_URL}/submit`,
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        }
      );

      return {
        finallyMessage: response.data.message || 'Message sent successfully',
        requestStatus: response.data.success,
      };
    } catch (error) {
      const axiosError = error as AxiosError<{ message?: string; success?: boolean }>;

      return {
        finallyMessage: axiosError.response?.data?.message || 'Submission failed',
        requestStatus: axiosError.response?.data?.success || false,
      };
    }
  }

  async confirmContactForm(event: Event): Promise<void> {
    event.preventDefault();

    this.validateContactForm();

    if (this.state.fieldsErrors.length > 0) {
      return;
    }

    this.state.isProcessing = true;

    try {
      const formValues = this.getFormValues();
      const formDataJson = JSON.stringify(formValues);

      const result = await this.submitFormData(formDataJson);

      this.state.submissionResult = result;

      if (result.requestStatus) {
        this.clearFieldsValues();
      }
    } finally {
      this.state.isProcessing = false;
    }
  }

  private getFormValues(): FormValues {
    const values: FormValues = {};

    this.state.fields.forEach(field => {
      if (field.value.trim()) {
        values[field.name] = field.value;
      }
    });

    const accessKey = import.meta.env.VITE_WEB3_ACCESS_KEY;
    if (accessKey) {
      values.access_key = accessKey;
    }

    return values;
  }

  reset(): void {
    this.clearFieldsValues();
    this.state.submissionResult = { finallyMessage: '', requestStatus: true };
    this.state.isProcessing = false;
  }
}

export default new ContactFormService();
