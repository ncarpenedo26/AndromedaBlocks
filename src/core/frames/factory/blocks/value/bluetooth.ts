import { BluetoothSensor } from '../../../../blockly/state/sensors.state';
import { findComponent } from '../../factory.helpers';
import { ValueGenerator } from '../../value.factories';
import { BluetoothState } from '../../../state/arduino-components.state';
import { ArduinoComponentType } from '../../../state/arduino.state';
import { findFieldValue } from '../../../../blockly/helpers/block-data.helper';

export const getBtMessage: ValueGenerator = (
  blocks,
  block,
  variables,
  timeline,
  previousState
) => {
  return findComponent<BluetoothState>(
    previousState,
    ArduinoComponentType.BLUE_TOOTH,
    findFieldValue(block, 'PIN')
  ).message;
};

export const hasBtMessage: ValueGenerator = (
  blocks,
  block,
  variables,
  timeline,
  previousState
) => {
  return findComponent<BluetoothState>(
    previousState,
    ArduinoComponentType.BLUE_TOOTH,
    findFieldValue(block, 'PIN')
  ).hasMessage;
};
