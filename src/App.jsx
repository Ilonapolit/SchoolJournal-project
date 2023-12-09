import { CreateUser } from "./features/CreateUser"
import {SApp,STable} from "./App.styled"
import { TableHeader } from "./features/TableHeader"
import { TableRow } from "./features/TableRow"

import {useContext} from "react"
import { GlobalContext } from "./GlobalContext.jsx/GlobalContext"
function App() {

  const {users} =useContext(GlobalContext)

  return (
    <SApp>
     <CreateUser/>
     <STable>

    <TableHeader/>
    <tr>
      <td>სახელი გვარი</td>
      <td>-</td>
      <td>-</td>
      <td>100</td>
      <td>30</td>
    </tr>
    <tr>
      <td>ანი</td>
      <td>30</td>
      <td>50</td>
      <td>-</td>
      <td>-</td>
    </tr>
   {users.map((user)=> {
    return <TableRow key={user.id} user={user} />
   }

   )}
 <TableRow/>
  /* <tr>
    <th>Students</th>
    <th>Contact</th>


import React from 'react'

export function TableRow() {
export function TableRow({user}) {
  return (
    <div>

    </div>
    <tr>
      <td>{user.username}</td>
      <td>-</td>
      <td>-</td>
      <td>100</td>
      <td>30</td>
    </tr>
  )
}

export default App


