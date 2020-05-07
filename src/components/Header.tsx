/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import { Flex, NavLink } from 'theme-ui'

import { maxWidth, headerHeight } from '../utils/const'
import logo from '../images/logo.png'

const Header: React.FC = () => {
  return (
    <header
      style={{
        position: 'fixed',
        display: 'flex',
        justifyContent: 'center',
        background: 'white',
        width: '100%',
        height: headerHeight,
        left: 0,
        top: 0,
        borderBottom: '1px solid rgba(0, 0, 0, 12)'
      }}
    >
      <Flex
        style={{
          flex: 1,
          justifyContent: 'flex-start',
          alignItems: 'center',
          padding: '0 24px',
          maxWidth: maxWidth,
          height: '100%'
        }}
      >
        <NavLink href='/'>
          <img src={logo} alt='logo' style={{ marginTop: '10px' }} />
        </NavLink>
      </Flex>
    </header>
  )
}

export default Header
