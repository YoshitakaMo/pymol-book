## 描画関連

PyMOLの設定値で一番気になるのは、きれいな生体分子の画像を生成するにはどうすればよいかというところの部分でしょう。PyMOLは、デフォルトの設定値で十分にきれいな画像を生成することができますが、設定値を変更することでさらに美しい画像を生成することができます。この章では、PyMOLの設定値を変更することで、より美しい画像を生成する方法を説明します。

## 概論

PyMOLの設定値を変更する方法は、大きく分けて2つあります。一つは、GUIを使って設定値を変更する方法、もう一つは、コマンドラインを使って設定値を変更する方法です。前者は、PyMOL GUIの[setting]メニューから設定値を変更する方法です。

<img src="./image/setting.png" alt="setting" width="80%">

こちらの[Edit All]をクリックすると、全設定値の表示とその値の変更が可能です。

<img src="./image/values.png" alt="values" width="80%">

これには描画関連だけでなく様々な設定値が表示されます。設定値を変更すると、その変更がすぐに反映されます。

CUIでは、`set`コマンドを使って設定値を変更することができます。例えば、`set ray_trace_mode, 3`とすることで、ray_trace_modeの値を3に変更することができます。

```bash
set ray_trace_mode, 3
```

この値は、macOSやLinuxでは各自のホームディレクトリの`~/.pymolrc`に保存することで、この設定値がデフォルトになるように指定することができます。このファイルは、[File]→[Edit pymolrc]をクリックすることで編集することも可能です。

<img src="./image/pymolrc.png" alt="pymolrc" width="80%">

PyMOL起動後にこのファイルに書かれている値で上書きすることで、設定値を変更することを実現しています。

設定値は、CUIにおいて`get`コマンドを使って確認することができます。

```bash
get sphere_scale
```

結果

```bash
PyMOL>get sphere_scale,
 get: sphere_scale = 1.00000
```
