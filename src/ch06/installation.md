## PyMOLプラグインのインストール方法
### プラグインのダウンロード
例えば私が管理しているもので、 https://github.com/BILAB/psico があります。これは大元のpsicoからクローンしてきたものです（大元は最近メンテナンスされてるんかな？）。これを、例えばホームディレクトリ以下の`apps`ディレクトリに入れることを考えてみましょう。

    cd ~/apps
    git clone https://github.com/BILAB/psico.git

とすると、このpsicoディレクトリをコピーしてくることができます。中身のプラグインはすべてpython言語で書かれています。オープンソース版でPyMOLをインストールした場合には、この文法はインストールに使用したpythonのバージョンに依存します。

### 使用のための初期設定
このプラグインを使える状態にするには、先程のpsicoディレクトリにPyMOL側からPATHを通し、さらに初期化コマンドを入れて上げる必要があります。これは、pymolを開いて以下のコマンドを入力してあげると可能です。

    sys.path.append(os.path.expanduser('~/apps'))
    import psico.fullinit

入力する場所はここ（下の `PyMOL>`でも良い）

<img src="./image/inst1.png" width="100%" alt="プラグイン使用のための初期設定" title="プラグイン使用のための初期設定">

1行目はPATHの追加コマンドです。先程、psicoディレクトリを`~/apps`にインストールしたので、上の例では`(os.path.expanduser('~/apps'))`となっていますが、`~/apps`以外のディレクトリに置いた場合は適宜このPATHを変更してください。2行目は、psicoモジュールの初期化コマンドです。Pythonの`import`コマンドでpsicoを使えるようにします。

しかし、これを毎回PyMOLを立ち上げるたびに入れるのは面倒です。そこで、**PyMOLを開いた時に最初に読み込まれる設定ファイル、`~/.pymolrc`に上の設定を書いておきましょう**。（参考：[3.1 File](../ch03/file.md#edit-pymolrc)）そうすると、PyMOL起動時に自動で上のプラグインが使えるようになっているはずです。
