import React, { useEffect, useState, useCallback } from 'react';

// Material-IU
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grow from '@material-ui/core/Grow';

// Componentes
import { useHistory } from 'react-router';
import OpenSnackBar from '../components/OpenSnackBar';
import { loadState } from '../services/localStorage';
import api from '../services/api';
import NavBar from '../components/menuNavBar';
import imagePerfil from '../images/image-perfil.png';

// CSS - Material-Ui
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      display: 'flex',
      justifyContent: 'center',
    },
    fontWeight: 'bold',
  },
  buttom: {
    '& > *': {
      width: '25ch',
      margin: theme.spacing(1),
    },
    marginBottom: '5ch',
  },
  textInput: {
    width: '30ch',
    justifyContent: 'center',
  },
}));

function Profile() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [attSucess, setAttSucess] = useState(false);
  const history = useHistory();

  // Validacao
  const validates = useCallback(() => {
    const regex = /^[a-zA-Z ]{2,30}$/;
    const eleven = 11;

    if (regex.test(name)
      && name.length > eleven) {
      return setDisabled(false);
    }
    return setDisabled(true);
  }, [name]);

  // Material-Iu Renderizacao
  setTimeout(() => {
    setChecked(true);
  }, 300);

  // Renderizacao
  useEffect(() => {
    const logon = loadState('user');
    if (!logon) return history.push('/login');
    setEmail(logon.email);
  }, [history]);

  // Renderizacao
  useEffect(() => {
    validates();
  }, [validates]);

  // Funcao de alterar usuario
  const updateUserName = () => {
    api.updateUser(name, email)
      .then((response) => {
        if (response.data === 1) {
          setAttSucess(true);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <Grow in={ checked }>
      <div>
        <NavBar content="Meu perfil" />
        <form
          style={ {
            position: 'absolute',
            left: '50%',
            top: '40%',
            transform: 'translate(-50%, -50%)',
            marginTop: '50px',
          } }
          className={ classes.root }
          noValidate
          autoComplete="off"
        >

          <p>Altere seu Nome</p>

          <TextField
            className={ classes.textInput }
            type="text"
            data-testid="profile-name-input"
            placeholder="digite seu Nome"
            onChange={ (e) => setName(e.target.value) }
            id="standard-basic"
            label="Nome"
            variant="outlined"
          />

          <TextField
            className={ classes.textInput }
            type="text"
            data-testid="profile-email-input"
            value={ email }
            readOnly
            id="standard-basic"
            label="Email"
            variant="outlined"
          />

          <Button
            className={ classes.buttom }
            type="button"
            size="large"
            color="primary"
            data-testid="profile-save-btn"
            disabled={ disabled }
            onClick={ updateUserName }
            variant="outlined"
          >
            Mudar Nome
          </Button>

        </form>

        <img
          style={ {
            position: 'absolute',
            left: '50%',
            top: '70%',
            zIndex: '-1',
            transform: 'translate(-50%, -50%)',
            marginTop: '50px',
          } }
          width="300px"
          src={ imagePerfil }
          alt="imagePerfil"
        />

        {
          attSucess && <OpenSnackBar data="Usuario alterado com sucesso" />
        }
      </div>
    </Grow>
  );
}

export default Profile;
