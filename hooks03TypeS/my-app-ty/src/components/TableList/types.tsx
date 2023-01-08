import React from "react";

export interface buttonAddData{
  label: string,
  button_method(ev: React.SyntheticEvent): void;
}


export interface TableDataItemProps{
  data: any,
  identificador: string,
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

export interface ButtonsTableProps{
  label: string,
  icon: JSX.Element,
  color: string,
  action: (ev: React.SyntheticEvent) => void
}

export interface TableDataPros{
  data: DataType[],
  urlBase?: string,
  filter?: JSX.Element,
  fields: FieldsTypes[],
  addButton: buttonAddData,
  buttonsInTable?: boolean,
  actionsTable: ButtonsTableProps[],
  buttonActions?: () => {},
}