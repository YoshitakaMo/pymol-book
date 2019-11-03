## DSSPプラグイン
上の設定をしておくと、例えばPyMOLで`dssp`というコマンドが使えるようになっているはずです。PyMOLの入力欄でもTabキーを使った補完機能は効いてくれるので、文字を打ちながらとりあえず困ったらTab連打しておくと幸せになれます。

このコマンドは開いているタンパク質に対して二次構造アサインメントプログラムのDSSPをかけてくれて、その計算結果をもとに表示を切り替えてくれます。ただし利用するためにはあらかじめ`mkdssp`コマンドがインストールされ、かつ動作することが条件です。一応、[Homebrewがインストール](https://qiita.com/pypypyo14/items/4bf3b8bd511b6e93c9f9)されていれば `brew install dssp` でインストールできそうなのですが……、これはバグってしまっているので使えません（正確には現在のboostの仕様に追いついていないものがインストールされ、仕様の違いでsegmentation faultになります）。
ということで、ターミナルから以下のコマンドを使って最新版のDSSPをインストールしましょう。

    # https://github.com/brewsci/homebrew-bioに登録されました(2018年10月28日)
    brew install brewsci/bio/xssp

このxsspの中に`mkdssp`コマンドが入っています。`/usr/local/bin/mkdssp -i 5lxe.pdb`（これはシンボリックリンクで本体は`/usr/local/Cellar/xssp/3.0.5/bin/mkdssp`）と打つと、DSSPの結果が表示されるはずです。

ちなみにCentOS 7の方は、`yum -y install dssp`とすれば簡単に`mkdssp`コマンドがインストールできます。バージョンがちょっと古いですけど問題ないはずです。

そしてPyMOLの画面に戻り、dsspコマンドを打てば、以下のような表示になります。
![スクリーンショット 2018-10-27 1.52.58.png](https://qiita-image-store.s3.amazonaws.com/0/224327/c8542bb6-2547-1fee-e01c-bc8c0ce54f5f.png)

DSSPの二次構造アサインの結果に対応して二次構造表示が変化し、色分けされたものになります。DSSPによる二次構造アサイン法とPyMOLネイティヴで入っているアサイン法は微妙に異なるため、細かいところをよーくみてみると、場合によっては二次構造アサインが変化していることに気づくかもしれません。まあ、DSSPによるアサイン法は今もなおPDBや構造インフォマティクスで採用されているものですので、こちらを使って表示させたほうが気持ちが良いと個人的に思います。

また、MDシミュレーションの結果をPyMOLで表示している時に、初期構造からシミュレーションの途中でタンパク質の二次構造が変化した場合でも、そのフレームで`dssp`と打てば、そのフレームに合わせた二次構造表示に変化してくれるところが便利です。

これらのコマンドの説明は`help dssp`と打てば表示されます。オプションが色々ついているPyMOLコマンドは多いので、確認しておきましょう。例えばこのdsspコマンドの場合は

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

##DSSPプラグインの設定を変更してみる
**DSSPのカラーリングが気に入らない、他の色で塗り分けたい！**という場合は、せっかくなのでプラグインを書き換えてみましょう（ちなみに上の設定のカラーリングは有名な[Solarized Dark](https://ethanschoonover.com/solarized/)のテーマを模しています）。

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
