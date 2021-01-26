# typescript-oreilly

OREILLY Japanから出ている[プログラミング TypeScript](https://www.oreilly.co.jp/books/9784873119046/)の勉強用ディレクトリ

### ディレクトリ基本仕様

```
# 章もしくは実行環境ごとにディレクトリを分け、ディレクトリごとに環境構築する
$ mkdir sample-1

# 移動＆インストール
$ cd sample-1
$ npm init -y
$ npm install --save-dev typescript tslint @types/node

# package.jsonの共通の中身
{
  "name": "chapter-3",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "build": "./node_modules/.bin/tsc",
    "init:ts": "./node_modules/.bin/tsc --init",
    "init:tslint": "./node_modules/.bin/tslint --init",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@types/node": "^14.14.22",
    "tslint": "^6.1.3",
    "typescript": "^4.1.3"
  }
}
```

### tree

作成したディレクトリのリンク (ディレクトリを作成したら追加する)

