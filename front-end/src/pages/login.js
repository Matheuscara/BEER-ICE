import React, { useState, useEffect } from 'react';

// Material-IU
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grow from '@material-ui/core/Grow';
import { useHistory } from 'react-router';
import OpenSnackBar from '../components/OpenSnackBar';

// Componentes
import validateEmailAndPassword from '../resources/validateEmailAndPassword';
import logoBeerIce from '../images/logo.png';

// Servicos
import { saveState } from '../services/localStorage';
import api from '../services/api';
import RedirectPage from '../components/redirectPage';

// CSS - Material-Ui
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      display: 'flex',
      justifyContent: 'center',
    },
    height: '100vh',
  },
  buttom: {
    '& > *': {
      width: '30ch',
      margin: theme.spacing(1),
    },
  },
  textInput: {
    justifyContent: 'center',
  },

}));

function Login() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [errorLogin, setErrorLogin] = useState(false);
  const history = useHistory();

  // Validacao
  const validates = (userEmail, userPassword) => {
    if (!validateEmailAndPassword(userEmail, userPassword)) {
      return setDisabled(false);
    }
    return setDisabled(true);
  };

  // Material - IU Renderizacao
  setTimeout(() => {
    setChecked(true);
  }, 300);

  // Renderizacao
  useEffect(() => {
    validates(email, password);
  }, [email, password]);

  // Funcao de Redirecionamento
  const InsertUserLocalStorage = () => {
    api.listLogin(email, password)
      .then((response) => {
        saveState('user', response.data);
        if (response.data.role === 'administrator') {
          history.push('/admin/orders');
        }
        if (response.data.role === 'client') {
          history.push('/products');
        }
      }).catch((err) => {
        setErrorLogin(true);
        setTimeout(() => {
          if (errorLogin) setErrorLogin(false);
        }, 400);
      });
  };

  return (
    <div>
      <form
        style={ {
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
        } }
        className={ classes.root }
        noValidate
        autoComplete="off"
      >
        <Grow in={ checked }>
          <img src={ logoBeerIce } alt="LogoBeerIce" />
        </Grow>
        <Grow in={ checked }>
          <p>Login</p>
        </Grow>

        <Grow in={ checked }>
          <TextField
            className={ classes.textInput }
            type="text"
            data-testid="email-input"
            placeholder="digite seu Email"
            onChange={ (e) => setEmail(e.target.value) }
            id="standard-basic"
            label="Email"
            variant="outlined"
          />
        </Grow>

        <Grow in={ checked }>
          <TextField
            type="password"
            data-testid="password-input"
            placeholder="Digite sua Senha"
            onChange={ (e) => setPassword(e.target.value) }
            id="filled-basic"
            label="Senha"
            variant="outlined"
          />
        </Grow>

        <Grow in={ checked }>
          <Button
            className={ classes.buttom }
            type="button"
            size="large"
            color="primary"
            data-testid="signin-btn"
            disabled={ disabled }
            onClick={ InsertUserLocalStorage }
            variant="outlined"
          >
            Entrar
          </Button>
        </Grow>

        <RedirectPage
          rota="/register"
          id="no-account-btn"
          conteudo="Cadastre-se"
          data-testid="no-account-btn"
          style={ {
            left: '5%',
          } }
        />

      </form>
      {
        errorLogin && <OpenSnackBar data="Usuario ou Senha invalidos" />
      }

    </div>
  );
}

export default Login;
