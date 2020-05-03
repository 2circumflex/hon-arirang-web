/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import { Flex, NavLink, Avatar } from 'theme-ui'
import avatar from '../images/avatar.png'

const Header: React.FC = () => {
  return (
    <header
      style={{
        background: 'white'
      }}
    >
      <Flex
        style={{
          margin: '0 auto',
          height: '70px',
          maxWidth: 768,
          flexDirection: 'row',
          alignItems: 'center'
        }}
      >
        <Flex sx={{ flex: 1 }}>
          <NavLink href='/'>
            <Flex sx={{ alignItems: 'center' }}>
              <Avatar src={avatar} sx={{ mr: '10px'}} />
              혼아리랑
            </Flex>
          </NavLink>
        </Flex>
        {/* <Flex
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
        </Flex> */}
      </Flex>
      <hr style={{ background: '#e4e4e4', margin: 0 }} />
    </header>
  )
}

export default Header
