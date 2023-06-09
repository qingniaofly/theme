import hash from '@emotion/hash'
import { compile, middleware, prefixer, serialize, stringify } from 'stylis'

export function normalizeStyle(styleStr: string) {
    const serialized = serialize(compile(styleStr), middleware([prefixer, stringify]))
    return serialized
}

export function uniqueHash(path: (string | number)[], styleStr: string) {
    return hash(`${path.join('%')}${styleStr}`)
}

function findStyles(container: any) {
    return Array.from(container.children).filter(function (node: any) {
        return node.tagName === 'STYLE'
    })
}

export function getStyle() {
    return findStyles(document.querySelector('head'))
}

export function parseThemeStyle(config: any) {
    const fn = (config: any) => {
        return Object.keys(config).map((key: string) => {
            const value = config[key]
            if (typeof value !== 'object') {
                return `${key}:${value};`
            }
            const str = Object.keys(value)
                .map((k: string) => {
                    let v = value[k]
                    if (typeof v === 'object') {
                        v = fn(v).join('')
                        return `${k}{${v}}`
                    }
                    return `${k}:${v};`
                })
                .join('')
            return `${key}{${str}}`
        })
    }
    return fn(config).join('')
}
