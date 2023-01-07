import React from 'react'
import { DataType } from './types'

export interface TableDataItemProps{
    data: any,
    identificador: string,
}

const TableDataItem = ({data, identificador}: TableDataItemProps) => {
  return (
    <td key={data.id}>{data[identificador]}</td>
  )
}

export default TableDataItem