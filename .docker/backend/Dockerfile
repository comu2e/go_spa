# 2020/10/14最新versionを取得
FROM golang:1.15.2-alpine
RUN apk update && apk add git
# appディレクトリの作成
RUN mkdir /go/src/app
# ワーキングディレクトリの設定
# ホストのファイルをコンテナの作業ディレクトリに移行
COPY . /go/src/app
WORKDIR /go/src/app/src
RUN go get -u github.com/oxequa/realize 
CMD ["realize", "start"]