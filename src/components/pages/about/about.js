/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getDependencyList } from '../../../actions/about';

const About = ({
    dependencyList, filterDependencyList,
}) => (
    <div className="jumbotron">
        <h4>Frameworks included in the boilerplate</h4>
        <input type="text" className="form-control" placeholder="Search" onChange={event => filterDependencyList(event.target.value)} />
        <br />
        <ul className="list-group">
            {dependencyList.map((dependency, index) => <li key={index} className="list-group-item">{dependency}</li>)}
        </ul>
    </div>
);

About.propTypes = {
    dependencyList: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    filterDependencyList: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    dependencyList: state.dependencyList,
});

const mapDispatchToProps = dispatch => ({
    filterDependencyList: keywords => dispatch(getDependencyList(keywords)),
});

export default connect(mapStateToProps, mapDispatchToProps)(About);
