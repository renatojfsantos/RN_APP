import React, {
  forwardRef,
  useCallback,
  useContext,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import {TouchableOpacity} from 'react-native';
import {ThemeContext} from 'styled-components';
import {Icon} from '../Icon';

import {
  Container,
  InputInternal,
  Border,
  Error,
  Label,
  IconContainer,
} from './styles';
import {InputProps, InputValueRef} from './types';

const Input: React.ForwardRefRenderFunction<InputValueRef, InputProps> = (
  {
    color = 'surface500',
    secureTextEntry,
    icon,
    iconColor,
    label,
    error,
    iconPosition = 'right',
    onChangeText,
    ...rest
  },
  ref,
) => {
  const {colors} = useContext(ThemeContext);

  /**
   * STATES
   */
  const [text, setText] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  /**
   * REFS
   */
  const internalRef = useRef<any>();

  /**
   * useImperativeHandle
   */
  useImperativeHandle(
    ref,
    () => ({
      value: text,
      focus: () => internalRef.current?.focus(),
      blur: () => internalRef.current?.blur(),
      setValue: (value: string) => setText(value),
    }),
    [text],
  );

  /**
   * MEMOS
   */
  const selectedColorForActiveColorIcon = useMemo(() => {
    if (error) {
      return colors.error.main;
    }

    if (iconColor) {
      return colors[iconColor].main;
    }

    return colors[color].main;
  }, [error, colors, iconColor, color]);

  /**
   * CALLBACKS
   */
  const renderIcon = useCallback(() => {
    if (secureTextEntry) {
      return (
        <TouchableOpacity onPress={() => setPasswordVisible(old => !old)}>
          <IconContainer iconPosition={iconPosition}>
            <Icon
              icon={!passwordVisible ? 'openEye' : 'closeEye'}
              activeColor={selectedColorForActiveColorIcon}
            />
          </IconContainer>
        </TouchableOpacity>
      );
    }

    if (icon) {
      return (
        <IconContainer iconPosition={iconPosition}>
          <Icon icon={icon} activeColor={selectedColorForActiveColorIcon} />
        </IconContainer>
      );
    }

    return null;
  }, [
    icon,
    secureTextEntry,
    iconPosition,
    passwordVisible,
    selectedColorForActiveColorIcon,
  ]);

  return (
    <Container>
      {!!label && (
        <Label color="surface600" typography="body3">
          {label}
        </Label>
      )}
      <Border
        color="transparent"
        borderColor={error ? colors.error.main : colors[color].main}>
        {iconPosition === 'left' && renderIcon()}
        <InputInternal
          ref={internalRef}
          value={text}
          onChangeText={value => {
            setText(value);
            onChangeText?.(value);
          }}
          secureTextEntry={secureTextEntry && !passwordVisible}
          {...rest}
        />
        {iconPosition === 'right' && renderIcon()}
      </Border>
      {!!error && (
        <Error color="error" typography="body1">
          {error}
        </Error>
      )}
    </Container>
  );
};

export default forwardRef(Input);
