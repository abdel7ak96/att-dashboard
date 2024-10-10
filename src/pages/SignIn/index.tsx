import { useCallback, useState } from 'react';
import {
  Box,
  Button,
  Divider,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Paper,
  Typography,
} from '@mui/material';
import Visibility from '@mui/icons-material/VisibilityOutlined';
import VisibilityOff from '@mui/icons-material/VisibilityOffOutlined';
import Logo from '@assets/logos/logo.svg';
import MicrosoftLogo from '@assets/logos/microsoft.svg';
import GoogleLogo from '@assets/logos/google.svg';
import { Link, useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { userDataType } from '@/utils/types';

type Inputs = {
  email: string;
  password: string;
};

const SignIn = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<Inputs>();
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const onSubmit: SubmitHandler<Inputs> = useCallback(async (data) => {
    const response = await fetch('/api/sign-in', {
      method: 'post',
      body: JSON.stringify(data),
    });

    if (response.status === 200) {
      const userData: userDataType = await response.json();
      localStorage.setItem('authToken', userData.token);
      localStorage.setItem(
        'userData',
        JSON.stringify({ id: userData.id, email: userData.email })
      );
      navigate("/");
    } else {
      const error = await response.json();
      console.log(
        '🚀 ~ constonSubmit:SubmitHandler<Inputs>=useCallback ~ error:',
        error
      );
    }
  }, [navigate]);

  const handleClickShowPassword = useCallback(() => {
    setShowPassword((prev) => !prev);
  }, []);

  return (
    <Box className="absolute bg-circle bg-contain bg-no-repeat w-full">
      <Paper className="flex flex-col items-center w-3/5 lg:w-1/2 xl:w-1/3 mx-auto my-20 p-11 rounded-xl shadow-md">
        <Logo />
        <Typography className="self-start font-manrope font-medium text-xl my-5">
          Welcome Back, <br />
          Sign in to your account
        </Typography>
        <form
          className="w-full flex flex-col mt-3 gap-3"
          onSubmit={handleSubmit(onSubmit)}
        >
          <OutlinedInput
            id="email"
            placeholder="Email"
            size="small"
            className="text-sm py-1"
            {...register('email', { required: true })}
          />
          <OutlinedInput
            id="password"
            placeholder="Password"
            type={!showPassword ? "password" : "text"}
            size="small"
            className="text-sm py-1"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                  className="text-gray-400"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            {...register('password', { required: true, minLength: 8 })}
          />
          <Typography
            color="secondary"
            className="text-xs font-medium self-end cursor-pointer hover:underline"
          >
            Reset Password
          </Typography>
          <Button
            variant="contained"
            className="capitalize rounded-lg py-3 my-5"
            type="submit"
          >
            Sign in
          </Button>
        </form>
        <Box className="flex flex-col w-full gap-4">
          <Box className="flex justify-between items-center">
            <Divider className="w-2/5" />
            <Typography className="text-gray-400 text-sm font-semibold">
              Or
            </Typography>
            <Divider className="w-2/5" />
          </Box>
          <Button
            variant="outlined"
            size="small"
            color="info"
            className="capitalize gap-4 border-gray-200"
          >
            <MicrosoftLogo />
            Sign in with Microsoft
          </Button>
          <Button
            variant="outlined"
            size="small"
            color="info"
            className="capitalize gap-4 border-gray-200"
          >
            <GoogleLogo />
            Sign in with Google
          </Button>
          <Typography variant="subtitle2" className="text-center mt-6">
            Don't have an account?{' '}
            <Link to="/signup">
              <Typography
                variant="subtitle2"
                component="span"
                color="secondary"
              >
                Sign Up
              </Typography>
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default SignIn;
