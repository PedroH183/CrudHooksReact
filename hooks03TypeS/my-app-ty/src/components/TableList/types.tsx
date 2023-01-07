import React from "react";

export interface buttonAddData{
  label: string,
  button_method(ev: React.SyntheticEvent): void;
}

export interface FieldsTypes{
  title: string,
  key: string,
}

export interface DataType{
  id: number,
  Nome: string,
  Fone: string,
}

export interface TableDataPros{
  data: DataType[],
  urlBase?: string,
  filter?: JSX.Element,
  fields: FieldsTypes[],
  addButton: buttonAddData,
  buttonsInTable?: boolean,
  buttonActions?: () => {},
}