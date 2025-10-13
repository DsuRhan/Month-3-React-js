import { useState} from "react";
import type { ChangeEvent } from "react";

// ===== Type definitions =====
type Scale = "c" | "f";

interface TemperatureInputProps {
  temperature: string;
  onTemperatureChange: (value: string, scale: Scale) => void;
  scale: Scale;
}

// ===== Child component =====
function TemperatureInput({
  temperature,
  onTemperatureChange,
  scale,
}: TemperatureInputProps) {
  const scaleNames: Record<Scale, string> = {
    c: "Celsius",
    f: "Fahrenheit",
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onTemperatureChange(e.target.value, scale);
  };

  return (
    <fieldset className="border border-gray-300 rounded-xl p-4 mb-4 bg-gray-50 dark:bg-gray-800">
      <legend className="text-lg font-medium text-gray-700 dark:text-gray-200">
        Masukkan suhu dalam {scaleNames[scale]}:
      </legend>
      <input
        type="number"
        value={temperature}
        onChange={handleChange}
        className="mt-2 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-800
                   focus:border-blue-500 focus:ring-2 focus:ring-blue-300 outline-none transition"
        placeholder={`Masukkan suhu (${scaleNames[scale]})`}
      />
    </fieldset>
  );
}

// ===== Conversion helpers =====
function toCelsius(fahrenheit: number): number {
  return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius: number): number {
  return (celsius * 9) / 5 + 32;
}

function tryConvert(
  temperature: string,
  convert: (value: number) => number
): string {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) return "";
  const output = convert(input);
  return (Math.round(output * 1000) / 1000).toString();
}

// ===== Parent component =====
export default function Calculator() {
  const [temperature, setTemperature] = useState<string>("");
  const [scale, setScale] = useState<Scale>("c");

  const handleCelsiusChange = (temp: string) => {
    setTemperature(temp);
    setScale("c");
  };

  const handleFahrenheitChange = (temp: string) => {
    setTemperature(temp);
    setScale("f");
  };

  const celsius =
    scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
  const fahrenheit =
    scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;

  return (
    <div className="max-w-md mx-auto p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-semibold text-center text-gray-800 dark:text-gray-100 mb-6">
        Kalkulator Suhu (Lifting State Up)
      </h2>

      <TemperatureInput
        scale="c"
        temperature={celsius}
        onTemperatureChange={handleCelsiusChange}
      />
      <TemperatureInput
        scale="f"
        temperature={fahrenheit}
        onTemperatureChange={handleFahrenheitChange}
      />

      <div className="mt-4 text-gray-700 dark:text-gray-200">
        <p>Suhu dalam Celsius: {celsius || "—"}</p>
        <p>Suhu dalam Fahrenheit: {fahrenheit || "—"}</p>
      </div>
    </div>
  );
}
