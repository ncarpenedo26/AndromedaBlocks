import Blockly from "blockly";
import { COLOR_THEME } from "../../core/blockly/constants/colors";
import { selectBoardBlockly } from "../../core/microcontroller/selectBoard";

Blockly.Blocks["move_motor"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldImage("./blocks/motor/motor.png", 15, 15)
      )
      .appendField("Move motor");
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Motor 1: ")
      .appendField(
        new Blockly.FieldDropdown([
          ["1", "1"],
          ["2", "2"],
        ]),
        "MOTOR"
      );
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Direction: ")
      .appendField(
        new Blockly.FieldDropdown([
          ["Clockwise", "CLOCKWISE"],
          ["AntiClockwise", "ANTICLOCKWISE"],
        ]),
        "DIRECTION"
      );
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Speed: ")
      .appendField(new Blockly.FieldNumber(10, 1, 255, 1), "SPEED");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(COLOR_THEME.COMPONENTS);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};