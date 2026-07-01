export type Category =
  | 'length'
  | 'weight'
  | 'temperature'
  | 'volume'
  | 'area'
  | 'speed'
  | 'time'
  | 'data'
  | 'pressure'
  | 'energy'
  | 'frequency'
  | 'angle'
  | 'fuel'
  | 'cooking'

export interface UnitInfo {
  label: string
  toBase: number // multiply value by this to get base unit value
}

export type UnitMap = Record<string, UnitInfo>

export interface CategoryData {
  units: UnitMap
  defaultFrom: string
  defaultTo: string
}

export const CATEGORIES: { id: Category; label: string; href: string }[] = [
  { id: 'length', label: 'Length', href: '/length' },
  { id: 'weight', label: 'Weight', href: '/weight' },
  { id: 'temperature', label: 'Temperature', href: '/temperature' },
  { id: 'volume', label: 'Volume', href: '/volume' },
  { id: 'area', label: 'Area', href: '/area' },
  { id: 'speed', label: 'Speed', href: '/speed' },
  { id: 'time', label: 'Time', href: '/time' },
  { id: 'data', label: 'Data', href: '/data' },
  { id: 'pressure', label: 'Pressure', href: '/pressure' },
  { id: 'energy', label: 'Energy', href: '/energy' },
  { id: 'frequency', label: 'Frequency', href: '/frequency' },
  { id: 'angle', label: 'Angle', href: '/angle' },
  { id: 'fuel', label: 'Fuel Economy', href: '/fuel' },
  { id: 'cooking', label: 'Cooking', href: '/cooking' },
]

// All conversion factors use base-unit approach.
// toBase: multiply the unit value by this to get the base unit value.
// To convert A → B: result = (value * A.toBase) / B.toBase
export const CONVERSION_DATA: Record<Category, CategoryData> = {
  length: {
    defaultFrom: 'inch',
    defaultTo: 'centimeter',
    units: {
      millimeter:   { label: 'Millimeter (mm)',    toBase: 0.001 },
      centimeter:   { label: 'Centimeter (cm)',    toBase: 0.01 },
      meter:        { label: 'Meter (m)',           toBase: 1 },
      kilometer:    { label: 'Kilometer (km)',      toBase: 1000 },
      inch:         { label: 'Inch (in)',           toBase: 0.0254 },
      foot:         { label: 'Foot (ft)',           toBase: 0.3048 },
      yard:         { label: 'Yard (yd)',           toBase: 0.9144 },
      mile:         { label: 'Mile (mi)',           toBase: 1609.344 },
      nauticalMile: { label: 'Nautical Mile (nmi)', toBase: 1852 },
      micrometer:   { label: 'Micrometer (μm)',    toBase: 0.000001 },
      nanometer:    { label: 'Nanometer (nm)',      toBase: 1e-9 },
      lightYear:    { label: 'Light Year (ly)',     toBase: 9.461e15 },
    },
  },

  weight: {
    defaultFrom: 'kilogram',
    defaultTo: 'pound',
    units: {
      milligram:    { label: 'Milligram (mg)',     toBase: 0.000001 },
      gram:         { label: 'Gram (g)',            toBase: 0.001 },
      kilogram:     { label: 'Kilogram (kg)',       toBase: 1 },
      metricTon:    { label: 'Metric Ton (t)',      toBase: 1000 },
      ounce:        { label: 'Ounce (oz)',          toBase: 0.0283495 },
      pound:        { label: 'Pound (lb)',          toBase: 0.453592 },
      stone:        { label: 'Stone (st)',          toBase: 6.35029 },
      usTon:        { label: 'US Ton (short ton)', toBase: 907.185 },
      imperialTon:  { label: 'Imperial Ton (long ton)', toBase: 1016.05 },
    },
  },

  // Temperature uses special formulas — toBase is unused; handled in convert()
  temperature: {
    defaultFrom: 'celsius',
    defaultTo: 'fahrenheit',
    units: {
      celsius:    { label: 'Celsius (°C)',    toBase: 1 },
      fahrenheit: { label: 'Fahrenheit (°F)', toBase: 1 },
      kelvin:     { label: 'Kelvin (K)',      toBase: 1 },
    },
  },

  volume: {
    defaultFrom: 'usGallon',
    defaultTo: 'liter',
    units: {
      milliliter:     { label: 'Milliliter (mL)',        toBase: 0.001 },
      liter:          { label: 'Liter (L)',               toBase: 1 },
      cubicMeter:     { label: 'Cubic Meter (m³)',        toBase: 1000 },
      cubicCentimeter:{ label: 'Cubic Centimeter (cm³)', toBase: 0.001 },
      usGallon:       { label: 'US Gallon (gal)',         toBase: 3.78541 },
      usQuart:        { label: 'US Quart (qt)',           toBase: 0.946353 },
      usPint:         { label: 'US Pint (pt)',            toBase: 0.473176 },
      usCup:          { label: 'US Cup (cup)',            toBase: 0.236588 },
      usFluidOunce:   { label: 'US Fluid Ounce (fl oz)', toBase: 0.0295735 },
      usTablespoon:   { label: 'US Tablespoon (tbsp)',   toBase: 0.0147868 },
      usTeaspoon:     { label: 'US Teaspoon (tsp)',       toBase: 0.00492892 },
      imperialGallon: { label: 'Imperial Gallon',         toBase: 4.54609 },
      imperialPint:   { label: 'Imperial Pint',           toBase: 0.568261 },
      cubicInch:      { label: 'Cubic Inch (in³)',        toBase: 0.0163871 },
      cubicFoot:      { label: 'Cubic Foot (ft³)',        toBase: 28.3168 },
    },
  },

  area: {
    defaultFrom: 'squareFoot',
    defaultTo: 'squareMeter',
    units: {
      squareMillimeter: { label: 'Square Millimeter (mm²)', toBase: 0.000001 },
      squareCentimeter: { label: 'Square Centimeter (cm²)', toBase: 0.0001 },
      squareMeter:      { label: 'Square Meter (m²)',        toBase: 1 },
      squareKilometer:  { label: 'Square Kilometer (km²)',   toBase: 1000000 },
      squareInch:       { label: 'Square Inch (in²)',        toBase: 0.00064516 },
      squareFoot:       { label: 'Square Foot (ft²)',        toBase: 0.092903 },
      squareYard:       { label: 'Square Yard (yd²)',        toBase: 0.836127 },
      acre:             { label: 'Acre',                     toBase: 4046.86 },
      hectare:          { label: 'Hectare (ha)',             toBase: 10000 },
      squareMile:       { label: 'Square Mile (mi²)',        toBase: 2589988.11 },
    },
  },

  speed: {
    defaultFrom: 'milePerHour',
    defaultTo: 'kilometerPerHour',
    units: {
      meterPerSecond:    { label: 'Meters per Second (m/s)',     toBase: 1 },
      kilometerPerHour:  { label: 'Kilometers per Hour (km/h)', toBase: 0.277778 },
      milePerHour:       { label: 'Miles per Hour (mph)',        toBase: 0.44704 },
      knot:              { label: 'Knot (kn)',                   toBase: 0.514444 },
      footPerSecond:     { label: 'Feet per Second (ft/s)',      toBase: 0.3048 },
      mach:              { label: 'Mach (M)',                    toBase: 340.29 },
    },
  },

  time: {
    defaultFrom: 'hour',
    defaultTo: 'minute',
    units: {
      nanosecond:  { label: 'Nanosecond (ns)',  toBase: 0.000000001 },
      microsecond: { label: 'Microsecond (μs)', toBase: 0.000001 },
      millisecond: { label: 'Millisecond (ms)', toBase: 0.001 },
      second:      { label: 'Second (s)',        toBase: 1 },
      minute:      { label: 'Minute (min)',      toBase: 60 },
      hour:        { label: 'Hour (h)',          toBase: 3600 },
      day:         { label: 'Day',               toBase: 86400 },
      week:        { label: 'Week',              toBase: 604800 },
      month:       { label: 'Month (avg)',       toBase: 2629746 },
      year:        { label: 'Year',              toBase: 31556952 },
      decade:      { label: 'Decade',            toBase: 315569520 },
      century:     { label: 'Century',           toBase: 3155695200 },
    },
  },

  data: {
    defaultFrom: 'gigabyte',
    defaultTo: 'megabyte',
    units: {
      bit:      { label: 'Bit (b)',        toBase: 0.125 },
      byte:     { label: 'Byte (B)',       toBase: 1 },
      kilobyte: { label: 'Kilobyte (KB)',  toBase: 1024 },
      megabyte: { label: 'Megabyte (MB)',  toBase: 1048576 },
      gigabyte: { label: 'Gigabyte (GB)', toBase: 1073741824 },
      terabyte: { label: 'Terabyte (TB)', toBase: 1099511627776 },
      petabyte: { label: 'Petabyte (PB)', toBase: 1125899906842624 },
      kibibyte: { label: 'Kibibyte (KiB)', toBase: 1024 },
      mebibyte: { label: 'Mebibyte (MiB)', toBase: 1048576 },
      gibibyte: { label: 'Gibibyte (GiB)', toBase: 1073741824 },
    },
  },

  pressure: {
    defaultFrom: 'psi',
    defaultTo: 'bar',
    units: {
      pascal:      { label: 'Pascal (Pa)',       toBase: 1 },
      kilopascal:  { label: 'Kilopascal (kPa)', toBase: 1000 },
      megapascal:  { label: 'Megapascal (MPa)', toBase: 1000000 },
      bar:         { label: 'Bar',               toBase: 100000 },
      millibar:    { label: 'Millibar (mbar)',   toBase: 100 },
      atmosphere:  { label: 'Atmosphere (atm)',  toBase: 101325 },
      psi:         { label: 'PSI (psi)',         toBase: 6894.76 },
      torr:        { label: 'Torr',              toBase: 133.322 },
      mmHg:        { label: 'mmHg',              toBase: 133.322 },
    },
  },

  energy: {
    defaultFrom: 'kilocalorie',
    defaultTo: 'kilojoule',
    units: {
      joule:        { label: 'Joule (J)',             toBase: 1 },
      kilojoule:    { label: 'Kilojoule (kJ)',        toBase: 1000 },
      calorie:      { label: 'Calorie (cal)',         toBase: 4.184 },
      kilocalorie:  { label: 'Kilocalorie (kcal)',    toBase: 4184 },
      wattHour:     { label: 'Watt-hour (Wh)',        toBase: 3600 },
      kilowattHour: { label: 'Kilowatt-hour (kWh)',   toBase: 3600000 },
      btu:          { label: 'BTU',                   toBase: 1055.06 },
      electronVolt: { label: 'Electron Volt (eV)',    toBase: 1.602e-19 },
      footPound:    { label: 'Foot-pound (ft·lb)',    toBase: 1.35582 },
    },
  },

  frequency: {
    defaultFrom: 'hertz',
    defaultTo: 'kilohertz',
    units: {
      hertz:     { label: 'Hertz (Hz)',      toBase: 1 },
      kilohertz: { label: 'Kilohertz (kHz)', toBase: 1000 },
      megahertz: { label: 'Megahertz (MHz)', toBase: 1000000 },
      gigahertz: { label: 'Gigahertz (GHz)', toBase: 1000000000 },
      rpm:       { label: 'RPM',             toBase: 0.0166667 },
    },
  },

  angle: {
    defaultFrom: 'degree',
    defaultTo: 'radian',
    units: {
      degree:    { label: 'Degree (°)',      toBase: 1 },
      radian:    { label: 'Radian (rad)',    toBase: 57.2958 },
      gradian:   { label: 'Gradian (grad)', toBase: 0.9 },
      arcminute: { label: 'Arcminute (′)',  toBase: 0.0166667 },
      arcsecond: { label: 'Arcsecond (″)', toBase: 0.000277778 },
      turn:      { label: 'Turn',           toBase: 360 },
    },
  },

  // Fuel: base unit is km/L. L/100km uses reciprocal — handled specially in convert().
  fuel: {
    defaultFrom: 'mpgUs',
    defaultTo: 'kmPerLiter',
    units: {
      kmPerLiter:   { label: 'km/L',          toBase: 1 },
      lPer100km:    { label: 'L/100km',        toBase: 0 }, // sentinel — reciprocal
      mpgUs:        { label: 'MPG (US)',       toBase: 0.425144 },
      mpgImperial:  { label: 'MPG (Imperial)', toBase: 0.354006 },
    },
  },

  cooking: {
    defaultFrom: 'cupUs',
    defaultTo: 'milliliter',
    units: {
      tspUs:      { label: 'Teaspoon US (tsp)',   toBase: 4.92892 },
      tbspUs:     { label: 'Tablespoon US (tbsp)',toBase: 14.7868 },
      cupUs:      { label: 'Cup US',              toBase: 236.588 },
      tspMetric:  { label: 'Teaspoon Metric',     toBase: 5 },
      tbspMetric: { label: 'Tablespoon Metric',   toBase: 15 },
      cupMetric:  { label: 'Cup Metric',          toBase: 250 },
      fluidOunce: { label: 'Fluid Ounce (fl oz)', toBase: 29.5735 },
      milliliter: { label: 'Milliliter (mL)',     toBase: 1 },
      pint:       { label: 'Pint (pt)',           toBase: 473.176 },
    },
  },
}

// Convert temperature between units
function convertTemperature(value: number, from: string, to: string): number {
  if (from === to) return value
  let celsius: number
  if (from === 'celsius') celsius = value
  else if (from === 'fahrenheit') celsius = (value - 32) * 5 / 9
  else celsius = value - 273.15 // kelvin

  if (to === 'celsius') return celsius
  if (to === 'fahrenheit') return celsius * 9 / 5 + 32
  return celsius + 273.15 // kelvin
}

// Convert fuel economy (handles L/100km reciprocal)
function convertFuel(value: number, from: string, to: string): number {
  if (from === to) return value
  const stdFactors: Record<string, number> = {
    kmPerLiter: 1,
    mpgUs: 0.425144,
    mpgImperial: 0.354006,
  }
  let kmL: number
  if (from === 'lPer100km') {
    if (value === 0) return Infinity
    kmL = 100 / value
  } else {
    kmL = value * stdFactors[from]
  }
  if (to === 'lPer100km') {
    if (kmL === 0) return Infinity
    return 100 / kmL
  }
  return kmL / stdFactors[to]
}

// Main conversion function
export function convert(value: number, fromUnit: string, toUnit: string, category: Category): number {
  if (!isFinite(value) || isNaN(value)) return NaN
  if (fromUnit === toUnit) return value
  if (category === 'temperature') return convertTemperature(value, fromUnit, toUnit)
  if (category === 'fuel' && (fromUnit === 'lPer100km' || toUnit === 'lPer100km')) {
    return convertFuel(value, fromUnit, toUnit)
  }
  const units = CONVERSION_DATA[category].units
  const inBase = value * units[fromUnit].toBase
  return inBase / units[toUnit].toBase
}

// Format a number for display
export function formatValue(n: number): string {
  if (!isFinite(n) || isNaN(n)) return '—'
  if (n === 0) return '0'
  const abs = Math.abs(n)
  if (abs < 0.0001 && abs > 0) {
    return n.toExponential(4)
  }
  const rounded = parseFloat(n.toPrecision(6))
  if (abs >= 1000) {
    return rounded.toLocaleString('en-US', { maximumSignificantDigits: 6 })
  }
  return rounded.toString()
}
