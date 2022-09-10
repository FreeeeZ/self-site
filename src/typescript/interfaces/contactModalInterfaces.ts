export interface IContactModalField {
  name: string;
  label: string,
  required: boolean,
  placeholder: string,
  tag: string,
  type?: string,
  value: string
}

export interface IContactModalObj {
  fields?: Array<IContactModalField>;
  requestStatus: boolean;
  finallyMessage: string;
}
