# ベースイメージとしてreactnativecommunityを使用
FROM reactnativecommunity/react-native-android

# 作業ディレクトリの設定
WORKDIR /usr/src/app

# プロジェクトファイルをコンテナ内にコピー
COPY package*.json ./

# プロジェクトの依存関係をインストール
RUN npm ci

# 残りのプロジェクトファイルをコピー
COPY . .

# デフォルトのコマンド
CMD ["npm", "start"]
