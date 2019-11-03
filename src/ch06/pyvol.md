## PyVOL GUIプラグイン
2019年10月24日、BioRxivにPyMOLプラグインの**PyVOL**というのを開発したよという論文が投稿されました。
https://www.biorxiv.org/content/10.1101/816702v1

![EIBL6PTUwAE3ZqY.jpeg](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/224327/35543318-8717-98e0-f741-91f9019f05b6.jpeg)


見た感じ、タンパク質の中の空隙、つまり基質や薬剤などが入りそうな空間を検出してくれるプラグインのようです。ちょっと興味があったのでインストールすることにしてみました。

## 環境
-   macOS 10.14.6 (Mojave)。**10.15 (Catalina)では動作しません。**
-   [ターミナルからHomebrewをインストール](http://brew.sh/index_ja.html)してある
-   PyMOL 2.3.0以降をインストールしてある（2以降なら大丈夫？）
-   [macOS/CentOS 7/Ubuntu 18.04へのオープンソース版PyMOLのインストール方法](https://qiita.com/Ag_smith/items/58e917710c4eddab46ee)などを参考にしてオープンソース版のPyMOLをインストールしてある

## PyVOLのインストール
以下のGitHubにてこのプラグインをメンテナンスしてくれているようです。
https://github.com/schlessingerlab/pyvol/

ここの https://github.com/schlessingerlab/pyvol/blob/master/pyvolgui.zip にプラグインのZIPファイルが置いてあるのでDownloadボタンを押すと、`pyvolgui.zip`というファイルがダウンロードされます。これを展開すると、中には`pyvolgui`と`pyvol_plugin`というディレクトリの2つがあるのですが、たぶん`pyvolgui`だけで動作してくれるように思えます。よって、このディレクトリをPyMOLのプラグインディレクトリにコピーしてあげます。
お使いのmacOSにて、インストーラー版でPyMOLをインストールした場合（Licenseを求められる方）は`/Applications/PyMOL.app/Contents/share/pymol/data/startup/`に、Homebrewを使ってOpen-source版をインストールした場合（Licenseがいらない方）には`/usr/local/Cellar/pymol/2.3.0/libexec/lib/python3.7/site-packages/pmg_tk/startup`に、それぞれコピーしてあげます。Linuxの場合はpymolがインストールされているディレクトリを見つけて`python3.x/site-packages/pmg_tk/startup`あたりを探ればたどり着けるんじゃないですかね（適当）。

コピーしたら、PyMOLを起動している場合はいったん閉じて改めて起動します。すると、PluginメニューのところにPyVOLが増えているはずです。

<img width="176" alt="スクリーンショット 2019-11-03 1.56.22.png" src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/224327/29c45d52-1c6a-37ec-80c3-1d839d5ee72a.png">

このPyVOLを選択してみて、メニューが開けたら成功です。
<img width="722" alt="スクリーンショット 2019-11-03 1.56.11.png" src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/224327/bf15114e-0b25-0708-32f2-2aeaf12677f9.png">
## 追加のプログラムのインストール
### インストーラー版
PyVOLを動かすためにはいくつかのライブラリやプログラムを追加でインストールさせてあげる必要があります。上のPyVOLメニューで**Install/Update**のタブを開き、ここの左に表示されている`Install PyVOL`ボタンを押します。

<img width="722" alt="スクリーンショット 2019-11-01 13.24.42.png" src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/224327/672085d2-c267-bb57-1a99-b015786615ba.png">

1分くらい待っていると追加プログラムがすべてインストールされ、使用可能な状態になります。

<img width="722" alt="スクリーンショット 2019-11-01 13.25.50.png" src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/224327/2c530906-f12a-bc66-862c-d5c2b8ef8016.png">

ちなみに**macOS catalinaでは動作しませんでした**（Mojaveまでは動作します）。

```
subprocess.py", line 1522, in _execute_child
    raise child_exception_type(errno_num, err_msg, err_filename)
OSError: [Errno 86] Bad CPU type in executable: 'msms'
```

これはcatalinaになってから32bitのプログラムを切り捨てたことに起因しています。しかも残念なことに`msmsはソースコードが公開されていないみたいなので64bit向けにコンパイルさせてあげられない気がします。合掌。

### Open-Source版
Open-source版の場合は、もしかしたら追加のプログラムを手動でインストールする必要があるかもしれません。もしかしたら上と同じやり方で動作させることができるかもしれないので、先にそっちを試してください（雑）。Homebrewでインストールしていた場合、`msms exe`を除く他のPythonライブラリは以下の1コマンドでインストールできます。

```bash
pip3.7 install bio-pyvol
```

<img width="722" alt="スクリーンショット 2019-11-01 13.30.37.png" src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/224327/919c1199-45e7-7617-8899-63d3528edcfb.png">

`msms exe`についてですが、これは http://mgltools.scripps.edu/downloads のところからMSMS 2.6.1をダウンロードして解凍すると、中に`msms.MacOSX.2.6.1`が存在しますので、それを利用します(macOS Mojave以前の場合)。これを、`/usr/local/bin/msms`として利用できるようにコピーしてあげます。

```bash
cp ~/Downloads/msms_MacOSX_2.6.1/msms_MacOSX_2.6.1 /usr/local/bin/msms
```

この後、Open-source PyMOLを一度再起動してこのInstall/Updateタブを見てみたときに、msms exeのところが`/usr/local/bin/msms`と表示されていればOKです（本当は`/usr/local/bin`以下はHomebrewでインストールしたもののみにしておきたいところですが……）。

以上でPyVOLが利用可能になります。

## 簡単な使い方
タンパク質を選択しておいてからPyVOLプラグインのParametersタブのRunボタンを押すだけです。Load Pocketのタブでは描画方法を色々変えることもできます。（詳細はいつか書きます）

<img width="721" alt="スクリーンショット 2019-11-03 1.55.56.png" src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/224327/22f973c0-fe45-e659-09cc-82277185b400.png">
