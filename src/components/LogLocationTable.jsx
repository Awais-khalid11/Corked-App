import React from 'react'
import BasicTable from './BasicTable'
import LocationColumn from "./LocationColumn"
import LocationData from '../Data/LocationData'

const LogLocationTable = () => {
  return (
    <div>
      <BasicTable data={LocationData} columns={LocationColumn} />
    </div>
  )
}

export default LogLocationTable
