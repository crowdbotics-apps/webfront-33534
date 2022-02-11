import { DarkTheme, DefaultTheme } from 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    bg: {
      primary: string
      secondary: string
      tertiary: string
      white: string
      gold: string
    }

    colors: {
      whiteDefault: string
      primary: string
      secondary: string
      bluePrimary: string
      textGray: string
      gold?: string
    }
    sizes: {
      contentMaxSize: string
    }
  }
}
