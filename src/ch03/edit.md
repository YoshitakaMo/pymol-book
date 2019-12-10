# Edit
主にUndo, Redo機能を取り扱います。注意していただきたいのは、この機能は主に[3.3 Build](./build.md)で**原子の座標に変更を加えたもの**に対してのみ適用される仕様であり、**分子のカラーリングや視点の変更、表示形式の変更**には対応していません。
## Undo [Ctrl-Z]
Buildメニューから行った原子の座標変更や原子＆結合の生成・消去についての操作を取り消すことができます。ショートカットキーはCtrl（Macの方はCommandでも可）-Zの同時押しです。下記の"Max Atom Count for Undo/Redo"で設定した値までは何度も操作を取り消すことができます。
## Redo [Ctrl-Y]
Undoで取り消した操作を再び呼び戻すことができます。ショートカットキーはCtrl（Macの方はCommandでも可）-Yの同時押しです。
## Max Atom Count for Undo/Redo
Undo/Redoで戻せる操作の数を設定できます。デフォルトでは1000となっています。設定値は他に10000, 100000のほか、Unlimited（制限なし）やDisable Undo(実質0)を選ぶことができます。設定値を超えた分の操作は消去され、呼び出すことができなくなります。

一見無制限が良いように思えますが、PyMOLを動かしているマシンのメモリをオーバーして保存しようとするとPyMOLがクラッシュしてしまいます。現実的には1000で問題ないと思います。

コマンドは`set suspend_undo_atom_count, 1000`です。`1000`の部分は任意のint値を入れることができます。

## Auto-Copy Images
PyMOL 1.8には遅くとも実装されていたようですが、Incentive版のPyMOL 2.1から全プラットフォームで実装されたようです。マニュアルによれば

> auto_copy_images (boolean, default: on) controls whether or not PyMOL automatically copies images from the OpenGL viewport into the system’s clipboard.

とあるのですが、使い方がよくわかりませんでした。