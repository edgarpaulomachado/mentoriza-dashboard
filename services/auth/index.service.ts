import { ForgotPasswordFormData } from '@/schemas/auth/forgot-password-schema';
import { LoginFormData } from '@/schemas/auth/login-schema';
import { API } from '@/services/api';
import { ResetPasswordPayload } from './types';

async function ForgotPassword({ email }: ForgotPasswordFormData) {
  return API.post('/auth/forgot-password', {
    email,
  });
}

async function login({ email, password }: LoginFormData) {
  return API.post('/auth/login', {
    email,
    password,
  });
}

async function ResetPassword({ token, newPassword }: ResetPasswordPayload) {
  return API.post('/auth/reset-password', {
    token,
    newPassword,
  });
}

export const AuthService = {
  login,
  ForgotPassword,
  ResetPassword,
};
