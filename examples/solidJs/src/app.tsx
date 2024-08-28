

import { Route, StackRouter } from "./router";
import { ScreenOne } from "./routes/screen-one";
import { ScreenTwo } from "./routes/screen-two";
import { Home } from '~/home'
import { ActionBar } from '~/ui/actionbar'

const App = () => {

  return (
    <StackRouter initialRouteName="Home">
      <Route name="Home" component={Home} />
      <Route name="ActionBar" component={ActionBar} />
    </StackRouter>
  );
};

export { App };
