### 操作モード
PyMOLには3ボタンモード、2ボタンモード、1ボタンモードが用意されています。これらのモードは下記のようにさらに細かいモードに分かれます。

- 3ボタンモード
    - **3 Button Viewing Mode**（初期設定）
    - 3 Button Editing Mode
    - 3 Button Motions Mode
    - 3 Button Lights Mode
    - 3 Button All Mode
- 2ボタンモード
    - 2 Button Viewing Mode
    - 2 Button Editing Mode
- 1ボタンモード
    - 1 Button Viewing Mode

3ボタンモードはホイールボタン付きマウスを利用している場合に最も効果を発揮します。2ボタンモードはタッチパッドのみの環境で、Macbookなどを含むノートパソコンではこの設定にしておくことを推奨します。ここで、それぞれのボタンモードの中にViewing, Editingモードなどが存在していることも覚えておきましょう。これらのモード間ではクリック時の操作が異なります。基本的に、表示した分子を観察する場合はViewingモードを、分子の座標に変更を加える場合にはEditingモードを利用します。

各モードがどのようなマウス操作に対応しているかを理解する前に、まずはPyMOL画面の右下のこの部分に着目します。

<img src="./image/mouse/1.png">

この赤い四角の部分の一番上には**Mouse Mode 3-Button Viewing**と書かれています。これは**3 Button Viewing Mode**と同じ意味です。ここで、赤い四角の範囲のどこかをクリックすると

<img src="./image/mouse/2.png">

Mouse Modeが**3-Button Editing**という表示になりました。これは**3 Button Editing Mode**に切り替わったことを表しています。また、青い四角の部分も、**Picking Atoms (and Joints)** に変化しました。最初のうちは、この**Viewing Mode**と**Editing Mode**の2つについて理解しておけば十分だと思います。Lights ModeとAll Modeについては慣れてきたら試してみましょう。2つのモードは上記の赤い四角の部分を押すことで入れ替えることができます。

この画面についてもう少し詳しく見ていきます。ここにはクリックするマウスボタン(L, M, R, Wheel)と補助キーとの組み合わせ(Shift, Ctrl, Ctrl+Shift...)を組み合わせることで、様々なマウス操作が行えることが英語で書かれています(macOSの場合、CtrlはCommand ⌘ キーです)。最上段は対応するキーを押しながらマウスを動かす操作を表しています。例えば、3-Button Viewing Modeにおいては左クリックを押しながらマウスを動かすことで回転操作(Rota)、ミドルクリック（ホイール）を押しながらマウスを動かすことで並進操作(Move)が行えます。ここの表記は簡単なものですが、もし忘れてしまってもここに着目すれば、操作を思い出すことができるでしょう。

