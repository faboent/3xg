import type { ButtonProps } from '@chakra-ui/react';
import { IconButton as ChakraIconButton } from '@chakra-ui/react';
import * as React from 'react';
import { LuMenu } from 'react-icons/lu';

export type MenuButtonProps = ButtonProps;

export const MenuButton = React.forwardRef<HTMLButtonElement, MenuButtonProps>(
  function MenuButton(props, ref) {
    return (
      <ChakraIconButton
        variant="ghost"
        aria-label="Open menu"
        fontSize="24px"
        ref={ref}
        {...props}
      >
        {props.children ?? <LuMenu />}
      </ChakraIconButton>
    );
  }
);
