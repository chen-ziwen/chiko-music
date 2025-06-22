# 千子音乐

## 数据来源
[NeteaseCloudMusicApi](https://github.com/chen-ziwen/NeteaseCloudMusicApi)
## 预览地址
[千子音乐](http://chiko-music.vercel.app/)
## 部分截图展示
### 首页
![image](https://github.com/chen-ziwen/chiko_music/assets/85820568/30ede7f4-afe5-44ed-a8be-99174532eefa)
### 排行榜
![image](https://github.com/chen-ziwen/chiko_music/assets/85820568/9568f480-be76-4179-ad36-02a516b6524d)
### 歌单
![image](https://github.com/chen-ziwen/chiko_music/assets/85820568/398e770e-0168-49eb-b3b2-8519ccd68d46)
### 歌手
![image](https://github.com/chen-ziwen/chiko_music/assets/85820568/a926b99a-b62d-4bcb-ad0a-5468b071dd61)
### MV
![image](https://github.com/chen-ziwen/chiko_music/assets/85820568/ebd391df-28d1-435c-bb79-6e057b7d1185)
![image](https://github.com/chen-ziwen/chiko_music/assets/85820568/98b94415-b884-463f-8679-5bd4c3d3d97d)
![image](https://github.com/chen-ziwen/chiko_music/assets/85820568/7df66a6c-0360-4424-9c79-5ee204a7c067)

## 目录结构
```plaintext
chiko_music
├── dist
│   └── assets
│       └── images
│           ├── singer
│           └── test
├── public
│   └── assets
│       └── images
│           ├── singer
│           └── test
└── src
    ├── api
    │   └── http
    ├── assets
    │   ├── css
    │   ├── font
    │   │   └── fonticon
    │   ├── image
    │   ├── scss
    │   └── ts
    ├── components
    │   ├── common
    │   │   ├── loading
    │   │   └── svgIcon
    │   │       └── svg
    │   ├── discover-music
    │   ├── home-page
    │   ├── lyric
    │   ├── mv
    │   ├── new-disc
    │   ├── progress-bar
    │   ├── rank
    │   ├── search
    │   ├── singer
    │   └── song-sheet
    ├── directives
    ├── models
    ├── router                        
    ├── store
    ├── util
    └── views
        ├── discover-music
        ├── home-page
        ├── mv
        ├── rank
        ├── search
        ├── singer
        └── song-sheet
``` 
## 安装运行
```git
$ git clone git@github.com:chen-ziwen/NeteaseCloudMusicApi.git
$ cd NeteaseCloudMusicApi
$ npm install
$ node app.js
$ git clone git@github.com:chen-ziwen/chiko_music.git
$ cd chiko_music
$ npm install
$ npm start
```
## 打包上线
```git
$  npm run build
```

