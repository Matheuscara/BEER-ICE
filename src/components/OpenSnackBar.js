import React from 'react';

// Material-IU
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

// CSS - Material-Ui
export default function OpenSnackBar({ data }) {
  const [open, setOpen] = React.useState(true);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Snackbar
      anchorOrigin={ {
        vertical: 'bottom',
        horizontal: 'left',
      } }
      open={ open }
      autoHideDuration={ 6000 }
      onClose={ handleClose }
      message={ data }
      action={
        <>
          <Button color="secondary" size="small" onClick={ handleClose }>
            Fechar
          </Button>
          <IconButton size="small" aria-label="close" color="inherit" onClick={ handleClose }>
            <CloseIcon fontSize="small" />
          </IconButton>
        </>
      }
    />
  );
}
