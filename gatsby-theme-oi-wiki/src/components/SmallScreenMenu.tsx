import { makeStyles, useTheme } from '@material-ui/core/styles'
import React from 'react'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { ListItemIcon } from '@material-ui/core'
import SettingsIcon from '@material-ui/icons/Settings'
import GitHubIcon from '@material-ui/icons/GitHub'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import IconButton from '@material-ui/core/IconButton'
import Hidden from '@material-ui/core/Hidden'

const SmallScreenMenu: React.FC<unknown> = function (props) {
  const useStyles = makeStyles((theme) => ({
    iconItem: {
      minWidth: theme.spacing(5),
    },
    sideMenu: {
      transition: 'none !important',
    },
  }))

  const classes = useStyles({

  })

  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = React.useCallback((event): void => {
    // event.stopPropagation();
    setAnchorEl(event.currentTarget)
  }, [])

  const handleClose = React.useCallback((): void => {
    setAnchorEl(null)
  }, [])

  return (
    <Hidden mdUp implementation="css">

      <IconButton color="inherit" onClick={(e) => handleClick(e)} disableRipple disableFocusRipple>
        <MoreVertIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        // TransitionComponent={({children}) => children}
        TransitionProps={{ timeout: 0 }}
        classes = {{ root: classes.sideMenu }}
      >
        <MenuItem component="a" href="/settings">
          <ListItemIcon classes={{ root: classes.iconItem }}>
            <SettingsIcon fontSize="small" />
          </ListItemIcon>
    设置
        </MenuItem>
        <MenuItem component="a" href="/tags">
          <ListItemIcon classes={{ root: classes.iconItem }}>
            <SettingsIcon fontSize="small" />
          </ListItemIcon>
    标签
        </MenuItem>
        <MenuItem component="a" href="/pages">
          <ListItemIcon classes={{ root: classes.iconItem }}>
            <SettingsIcon fontSize="small" />
          </ListItemIcon>
    目录</MenuItem>
        <MenuItem component="a" href="/">
          <ListItemIcon classes={{ root: classes.iconItem }}>
            <GitHubIcon fontSize="small" />
          </ListItemIcon>
    GitHub</MenuItem>
      </Menu>
    </Hidden>)
}

export default SmallScreenMenu
