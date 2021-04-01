import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

// Material-UI
import Typography from '@material-ui/core/Typography';
import Grow from '@material-ui/core/Grow';
import { makeStyles } from '@material-ui/core/styles';

// Componentes
import { loadState } from '../services/localStorage';
import NavBarAdmin from '../components/menuNavBarAdmin';

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

function ProfileAdmin() {
  const [checked, setChecked] = React.useState(false);
  const classes = useStyles();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const history = useHistory();

  useEffect(() => {
    const logon = loadState('user');
    if (!logon) return history.push('/login');
    setName(logon.name);
    setEmail(logon.email);
  }, [history]);

  // Material-Iu Renderizacao
  setTimeout(() => {
    setChecked(true);
  }, 300);

  return (
    <div>
      <NavBarAdmin content="Meu perfil" />
      <Grow in={ checked }>
        <div>
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
          />
          <Typography data-testid="profile-name" style={ { textAlign: 'center' } } variant="h5" component="h2">
            Nome:
            {' '}
            {name}
          </Typography>
          <Typography data-testid="profile-email" style={ { textAlign: 'center' } } variant="h5" component="h2">
            Email:
            {' '}
            {email}
          </Typography>
        </div>
      </Grow>
    </div>
  );
}

export default ProfileAdmin;
