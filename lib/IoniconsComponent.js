import { Ionicons  } from '@expo/vector-icons';

let _iconComponent = Ionicons ;

export default {
  set(component) {
    _iconComponent = component;
  },

  get() {
    return _iconComponent;
  }
}
