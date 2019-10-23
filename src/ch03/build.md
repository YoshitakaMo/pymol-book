# Build
Buildのメニューからは、PyMOLに内蔵されている化合物のフラグメントやアミノ酸残基のデータを利用して任意の化合物またはポリペプチド鎖の構造モデルを生成することができるようになっています。主な利用方法としては、既存のタンパク質構造をロードしたあとに、その末端に長い人工ペプチドを取り付けたモデル構造を作成することや、0から任意のポリペプチド鎖を作成して計算科学の研究の初期構造に利用するという使い方があります。

Buildメニューは以下の通りです。

<img src="./image/ch3_build1.png" >

## Fragment
ここでは

## Residue
<img src="./image/ch3_build_residue.png" height="60%" style="float:right; padding-left:15px;">このメニューは20種類の正準アミノ酸の残基のデータの他に、N末端キャッピング用のAcetylとC末端キャッピング用のN-Methylが存在しています。キャッピングとはMDシミュレーション上で使われる人工的な修飾で、末端部分の電荷をニュートラルにするために使われます。それ以外の方はあまり利用することがないでしょう。

AltキーとA~Zの文字を組み合わせて入力することでマウスを使わずに簡単にポリペプチド鎖を作成していくことができます。また、プログラミングしたいときに便利な点として、`cmd._alt(chr(XX))`を入力することでそのキーを入力した扱いにすることができます。XXにはASCII CODEが入ります（A: 65, B: 66, C: 67, ... 88: X, Y: 89, Z: 90）。

|表示|残基名|cmd|ショートカットキー|
|:--------|:--------:|:--------:|:--------|
|Acetyl|アセチル基|`cmd._alt(chr(66))`|Alt-B|
|Alanine|アラニン|`cmd._alt(chr(65))`|Alt-A|
|Amine|アミン|-||
|Aspartate|アスパラギン酸|`cmd._alt(chr(68))`|Alt-D|
|Asparagine|アスパラギン|`cmd._alt(chr(78))`|Alt-N|
|Arginine|アルギニン|`cmd._alt(chr(82))`|Alt-R|
|Cysteine|システイン|`cmd._alt(chr(67))`|Alt-C|
|Glutamate|グルタミン酸|`cmd._alt(chr(69))`|Alt-E|
|Glutamine|グルタミン|`cmd._alt(chr(81))`|Alt-Q|
|Glycine|グリシン|`cmd._alt(chr(71))`|Alt-G|
|Histidine|ヒスチジン|`cmd._alt(chr(72))`|Alt-H|
|Isoleucine|イソロイシン|`cmd._alt(chr(73))`|Alt-I|
|Leucine|ロイシン|`cmd._alt(chr(76))`|Alt-L|
|Lysine|リジン|`cmd._alt(chr(75))`|Alt-K|
|Methionine|メチオニン|`cmd._alt(chr(77))`|Alt-M|
|N-Methyl|N-メチル|`cmd._alt(chr(90))`|Alt-Z|
|Phenylalanine|フェニルアラニン|`cmd._alt(chr(70))`|Alt-F|
|Proline|プロリン|`cmd._alt(chr(80))`|Alt-P|
|Serine|セリン|`cmd._alt(chr(83))`|Alt-S|
|Threonine|スレオニン|`cmd._alt(chr(84))`|Alt-T|
|Tryptophan|トリプトファン|`cmd._alt(chr(87))`|Alt-W|
|Tyrosine|チロシン|`cmd._alt(chr(89))`|Alt-Y|
|Valine|バリン|`cmd._alt(chr(86))`|Alt-V|