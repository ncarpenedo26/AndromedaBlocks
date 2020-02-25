import { Timeline, ArduinoState } from '../state/arduino.state';
import { Color } from '../state/arduino.state';
import { BlockData } from '../../blockly/state/block.data';
import { mathNumber, mathArithmetic } from './blocks/math';
import { logicBoolean } from './blocks/logic';
import { text } from './blocks/text';
import { VariableData } from '../../blockly/state/variable.data';
import { colorPicker } from './blocks/colors';
import { findBlockInput } from './blocks/factory.helpers';
import _ from 'lodash';
import { getVariable } from './blocks/get_variables';
import { mathModulus } from './blocks/math';

export interface ValueGenerator {
  (
    blocks: BlockData[],
    currentBlock: BlockData,
    variables: VariableData[],
    timeline: Timeline,
    previousState?: ArduinoState
  ):
    | number
    | string
    | boolean
    | Color
    | number[]
    | string[]
    | boolean[]
    | Color[];
}

export const valueList: { [blockName: string]: ValueGenerator } = {
  math_number: mathNumber,
  logic_boolean: logicBoolean,
  text,
  colour_picker: colorPicker,
  math_arithmetic: mathArithmetic,
  variables_get_number: getVariable,
  variables_get_string: getVariable,
  variables_get_boolean: getVariable,
  variables_get_colour: getVariable,
  math_modulo: mathModulus
};

export const getInputValue = (
  blocks: BlockData[],
  block: BlockData,
  variables: VariableData[],
  timeline: Timeline,
  inputName: string,
  defaultValue: any,
  previousState: ArduinoState = undefined
) => {
  const inputBlock = findBlockInput(blocks, block, inputName);

  if (!inputBlock) {
    return defaultValue;
  }

  return getValue(blocks, inputBlock, variables, timeline, previousState);
};

export const getValue: ValueGenerator = (
  blocks,
  block,
  variables,
  timeline,
  previousState
) => {
  try {
    return valueList[block.blockName](
      blocks,
      block,
      variables,
      timeline,
      previousState
    );
  } catch (e) {
    console.trace();
    console.log(block);

    console.log(e);
    throw e;
  }
};
