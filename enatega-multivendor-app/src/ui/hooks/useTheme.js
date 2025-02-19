import AsyncStorage from '@react-native-async-storage/async-storage'
import { useEffect, useState } from 'react'
import { useColorScheme } from 'react-native'

export const useTheme = () => {
  const theme = useColorScheme()
  const [defaultTheme, setDefaultTheme] = useState(
    theme === 'dark' ? 'Dark' : 'Pink'
    // 'Dark'
  )

  useEffect(() => {
    // setDefaultTheme('Dark')
    // console.log(defaultTheme)
    // return
    try {
      AsyncStorage.getItem('theme').then((response) => {
        if (!response) {
          return
        }
        setDefaultTheme(response)
      })
    } catch (error) {
      console.log('Theme Error : ', error.message)
    }
  }, [])

  return defaultTheme
}
