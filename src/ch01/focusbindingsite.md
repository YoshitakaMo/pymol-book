### リガンド結合部位への注目

ここから、タンパク質内の**リン酸や金属が結合している部分**に注目してみます。まず、全体構造の中のどこに結合しているかを確認してみます。

- PyMOL内で[配列を表示](../ch02/dispseq.md)させます。
- 表示された配列のところで、Chain Aの`ZN`2つと`MG`,`PO4`をすべて**選択**します。
- 次に、[オブジェクトパネル](../ch02/objpanel.md)においてその選択範囲`(sele)`についてStickとSpheresで表示させてみます（→[分子構造の表示形式のON/OFF](../ch02/showandhide.md)）。

<img src="./image/focus1.png" width="100%" alt="" title="">

デフォルト設定では、sphere表示で表されるボールがかなり大きくなっているので、ここではいったん小さくしてみます。これは`PyMOL >`のところにコマンドを打つことで設定できます。

    set sphere_scale, 0.4

これで球が小さく表示されました。

<img src="./image/focus2.png" width="100%" alt="" title="">

ここで、表示をチェインA（A鎖）だけにし、Bチェインはhideで隠します（→[分子構造の表示形式のON/OFF](../ch02/showandhide.md)）。リン酸や金属は各チェインに1組ずつ結合していることがわかります。

<img src="./image/focus3.png" width="100%" alt="" title="">

チェインAのリン酸(`PO4`)が画面の中心にくるよう設定してみます。これはこの`PO4`を選択した上で右クリックを押してメニューを表示させ、`center`を選択することでできます。
参考：[マウス操作](../ch02/mouse.md)と[各モードにおける操作一覧]((../ch02/buttontable.md))

<img src="./image/focus4.png" width="100%" alt="" title="">

マウス操作で、画面を拡大して見やすくしておきます。

タンパク質のCartoon表示をオフにします（→[分子構造の表示形式のON/OFF](../ch02/showandhide.md)）。

チェインAのリン酸から4.6 Å以内にある水分子以外のアミノ酸残基を表示させます。チェインAのリン酸`PO4`だけが選択された状態で以下のコマンドを打ちます。

    select byres resn * within 4.6 of sele
    show sticks, sele

ここで、`byres`は「残基単位での選択」を意味する設定であり、とある残基が1原子でもリン酸から4.6 Åの距離以内に存在するのであれば、その残基をすべて選択するようにしています。その後、2行目のコマンドで選択した範囲を`sticks`で表示させます（オブジェクトパネルでも可能）

Zn，Mgは原子種ごとの色分け（→[色の設定](../ch02/color.md)）にします。

リン酸付近にどのようなアミノ酸種が分布しているかを確認するために、先程の選択範囲`(sele)`について、[ラベルの設定](../ch02/label.md)で`label` -> `residues`を選択します。

<img src="./image/focus5.png" width="100%" alt="" title="">

PyMOL画面を回転させて、どのアミノ酸がこのリガンド結合部位に存在しているかをすべてメモします。目視で行っても構いませんが、ここではPyMOLがPythonプログラミングで動いているということを利用して、以下のコマンドを入力して確認してみましょう。

コマンド入力欄に以下のコマンドを順次入れていきます（コピー＆ペースト可能）。

```python
# チェインAのリン酸を選択する(残基名がPO4でかつchain Aのものをselectする)
select resn PO4 and chain A
# 現在の選択範囲から4.6Å以内にある分子を、残基単位(byres)ですべて選択する
select byres resn * within 4.6 of sele

# ここで空の配列であるreslistを作成しておく（初期化）
reslist = []
# pymolのiterateコマンドを用いて、選択範囲(sele)に存在するCα炭素(name CA)について
# (residue_id, residue_name)のタプルをreslistに繰り返し加えていく
iterate sele and name CA, reslist.append((resi, resn))
# reslistを表示する
print(reslist)
```

ここまでうまく入力されていれば、最後に以下のように結果が表示されるはずです。

```
PyMOL> print(reslist)
[('51', 'ASP'), ('101', 'ASP'), ('102', 'SER'), ('153', 'ASP'), ('166', 'ARG'), ('327', 'ASP'), ('331', 'HIS'), ('369', 'ASP'), ('370', 'HIS'), ('412', 'HIS')]
```

これはpythonで言うところの、リスト型変数`reslist`の中にタプル型で（残基番号, 3文字残基名）の組が入っている形になっています。

これをよく生物学の表示で使われるようなMET-1, ASP-2のような表示に変換したい場合は、pythonのprint文を知識を使って例えば以下のようにpythonプログラムを書けばうまく出力することができます。ただし、PyMOLのコマンドラインでpythonプログラムを書く場合は`python`と`python end`というブロックの間に挟む必要があります。（参考： https://pymolwiki.org/index.php/Python ）

```python
python
# リスト内のタプルをi, jに代入するfor loop
for i, j in reslist:
    # print&format文法を使って"{residue_name}-{residue_id}"の順番で表示する
	print("{0}-{1}".format(j, i))

python end
```

すると、以下のように表示されます。

```
PyMOL>python end

ASP-51
ASP-101
SER-102
ASP-153
ARG-166
ASP-327
HIS-331
ASP-369
HIS-370
HIS-412
```

こうすれば目視でやるより書き漏らしがなくて済みますね。

終わったら、再び現在までの作業内容をセッションファイルに保存しておきます。ファイル名はたとえば`1alk_active_site.pse`などとしておくと分かりやすくて良いでしょう。

