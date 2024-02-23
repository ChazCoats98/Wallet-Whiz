import Button from '@mui/material/Button';
import LoginForm from '../components/LoginForm';
import { Link } from 'react-router-dom';
import Logo2 from '../assets/WalletWhizIconnbg.png'
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import { Authenticator, View, Text, Heading, useTheme, useAuthenticator} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsmobile from '../../../src/aws-exports';
Amplify.configure(awsmobile);
import Dashboard from './dashboard';

const components = {
    Header() {
      const { tokens } = useTheme();
  
      return (
        <View textAlign="center" padding={tokens.space.large}>
            <div className='logo-box'>
                <img className='headerLogo' src={Logo2} />
                <h3 className="header-title">Wallet<span style={{ color: 'black'}}>Whiz</span></h3>
            </div>
        </View>
      );
    },
  
    Footer() {
      const { tokens } = useTheme();
  
      return (
        <View textAlign="center" padding={tokens.space.large}>
          <Text color={tokens.colors.neutral[80]}>
            &copy; All Rights Reserved
          </Text>
        </View>
      );
    },
  
    SignIn: {
      Header() {
        const { tokens } = useTheme();
  
        return (
          <Heading
            padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
            level={3}
          >
            Sign in to your account
          </Heading>
        );
      },
      Footer() {
        const { toForgotPassword } = useAuthenticator();
  
        return (
          <View textAlign="center">
            <Button
              fontWeight="normal"
              onClick={toForgotPassword}
              size="small"
              variation="link"
            >
              Reset Password
            </Button>
          </View>
        );
      },
    },
  
    SignUp: {
      Header() {
        const { tokens } = useTheme();
  
        return (
          <Heading
            padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
            level={3}
          >
            Create a new account
          </Heading>
        );
      },
      Footer() {
        const { toSignIn } = useAuthenticator();
  
        return (
          <View textAlign="center">
            <Button
              fontWeight="normal"
              onClick={toSignIn}
              size="small"
              variation="link"
            >
              Back to Sign In
            </Button>
          </View>
        );
      },
    },
    ConfirmSignUp: {
      Header() {
        const { tokens } = useTheme();
        return (
          <Heading
            padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
            level={3}
          >
            Enter Information:
          </Heading>
        );
      },
      Footer() {
        return <Text>Footer Information</Text>;
      },
    },
    SetupTotp: {
      Header() {
        const { tokens } = useTheme();
        return (
          <Heading
            padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
            level={3}
          >
            Enter Information:
          </Heading>
        );
      },
      Footer() {
        return <Text>Footer Information</Text>;
      },
    },
    ConfirmSignIn: {
      Header() {
        const { tokens } = useTheme();
        return (
          <Heading
            padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
            level={3}
          >
            Enter Information:
          </Heading>
        );
      },
      Footer() {
        return <Text>Footer Information</Text>;
      },
    },
    ForgotPassword: {
      Header() {
        const { tokens } = useTheme();
        return (
          <Heading
            padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
            level={3}
          >
            Enter Information:
          </Heading>
        );
      },
      Footer() {
        return <Text>Footer Information</Text>;
      },
    },
    ConfirmResetPassword: {
      Header() {
        const { tokens } = useTheme();
        return (
          <Heading
            padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
            level={3}
          >
            Enter Information:
          </Heading>
        );
      },
      Footer() {
        return <Text>Footer Information</Text>;
      },
    },
  };
  
  const formFields = {
    signIn: {
      username: {
        placeholder: 'Enter your email',
      },
    },
    signUp: {
      password: {
        label: 'Password:',
        placeholder: 'Enter your Password:',
        isRequired: false,
        order: 2,
      },
      confirm_password: {
        label: 'Confirm Password:',
        order: 1,
      },
    },
    forceNewPassword: {
      password: {
        placeholder: 'Enter your Password:',
      },
    },
    forgotPassword: {
      username: {
        placeholder: 'Enter your email:',
      },
    },
    confirmResetPassword: {
      confirmation_code: {
        placeholder: 'Enter your Confirmation Code:',
        label: 'New Label',
        isRequired: false,
      },
      confirm_password: {
        placeholder: 'Enter your Password Please:',
      },
    },
    setupTotp: {
      QR: {
        totpIssuer: 'test issuer',
        totpUsername: 'amplify_qr_test_user',
      },
      confirmation_code: {
        label: 'New Label',
        placeholder: 'Enter your Confirmation Code:',
        isRequired: false,
      },
    },
    confirmSignIn: {
      confirmation_code: {
        label: 'New Label',
        placeholder: 'Enter your Confirmation Code:',
        isRequired: false,
      },
    },
  };
  
  export default function LoginPage(user) {
        return (
            <Authenticator formFields={formFields} components={components} socialProviders={['facebook', 'google']}>
                <Dashboard props={user}/>
          </Authenticator>
          );
  }

