import React, { useMemo } from 'react';

import { styled } from '@storybook/theming';

import { Token } from '../../types/token.types';

interface FontPresenterProps {
  token: Token;
}

export const FontPresenter = ({ token }: FontPresenterProps) => {
  const Box = useMemo(
    () =>
      styled.div(() => ({
        font: token.value,
        width: '100%'
      })),
    [token]
  );

  return <Box>Lorem ipsum</Box>;
};
