import React from 'react'
import { Container, Content } from './styles'
import { 
  FaLeanpub, 
  FaPaw, 
  FaRegSun, 
  FaUserAlt, 
  FaIdCardAlt, 
  FaRegFileAlt,
  FaPalette,
  FaTimes,
} from 'react-icons/fa'

import SidebarItem from '../SidebarItem'

const Sidebar = ({ active }) => {

  const closeSidebar = () => {
    active(false)
  }

  return (
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />  
      <Content>
        <SidebarItem Icon={FaLeanpub} Text="Verbos" />
        <SidebarItem Icon={FaUserAlt} Text="Substantivos" />
        <SidebarItem Icon={FaPaw} Text="Animais" />
        <SidebarItem Icon={FaPalette} Text="Cores" />
        <SidebarItem Icon={FaIdCardAlt} Text="Opção 5" />
        <SidebarItem Icon={FaRegFileAlt} Text="Opção 6" />
        <SidebarItem Icon={FaRegSun} Text="Opção 7" />
      </Content>
    </Container>
  )
}

export default Sidebar