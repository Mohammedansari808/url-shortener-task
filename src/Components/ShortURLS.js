import { Logout } from '@mui/icons-material'
import { Table } from '@mui/material'
import React from 'react'

function ShortURLS() {
    const username = localStorage.getItem("username")
    return (
        <div>
            <Logout />
            <Table username={username} />
        </div>

    )
}

export default ShortURLS