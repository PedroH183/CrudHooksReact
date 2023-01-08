import { TableDataItemProps } from "./types"


const TableDataItem = ({data, identificador}: TableDataItemProps) => {
  return (
    <td key={data.id}>{data[identificador]}</td>
  )
}

export default TableDataItem