import Blockly from "blockly";
import { COLOR_THEME } from "../../core/blockly/constants/colors";

import { selectBoardBlockly } from "../../core/microcontroller/selectBoard";
import loopTimes from "../../core/blockly/helpers/looptimes";
import { virtualCircuitComment } from "../comment-text";

Blockly.Blocks["bluetooth_send_message"] = {
  init: function () {
    this.appendValueInput("MESSAGE")
      .setCheck("String")
      .appendField(
        new Blockly.FieldImage("./blocks/bluetooth/bluetooth.png", 15, 15)
      )
      .appendField("bluetooth send message.");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(COLOR_THEME.COMPONENTS);
    this.setTooltip("");
    this.setHelpUrl("");
    this.setCommentText(
      `This block sends a message through the Bluetooth.`
    );
    this.comment.setBubbleSize(460, 60);
  },
};

Blockly.Blocks["bluetooth_has_message"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldImage("./blocks/bluetooth/bluetooth.png", 15, 15)
      )
      .appendField("Is bluetooth receiving message?");
    this.setOutput(true, "Boolean");
    this.setColour(COLOR_THEME.COMPONENTS);
    this.setCommentText(
      `Returns true if the Bluetooth has received a message.`
    );
    this.comment.setBubbleSize(460, 60);
  },
};

Blockly.Blocks["bluetooth_get_message"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldImage("./blocks/bluetooth/bluetooth.png", 15, 15)
      )
      .appendField("bluetooth get message");
    this.setOutput(true, "String");
    this.setColour(COLOR_THEME.COMPONENTS);
    this.setTooltip("");
    this.setHelpUrl("");
    this.setCommentText(`Get's the message that the Bluetooth received.`);
    this.comment.setBubbleSize(460, 60);
  },
};



const bluetoothSetupBlock: any = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldImage("/blocks/bluetooth/bluetooth.png", 15, 15)
      )
      .appendField("Bluetooth Setup");
    this.appendDummyInput()
      .appendField("RX Pin# ")
      .appendField(
        new Blockly.FieldDropdown(() => {
          return selectBoardBlockly().digitalPins;
        }),
        "PIN_RX"
      )
      .appendField("TX Pin#")
      .appendField(
        new Blockly.FieldDropdown(selectBoardBlockly().digitalPins),
        "PIN_TX"
      );
    this.appendDummyInput("SHOW_CODE_VIEW").appendField(
      "-----------------------------------------"
    );
    this.appendDummyInput()
      .appendField("Loop")
      .appendField(new Blockly.FieldDropdown(() => loopTimes()), "LOOP");
    this.appendDummyInput()
      .appendField("Receiving Message? ")
      .appendField(
        new Blockly.FieldCheckbox("TRUE", (value) => {
          if ("FALSE" === value) {
            this.getField("message").setValue("");
          }
          return value;
        }),
        "receiving_message"
      );
    this.appendDummyInput()
      .appendField("Message:")
      .appendField(
        new Blockly.FieldTextInput("Hello World :)", (value) => {
          if (this.getFieldValue("receiving_message") === "FALSE") {
            return null;
          }
          return value;
        }),
        "message"
      );
    this.setColour(COLOR_THEME.COMPONENTS);
    this.setTooltip("");
    this.setHelpUrl("");
    this.setCommentText(
      `This block (Bluetooth setup block) tells the Arduino we are using Bluetooth devices.${virtualCircuitComment}`
    );
    this.comment.setBubbleSize(460, 120);

  },
};

Blockly.Blocks["bluetooth_setup"] = bluetoothSetupBlock;
