/*
 four_line_follow package
*/
//% weight=10 icon="\uf013" color=#2896ff
namespace four_line_follow {
    export enum LineFollowerSensors {
        //% block="S1"
        S1,
        //% block="S2"
        S2,
        //% block="S3"
        S3,
        //% block="S4"
        S4
    }

    export enum LineColor {
        //% block="Black"
        Black,
        //% block="White"
        White
    }	

    const LINE_FOLLOWER_I2C_ADDR = 0x78   

	export function get_line_followers(lineFollowerSensor: LineFollowerSensors, lineColor: LineColor): number {
        pins.i2cWriteNumber(LINE_FOLLOWER_I2C_ADDR, 1, NumberFormat.UInt8BE);	    
	    let data = pins.i2cReadNumber(LINE_FOLLOWER_I2C_ADDR, NumberFormat.UInt8BE);
        switch (lineFollowerSensor) {
            case LineFollowerSensors.S1:
				return data &  0x01;
            case LineFollowerSensors.S2:
				return data &  0x02;
            case LineFollowerSensors.S3:
                return data &  0x04;
            case LineFollowerSensors.S4:
               return data &  0x08;
        }
        return 0;
    }

    
    //% weight=96 blockId=line_followers block="4 Line follower %lineFollowerSensor at pin (P19:SCL,P20:SDA,Qdee board or Startbit board connect to port4) in %lineColor ?"
    //% inlineInputMode=inline
    export function line_followers(lineFollowerSensor: LineFollowerSensors, lineColor: LineColor): boolean {
        pins.i2cWriteNumber(LINE_FOLLOWER_I2C_ADDR, 1, NumberFormat.UInt8BE);	    
	    let data = pins.i2cReadNumber(LINE_FOLLOWER_I2C_ADDR, NumberFormat.UInt8BE);
        let status = false;
        switch (lineFollowerSensor) {
            case LineFollowerSensors.S1:
                if (data & 0x01) {
                    if (lineColor == LineColor.Black) {
                        status = true;
                    }
                }
                else {
                    if (lineColor == LineColor.White) {
                        status = true;
                    }
                }
                break;

            case LineFollowerSensors.S2:
                if (data & 0x02) {
                    if (lineColor == LineColor.Black) {
                        status = true;
                    }
                }
                else {
                    if (lineColor == LineColor.White) {
                        status = true;
                    }
                }
                break;

            case LineFollowerSensors.S3:
                if (data & 0x04) {
                    if (lineColor == LineColor.Black) {
                        status = true;
                    }
                }
                else {
                    if (lineColor == LineColor.White) {
                        status = true;
                    }
                }
                break;

            case LineFollowerSensors.S4:
                if (data & 0x08) {
                    if (lineColor == LineColor.Black) {
                        status = true;
                    }
                }
                else {
                    if (lineColor == LineColor.White) {
                        status = true;
                    }
                }
                break;
        }
        return status;
    }
}
