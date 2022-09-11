export interface IContactModalField {
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

export interface IContactModalObj {
  fields?: Array<IContactModalField>;
  fieldsErrors?: Array<string>;
  requestStatus: boolean;
  finallyMessage: string;
}
