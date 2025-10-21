import React from 'react';
import { useTranslation } from 'react-i18next';

import DefaultInput, { ICreateDefaultInput } from './DefaultInput';
import SwitchInput from './SwitchInput';
import DefaultSelect from '../Select/DefaultSelect';

interface Props {
  type:
    | 'email'
    | 'username'
    | 'cpf'
    | 'cellphone'
    | 'password'
    | 'cpassword'
    | 'brazilianPhoneNumber'
    | 'redeemCode'
    | 'withdrawAmount'
    | 'genericText'
    | 'genericNumber'
    | 'depositAmount'
    | 'toggleSwitch';
  rhfConfig: ICreateDefaultInput['rhfConfig'];
  userBalance?: number | null;
  genericProps?: { label?: string; id: string; placeholder: string };
  validationFn?: (any: any) => {
    valid: boolean;
    errorMsg: string;
  };
  customStyle?: React.CSSProperties;
  inputOptions?: React.InputHTMLAttributes<HTMLInputElement>;
}

const GenericInput: React.FC<Props> = ({
  type,
  rhfConfig,
  userBalance,
  genericProps,
  validationFn,
  customStyle,
  inputOptions,
}) => {
  const { t } = useTranslation();

  const isGenericText = (value: string) => {
    if (value.trim().length < 2) return { valid: false, errorMsg: t('ERR_REQUIRED_FIELD') };
    return { valid: true, errorMsg: '' };
  };

  const isEmailValid = (value: string) => {
    if (!value.trim()) return { valid: false, errorMsg: t('ERR_REQUIRED_FIELD') };
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(value)) return { valid: false, errorMsg: t('ERR_EMAIL_INVALID') };
    return { valid: true, errorMsg: '' };
  };

  const isCpfValid = (value: string) => {
    if (!value.trim()) return { valid: false, errorMsg: t('ERR_REQUIRED_FIELD') };
    if (!/^\d{11}$/.test(value)) return { valid: false, errorMsg: t('ERR_CPF_INVALID') };
    return { valid: true, errorMsg: '' };
  };

  const isPasswordValid = (value: string) => {
    if (value.length < 6) return { valid: false, errorMsg: t('ERR_PASSWORD_MIN_LENGTH') };
    return { valid: true, errorMsg: '' };
  };

  const isPasswordsValid = ({ password, cpassword }: { password: string; cpassword: string }) => {
    if (!cpassword) return { valid: false, errorMsg: t('ERR_REQUIRED_FIELD') };
    if (password !== cpassword) return { valid: false, errorMsg: t('ERR_PASSWORDS_NOT_MATCH') };
    return { valid: true, errorMsg: '' };
  };

  const isBrazilianPhoneNumberValid = (formData: { brazilianPhoneNumber: string }) => {
    const value = formData.brazilianPhoneNumber.trim();
    if (!value) return { valid: false, errorMsg: t('ERR_REQUIRED_FIELD') };
    if (!/^\d{10,11}$/.test(value)) return { valid: false, errorMsg: t('ERR_PHONE_INVALID') };
    return { valid: true, errorMsg: '' };
  };

  const isUsernameValid = (value: string) => {
    if (!value.trim()) return { valid: false, errorMsg: t('ERR_REQUIRED_FIELD') };
    if (value.length < 4) return { valid: false, errorMsg: t('ERR_USERNAME_SHORT') };
    return { valid: true, errorMsg: '' };
  };

  const isWithdrawAmountValid = (value: string) => {
    const num = Number(value);
    if (!value.trim()) return { valid: false, errorMsg: t('ERR_REQUIRED_FIELD') };
    if (isNaN(num) || num <= 0) return { valid: false, errorMsg: t('ERR_INVALID_AMOUNT') };
    if (userBalance && userBalance !== undefined && num > userBalance)
      return { valid: false, errorMsg: t('ERR_WITHDRAW_EXCEEDS_BALANCE') };
    return { valid: true, errorMsg: '' };
  };

  const isDepositAmountValid = (value: string) => {
    const num = Number(value);
    if (!value.trim()) return { valid: false, errorMsg: t('ERR_REQUIRED_FIELD') };
    if (isNaN(num) || num <= 0) return { valid: false, errorMsg: t('ERR_INVALID_AMOUNT') };
    return { valid: true, errorMsg: '' };
  };

  switch (type) {
    case 'genericText':
      if (!genericProps) throw new Error('Must have genericText config');
      return (
        <DefaultInput
          label={genericProps.label}
          id={genericProps.id}
          options={{
            type: 'text',
            required: true,
            placeholder: genericProps.placeholder,
            ...inputOptions,
          }}
          rhfConfig={rhfConfig}
          validationFn={validationFn ? (value: string) => validationFn(value) : (value: string) => isGenericText(value)}
          customStyle={customStyle}
        />
      );

    case 'genericNumber':
      if (!genericProps) throw new Error('Must have genericText config');
      return (
        <DefaultInput
          label={genericProps.label}
          id={genericProps.id}
          options={{
            type: 'number',
            required: true,
            placeholder: genericProps.placeholder,
            ...inputOptions,
          }}
          rhfConfig={rhfConfig}
          validationFn={
            validationFn
              ? validationFn
              : () => {
                  throw new Error('No validation Fn');
                }
          }
        />
      );

    case 'email':
      return (
        <DefaultInput
          label={t('EMAIL')}
          id="email"
          options={{
            type: 'text',
            required: true,
            placeholder: t('TYPE_YOUR_EMAIL'),
            autoComplete: 'email',
            ...inputOptions,
          }}
          rhfConfig={rhfConfig}
          validationFn={(value: string) => isEmailValid(value)}
        />
      );

    case 'username':
      return (
        <DefaultInput
          label={t('USERNAME')}
          id="username"
          options={{
            type: 'text',
            required: true,
            placeholder: t('USERNAME_PLACEHOLDER'),
            ...inputOptions,
          }}
          rhfConfig={rhfConfig}
          validationFn={(value: string) => isUsernameValid(value)}
        />
      );

    case 'cpf':
      return (
        <DefaultInput
          label={t('CPF')}
          id="cpf"
          options={{
            type: 'text',
            required: true,
            placeholder: t('CPF_PLACEHOLDER'),
          }}
          rhfConfig={rhfConfig}
          validationFn={(value: string) => isCpfValid(value)}
        />
      );

    case 'cellphone':
      return (
        <DefaultInput
          label={t('CELLPHONE')}
          id="cellphone"
          options={{
            type: 'text',
            required: false,
            placeholder: t('CELLPHONE_PLACEHOLDER'),
          }}
          rhfConfig={rhfConfig}
          validationFn={(value: string) => {
            if (value === '') return { valid: true, errorMsg: '' };
            return isBrazilianPhoneNumberValid({ brazilianPhoneNumber: value });
          }}
        />
      );

    case 'password':
      return (
        <DefaultInput
          label={t('PASSWORD')}
          id="password"
          options={{
            type: 'password',
            required: true,
            placeholder: t('PASSWORD_PLACEHOLDER'),
          }}
          rhfConfig={rhfConfig}
          validationFn={(value: string) => isPasswordValid(value)}
        />
      );

    case 'cpassword':
      return (
        <DefaultInput
          label={t('CONFIRM_PASSWORD')}
          id="cpassword"
          options={{
            type: 'password',
            required: true,
            placeholder: t('CONFIRM_PASSWORD_PLACEHOLDER'),
          }}
          rhfConfig={rhfConfig}
          validationFn={(value: string, getValues) =>
            isPasswordsValid({
              password: getValues().password,
              cpassword: value,
            })
          }
        />
      );

    case 'brazilianPhoneNumber':
      return (
        <DefaultInput
          label={t('WHATSAPP')}
          id="brazilianPhoneNumber"
          options={{
            type: 'text',
            required: true,
            placeholder: t('WHATSAPP_PLACEHOLDER'),
          }}
          rhfConfig={rhfConfig}
          validationFn={(value: string) => isBrazilianPhoneNumberValid({ brazilianPhoneNumber: value })}
        />
      );

    case 'redeemCode':
      return (
        <DefaultInput
          label={t('REDEEM_CODE')}
          id="code"
          options={{ placeholder: t('REDEEM_CODE_PLACEHOLDER') }}
          rhfConfig={rhfConfig}
          validationFn={(value: string) => ({
            valid: value.length >= 5,
            errorMsg: t('REDEEM_CODE_ERROR'),
          })}
        />
      );

    case 'withdrawAmount':
      return (
        <DefaultInput
          label={t('WITHDRAW_AMOUNT')}
          id="withdrawAmount"
          options={{
            type: 'number',
            required: true,
            placeholder: t('WITHDRAW_PLACEHOLDER'),
          }}
          rhfConfig={rhfConfig}
          validationFn={(value: string) => isWithdrawAmountValid(value)}
        />
      );

    case 'depositAmount':
      return (
        <DefaultInput
          label={t('DEPOSIT_AMOUNT')}
          id="depositAmount"
          options={{
            type: 'number',
            required: true,
            placeholder: t('DEPOSIT_PLACEHOLDER'),
          }}
          rhfConfig={rhfConfig}
          validationFn={(value: string) => isDepositAmountValid(value)}
        />
      );

    case 'toggleSwitch':
      if (!genericProps) throw new Error('Must have genericText config');
      return <SwitchInput label={genericProps.label} id={genericProps.id} rhfConfig={rhfConfig} />;

    default:
      return null;
  }
};

export default GenericInput;
