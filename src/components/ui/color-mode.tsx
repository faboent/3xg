'use client';

import type { IconButtonProps } from '@chakra-ui/react';
import { ClientOnly, IconButton, Skeleton } from '@chakra-ui/react';
import { forwardRef } from 'react';
import { LuSun } from 'react-icons/lu';

export function ColorModeProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export function useColorMode() {
  return {
    colorMode: 'light',
    setColorMode: () => {},
    toggleColorMode: () => {},
  };
}

export function useColorModeValue<T>(light: T) {
  return light;
}

export function ColorModeIcon() {
  return <LuSun />;
}

type ColorModeButtonProps = Omit<IconButtonProps, 'aria-label'>;

export const ColorModeButton = forwardRef<
  HTMLButtonElement,
  ColorModeButtonProps
>(function ColorModeButton(props, ref) {
  return (
    <ClientOnly fallback={<Skeleton boxSize="8" />}>
      <IconButton
        variant="ghost"
        aria-label="Color mode"
        size="sm"
        ref={ref}
        {...props}
        css={{
          _icon: {
            width: '5',
            height: '5',
          },
        }}
      >
        <ColorModeIcon />
      </IconButton>
    </ClientOnly>
  );
});
