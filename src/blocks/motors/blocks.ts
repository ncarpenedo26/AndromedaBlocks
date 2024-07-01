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
      .appendField(new Blockly.FieldNumber(10, 1, 255, 1), "BRIGHTNESS");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(COLOR_THEME.COMPONENTS);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

// Blockly.defineBlocksWithJsonArray([
//   // BEGIN JSON EXTRACT
//   {
//     type: "move_motor",
//     message0: "%1 Move  motor %2 Which Motor %3 Direction %4 %5 Speed %6",
//     args0: [
//       {
//         type: "field_image",
//         src: "./blocks/motor/motor.png",
//         width: 15,
//         height: 15,
//         alt: "*",
//         flipRtl: false,
//       },
//       {
//         type: "input_dummy",
//       },
//       {
//         type: "field_dropdown",
//         name: "MOTOR",
//         // check: "Number",
//         // align: "RIGHT",
//         options: [
//           ["1", "1"],
//           ["2", "2"],
//         ],
//       },
      
//       {
//         type: "field_dropdown",
//         name: "DIRECTION",
//         options: [
//           ["Clockwise", "CLOCKWISE"],
//           ["AntiClockwise", "ANTICLOCKWISE"],
//         ],
//       },
//       {
//         type: "input_dummy",
//         align: "RIGHT",
//       },
//       {
//         type: "input_value",
//         name: "SPEED",
//         check: "Number",
//         align: "RIGHT",
//       },
//     ],
//     inputsInline: false,
//     previousStatement: null,
//     nextStatement: null,
//     colour: COLOR_THEME.COMPONENTS,
//     tooltip: "",
//     helpUrl: "",
//   },
// ]);
