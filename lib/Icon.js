import React, {Component} from "react";
import PropTypes from 'prop-types';
import {View} from "react-native";
import { getColor } from './helpers';

import VectorIconComponent from './VectorIconComponent';
import IoniconsComponent from './IoniconsComponent';
import MaterialIconsComponent from './MaterialIconsComponent';
import EntypoComponent from './EntypoComponent';

export default class Icon extends Component {

    static propTypes = {
        name: PropTypes.string.isRequired,
        style: View.propTypes.style,
        size: PropTypes.number,
        color: PropTypes.string,
        allowFontScaling: PropTypes.bool
    };

    static defaultProps = {
        size: 30,
        color: '#757575',
        allowFontScaling: true
    };

    render() {
        const { iconType, name, style, size, color, allowFontScaling} = this.props;
        let VectorIcon = null
        switch (iconType) {
          case 1:
            VectorIcon= IoniconsComponent.get();
            break;
          case 2:
            VectorIcon= MaterialIconsComponent.get();
            break;
          case 3:
            VectorIcon = EntypoComponent.get();
            break;
          default:
            VectorIcon= VectorIconComponent.get();
            break;
        }

        return (
            <VectorIcon
                name={name}
                size={size}
                color={getColor(color)}
                style={style}
                allowFontScaling={allowFontScaling}
            />
        );
    }
}
