# Chapter 2 sample dir
p11~16

## 実行したコマンド

```
# create new dir
$ mkdir chapter-2

# init
$ npm init or npm init -y

# install package 
$ npm install --save-dev typescript tslint @types/node

# create tsconfig
$ ./node_modules/.bin/tsc --init

# create tslint
$ ./node_modules/.bin/tslint --init

# compile command
$ ./node_modules/.bin/tsc  
or
# 上記のコマンドをpackage.jsonに追加
$ npm buid

# コンパイルしたファイルを実行
$ node ./dist/index.js
```

