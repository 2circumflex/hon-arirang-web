/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import { Flex, NavLink, Avatar } from 'theme-ui'
import avatar from '../images/avatar.png'

const Header: React.FC = () => {
  return (
    <header
      style={{
        background: 'gray'
      }}
    >
      <Flex
        style={{
          margin: '0 auto',
          padding: '15px',
          maxWidth: 768,
          flexDirection: 'row',
          alignItems: 'center'
        }}
      >
        <Flex sx={{ flex: 1 }}>
          <Avatar src={avatar} />
        </Flex>
        <Flex
          as='nav'
          sx={{
            alignSelf: 'right'
          }}
        >
          <NavLink href='#!' p={2}>
            Blog
          </NavLink>
          <NavLink href='#!' p={2}>
            About
          </NavLink>
        </Flex>
      </Flex>
    </header>
  )
}

export default Header
