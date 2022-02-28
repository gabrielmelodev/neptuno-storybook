
const baseColors = {
  // Cores primary da seaclax
  'seaclax-light': '#0466C8',
  'seaclax-mid': '#023E7D',
  'seaclax-dark': '#0353A4',
  'seaclax-low': '#001845',
  // Cores padrãos do Jobs  
  'jobs-light': '#00B37E',
  'jobs-mid': '#00594F',
  'jobs-dark': '#015F43',
  'jobs-low': '#00291D',
  // Cores secundaria da workclax
  'workclax-light': '#FFA200',
  'workclax-mid': '#FF9500',
  'workclax-dark': '#FF7B00',
  'workclax-low': '#FF8800',
  // Cores da Investimentos 
  'invest-light': '#9D4EDD',
  'invest-mid': '#7B2CBF',
  'invest-dark': '#3C096C',
  'invest-low': '#5A189A',

  'success-light': '#1CBB52',
  'success-base': '#0B4720',
  'success-low': '#062310',

  'danger-light': '#F14156',
  'danger-base': '#D90429',
  'danger-low': '#B40421',

  'warning-light': '#FFF15C',
  'warning-base': '#FFDD00',
  'warning-low': '#EEBA0B',

  'new-light': '#1A759F',
  'new-base': '#184E77',
  'new-low': '#1E6091',

  white: '#FFFFFF',
  black: '#000000',

  'grey-100': '#E1E1E1',
  'grey-200': '#C4C4C4',
  'grey-300': '#8D8D8D',
  'grey-400': '#7C7C7C',
  'grey-500': '#505050',
  'grey-600': '#121214',
  'grey-700': '#292929',
  'grey-800': '#202021',
  'grey-900': '#121212',
  'grey-950': '#090905',
};
// Aliases de cores utilizada em componentes da sealcax são cores padrão
const aliases = {
  'text-title': baseColors['grey-100'],
  'text-base': baseColors['grey-200'],
  'text-support': baseColors['grey-300'],
  placeholder: baseColors['grey-400'],
  'inputs-icons': baseColors['grey-500'],
  'shape-tertiary': baseColors['grey-600'],
  'shape-secondary': baseColors['grey-700'],
  'shape-primary': baseColors['grey-800'],
  'color-background': baseColors['grey-900'],
};

export const colors = { ...baseColors, ...aliases };
