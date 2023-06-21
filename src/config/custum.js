import {extendTheme} from 'native-base';

export const theme = extendTheme({
    components: {
    Button: {
        variants: {
        rounded: ({colorScheme}) => {
            return {
            bg: `${colorScheme}.500`,
            rounded: 'full',
            _hover: {
                bg: `${colorScheme}.700`,
            },
            _pressed: {
                bg: `${colorScheme}.800`,
            },
            };
        },
        solid: ({colorScheme}) => {
            return {
            bg: `${colorScheme}.500`,
            };
        },
        },
    },
    FormControl: {
        baseStyle: {
        backgroundColor: '#fff',
        padding: 2,
        borderRadius: 8,
        },
    },
    FormControlLabel: {
        baseStyle: {
        paddingLeft: 2,
        },
    },
    },
    colors: {
    primary: {
        50: '#dfeeff',
        100: '#b6d0fc',
        200: '#8ab6f4',
        300: '#5d9ced',
        400: '#3287e7',
        500: '#1873cd', //most close to original theme
        600: '#0e50a1',
        700: '#053174',
        800: '#001848',
        900: '#00061e',
    },
    secondary: {
        50: '#fff6db',
        100: '#ffe4ae',
        200: '#fdd27f',
        300: '#fbbf4e',
        400: '#faad1e',
        500: '#e19405', // most close to original theme
        600: '#af7301',
        700: '#7e5200',
        800: '#4c3100',
        900: '#1e0f00',
    },
    success: {
        50: '#f0ffde',
        100: '#dbffb1',
        200: '#c5ff80',
        300: '#aeff4f',
        400: '#98ff21',
        500: '#7fe60d',
        600: '#62b305',
        700: '#458000', //most close to original theme
        800: '#294d00',
        900: '#0b1b00',
    },
    warning: {
        50: '#ffe7dd',
        100: '#ffc2af',
        200: '#ff9f7e',
        300: '#ff804c',
        400: '#fe631a', //most close to original theme
        500: '#e53b01',
        600: '#b32000',
        700: '#800e00',
        800: '#4e0200',
        900: '#200006',
    },
    info: {
        50: '#fee7ff',
        100: '#edbff4',
        200: '#dd96ea',
        300: '#cf6ce0',
        400: '#c043d5',
        500: '#a72abc', //most close to original theme
        600: '#821f93',
        700: '#5e1569',
        800: '#3a0b41',
        900: '#17021a',
    },
    error: {
        50: '#ffe1e6',
        100: '#ffb1b7',
        200: '#ff7e8c',
        300: '#ff4c64',
        400: '#ff1a3f',
        500: '#e6002e', //most close to original theme
        600: '#b40018',
        700: '#810007',
        800: '#500300',
        900: '#210500',
    },
    white: '#f0f2f6',
    },
    fontConfig: {
    Rubik: {
        100: {
        normal: 'Rubik-Light',
        italic: 'Rubik-LightItalic',
        },
        200: {
        normal: 'Rubik-Light',
        italic: 'Rubik-LightItalic',
        },
        300: {
        normal: 'Rubik-Light',
        italic: 'Rubik-LightItalic',
        },
        400: {
        normal: 'Rubik-Regular',
        italic: 'Rubik-RegularItalic',
        },
        500: {
        normal: 'Rubik-Medium',
        italic: 'Rubik-MediumItalic',
        },
        600: {
        normal: 'Rubik-SemiBold',
        italic: 'Rubik-SemiBoldItalic',
        },
        700: {
        normal: 'Rubik-Bold',
        italic: 'Rubik-BoldItalic',
        },
        800: {
        normal: 'Rubik-ExtraBold',
        italic: 'Rubik-ExtraBoldItalic',
        },
        900: {
        normal: 'Rubik-Black',
        italic: 'Rubik-BlackItalic',
        },
    },
    },
    fonts: {
    heading: 'Rubik',
    body: 'Rubik',
    mono: 'Rubik',
    },
});