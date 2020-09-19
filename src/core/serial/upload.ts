import { MicroControllerType } from "../microcontroller/microcontroller";

declare class AvrgirlArduino {
  constructor(config: any);

  flash(hex: string, call: (error) => void): void;
}

export const upload = async (
  code: string,
  avrgirl: AvrgirlArduino,
  type: MicroControllerType
) => {
  const hexCode = await compileCode(code, type);

  const enc = new TextEncoder();
  return new Promise((res, rej) => {
    avrgirl.flash(enc.encode(hexCode) as any, (error) => {
      if (error) {
        rej(error);
      } else {
        res("flash successful");
      }
    });
  });
};

const compileCode = async (code: string, type: string): Promise<string> => {
  const headers = new Headers();
  headers.append("Content-Type", "text/plain");

  const response = await fetch(
    `https://arduino-compile.noahglaser.net/upload-code/${type}`,
    {
      method: "POST",
      body: code,
      headers,
    }
  );

  return await response.text();
};
