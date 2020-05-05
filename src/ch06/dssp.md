## DSSPプラグイン
[プラグインのインストール方法](installation.md)の手順に従ってpsicoのインストールがうまく行っていれば、改めて起動した後にPyMOLのコマンドラインで`dssp`というコマンドが使えるようになっているはずです。このコマンドは開いているタンパク質に対して二次構造アサインメントプログラムの**DSSP**をかけてくれて、その計算結果をもとに表示を切り替えてくれます。ただし利用するためにはあらかじめ`mkdssp`コマンドがインストールされ、かつ動作することが条件です。現在、最新版のDSSPは以下のHomebrewコマンドからインストールすることができます。

    # https://github.com/brewsci/homebrew-bioに登録されました(2018年10月28日)
    brew install brewsci/bio/xssp

このxsspパッケージの中に`mkdssp`コマンドが入っています。ちなみにCentOS 7の方は、`yum -y install dssp`とすれば簡単に`mkdssp`コマンドがインストールできます。バージョンがちょっと古いですけど問題なく動作するはずです。

そしてPyMOLの画面に戻り、dsspコマンドを打てば、以下のような表示になります。
<img src="./image/dssp1.png" width="100%" alt="DSSPの使用例" title="DSSPの使用例">

DSSPプログラムによって判定された二次構造アサインの結果に対応して、PyMOL上の二次構造表示が変化し、色分けされたものになります。DSSPによる二次構造アサイン法とPyMOLネイティヴで入っているアサイン法は微妙に異なるため、細かいところをよーくみてみると、ものによっては二次構造アサインが変化している場合があります。DSSPによる二次構造判定法は現在もなおProtein Data Bankで公式に採用されていますので、こちらを使って表示させたほうが良いと個人的に思います。

また、MDシミュレーションの結果をPyMOLで表示している方の場合、初期構造からシミュレーションの途中でタンパク質の二次構造が変化した場合でも、そのフレームで`dssp`と打てば、そのフレームに合わせた二次構造表示に変化してくれるところが便利です。

これらのコマンドの説明は`PyMOL >`の欄に`help dssp`と打てば表示されます。オプションが色々ついているPyMOLコマンドは多いので、確認しておきましょう。例えばこのdsspコマンドの場合は

```
DESCRIPTION

    Secondary structure assignment with DSSP.
    http://swift.cmbi.ru.nl/gv/dssp/

ARGUMENTS

    selection = string: atom selection {default: all}

    exe = string: name of dssp executable {default: mkdssp}

    raw = string: atom property to load raw dssp class into {default: 'custom'}

    color = string: color in response to secondary structure {default: 1/ON}

EXAMPLE

    dssp all, /usr/local/bin/mkdssp, raw=text_type
    color gray
    color red, text_type H
    color orange, text_type G
    color yellow, text_type E
    color wheat, text_type B
    color forest, text_type T
    color green, text_type S
    set cartoon_discrete_colors, 1

SEE ALSO

    dss, stride
```
と表示されます。colorがデフォルトでONになっています。二次構造についての色分けを自動でしてほしくない場合には、`dssp color=0`と打てば、さっきのような色分けをしないで二次構造表示だけ変更してくれます（←地味によく使う）。

### DSSPプラグインの設定を変更してみる

**DSSPのカラーリングが気に入らない、他の色で塗り分けたい！** という場合は、せっかくなのでプラグインを書き換えてみましょう（ちなみに上の設定のカラーリングは有名な[Solarized Dark](https://ethanschoonover.com/solarized/)のテーマを模しています）。

psidoディレクトリの中にある`editing.py`の258行目あたりからがdsspの関数定義になっています。

```python
def dssp(selection='(all)', exe='', raw='custom', state=-1, quiet=1, color=1):
    '''
DESCRIPTION

    Secondary structure assignment with DSSP.
    http://swift.cmbi.ru.nl/gv/dssp/
```
ここで`color=1`となっていますが、`dssp`コマンドを打ってみた時に、デフォルトでカラーリングを変えてほしくない場合はここを`color=0`としておくとよいでしょう。
この下をさらに見てみると、色分け設定をしている部分が見られます。

```python
    # if color=1
    if color == 1:
        cmd.color('gray', selection)
        cmd.set_color('H_color', [220, 50, 47])
        cmd.color('H_color', raw+' H')
        cmd.set_color('G_color', [211, 54, 130])
        cmd.color('G_color', raw+' G')
        cmd.set_color('I_color', [255, 170, 170])
        cmd.color('I_color', raw+' I')
        cmd.set_color('E_color', [196, 177, 3])
        cmd.color('E_color', raw+' E')
        cmd.set_color('B_color', [42, 161, 152])
        cmd.color('B_color', raw+' B')
        cmd.set_color('T_color', [38, 139, 210])
        cmd.color('T_color', raw+' T')
        cmd.set_color('G_color', [211, 54, 130])
        cmd.color('G_color', raw+' G')
        cmd.set_color('S_color', [133, 153, 0])
        cmd.color('S_color', raw+' S')
        cmd.set('cartoon_discrete_colors', '1')
        cmd.util.cnc(selection)
```
`cmd.set_color`はPyMOLに最初から実装されているコマンド`set_color`そのものであり、ここでは`H_color`という名前でRGB色使いの`(220, 50, 47)`を定義しています。詳しい説明は[PyMOLWiki](https://pymolwiki.org/index.php/Set_Color)を読んでね。DSSPの定義で、αヘリックスはH、βシートはEという一文字表記になっているので、ここでの`cmd.color('H_color', raw+' H')`部分は、「DSSPでHと判定された残基をH_colorで色付けする」という意味になっています。つまり、ここの色の値を変えれば、DSSPの二次構造判定に対して思い通りの色分けを行うことができます。
