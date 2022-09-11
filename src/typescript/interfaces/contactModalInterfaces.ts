export interface IContactModalField {
  name: string;
  label: string,
  required: boolean,
  placeholder: string,
  tag: string,
  type?: string,
  value: string,
  isError: boolean
}

export interface IContactModalObj {
  fields?: Array<IContactModalField>;
  fieldsErrors?: Array<string>;
  requestStatus: boolean;
  finallyMessage: string;
}
