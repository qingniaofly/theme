export interface StyleConfig {
    [key: string]: number | string;
}
export interface StyleConfigOpts {
    debug?: boolean;
    namespace?: string;
    scoped?: boolean;
}
export declare function parseStyleConfigToCss(styleConfig: StyleConfig | string, namespace?: string): string | StyleConfig;
declare function useStyleRegister(styleConfig: StyleConfig | string, opts?: StyleConfigOpts): {
    style: HTMLStyleElement;
    styleId: string;
    hashId: string;
};
export default useStyleRegister;
