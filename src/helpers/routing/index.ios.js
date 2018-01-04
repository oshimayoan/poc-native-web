import * as Routing from 'react-router-native';
import {Navigation, Card} from 'react-router-navigation';
export default (RoutingSystem = {
  ...Routing,
  Navigation,
  Card,
});
// export default Routing;
export const Router = Routing.NativeRouter;
