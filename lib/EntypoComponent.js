import { Entypo  } from '@expo/vector-icons';

let _iconComponent = Entypo ;

export default {
  set(component) {
    _iconComponent = component;
  },

  get() {
    return _iconComponent;
  }
}
