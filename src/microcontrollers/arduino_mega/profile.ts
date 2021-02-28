import {
  Breadboard,
  BreadBoardArea,
  MicroControllerType,
  PinConnection,
} from "../../core/microcontroller/microcontroller";
import type { MicroController } from "../../core/microcontroller/microcontroller";
import { ARDUINO_PINS } from "../../core/microcontroller/selectBoard";

// A0 => #B637CC
// A1 => #CC9E37
// A2 => #34CE5F
// A3 => #5533D1
// A4 => #D33158
// A5 => #D15F33

enum WIRE_COLORS {
  PURPLE = "#B637CC",
  LIGHT_BROWN = "#CC9E37",
  GREEN = "#34CE5F",
  DEEP_PURPLE = "#5533D1",
  DEEP_RED = "#D33158",
  ORANGE = "#D15F33",
}

const breadboard: Breadboard = {
  areas: [
    { holes: [4, 5, 6, 7], taken: false },
    { holes: [9, 10, 11, 12, 13], taken: false },
    { holes: [15, 16, 17, 18, 19], taken: false },
    { holes: [21, 22, 23, 24, 25], taken: false },
    { holes: [27, 28, 29, 30, 31], taken: false },
    { holes: [33, 34, 35, 36, 37], taken: false },
    { holes: [39, 40, 41, 42, 43], taken: false },
    { holes: [45, 46, 47, 48, 49], taken: false },
    { holes: [51, 52, 53, 54, 55], taken: false },
    { holes: [57, 58, 59, 60], taken: false },
  ],
  order: [5, 7, 3, 4, 6, 2, 8, 1, 9, 0],
};

const pinConnections: { [key: string]: PinConnection } = {
  "2": {
    color: WIRE_COLORS.DEEP_PURPLE,
    id: "ARDUINO_PIN_2",
  },
  "3": { color: WIRE_COLORS.DEEP_RED, id: "ARDUINO_PIN_3" },
  "4": { color: WIRE_COLORS.GREEN, id: "ARDUINO_PIN_4" },
  "5": { color: WIRE_COLORS.LIGHT_BROWN, id: "ARDUINO_PIN_5" },
  "6": { color: WIRE_COLORS.ORANGE, id: "ARDUINO_PIN_6" },
  "7": { color: WIRE_COLORS.PURPLE, id: "ARDUINO_PIN_7" },
  "8": { color: WIRE_COLORS.DEEP_PURPLE, id: "ARDUINO_PIN_8" },
  "9": { color: WIRE_COLORS.DEEP_RED, id: "ARDUINO_PIN_9" },
  "10": { color: WIRE_COLORS.GREEN, id: "ARDUINO_PIN_10" },
  "11": {
    color: WIRE_COLORS.LIGHT_BROWN,
    id: "ARDUINO_PIN_11",
  },
  "12": {
    color: WIRE_COLORS.ORANGE,
    id: "ARDUINO_PIN_12",
  },
  "13": {
    color: WIRE_COLORS.PURPLE,
    id: "ARDUINO_PIN_13",
  },
  A0: {
    color: WIRE_COLORS.PURPLE,
    id: "ARDUINO_PIN_A0",
  },
  A1: {
    color: WIRE_COLORS.LIGHT_BROWN,
    id: "ARDUINO_PIN_A1",
  },
  A2: {
    color: WIRE_COLORS.GREEN,
    id: "ARDUINO_PIN_A2",
  },
  A3: {
    color: WIRE_COLORS.DEEP_PURPLE,
    id: "ARDUINO_PIN_A3",
  },
  A4: {
    color: WIRE_COLORS.DEEP_RED,
    id: "ARDUINO_PIN_A4",
  },
  A5: {
    color: WIRE_COLORS.ORANGE,
    id: "ARDUINO_PIN_A5",
  },
};

enum ARDUINO_BREADBOARD_WIRES_CONNECT_POINTS {
  PIN_2 = "pin20E",
  PIN_3 = "pin18E",
  PIN_4 = "pin16E",
  PIN_5 = "pin15E",
  PIN_6 = "pin14E",
  PIN_7 = "pin12E",
  PIN_8 = "pin10E",
  PIN_9 = "pin8E",
  PIN_10 = "pin7E",
  PIN_11 = "pin6E",
  PIN_12 = "pin2E",
  PIN_13 = "pin1E",
  PIN_14 = "pin22E",
  PIN_15 = "pin23E",
  PIN_16 = "pin25E",
  PIN_17 = "pin26E",
  PIN_18 = "pin28E",
  PIN_19 = "pin29E",
  PIN_20 = "pin31E",
  PIN_21 = "pin32E",
  PIN_22 = "pin34E",
  PIN_23 = "pin26F",
  PIN_24 = "pin35E",
  PIN_25 = "pin28F",
  PIN_26 = "pin37E",
  PIN_27 = "pin29F",
  PIN_28 = "pin38E",
  PIN_29 = "pin31F",
  PIN_30 = "pin39E",
  PIN_31 = "pin32F",
  PIN_32 = "pin41E",
  PIN_33 = "pin34F",
  PIN_34 = "pin43E",
  PIN_35 = "pin35F",
  PIN_36 = "pin44E",
  PIN_37 = "pin37F",
  PIN_38 = "pin46E",
  PIN_39 = "pin38F",
  PIN_40 = "pin47E",
  PIN_41 = "pin40F",
  PIN_42 = "pin49E",
  PIN_43 = "pin41F",
  PIN_44 = "pin50E",
  PIN_45 = "pin43F",
  PIN_46 = "pin51E",
  PIN_47 = "pin44F",
  PIN_48 = "pin53E",
  PIN_49 = "pin46F",
  PIN_50 = "pin54E",
  PIN_51 = "pin48F",
  PIN_52 = "pin56E",
  PIN_53 = "pin50F",
  PIN_A0 = "pin1F",
  PIN_A1 = "pin2F",
  PIN_A2 = "pin4F",
  PIN_A3 = "pin5F",
  PIN_A4 = "pin7F",
  PIN_A5 = "pin8F",
  PIN_A6 = "pin10F",
  PIN_A7 = "pin11F",
  PIN_A8 = "pin13F",
  PIN_A9 = "pin14F",
  PIN_A10 = "pin16F",
  PIN_A11 = "pin18F",
  PIN_A12 = "pin20F",
  PIN_A13 = "pin21F",
  PIN_A14 = "pin23F",
  PIN_A15 = "pin25F",
}

const pinToBreadboardHole = (pin: ARDUINO_PINS): string => {
  return (
    ARDUINO_BREADBOARD_WIRES_CONNECT_POINTS[`PIN_${pin}`] ||
    ARDUINO_BREADBOARD_WIRES_CONNECT_POINTS.PIN_2
  );
};

const arduinoMega: MicroController = {
  analonPins: [
    "A0",
    "A1",
    "A2",
    "A3",
    "A4",
    "A5",
    "A6",
    "A7",
    "A8",
    "A9",
    "A10",
    "A11",
    "A12",
    "A13",
    "A14",
    "A15",
  ],
  digitalPins: [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
    "32",
    "33",
    "34",
    "35",
    "36",
    "37",
    "38",
    "39",
    "40",
    "41",
    "42",
    "43",
    "44",
    "45",
    "46",
    "47",
    "48",
    "49",
    "50",
    "51",
    "52",
    "53",
    "A0",
    "A1",
    "A2",
    "A3",
    "A4",
    "A5",
    "A6",
    "A7",
    "A8",
    "A9",
    "A10",
    "A11",
    "A12",
    "A13",
    "A14",
    "A15",
  ],
  misoPins: ["50"],
  mosiPins: ["51"],
  pwmPins: [
    "4",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "46",
    "45",
    "44",
    "A0",
    "A1",
    "A2",
    "A3",
    "A4",
    "A5",
    "A6",
    "A7",
    "A8",
    "A9",
    "A10",
    "A11",
    "A12",
    "A13",
    "A14",
    "A15",
  ],
  sckPins: ["52"],
  ssPins: ["53"],
  sclPins: ["21"],
  sdaPins: ["20"],
  serial_baud_rate: 9600,
  type: MicroControllerType.ARDUINO_MEGA,
  breadboard,
  pinToBreadboardHole,
  skipHoles: [
    1,
    2,
    3,
    4,
    6,
    7,
    8,
    10,
    12,
    14,
    15,
    16,
    18,
    20,
    22,
    23,
    25,
    26,
    28,
    29,
    31,
    32,
    34,
    35,
    37,
    38,
    39,
    41,
    43,
    44,
    46,
    47,
    49,
    50,
    51,
    53,
    54,
    56,
    61,
  ],
  pinConnections,
};

export default arduinoMega;
