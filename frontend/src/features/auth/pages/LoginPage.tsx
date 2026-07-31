import {
  useForm,
} from 'react-hook-form';

import {
  zodResolver,
} from '@hookform/resolvers/zod';

import {
  loginSchema,
  type LoginFormValues,
} from '../schemas/login.schema';

import {
  useLogin,
} from '../hooks/use-login';

import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const navigate = useNavigate();

  const loginMutation = useLogin();

  const {
    register,
    handleSubmit,
    formState: {
      errors,
    },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });


  function onSubmit(data: LoginFormValues) {
    loginMutation.mutate(data, {
      onSuccess: () => {
        navigate('/dashboard');
      },
    });
  }


  return (
    <main>
      <h1>
        Login
      </h1>

      <form onSubmit={handleSubmit(onSubmit)}>

        <div>
          <label>
            Email
          </label>

          <input
            type="email"
            {...register('email')}
          />

          {errors.email && (
            <span>
              {errors.email.message}
            </span>
          )}
        </div>


        <div>
          <label>
            Password
          </label>

          <input
            type="password"
            {...register('password')}
          />

          {errors.password && (
            <span>
              {errors.password.message}
            </span>
          )}
        </div>


        <button
          type="submit"
          disabled={loginMutation.isPending}
        >
          {
            loginMutation.isPending
              ? 'Loading...'
              : 'Login'
          }
        </button>


        {loginMutation.isError && (
          <p>
            Invalid credentials
          </p>
        )}

      </form>
    </main>
  );
}