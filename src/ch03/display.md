## Display
<img src="./image/display/seqmenu.png" width="30%">

### <input type="checkbox"> Sequence

Viewer上に表示されている生体分子オブジェクトの配列を表示します。デフォルトでは`OFF`になっています。

<img src="./image/display/seq1.png" width="50%" height="50%">

配列情報はViewer上部に表示されます。複数オブジェクトが存在する場合でも、まとめて表示することが可能です。また、この機能のON/OFFは画面右下の`S`ボタンを押すことでも可能です。コマンドは`set seq_view, 0/1`です（`0`でOFF, `1`でON）。

### Sequence Mode

次に示す5つの選択メニューは配列情報自体の表示の変更に関わる設定です。いずれか1つのみ同時に設定できます。

#### <input type="checkbox" checked="checked"> Residue Codes
<img src="./image/display/seqdisp_1.png">

タンパク質アミノ酸を**1文字表記**で表示します。核酸の場合は`DG`, `DA`といった表記になります。デフォルトではこの設定がONになっています。コマンドは`set seq_view_format, 0`です。

#### <input type="checkbox"> Residue Names
<img src="./image/display/seqdisp_2.png">

タンパク質アミノ酸を**3文字表記**で表示します。核酸の場合は`DG`, `DA`のままで特に変化しません。コマンドは`set seq_view_format, 1`です。

#### <input type="checkbox"> Chain Identifiers
<img src="./image/display/seqdisp_3.png">

Chain識別子（A鎖、B鎖……）で表示します。コマンドは`set seq_view_format, 3`です。

#### <input type="checkbox"> Atom Names
<img src="./image/display/seqdisp_4.png">

各アミノ酸残基または核酸塩基をさらに細分化し、原子名単位で表示することができます。特に、ある特定の場所の原子名を持つ原子だけを選択したいというときに、**Selecting**（マウスクリック時の選択単位）を**Atoms**に変更することと組み合わせることで簡単に選択するできるので重宝します。コマンドは`set seq_view_format, 2`です。

#### <input type="checkbox"> States
<img src="./image/display/seqdisp_5.png">

State番号を表示します。上の例では`1NMR`オブジェクトはNMRで構造解析されたデータであり、20 states存在するオブジェクトです。`2iteA`と`1bnaA`はともに結晶構造解析のデータであり、通常1 Stateのみになっています。コマンドは`set seq_view_format, 4`です。

<hr>

次に示す4つの選択メニューは、配列表示欄の表示方法に関わる設定です。いずれか1つのみ同時に設定できます。例として、上記の**Residue Codes**表示をONにした場合の設定を掲載しています。

#### <input type="checkbox" checked="checked"> All Residue Numbers
<img src="./image/display/seqdisp_6.png">

全てのオブジェクトについての配列番号を表示します。コマンドは`set seq_view_label_mode, 2`です。

#### <input type="checkbox"> Top Sequence Only
<img src="./image/display/seqdisp_7.png">

配列番号の表示を一番上のオブジェクトのもののみに限定します。同じオブジェクトを複数ロードしている場合には便利ですが、そうでない場合にしようすると、残基番号の位置を誤ってしまうことになるので、利用しないことが推奨されます。コマンドは`set seq_view_label_mode, 1`です。

#### <input type="checkbox"> Object Names Only
<img src="./image/display/seqdisp_8.png">

配列番号をすべて隠し、オブジェクト名だけを左端に表示します。コマンドは`set seq_view_label_mode, 0`です。

#### <input type="checkbox"> No Labels
<img src="./image/display/seqdisp_9.png">

配列番号、オブジェクト名いずれも非表示にし、配列情報のみを表示します。
コマンドは`set seq_view_label_mode, 3`です。

<hr>

以下の3つのメニューは、配列情報中に存在するミッシング残基についてのギャップマーク`-`の表示・非表示を設定します。いずれか1つのみ同時に設定できます。表示しているオブジェクト中にミッシング残基が存在しない場合はどれを選んでも表示に影響はありません。この機能はver. 2.3.0で実装されました。

ここでは例としてミッシング残基が存在するPDB: 2xwu、pdbフォーマットを表示して紹介します。Chain Bの153-155残基がミッシングになっています。

#### <input type="checkbox"> No Gaps
<img src="./image/display/seqdisp_10.png">

ギャップマークを非表示にします。
コマンドは`set seq_view_gap_mode, 0`です。

#### <input type="checkbox" checked="checked"> All Gaps
<img src="./image/display/seqdisp_11.png">

ギャップマークをすべて表示します。コマンドは`set seq_view_gap_mode, 1`です。

#### <input type="checkbox"> Single Gap
<img src="./image/display/seqdisp_12.png">

連続したミッシング残基がある場合、その箇所に付きギャップマークを1つだけ表示します。コマンドは`set seq_view_gap_mode, 2`です。


### <input type="checkbox" checked="checked"> Internal GUI

### <input type="checkbox" checked="checked"> Internal Prompt

### Internal Feedback

### Overlay

<hr>

### Stereo

### Stereo Mode


### Zoom

### Clip

<hr>

### Background

### Color Space

### Quality

### Grid

<hr>

### <input type="checkbox"> Orthoscopic View

### <input type="checkbox" checked="checked"> Show Valences

### <input type="checkbox" checked="checked"> Smooth Lines

### <input type="checkbox" checked="checked"> Depth Cue (Fogging)

### <input type="checkbox" checked="checked"> Two Sided Lighting

### <input type="checkbox" checked="checked"> Specular Reflections

### <input type="checkbox" checked="checked"> Animation

### <input type="checkbox"> Roving Detail

<hr>

### External GUI