"use client"

import { AppProgressBar as ProgressBar } from "next-nprogress-bar"
import { ThemeProvider } from "./index"
import { ReactNode } from "react"
import { FiltersProvider } from "./filters.context"

interface Props {
  children: ReactNode
}

export const Providers = ({ children }: Props) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <FiltersProvider>
        {children}
        <ProgressBar
          height="4px"
          color="#000"
          options={{ showSpinner: true }}
          shallowRouting
        />
      </FiltersProvider>
    </ThemeProvider>
  )
}
