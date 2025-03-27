# ベースイメージとしてOpenJDKを使用
FROM openjdk:11

# Node.jsのインストール
RUN curl -sL https://deb.nodesource.com/setup_18.x | bash - \
  && apt-get install -y nodejs wget unzip \
  && rm -rf /var/lib/apt/lists/*

# Android SDKコマンドラインツールのインストール
RUN wget https://dl.google.com/android/repository/commandlinetools-linux-9477386_latest.zip -O commandlinetools.zip \
  && mkdir -p /usr/local/android-sdk/cmdline-tools/latest \
  && unzip commandlinetools.zip -d /usr/local/android-sdk/cmdline-tools/latest \
  && rm commandlinetools.zip

# 環境変数の設定
ENV ANDROID_SDK_ROOT /usr/local/android-sdk
ENV PATH "$PATH:$ANDROID_SDK_ROOT/cmdline-tools/latest/bin"
ENV PATH "$PATH:$ANDROID_SDK_ROOT/platform-tools"

# Android SDKの更新と必要なパッケージのインストール
RUN yes | $ANDROID_SDK_ROOT/cmdline-tools/latest/bin/sdkmanager --licenses \
  && $ANDROID_SDK_ROOT/cmdline-tools/latest/bin/sdkmanager "platform-tools" "platforms;android-31" "build-tools;31.0.0"

# React Native CLIのインストール
RUN npm install -g react-native-cli

# 作業ディレクトリの設定
WORKDIR /usr/src/app

# プロジェクトファイルをコンテナ内にコピー
COPY . .

# プロジェクトの依存関係をインストール
RUN npm install

# デフォルトのコマンド
CMD ["npm", "start"]
