import ThemeProvider from "./theme-provider";

import type { ReactNode } from "react";

export const AppProviders = ({
  theme,
  className,
  children,
}: {
  children: ReactNode;
  theme?: string;
  className?: string;
}) => {
  return (
    <ThemeProvider theme={theme} className={className}>
      {children}
    </ThemeProvider>
  );
};
