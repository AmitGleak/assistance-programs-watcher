import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const TreatmentsList = (props) => {
  const treatments = props.treatments;
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls="simple-menu" 
                aria-haspopup="true" 
                onClick={handleClick}
                variant="contained"
                color="primary">
        Display Eligible Treatments
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {treatments.map((treatment) => {
            return <MenuItem onClick={handleClose}>{treatment}</MenuItem>
        })}
      </Menu>
    </div>
  );
}

export default TreatmentsList;