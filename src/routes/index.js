import { Switch } from 'react-router-dom';
import { Home } from '../screens';
import PublicRoute from './publicRoute';

const Routes = () => {
    return (
            <Switch>
                <PublicRoute
                    path="/"
                    component={Home}
                    isAuthenticated={false}
                >
                </PublicRoute>

            </Switch>
    );
};

export default Routes;