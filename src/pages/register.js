import React, { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router';

// Material-IU
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grow from '@material-ui/core/Grow';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import ErrorLogin from '../components/OpenSnackBar';

// Componentes
import validateEmailAndPassword from '../resources/validateEmailAndPassword';
import logoBeerIce from '../images/logo.png';

// Servicos
import { saveState } from '../services/localStorage';
import api from '../services/api';

// CSS - Material-Ui
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      display: 'flex',
      justifyContent: 'center',
    },
    fontWeight: 'bold',
    height: '100vh',
  },
  buttom: {
    '& > *': {
      width: '25ch',
      margin: theme.spacing(1),
    },
    marginBottom: '5ch',
  },
  textInput: {
    justifyContent: 'center',
  },
}));

function Register() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkbox, setCheckbox] = useState('client');
  const [disabled, setDisabled] = useState(true);
  const [emailExists, setEmailExists] = useState(false);
  const history = useHistory();

  // Validacao
  const validates = useCallback(() => {
    const regex = /^[a-zA-Z ]{2,30}$/;
    const eleven = 11;
    if (!validateEmailAndPassword(email, password)
      && regex.test(name)
      && name.length > eleven) {
      return setDisabled(false);
    }
    return setDisabled(true);
  }, [email, password, name]);

  // Material-Iu Renderizacao
  setTimeout(() => {
    setChecked(true);
  }, 300);

  // Renderizacao
  useEffect(() => {
    validates();
  }, [email, password, name, validates]);

  // funcao de Registrar Usuario e Redirecionar
  const registerUser = () => api.createUser(name, email, password, checkbox)
    .then((response) => {
      console.log(`Seu cadastro ${response.data} com o email ${email} foi criado com sucesso.`)
    }).catch(() => {
      setEmailExists(true);
    });

  const loginUser = () => api.listLogin(email, password)
    .then((response) => {
      saveState('user', response.data);
      console.log(response.data);
      if (checkbox === 'administrator') {
        history.push('/admin/orders');
      }
      if (checkbox === 'client') {
        history.push('/products');
      }
    })
    .catch((err) => console.log(err));

  const clickRegister = async () => {
    await registerUser();
    await loginUser();
  }

  // Funcao de modificar cliente/admin
  const handleChange = () => {
    if (checkbox === 'client') return setCheckbox('administrator');
    if (checkbox === 'administrator') return setCheckbox('client');
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
        {/*
      <Fab  color="primary" aria-label="add">
        <AddIcon />
      </Fab> */}

        <Grow in={ checked }>
          <img src={ logoBeerIce } alt="LogoBeerIce" />
        </Grow>
        <Grow in={ checked }>
          <p>Cadastre-se</p>
        </Grow>

        <Grow in={ checked }>
          <TextField
            className={ classes.textInput }
            type="text"
            data-testid="signup-name"
            placeholder="digite seu nome"
            onChange={ (e) => setName(e.target.value) }
            id="standard-basic"
            label="Nome"
            variant="outlined"
          />
        </Grow>

        <Grow in={ checked }>
          <TextField
            className={ classes.textInput }
            type="text"
            data-testid="signup-email"
            placeholder="digite seu email"
            onChange={ (e) => setEmail(e.target.value) }
            id="standard-basic"
            label="Email"
            variant="outlined"
          />
        </Grow>

        <Grow in={ checked }>
          <TextField
            className={ classes.textInput }
            type="password"
            data-testid="signup-password"
            placeholder="digite sua senha"
            onChange={ (e) => setPassword(e.target.value) }
            id="standard-basic"
            label="Senha"
            variant="outlined"
          />
        </Grow>

        <Grow in={ checked }>
          <FormControlLabel
            control={ <Checkbox color="primary" value={ checkbox } onChange={ (e) => handleChange(e) } /> }
            style={ {
              fontWeight: 'bold',
            } }
            label="Deseja vender produtos?"
          />
        </Grow>

        <Grow in={ checked }>
          <Button
            className={ classes.buttom }
            type="button"
            size="large"
            color="primary"
            data-testid="signup-btn"
            disabled={ disabled }
            onClick={ clickRegister }
            variant="outlined"
            style={ {
              left: '3%',
            } }
          >
            Cadastre-se
          </Button>
        </Grow>
      </form>
      {
        emailExists && <ErrorLogin data='Este Email já possui cadastro ' />
      }
    </div>
  );
}

export default Register;
