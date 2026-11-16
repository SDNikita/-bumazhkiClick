const units = [
  { value: 1e33, suffix: "Dc" },
  { value: 1e30, suffix: "No" },
  { value: 1e27, suffix: "Oc" },
  { value: 1e24, suffix: "Sp" },
  { value: 1e21, suffix: "Sx" },
  { value: 1e18, suffix: "Qi" },
  { value: 1e15, suffix: "Qa" },
  { value: 1e12, suffix: "T" },
  { value: 1e9, suffix: "B" },
  { value: 1e6, suffix: "M" },
];

export function formatNumber(value: number): string {
  if (!Number.isFinite(value)) return "—";

  const absolute = Math.abs(value);
  const unit = units.find((item) => absolute >= item.value);

  if (!unit) {
    return value.toLocaleString("ru-RU", { maximumFractionDigits: 2 });
  }

  const shortened = Math.floor((absolute / unit.value) * 10) / 10;
  const sign = value < 0 ? "-" : "";

  return `${sign}${shortened}${unit.suffix}`;
}
