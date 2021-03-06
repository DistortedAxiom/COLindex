import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function MenuTab(props) {
  const classes = useStyles();


  return (
    <Paper className={classes.root}>
      <Tabs
        value={props.value}
        onChange={props.tabChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Table List" />
        <Tab label="Map" />
        <Tab label="Preferences" />
      </Tabs>
    </Paper>
  );
}
