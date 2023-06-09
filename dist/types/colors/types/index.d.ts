export interface ColorNeutralMap {
    colorTextBase: string;
    colorBgBase: string;
    colorText: string;
    colorTextSecondary: string;
    colorTextTertiary: string;
    colorTextQuaternary: string;
    colorBorder: string;
    colorBorderSecondary: string;
    colorFill: string;
    colorFillSecondary: string;
    colorFillTertiary: string;
    colorFillQuaternary: string;
    colorBgLayout: string;
    colorBgContainer: string;
    colorBgElevated: string;
    colorBgSpotlight: string;
}
interface ColorPrimaryMap {
    colorPrimary: string;
    colorPrimaryBg: string;
    colorPrimaryBgHover: string;
    colorPrimaryBorder: string;
    colorPrimaryBorderHover: string;
    colorPrimaryHover: string;
    colorPrimaryActive: string;
    colorPrimaryTextHover: string;
    colorPrimaryText: string;
    colorPrimaryTextActive: string;
}
interface ColorSuccessMap {
    colorSuccessBg: string;
    colorSuccessBgHover: string;
    colorSuccessBorder: string;
    colorSuccessBorderHover: string;
    colorSuccessHover: string;
    colorSuccess: string;
    colorSuccessActive: string;
    colorSuccessTextHover: string;
    colorSuccessText: string;
    colorSuccessTextActive: string;
}
interface ColorWarningMap {
    colorWarningBg: string;
    colorWarningBgHover: string;
    colorWarningBorder: string;
    colorWarningBorderHover: string;
    colorWarningHover: string;
    colorWarning: string;
    colorWarningActive: string;
    colorWarningTextHover: string;
    colorWarningText: string;
    colorWarningTextActive: string;
}
interface ColorInfoMap {
    colorInfoBg: string;
    colorInfoBgHover: string;
    colorInfoBorder: string;
    colorInfoBorderHover: string;
    colorInfoHover: string;
    colorInfo: string;
    colorInfoActive: string;
    colorInfoTextHover: string;
    colorInfoText: string;
    colorInfoTextActive: string;
}
interface ColorErrorMap {
    colorErrorBg: string;
    colorErrorBgHover: string;
    colorErrorBorder: string;
    colorErrorBorderHover: string;
    colorErrorHover: string;
    colorError: string;
    colorErrorActive: string;
    colorErrorTextHover: string;
    colorErrorText: string;
    colorErrorTextActive: string;
}
export interface ThemeColorMap extends ColorNeutralMap, ColorPrimaryMap, ColorSuccessMap, ColorWarningMap, ColorErrorMap, ColorInfoMap {
    colorWhite: string;
    colorBgMask: string;
}
export {};
