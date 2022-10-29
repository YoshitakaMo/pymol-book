## PyMOL上でのpythonスクリプトの実行：基本編

PyMOLの大きな強みの1つとして、PyMOLのコマンドラインからpythonスクリプトを実行させることができることが挙げられます。ここではいくつかの例を挙げながら、PyMOL上でのpythonスクリプト実行機能を紹介してみます。ただし、python3についての基本的な知識があることを前提とします。

### Pythonの設定を確認する
まずは現在PyMOLが動作しているPython環境を確認するために、バージョン情報とPATHをPyMOLのコマンド入力欄から確認してみましょう。コマンドは通常のpythonと同じように

``` python
# pythonのバージョンを表示
import sys
print(sys.version)
# pythonのモジュール検索PATHを確認
print(sys.path)
```
となります。返り値は、私の環境（macOSのHomebrewでインストールした場合）では

``` shell
# PyMOL>print(sys.version)
3.10.8 (main, Oct 13 2022, 09:48:40) [Clang 14.0.0 (clang-1400.0.29.102)]
# PyMOL>print(sys.path)
['', '/usr/local/Cellar/python@3.10/3.10.8/Frameworks/Python.framework/Versions/3.10/lib/python310.zip', '/usr/local/Cellar/python@3.10/3.10.8/Frameworks/Python.framework/Versions/3.10/lib/python3.10', '/usr/local/Cellar/python@3.10/3.10.8/Frameworks/Python.framework/Versions/3.10/lib/python3.10/lib-dynload', '/Users/YoshitakaM/Library/Python/3.10/lib/python/site-packages', '/usr/local/lib/python3.10/site-packages', '/usr/local/lib/python3.10/site-packages/coot', '/usr/local/lib/python3.10/site-packages/coot/rcrane', '/usr/local/Cellar/pybind11/2.10.0/libexec/lib/python3.10/site-packages', '/usr/local/Cellar/pymol/2.5.0/libexec/lib/python3.10/site-packages', '/usr/local/Cellar/sip/6.6.2_1/libexec/lib/python3.10/site-packages', '/usr/local/Cellar/modeller/10.3_1/modlib', '/usr/local/opt/python-tk@3.10/libexec', '/Users/YoshitakaM/apps/pymol-psico']
```

のようになりました。`print(sys.path)`で表示されたPATHからはモジュールをimportすることができます。

### PythonスクリプトをPyMOL上で実行する
PyMOLコマンドラインからは`python`と`python end`という入力の間に任意のpythonスクリプトを挟むことで、PyMOL上で擬似インタラクティブにコマンドを実行することができます。ただし、一度`python`を入力した後は`python end`を入力するまではフィードバックが得られないことに注意しましょう。

例えば、以下のように変数`x`に`10`という値を入れてそれをprintさせるだけの簡単なスクリプトをコマンドラインに入力してみます。

```python
python
x = 10
print(x)
python end
```

PyMOLのアウトプットとしては

```shell
PyMOL>python
PyMOL>x = 10
    1:x = 10
PyMOL>print(x)
    2:print(x)
PyMOL>python end
PyMOL>python end
10
```

というように表示され、最後に`10`という結果がprintされたことがわかります。

この機能を使えば、Pythonを使い慣れた方であれば様々な応用可能性があることに気づくと思います。例えば、あるディレクトリの中で目的の構造ファイル群だけPyMOL上にロードしたいという例では、以下のようにPythonスクリプトを書くことができます。

```python
# globモジュールをインポートし、ワイルドカード*によって
# 拡張子がcifであるファイルを一括でPyMOL上にロードする
python
from glob import glob

for file in glob("*.cif"):
    cmd.load(file)
python end
```

### コマンドを外部ファイルに保存し、PyMOLからスクリプトを呼び出す
上で挙げた一括ロードのPythonスクリプトを繰り返し使いたいときは、別ファイルにスクリプトを保存しておいてそれを呼び出すような形にすれば、毎回入力しなくて済むようになります。この場合は、`python`と`python end`の間の部分だけを別のファイル（名前は`cifload.py`とします）に書いておきます。

```python:cifload.py
from glob import glob

for file in glob("*.cif"):
    cmd.load(file)
```

これをPyMOL上から呼び出すときには、コマンドラインから`run /path/to/cifload.py`として呼び出します（`/path/to/`の部分は`cifload.py`が存在するディレクトリパスに適宜置き換えてください）。

### 拡張コマンドを使えるように読み込む
発展的な内容ですが、上記の方法を使えばPyMOLWikiのScript Libraryなどで公開されている拡張コマンドを即座に使えるようにすることもできます。例として, タンパク質の色分けをアミノ酸の疎水性〜親水性に応じて行う`color_h`, `color_h2`コマンド（[https://pymolwiki.org/index.php/Color_h](https://pymolwiki.org/index.php/Color_h)）を使えるようにします。

上記ページのコードの`from pymol import cmd`から`cmd.extend('color_h2',color_h2)`の前に`python`を、最後に`python end`を入力することで、`color_h`, `color_h2`コマンドが使えるようになります。

<video width="100%" height="100%" controls autoplay loop>
<source src="./image/scripting1.mp4" type="video/mp4">
</video>

これによって`color_h`, `color_h2`の拡張コマンドが使えるようになりました。もちろん、外部ファイルに保存しておいて`run ~~`で呼び出すことも可能です。