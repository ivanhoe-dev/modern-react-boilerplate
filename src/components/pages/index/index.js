/* eslint-disable max-len */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Trans } from 'react-i18next';

const Index = () => (
    <div className="jumbotron">
        <h1 className="display-4"><Trans i18nKey="helloWorld" /></h1>
        <p className="lead">This is a React Boilerplate with Redux and React Router</p>
        <hr className="my-4" />
        <p>Clone the repo to test and play</p>
        <p className="lead">
            <a className="btn btn-primary btn-lg" href="#" role="button">GitHub</a>
        </p>
    </div>
);

export default Index;
