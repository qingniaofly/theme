import { getStyle, normalizeStyle, parseThemeStyle, uniqueHash } from '../utils/style'

export interface StyleConfig {
    [key: string]: number | string
}

export interface StyleConfigOpts {
    debug?: boolean
    namespace?: string
    scoped?: boolean
}

export function parseStyleConfigToCss(styleConfig: StyleConfig | string, namespace = 'html') {
    let styleStr = styleConfig
    if (typeof styleConfig !== 'string') {
        const parsedStyle = parseThemeStyle(styleConfig)
        styleStr = normalizeStyle(`${namespace}{${parsedStyle}}`)
    }
    return styleStr
}

function useStyleRegister(styleConfig: StyleConfig | string, opts?: StyleConfigOpts): { style: HTMLStyleElement; styleId: string; hashId: string } {
    const { debug = false, namespace = 'html', scoped = true } = opts || {}
    const fullPath = [namespace]
    const styleId = uniqueHash(fullPath, '')
    const scopedId = `data-hash-${styleId}`
    const styleStr = parseStyleConfigToCss(styleConfig, scoped ? `[${scopedId}]` : namespace)
    const hashId = uniqueHash(fullPath, styleStr as string)
    debug && console.log('useStyleRegister:', styleConfig, styleStr)
    let update = false
    let style: any = getStyle().find((r: any) => r.getAttribute('id') === styleId)
    if (!style) {
        style = document.createElement('style')
        style.setAttribute('id', styleId)
        update = true
        document.head.append(style)
        try {
            document.querySelector(namespace)?.setAttribute(scopedId, '')
        } catch (e) {}
    } else {
        update = style.getAttribute('data-hash-id') !== hashId
    }

    if (update) {
        style.setAttribute('data-hash-id', hashId)
        style.innerHTML = styleStr
    }

    return { style, styleId, hashId }
}

export default useStyleRegister
