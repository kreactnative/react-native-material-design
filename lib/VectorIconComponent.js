import { MaterialCommunityIcons } from '@expo/vector-icons';

let _iconComponent = MaterialCommunityIcons;

export default {
  set(component) {
    _iconComponent = component;
  },

  get() {
    return _iconComponent;
  }
}
