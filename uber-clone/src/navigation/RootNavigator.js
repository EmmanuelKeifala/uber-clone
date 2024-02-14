import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from './DrawerNavigation';

export default function RoootNavigator() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
