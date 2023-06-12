# Theme

#### 介绍
主题色生成器



#### 安装教程

`npm install @dever/theme`



#### 使用

1、基于主色，生成渐变式辅助色。

```js
import { derivativeThemeColor } from '@dever/theme'
// 可配置的颜色值，及默认值
const themeColorConfig = {
  colorPrimary: '#e23',,
  colorSuccess: '#52c41a',
  colorWarning: '#faad14',
  colorError: '#ff4d4f',
  colorInfo: '#e23',
  colorTextBase: '',
  colorBgBase: '',
}

// 调用derivativeThemeColor生成的颜色值
const themeColor = derivativeThemeColor()

// 生成如下颜色， 具体：https://qingniaofly.github.io/theme/index.html
// colorPrimary
// colorSuccess
// colorWarning
// colorError
// colorInfo
// colorTextBase
// colorBgBase
// colorText
// colorTextSecondary
// colorTextTertiary
// colorTextQuaternary
// colorFill
// colorFillSecondary
// colorFillTertiary
// colorFillQuaternary
// colorBgLayout
// colorBgContainer
// colorBgElevated
// colorBgSpotlight
// colorBorder
// colorBorderSecondary
// colorPrimaryBg
// colorPrimaryBgHover
// colorPrimaryBorder
// colorPrimaryBorderHover
// colorPrimaryHover
// colorPrimaryActive
// colorPrimaryTextHover
// colorPrimaryText
// colorPrimaryTextActive
// colorSuccessBg
// colorSuccessBgHover
// colorSuccessBorder
// colorSuccessBorderHover
// colorSuccessHover
// colorSuccessActive
// colorSuccessTextHover
// colorSuccessText
// colorSuccessTextActive
// colorErrorBg
// colorErrorBgHover
// colorErrorBorder
// colorErrorBorderHover
// colorErrorHover
// colorErrorActive
// colorErrorTextHover
// colorErrorText
// colorErrorTextActive
// colorWarningBg
// colorWarningBgHover
// colorWarningBorder
// colorWarningBorderHover
// colorWarningHover
// colorWarningActive
// colorWarningTextHover
// colorWarningText
// colorWarningTextActive
// colorInfoBg
// colorInfoBgHover
// colorInfoBorder
// colorInfoBorderHover
// colorInfoHover
// colorInfoActive
// colorInfoTextHover
// colorInfoText
// colorInfoTextActive
// colorWhite

```


2、自动生成style，支持动态切换主题色，支持scope

```js
import { derivativeThemeColor, useStyleRegister } from '@dever/theme'


// 使用方式1， css string
const getCssString = (token) => {
    return `a{
        color:${token.colorPrimary}
    }`
}
const themeColor = derivativeThemeColor({ colorPrimary: 'red' })
const cssConfig = getCssString(themeColor)
useStyleRegister(cssConfig, { namespace: 'root' }) // 会基于namespace生成唯一的hash


// 使用方式2， css object
const getCssObject = (token) => {
    return {
        '.app': {
            color: token.colorPrimary,
            a: {
                color: token.colorSuccess
            }
        }
    }
}
const themeColor = derivativeThemeColor({ colorPrimary: 'red' })
const cssConfig = getCssObject(themeColor)
useStyleRegister(cssConfig, { namespace: 'html' }) // 使用此方式，namespace必须是document.querySelector可以找到的dom

```



