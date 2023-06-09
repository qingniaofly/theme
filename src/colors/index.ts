import { defaultPresetColors, defaultThemeColor } from './default'
import type { ThemeColor } from './types/themeColor'
import { generateColorPalettes, generateNeutralColorPalettes } from './utils/colors'
import genColorMapToken from './utils/genColorMap'
export * from './default'
export type { ThemeColorMap } from './types/index'
export type { ThemeColor } from './types/themeColor'

function derivative(themeColor?: ThemeColor) {
    const token = { ...defaultThemeColor, ...themeColor }
    return {
        defaultPresetColors,
        defaultThemeColor,
        ...token,
        ...genColorMapToken(token, {
            generateColorPalettes,
            generateNeutralColorPalettes,
        }),
    }
}
export default derivative
