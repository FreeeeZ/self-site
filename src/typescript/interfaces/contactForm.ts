export interface IContactFormField {
  name: string;
  label: string;
  required: boolean;
  placeholder?: string;
  tag: string;
  type?: string;
  maxLength?: number;
  value: string;
  isError: boolean;
  errorText: string;
}

export interface IContactFormObj {
  fields?: IContactFormField[];
  fieldsErrors?: string[];
  requestStatus: boolean;
  finallyMessage: string;
}
