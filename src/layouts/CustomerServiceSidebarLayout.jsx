import React from 'react'
import { Outlet } from 'react-router-dom'
import CustomerService from '../components/CustomerService'

function CustomerServiceSidebarLayout() {
    return (
        <div className='flex h-full grow min-h-[calc(100vh-4.65rem)]'>
            <Outlet />
            <CustomerService />
        </div>
    )
}

export default CustomerServiceSidebarLayout