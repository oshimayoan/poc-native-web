import * as Routing from 'react-router-native';
import {Navigation, Card} from 'react-router-navigation';
export default {
  ...Routing,
  Navigation,
  Card,
};
export const Router = Routing.NativeRouter;
