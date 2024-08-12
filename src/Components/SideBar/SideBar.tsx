// import  { useState } from 'react'
import Customertab from '../Customertab/Customertab'
import { useSelector } from 'react-redux'
import { data } from '../../Data/data'
import { getSelectedCustomer } from '../../reduxStore/slices/customerSlice'

const SideBar = () => {

  const allCustomers=data
  const {id:selectedId}=useSelector(getSelectedCustomer)

  return (
    <div>
      {allCustomers.map(({ id, customerName, description }) => (
        <Customertab 
        key={id}
        id={id} 
        customerName={customerName} 
        description={description}
        isSelected={id==selectedId?true:false} 
        />))}
    </div>
  )
}

export default SideBar