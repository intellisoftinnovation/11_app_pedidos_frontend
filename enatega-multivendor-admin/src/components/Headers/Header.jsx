import React from 'react'
import { Box, useMediaQuery, useTheme } from '@mui/material'
import HeaderIcon from '../../assets/svg/header2.svg'
function Header() {
  const theme = useTheme()
  const matches = useMediaQuery('(min-width:1350px)')
  return (
    <>
      <Box
        sx={{
          height: 100,
          display: { xs: 'none', sm: 'block' },
          marginTop: { sm: -17, md: -14, lg: -12 },
          backgroundImage: `url(${HeaderIcon})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '105% 188px',
          backgroundPosition: 'center',
          background: matches
            ? `linear-gradient(91.15deg, #2b9b4b 4.41%, #048c34 99.86%)`
            : '',
          marginLeft: matches ? 0 : -3.5,
          marginBottom: 2
        }}></Box>
    </>
  )
}

export default Header
