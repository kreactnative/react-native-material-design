// import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { MaterialCommunityIcons as MaterialIcons  } from '@expo/vector-icons';
let _iconComponent = MaterialIcons;

export default {
  set(component) {
    _iconComponent = component;
  },

  get() {
    return _iconComponent;
  }
}
