## 大腸菌由来アルカリホスファターゼのグラフィック表示

PyMOLを起動した後、画面左上にある`File`メニューから`Open...`を選び、先程デスクトップに移動させた`1alk.pdb`ファイルを選択します。すると、PyMOL画面の中にPDB ID: 1ALKの**大腸菌由来アルカリホスファターゼ**が表示されます。

<img src="./image/graphic1.png" width="100%" alt="PDB ID: 1ALKの大腸菌由来アルカリホスファターゼの図" title="PDB ID: 1ALKの大腸菌由来アルカリホスファターゼの図">

このチュートリアルではPyMOLのGUI機能を駆使して、アルカリホスファターゼの2次構造の配置（フォールド）や、リン酸付近の原子・残基の配置などを調べてみます。必要に応じて[第2章 PyMOLのGUIの使い方](../ch02/index.md)の[マウス操作](../ch02/mouse.md) とMouse Mode: [3-Button Viewing](../ch02/buttontable.md) を読みます。マウスで分子をドラッグすることで、分子の回転、平行移動、拡大縮小などが行うことができます。

PyMOLでは、まずマウス(または`select`コマンド)で原子やアミノ酸を**選択(select)** し、続いて選択した範囲に対する **操作(Action)** を指定します。選択された部分はピンクのマーカーで強調されるので、今何が「選択」されているかに常に注意します。また、**操作のやり直しはできない**ので、操作を間違えた場合にはその都度それを上書きする形で表示をやり直します。

<img src="./image/graphic2.png" width="100%" alt="1ALKのAチェインを選択したときの図。ピンクのマーカーで覆われているのがAチェイン。配列の上でもハイライトされていることに留意しよう。" title="1ALKのAチェインを選択したときの図。ピンクのマーカーで覆われているのがAチェイン。配列の上でもハイライトされていることに留意しよう。">

{{#include ./colorbychain.md}}
{{#include ./colorbyss.md}}
{{#include ./saveimage.md}}
{{#include ./savesessionfile.md}}
{{#include ./focusbindingsite.md}}
