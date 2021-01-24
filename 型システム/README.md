# 型システム

## アノテーション
```typescript
// アノテーションは[値:型]という形式
let a: number = 1
let b: string = 'hello'
let c: boolean = [true, false]

// 型推論
let a = 1
let b = 'hello'
let c = [true, false]
```

## TypeScript対JavaScript

型システムの特徴 | JavaScript | TypeScript
---- | ---- | ----
型はどのようにバインドされるか? | 動的 | 静的
型は自動的に変換されるか? | はい | いいえ
型はいつチェックされるか? | 実行時 | コンパイル時
エラーはいつ表面化するか? | 実行時 | コンパイル時



