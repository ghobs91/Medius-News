import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
      <div className="news-card">
        <div>Medius News</div>
        <div>Why I built This</div>
        <br></br>
      </div>
    );
  }
}

export default NavBar;































// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

// const styles = {
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginLeft: -18,
//     marginRight: 10,
//   },
// };

// function NavBar(props) {
//   const { classes } = props;
//   return (
//     <div className={classes.root}>
//       <AppBar position="static">
//         <Toolbar variant="dense">
//           <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" color="inherit">
//             Photos
//           </Typography>
//         </Toolbar>
//       </AppBar>
//     </div>
//   );
// }

// NavBar.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(NavBar);