'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import {
  ForgotPasswordFormData,
  forgotPasswordSchema,
} from '@/schemas/auth/forgot-password-schema';
import { Mail } from 'lucide-react';

export function ForgotPasswordForm() {
  const form = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: '',
    },
  });

  function onSubmit(data: ForgotPasswordFormData) {
    console.log('Forgot password:', data);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='space-y-6 w-full max-w-sm'
      >
        <div className='flex flex-col gap-3 mb-8'>
          <h1 className='text-4xl font-bold'>Forgot your password?</h1>
          <p className='text-zinc-500'>
            No worries! Enter the email address associated with your account and
            we’ll send you a link to reset your password.
          </p>
        </div>
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  leftIcon={<Mail size={18} strokeWidth={1.5} />}
                  placeholder='exemplo@email.com'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type='submit' className='w-full'>
          Enviar link de recuperação
        </Button>
      </form>
    </Form>
  );
}
