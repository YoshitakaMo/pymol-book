## インストール方法
大きく分けて、**公式ウェブサイトで配布されているバイナリを入れる方法**（バイナリ版）と、**自身でPyMOLをソースコードからビルド＆コンパイルし、インストールする方法**（オープンソース版）の2通りがあります。初心者に対しては確実に前者の方をおすすめしますが、**ライセンス認証を求められる**（一応無視しても使えるが少し煩わしい）というデメリットがあり、反対に後者のやり方では、ライセンス認証は求められないものの、インストールがやや難しく、玄人向けと言えます。

| |バイナリ版|オープンソース版|
|:-----------------|:------------------:|:-------------------:|
|メリット|**インストールがとても簡単**<br>APBSを始めとした、いくつかのプラグインがプリインストールされている|**ライセンス認証が不要**|
|デメリット|**起動時にライセンス認証を求められる**|**インストールが煩雑**<br>プラグインが同梱されていない（手動で追加インストールすることが求められる）
|備考|有料ライセンスならば、専用の追加機能を利用できる（特にSchrödinger Maestroとの連携）||

PyMOLライセンスは基本的に有料で、1年または3年契約なのですが、教育用のサブスクリプション(Educational Subscription)ライセンスは、ウェブ上で申請することで**無料**で発行されます。いずれのライセンスを取得する場合でも、まずhttps://pymol.org/2/buy.html にアクセスし、申請フォームを埋めることでライセンス発行の手続きを進めることができます。



### バイナリ版のインストール方法

バイナリ版のインストール方法はとても簡単で、[公式ウェブサイト](https://pymol.org/2/)のDownloadのところからインストーラーを取得することができます。Windows, macOS, Linuxいずれの場合も、基本的にはインストーラーを展開して指示に従ってインストールを進めるだけでOKのはずです。

### オープンソース版のインストール方法
オープンソース版のインストール方法は、OSの種類によって大きく異なります。

#### Windows 10の場合
（書きかけ）

#### macOSの場合
以下の環境を想定しています。

##### マシン環境
-   macOS 10.14.4 (Mojave), 2.8GHz Intel Core i7, メモリ16GB
-   [ターミナルからHomebrewをインストール](http://brew.sh/index_ja.html)してある
-   [Xquartzをインストール](http://xquartz.macosforge.org/landing/)してある

また、Homebrewで入れたものを優先的に使うよう、`~/.bash_profile(or ~/.bashrc)`などの設定ファイルにHomebrewのパッケージの優先度を上げるための

    export PATH="/usr/local/bin:$PATH"

を追記しておきます。

##### 概要
PyMOL 2以降では**legacyで時代遅れなpython2がなくても動作するようになったようです**。よって現行のPython 3.7のみで動作させることができるようです。またGUIインターフェースとしてこれまでtcl-tkを使っていたようでしたが、これもPyQt（ぱいきゅーと）5などのきれいなインタフェースを利用できるようになりました。ただし、相変わらずPyMOLはたくさんのプログラム依存の上に成り立っているため、少なくとも以下のプログラムをインストールしておく必要があります（PyMOL 2.3.0時点）。

- C++11 compiler (e.g. gcc 4.7+)
- Python 2.7+
- Pmw (Python Megawidgets) (optional, for legacy GUI/plugins)
- OpenGL
- GLEW
- GLUT (freeglut) (optional, enable with --glut)
- libpng
- freetype
- libxml2 (optional, for COLLADA export, disable with --no-libxml)
- msgpack-c 2.1.5+ (optional, for fast MMTF loading and export,
    disable with --use-msgpackc=no)
- mmtf-cpp (for fast MMTF export, disable with --use-msgpackc=no)
- PyQt5, PyQt4, PySide2 or PySide (optional, will fall back to Tk
    interface if compiled with --glut)
- glm
- catch2 (optional, enable with --testing)

を用意しておく必要があります。optionalとついているものは無くても動作しますが、今回はcatch2以外の全部を使用してインストールを試みます。mmtfというのはpdbの最新式バイナリ型PDBファイルで、ファイルサイズを非常に高効率で圧縮できるのが特徴です（ https://mmtf.rcsb.org/index.html ）。PyMOL 2.2からmmtf形式へのエクスポートにも対応したようです。興味がある方はこれも入れてインストールしてみましょう。

#### Homebrewで一発インストールする方法(推奨)
まず最新版の[Xquartzをインストール](http://xquartz.macosforge.org/landing/)しておいた状態で、アプリケーション > ユーティリティ > ターミナルを開き、[Homebrewをインストール](http://brew.sh/index_ja.html)してあることが条件です。この状態で、ターミナルから、

```bash
brew install brewsci/bio/pymol
```

と入力します。これで一発でインストールすることができます。終わったら、**一度Command+Qキーでターミナルを完全に閉じてから**、もう一度ターミナルを開いて

```bash
pymol #または /usr/local/bin/pymol
```

でオープンソース版pymolが立ち上がります。このときターミナルにメッセージが流れるのが煩わしいと感じる場合は

```bash
pymol > /dev/null 2>&1 &
```

で開くのも良いでしょう。

#### CentOS 7.5の場合
##### 環境
-   CentOS 7.5
-   sudo権限が使える場合

##### インストール方法
上のMacと似たような流れでインストールすることができます。また必要なパッケージのほとんどは管理者のyumを使ってシステムに直接インストールできるのでとても簡単です。rootでない管理者の場合はyumの前にsudoをつけて実行します。

```bash
yum -y install epel-release
yum -y install gcc gcc-c++ python-devel tkinter glew-devel freeglut-devel \
libpng-devel freetype-devel libxml2-devel glm-devel msgpack
yum -y install python36u-pip
# pip3.6の場所の確認
which pip3.6
# 現在使用中のpython3環境にpip3.6で追加パッケージをインストールする
pip3.6 install --upgrade pip
pip3.6 install sip pyqt5 pmw
pip3.6 install msgpack-python msgpack-tool mmtf-python
# PyMOL 2.3のソースコードをダウンロードして、ビルド＆インストール
cd /path/to/pymol-open-source
# rm -rf build #インストールでエラーが出てしまった場合、再インストールを試す前にbuildディレクトリを消しておく
python3.6 setup.py build install --prefix=/path/to/pymol/2.3 --glut --use-msgpackc=c++11
```

だいたいこの流れでインストールができると思います。ただし、もしGTX 1080TiなどのNVIDIAグラフィックドライバを積んでいる場合にはそちらに切り替えたほうがPyMOLのGUI操作がサクサクになると思われますので、その設定もしておくと良いでしょう。
参考：[CentOS 7 上で PyMOL をソースからビルド](https://qiita.com/inferist/items/770a88151d27fa117111)

#### Ubuntu 18.04の場合
##### 環境
-   Ubuntu 18.04
-   sudo権限が使える場合

##### インストール方法
`apt`を使ってパッケージをインストールした後、後はだいたいCentOS 7のときと流れは同じです。Python 3のバージョンは3.6、3.7どちらを使っても大丈夫です（下の例では3.6にしています）。

```bash
sudo apt install freeglut3-dev python2.7-dev python3.6-dev \
libxml2-dev gcc tcl8.6-dev tk8.6-dev python3-tk \
libmsgpack-dev libpng-dev libglew2.0 libfreetype6-dev \
libglm-dev libglew-dev python-pyqt5.qtopengl
# python3.6に対応したpipのインストール
sudo apt install python3-pip
# 現在使用中のpython3環境にpip3で追加パッケージをインストールする
sudo pip3 install --upgrade pip
sudo pip3 install sip pyqt5 pmw
sudo pip3 install msgpack-python
# 新しい依存パッケージmmtf-cppを/usr/localにインストール https://github.com/rcsb/mmtf-cpp
sudo apt install ninja-build cmake
wget https://github.com/rcsb/mmtf-cpp/archive/v1.0.0.tar.gz
tar zxvf v1.0.0.tar.gz
cd v1.0.0
mkdir build ; cd build
cmake -G Ninja ..
sudo ninja install
# PyMOL 2.3のソースコードをダウンロードして、ビルド＆インストール
wget https://github.com/schrodinger/pymol-open-source/archive/v2.3.0.tar.gz
tar zxvf v2.3.0.tar.gz
cd pymol-open-source-2.3.0
# rm -rf build #インストールでエラーが出てしまった場合、再インストールを試す前にbuildディレクトリを消しておく
python3 setup.py build install --prefix=/path/to/pymol/2.3 --glut --use-msgpackc=c++11
```

### プラグインのインストール方法

#### PyMOL 2からのプラグイン
バイナリ版PyMOL2.0に存在したプラグインはこちらのソースビルド版には初期状態で入っていません。しかし特にAPBS pluginなどは論文で使う研究者も多いはずです。macOSの場合、すでにこのバイナリ版PyMOLを持っているならば、`/Applications/PyMOL.app/Contents/share/pymol/data/startup/`にあったプラグインを`~/apps/pymol/2.3/lib/python3.7/site-packages/pymol/pymol_path/data/startup`に持ってくると使うことができます。

```bash
# 手動インストールの場合はこっち
# cp -rp /Applications/PyMOL.app/Contents/share/pymol/data/startup/* /path/to/pymol/2.3/lib/python3.7/site-packages/pymol/pymol_path/data/startup
# homebrewでインストールした場合はこっち
cp -rp /Applications/PyMOL.app/Contents/share/pymol/data/startup/* /usr/local/Cellar/pymol/2.3.0/libexec/lib/python3.7/site-packages/pymol/pymol_path/data/startup/
```

APBSやPDB2PQRのプラグインへのPATHは各自設定してください。
