export interface ThemeColor {
  /**
   * @nameZH 品牌主色
   * @nameEN Brand Color
   * @desc 品牌色是体现产品特性和传播理念最直观的视觉元素之一。在你完成品牌主色的选取之后，我们会自动帮你生成一套完整的色板，并赋予它们有效的设计语义
   * @descEN Brand color is one of the most direct visual elements to reflect the characteristics and communication of the product. After you have selected the brand color, we will automatically generate a complete color palette and assign it effective design semantics.
   */
  colorPrimary: string;

  /**
   * @nameZH 成功色
   * @nameEN Success Color
   * @desc 用于表示操作成功的 Token 序列，如 Result、Progress 等组件会使用该组梯度变量。
   * @descEN Used to represent the token sequence of operation success, such as Result, Progress and other components will use these map tokens.
   */
  colorSuccess: string;

  /**
   * @nameZH 警戒色
   * @nameEN Warning Color
   * @desc 用于表示操作警告的 Token 序列，如 Notification、 Alert等警告类组件或 Input 输入类等组件会使用该组梯度变量。
   * @descEN Used to represent the warning map token, such as Notification, Alert, etc. Alert or Control component(like Input) will use these map tokens.
   */
  colorWarning: string;

  /**
   * @nameZH 错误色
   * @nameEN Error Color
   * @desc 用于表示操作失败的 Token 序列，如失败按钮、错误状态提示（Result）组件等。
   * @descEN Used to represent the visual elements of the operation failure, such as the error Button, error Result component, etc.
   */
  colorError: string;

  /**
   * @nameZH 信息色
   * @nameEN Info Color
   * @desc 用于表示操作信息的 Token 序列，如 Alert 、Tag、 Progress 等组件都有用到该组梯度变量。
   * @descEN Used to represent the operation information of the Token sequence, such as Alert, Tag, Progress, and other components use these map tokens.
   */
  colorInfo: string;

  /**
   * @nameZH 基础文本色
   * @nameEN Seed Text Color
   * @desc 用于派生文本色梯度的基础变量，v5 中我们添加了一层文本色的派生算法可以产出梯度明确的文本色的梯度变量。但请不要在代码中直接使用该 Seed Token ！
   * @descEN Used to derive the base variable of the text color gradient. In v5, we added a layer of text color derivation algorithm to produce gradient variables of text color gradient. But please do not use this Seed Token directly in the code!
   */
  colorTextBase: string;

  /**
   * @nameZH 基础背景色
   * @nameEN Seed Background Color
   * @desc 用于派生背景色梯度的基础变量，v5 中我们添加了一层背景色的派生算法可以产出梯度明确的背景色的梯度变量。但请不要在代码中直接使用该 Seed Token ！
   * @descEN Used to derive the base variable of the background color gradient. In v5, we added a layer of background color derivation algorithm to produce map token of background color. But PLEASE DO NOT USE this Seed Token directly in the code!
   */
  colorBgBase: string;
}
