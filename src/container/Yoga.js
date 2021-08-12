import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));
const Yoga = ({history}) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <h1>요가 채널입니다</h1>
            <Button variant="contained" color="primary" onClick={ () => {history.push('/yoga/yoga1')}}>요가1</Button>
            <Button variant="contained" color="secondary" onClick={ () => {history.push('/Yoga/yoga2')}}>요가2</Button>
            <Button variant="contained" color="primary" onClick={ () => {history.push('/Yoga/yoga3')}}>요가3</Button>
            <Button variant="contained" color="secondary" onClick={ () => {history.push('/Yoga/yoga4')}}>요가4</Button>
            <Button variant="contained" color="primary" onClick={ () => {history.goBack()} }> 뒤로 버튼 </Button>
        </div>
    )
}

export default Yoga;