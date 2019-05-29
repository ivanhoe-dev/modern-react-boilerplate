/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getDependencyList, fetchPosts } from '../../../actions/about';

const About = ({
    dependencyList, filterDependencyList, posts, fetch,
}) => (
    <div className="jumbotron">
        <h4>Frameworks included in the boilerplate</h4>
        <input type="text" className="form-control" placeholder="Search" onChange={event => filterDependencyList(event.target.value)} />
        <br />
        <ul className="list-group">
            {dependencyList.map((dependency, index) => <li key={index} className="list-group-item">{dependency}</li>)}
        </ul>
        <br />
        <button type="button" onClick={() => fetch()} className="btn btn-primary">Fetch Authors of Top 10 Threads From r/abc</button>
        <br />
        {posts.map((post, index) => <li key={index} className="list-group-item">{post.data.author}</li>)}
    </div>
);

About.propTypes = {
    dependencyList: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    filterDependencyList: PropTypes.func.isRequired,
    posts: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    fetch: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    dependencyList: state.dependencyList,
    posts: state.posts,
});

const mapDispatchToProps = dispatch => ({
    filterDependencyList: keywords => dispatch(getDependencyList(keywords)),
    fetch: () => dispatch(fetchPosts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(About);
