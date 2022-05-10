// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {Appearance} from 'react-native';
import {themeDark} from '../../constants/styles/themes/dark';
import {themeLight} from '../../constants/styles/themes/light';
import {Props, themeTypes, colorSchemeProps} from './types';

export const useApperance = (): Props => {
  const [currentTheme, setCurrentTheme] = useState<themeTypes>(
    Appearance.getColorScheme() || 'light',
  );

  const handleChangeAppearance = useCallback(
    ({colorScheme}: colorSchemeProps) => {
      if (colorScheme) {
        setCurrentTheme(colorScheme);
      }
    },
    [],
  );

  const theme = useMemo(() => {
    if (currentTheme === 'light') {
      return themeLight;
    }
    return themeDark;
  }, [currentTheme]);

  useEffect(() => {
    Appearance.addChangeListener(handleChangeAppearance);

    return () => Appearance.removeChangeListener(handleChangeAppearance);
  }, [handleChangeAppearance]);

  return {currentTheme, theme};
};
