import React from 'react';
import { renderRoutes } from 'react-router-config';
import routes from '../../appRouter';

function Content() {
    return (
        <div>
            {renderRoutes(routes)}
        </div>
    );
}

export default Content;
