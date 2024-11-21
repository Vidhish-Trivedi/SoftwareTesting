import { expect } from "chai";
import TemperatureConversion from "../src/temperature-conversion.js";

describe("TemperatureConversion", () => {
  const tempConv = new TemperatureConversion();

  it("should convert Celsius to Fahrenheit correctly", () => {
    expect(tempConv.celsiusToFahrenheit(0)).to.equal(32);
    expect(tempConv.celsiusToFahrenheit(100)).to.equal(212);
  });

  it("should convert Celsius to Kelvin correctly", () => {
    expect(tempConv.celsiusToKelvin(0)).to.equal(273);
    expect(tempConv.celsiusToKelvin(100)).to.equal(373);
  });

  it("should convert Celsius to Rankine correctly", () => {
    expect(tempConv.celsiusToRankine(0)).to.equal(492);
    expect(tempConv.celsiusToRankine(100)).to.equal(672);
  });

  it("should convert Fahrenheit to Celsius correctly", () => {
    expect(tempConv.fahrenheitToCelsius(32)).to.equal(0);
    expect(tempConv.fahrenheitToCelsius(212)).to.equal(100);
  });

  it("should convert Fahrenheit to Kelvin correctly", () => {
    expect(tempConv.fahrenheitToKelvin(32)).to.equal(273);
    expect(tempConv.fahrenheitToKelvin(212)).to.equal(373);
  });

  it("should convert Kelvin to Celsius correctly", () => {
    expect(tempConv.kelvinToCelsius(273)).to.equal(0);
    expect(tempConv.kelvinToCelsius(373)).to.equal(100);
  });

  it("should convert Kelvin to Fahrenheit correctly", () => {
    expect(tempConv.kelvinToFahrenheit(273)).to.equal(32);
    expect(tempConv.kelvinToFahrenheit(373)).to.equal(212);
  });
});