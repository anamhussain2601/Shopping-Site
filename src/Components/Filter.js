import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
});

class Filter extends Component {

    render() {
        const { classes } = this.props;
        return (
            <form className={classes.root} autoComplete="off">
                <FormControl className={classes.formControl}>
                    <InputLabel style={{color:'white'}}>Order By</InputLabel>
                    <Select
                        value={this.props.sort}
                        onChange={this.props.handleSortChange}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={''}>All</MenuItem>
                        <MenuItem value={'lowToHigh'}>Low to High</MenuItem>
                        <MenuItem value={'highTolow'}>High to Low</MenuItem>
                    </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                    <InputLabel style={{color:'white'}}>Filter Size</InputLabel>
                    <Select
                        value={this.props.size}
                        onChange={this.props.handleSizeChange}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={''}>All</MenuItem>
                        <MenuItem value={'S'}>S</MenuItem>
                        <MenuItem value={'M'}>M</MenuItem>
                        <MenuItem value={'L'}>L</MenuItem>
                        <MenuItem value={'XL'}>XL</MenuItem>
                        <MenuItem value={'XXL'}>L</MenuItem>
                    </Select>
                </FormControl>
            </form>
        )
    }
}
Filter.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Filter);