import * as React from 'react'
import {
  Box,
  Link,
  BottomNavigation,
  Typography,
  useTheme
} from '@mui/material'
import useStyles from './styles'
import { withTranslation } from 'react-i18next'

function AdminFooter(props) {
  const theme = useTheme()
  const { t } = props
  const [value, setValue] = React.useState(0)
  const classes = useStyles()

  return (
    <Box
      sx={{
        background: `linear-gradient(237.49deg, ${theme.palette.success.lightest} 0.63%, ${theme.palette.success.darkest} 85.49%)`
      }}
      className={classes.footer}>
      <BottomNavigation
        sx={{
          background: `linear-gradient(237.49deg, ${theme.palette.success.lightest} 0.63%, ${theme.palette.success.darkest} 85.49%)`
        }}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue)
        }}>
        <Typography className={classes.text}>©2025</Typography>

        <Link
          className={classes.link}
          href="https://dinospedidos.com/"
          target="_blank"
          underline="none">
          {t('EnategaMultivendor')}
        </Link>
        <Link
          className={classes.link}
          href="https://indrox.com/about/"
          target="_blank"
          underline="none">
          {t('About Us')}
        </Link>
      </BottomNavigation>
    </Box>
  )
}

export default withTranslation()(AdminFooter)
