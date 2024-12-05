# 分子構造のロード

`load`コマンドは様々なファイルフォーマットを読み込むことができます。読み込もうとするファイルの拡張子に対応して自動的に読み込み形式を判定してくれます。例えばPDBファイルを正しく読み込む場合は`.pdb`である必要があり、MOLファイルであれば`.mol`、Macromodelファイルは`.mmod`、XPLOR mapファイルは`.xplor`、CCP4 mapファイルは`.ccp4`、Raster3Dインプットファイル(Molscript output)は`.r3d`、PyMOLセッションファイルは`.pse`、pickleになったChemPyモデル`.pkl`などは直接読み込むことができます。

以下の入力拡張子は右側のファイルタイプとして認識されます。

|入力拡張子|認識されるファイルタイプ|
|--:|--:|
|`ent`, `p5m`|`pdb`|
|`mmd`, `out`, `dat`|`mmod`|
|`map`, `mrc`|`ccp4`|
|`cc2`|`cc1`|
|`sd`|`sdf`|
|`rst7`|`rst`|
|`o`, `dsn6`, `omap`|`brix`|
|`ph4`|`moe`|
|`spi`|`spider`|
|`pym`, `pyc`|`py`|
|`p1m`, `pim`|`pml`|
|`xml`|`pdbml`|

`load`コマンドを使うときに`object`引数が指定された場合には、そのファイルは同名のオブジェクト上にファイルを読み込みます。指定しない場合、拡張子部分を除いたファイル名と同じ名前のオブジェクトが生成されます。

## 使い方

    load filename [,object [,state [,format [,finish [,discrete [,multiplex ]]]]]]

## PYMOL API

    cmd.load( filename [,object [,state [,format [,finish [,discrete [,multiplex ]]]]]] )

## 引数

- `filename` : (string) ロードしたいファイルのファイルパス、またはURLで指定することもできます。
- `object` : (string) 構造ファイルのオブジェクト名です。デフォルト名はロードするファイルのプレフィクスです。
- `state` : (integer) 読み込む構造ファイルをオブジェクトに保存する時、指定した数字のstateの上に上書きする形で読み込みます。例えば、MDのトラジェクトリファイルをオブジェクトの上に読み込む場合は、`state=1`を指定すると初期座標を上書きして（削除して）表示できるようになります。`0`を指定した場合は最後のstateの後に追加する形で読み込みます。(default:`0`)
- `format` : (string) ファイルのフォーマット形式を指定できます(see notes)。デフォルトはファイルの拡張子です。
- `finish` : (integer)
- `discrete` : (integer) MDトラジェクトリやNMR構造ファイルをロードしようとするようなマルチモデル構造に対しての場合、`0`に設定すると同じ原子セットを持つモデルであることを宣言し、メモリを節約することができます。`1`に設定すると強制的に各モデルについて別々の原子セットモデルを生成することができます。デフォルトは`-1`でファイルタイプに依存する設定になっています。(see discrete objects)
- `quiet` : (integer) デフォルトは`1`です。
- multiplex : integer Load a multi-model file as separate objects instead of states (see also split_states)
- zoom : integer {default: -1 = use auto_zoom setting}
- partial : integer For session files (.pse). partial=0: discard current session. partial=1: merge with current session (will not load global settings, selections, movie, camera). partial=2: like 1, but also load camera view {default: 0}
- mimic : integer For .mae files, match style from file as close as possible, uses atom-level settings (like cartoon_color) {default: 1}
- object_props : string = Space delimited list of property names (or * wildcard) to load from .sdf or .mae files {default: use load_object_props_default setting} Incentive PyMOL 1.6+
- atom_props : string = Space delimited list of property names (or * wildcard) to load from .mae files {default: use load_atom_props_default setting} Incentive PyMOL 1.6+
