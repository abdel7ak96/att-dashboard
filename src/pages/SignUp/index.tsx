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
import { useForm, SubmitHandler } from 'react-hook-form';
import Visibility from '@mui/icons-material/VisibilityOutlined';
import VisibilityOff from '@mui/icons-material/VisibilityOffOutlined';
import Logo from '@assets/logos/logo.svg';
import MicrosoftLogo from '@assets/logos/microsoft.svg';
import GoogleLogo from '@assets/logos/google.svg';
import { Link } from 'react-router-dom';

type Inputs = {
  email: string;
  password: string;
};

const SignUp = () => {
  const { register, handleSubmit } = useForm<Inputs>();

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const onSubmit: SubmitHandler<Inputs> = useCallback((data) => {
    fetch('/api/sign-up', {
      method: 'post',
      body: JSON.stringify(data),
    });
  }, []);

  const handleClickShowPassword = useCallback(() => {
    setShowPassword((prev) => !prev);
  }, []);

  return (
    <Box className="absolute bg-circle bg-contain bg-no-repeat w-full">
      <Paper className="flex flex-col items-center w-3/5 lg:w-1/2 xl:w-1/3 mx-auto my-20 p-11 rounded-xl shadow-md">
        <Logo />
        <Typography className="self-start font-manrope font-medium text-xl my-5">
          Create your new account!
        </Typography>
        <form
          className="w-full flex flex-col mt-3 gap-3"
          onSubmit={handleSubmit(onSubmit)}
        >
          <OutlinedInput
            id="email"
            type="text"
            placeholder="Email"
            size="small"
            className="text-sm py-1"
            {...register('email')}
          />
          <OutlinedInput
            id="password"
            placeholder="Password"
            type="password"
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
          <Button
            variant="contained"
            className="capitalize rounded-lg py-3 my-5"
            type="submit"
          >
            Sign up
          </Button>
        </form>
        <Box className="flex flex-col w-full gap-4">
          <Box className="flex justify-between items-center my-2">
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
            className="normal-case gap-4 border-gray-200"
          >
            <MicrosoftLogo />
            Sign up with Microsoft
          </Button>
          <Button
            variant="outlined"
            size="small"
            color="info"
            className="normal-case gap-4 border-gray-200"
          >
            <GoogleLogo />
            Sign up with Google
          </Button>
          <Typography
            component="h5"
            variant="subtitle2"
            className="text-center my-4"
          >
            Already have an account?{' '}
            <Link to="/signin">
              <Typography
                variant="subtitle2"
                component="span"
                color="secondary"
              >
                Sign In
              </Typography>
            </Link>
          </Typography>
          <Typography variant="subtitle2" className="text-center">
            By continuing you agree to our Terms of Services and{' '}
            <Typography component="span" variant="subtitle2" color="secondary">
              Privacy Policy
            </Typography>
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default SignUp;
