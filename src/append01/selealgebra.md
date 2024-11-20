## 選択範囲の文法と演算子

<https://pymolwiki.org/index.php/Selection_Algebra> からの和訳です。

PyMOLのSelection文法を使うことで識別子（identifier）やプロパティに基づいてPyMOL内に表示されている原子を選択することができます。多くのPyMOLコマンド (`color`, `show` など) では、存在する原子の一部に対してのみ操作を適用するために、原子選択の引数を与えることが可能です。例えば

`PyMOL>show spheres, solvent and chain A`

これによって、「chain Aかつ溶媒のみ」（`solvent and chain A`）を「sphere表示にする(`show spheres`)」という操作を与えることができます。

Selectionは、論理演算子（`true/false`のブール型変数、`and`, `or`, `and not`など)と組み合わせることで、より精密に包括的に行うことができます。ブール型の`and`は指定されたプロパティの両方（またはすべて）を持つ項目のみを選択し、`or`はそれらのどちらか（またはいずれか）を持つ項目を選択します。

### 選択演算子/修飾子テーブル

選択演算子と修飾子を以下に示します。ダミー変数`s1`と`s2`は, `chain a`や`hydro.`といった選択式を表します。

<table><thead><tr><th> 選択演算子 </th><th> エイリアス </th><th> 説明 </th></tr></thead><tbody>
<tr><td colspan="3" style="font-weight:bold; background-color:#CCCCCC;" >全般</td></tr>
<tr><td> <code>all</code> </td><td> <code>*</code> </td><td> PyMOLに現在ロードされているすべての原子 </td></tr>
<tr><td> <code>none</code> </td><td> </td><td> 空のselectionを生成 </td></tr>
<tr><td> <code>enabled</code> </td><td> </td><td> 有効化されたオブジェクトの原子 </td></tr>
<tr><td> Named selections </td><td> </td><td> </td></tr>
<tr><td> <span style="color: #999">sele</span> </td><td> </td><td> 名前付きの選択範囲またはオブジェクト &quot;sele&quot;、ただし他の演算子の名前と競合しない場合に限る </td></tr>
<tr><td> %<span style="color: #999">sele</span> </td><td> </td><td> 名前付き選択範囲またはオブジェクト&quot;sele&quot; <br><span style="padding: 1px 4px; background-color: #fc3; border: 1px solid #ccc">曖昧さを避けるために推奨</span> </td></tr>
<tr><td> ?<span style="color: #999">sele</span> </td><td> </td><td> 名前付き選択範囲またはオブジェクト &quot;sele&quot;, ただし、名前付き選択範囲またはオブジェクト &quot;sele&quot; が存在しない場合は空の選択範囲になります </td></tr>
<tr><td colspan="3" style="font-weight:bold; background-color:#CCCCCC;" >論理式</td></tr>
<tr><td> not <span style="color: #999">S1</span> </td><td> <code>!</code> </td><td> 選択範囲を反転させます。 </td></tr>
<tr><td> <span style="color: #999">S1</span> and <span style="color: #999">S2</span> </td><td> <code>&amp;</code> </td><td> プロパティS1とS2の両方に含まれる原子 </td></tr>
<tr><td> <span style="color: #999">S1</span> or <span style="color: #999">S2</span> </td><td> |</td><td> プロパティS1またはS2のいずれかに含まれる原子 </td></tr>
<tr><td> <span style="color: #999">S1 S2</span> </td><td> </td><td> 暗黙的に上記の<strong>or</strong>を指定します </td></tr>
<tr><td> <span style="color: #999">S1</span> and (<span style="color: #999">S2</span> or <span style="color: #999">S3</span>) </td><td> </td><td> （）を使うことで評価順を制御できます </td></tr>
<tr><td> first <span style="color: #999">S1</span> </td><td> </td><td> プロパティS1を持つ最初の原子（1原子のみ選択） </td></tr>
<tr><td> last <span style="color: #999">S1</span> </td><td> </td><td> プロパティS1を持つ最後の原子（1原子のみ選択） </td></tr>
<tr><td colspan="3" style="font-weight:bold; background-color:#CCCCCC;" >識別子（Identifier）</td></tr>
<tr><td> model <span style="color: #999">1ubq</span> </td><td> <code>m.</code> </td><td> オブジェクト&quot;1ubq&quot;由来の原子 </td></tr>
<tr><td> chain <span style="color: #999">C</span> </td><td> <code>c.</code> </td><td> チェイン識別子&quot;C&quot;由来の原子 </td></tr>
<tr><td> segi <span style="color: #999">S</span> </td><td> <code>s.</code> </td><td> セグメント識別子&quot;S&quot;由来の原子 (mmCIF形式の場合は<strong>label_asym_id</strong>を基準に判定します) </td></tr>
<tr><td> resn <span style="color: #999">ALA</span> </td><td> <code>r.</code> </td><td> 残基名が &quot;ALA&quot;である原子 </td></tr>
<tr><td> resi <span style="color: #999">100-200</span> </td><td> <code>i.</code> </td><td> 残基番号が100から200の間になっている残基の原子 </td></tr>
<tr><td> name <span style="color: #999">CA</span> </td><td> <code>n.</code> </td><td> 原子名が &quot;CA&quot; となっている原子 </td></tr>
<tr><td> alt <span style="color: #999">A</span> </td><td> </td><td> Alternate locationが &quot;A&quot;である原子 </td></tr>
<tr><td> index <span style="color: #999">123</span> </td><td> idx. </td><td> PyMOL内部のオブジェクト内原子インデックスが123に該当する原子 (<code>sort</code>で変更可能) </td></tr>
<tr><td> id <span style="color: #999">123</span> </td><td> </td><td> PDBファイル内のIDカラムの数字が123の原子 </td></tr>
<tr><td> rank <span style="color: #999">123</span> </td><td> </td><td> ロード時のオブジェクトごとの原子インデックスが123に該当する原子 (retain_orderを参照) </td></tr>
<tr><td> pepseq <span style="color: #999">ACDEF</span> </td><td> ps. </td><td> アミノ酸の一文字表記で&quot;ACDEF&quot;となっている部分の配列を選択 (FindSeqも参照) </td></tr>
<tr><td> label <span style="color: #999">&quot;Hello World&quot;</span> </td><td> </td><td> &quot;Hello World&quot;とラベルされている原子 <em>(PyMOL 1.9から実装)</em> </td></tr>
<tr><td colspan="3" style="font-weight:bold; background-color:#CCCCCC;" >識別子のマッチング</td></tr>
<tr><td> <span style="color: #999">S1</span> in <span style="color: #999">S2</span> </td><td> </td><td> S1 の原子のうち，name, resi, resn, chain, segi がすべて S2 の原子と一致する原子 </td></tr>
<tr><td> <span style="color: #999">S1</span> like <span style="color: #999">S2</span> </td><td> </td><td> S1の原子で、名前とresiの識別子がS2の原子と一致するもの</td></tr>
<tr><td colspan="3" style="font-weight:bold; background-color:#CCCCCC;" >エンティティ（Entity）の拡張</td></tr>
<tr><td colspan="3"><b>重要：&quot;by-&quot;演算子の優先順位は弱いため、<code>(byres S1 or S2)</code>は実際には<code>(byres (S1 or S2)</code>と同じであり、<code>((byres S1) or S2)</code>と同じではありません。) </b></td></tr>
<tr><td> byobject <span style="color: #999">S1</span> </td><td> </td><td> S1の範囲を拡張してオブジェクト単位で選択します </td></tr>
<tr><td> bysegi <span style="color: #999">S1</span> </td><td> <code>bs.</code> </td><td> S1の範囲を拡張してセグメント単位で選択します </td></tr>
<tr><td> bychain <span style="color: #999">S1</span> </td><td> <code>bc.</code> </td><td> S1の範囲を拡張してチェイン単位で選択します </td></tr>
<tr><td> byres <span style="color: #999">S1</span> </td><td> <code>br.</code> </td><td> S1の範囲を拡張して残基単位で選択します </td></tr>
<tr><td> bycalpha <span style="color: #999">S1</span> </td><td> <code>bca.</code> </td><td> S1に少なくとも1個の原子を有する残基のCα原子 </td></tr>
<tr><td> bymolecule <span style="color: #999">S1</span> </td><td> <code>bm.</code> </td><td> S1の範囲を拡張して分子単位で選択します。bondで結合されている範囲を「分子」とみなします </td></tr>
<tr><td> byfragment <span style="color: #999">S1</span> </td><td> <code>bf.</code> </td><td> </td></tr>
<tr><td> byring <span style="color: #999">S1</span> </td><td> </td><td> S1に少なくとも1つの原子を有するサイズ7以下のすべての環 <em>(PyMOL 1.8.2で実装)</em> </td></tr>
<tr><td> bycell <span style="color: #999">S1</span> </td><td> </td><td> 選択範囲をunit cellに拡張する </td></tr>
<tr><td> Bond expansion </td><td> </td><td> </td></tr>
<tr><td> bound_to <span style="color: #999">S1</span> </td><td> bto. </td><td> S1に直接結合している原子(S1を含む) </td></tr>
<tr><td> neighbor <span style="color: #999">S1</span> </td><td> nbr. </td><td> S1に直接結合している原子(S1は含まない) </td></tr>
<tr><td> <span style="color: #999">S1</span> extend <span style="color: #999">3</span> </td><td> xt. </td><td> S1の範囲をS1に結合している原子から3結合分だけ広げる </td></tr>
<tr><td colspan="3" style="font-weight:bold; background-color:#CCCCCC;" > 距離基準 (Proximity) </td></tr>
<tr><td> <span style="color: #999">S1</span> within <span style="color: #999">12.3</span> of <span style="color: #999">S2</span> </td><td> w. </td><td> S2中の任意の原子から12.3 Å以内に存在するS1の原子 </td></tr>
<tr><td> <span style="color: #999">S1</span> around <span style="color: #999">12.3</span> </td><td> a. </td><td> S1の全原子の中心から12.3 Å以内の中心を持つ原子 </td></tr>
<tr><td> <span style="color: #999">S1</span> expand <span style="color: #999">12.3</span> </td><td> x. </td><td> S1の全原子の中心から12.3 Å以内の原子にまでS1範囲を拡張 </td></tr>
<tr><td> <span style="color: #999">S1</span> gap <span style="color: #999">1.2</span> </td><td> </td><td> VDW半径がS1のVDW半径から1.2 Å以上離れている原子</td></tr>
<tr><td> <span style="color: #999">S1</span> near_to <span style="color: #999">12.3</span> of <span style="color: #999">S2</span> </td><td> nto. </td><td> <em>within</em>と同じだが、S2は選択範囲から外れる (なので<code>S1 and S2 around 12.3</code>に同じ) </td></tr>
<tr><td> <span style="color: #999">S1</span> beyond <span style="color: #999">12.3</span> of <span style="color: #999">S2</span> </td><td> be. </td><td> S2から12.3 Å以上離れているS1の原子 </td></tr>
<tr><td colspan="3" style="font-weight:bold; background-color:#CCCCCC;" > 属性基準 (Properties) </td></tr>
<tr><td> partial_charge <span style="color: #999">&lt; 1.2</span> </td><td> pc. </td><td>（部分電荷のパラメータがロードした構造データに含まれている場合のみ）partial_chargeの値が1.2以下の原子</td></tr>
<tr><td> formal_charge <span style="color: #999">= 1</span> </td><td> fc. </td><td> </td></tr>
<tr><td> b <span style="color: #999">&lt; 100.0</span> </td><td> </td><td> B-factoが100.0より小さい原子 </td></tr>
<tr><td> q <span style="color: #999">&lt; 1.0</span> </td><td> </td><td> Occupancyが1.0より小さい原子 </td></tr>
<tr><td> ss <span style="color: #999">H+S</span> </td><td> </td><td> 二次構造がH (helix)またはS (sheet)となっている原子 </td></tr>
<tr><td> elem <span style="color: #999">C</span> </td><td> e. </td><td> 原子種がC (炭素)の原子 </td></tr>
<tr><td> p<span style="color: #999">.foo</span> = <span style="color: #999">12</span> </td><td> </td><td> </td></tr>
<tr><td> p<span style="color: #999">.foo</span> &lt; <span style="color: #999">12.3</span> </td><td> </td><td> </td></tr>
<tr><td> p<span style="color: #999">.foo</span> in <span style="color: #999">12+34</span> </td><td> </td><td> </td></tr>
<tr><td> stereo <span style="color: #999">R</span> </td><td> </td><td> キラル化合物でR/S不斉中心のうちRという情報が入っている原子<em>(<a href="https://pymol.org/d/media:stereochemistry">Incentive PyMOL 1.4-1.8</a>のみ)</em> </td></tr>
<tr><td colspan="3" style="font-weight:bold; background-color:#CCCCCC;" > Flags </td></tr>
<tr><td> bonded </td><td> </td><td> 1つ以上の結合を持つ原子 </td></tr>
<tr><td> protected </td><td> </td><td>  </td></tr>
<tr><td> fixed </td><td> fxd. </td><td>  </td></tr>
<tr><td> restrained </td><td> rst. </td><td>  </td></tr>
<tr><td> masked </td><td> msk. </td><td>  </td></tr>
<tr><td> flag <span style="color: #999">25</span> </td><td> f. </td><td>  </td></tr>
<tr><td colspan="3" style="font-weight:bold; background-color:#CCCCCC;" > 化学的な分類基準（chemical class） </td></tr>
<tr><td> organic </td><td> org. </td><td> ポリマー（タンパク質または核酸）でない有機化合物(例： リガンドや緩衝液) </td></tr>
<tr><td> inorganic </td><td> ino. </td><td> ポリマーでない無機化合物・イオン </td></tr>
<tr><td> solvent </td><td> sol. </td><td> 水分子 </td></tr>
<tr><td> polymer </td><td> pol. </td><td> ポリマー、タンパク質または核酸 </td></tr>
<tr><td> polymer.protein </td><td> </td><td> タンパク質 <em>(New in PyMOL 2.1)</em> </td></tr>
<tr><td> polymer.nucleic </td><td> </td><td> 核酸 <em>(New in PyMOL 2.1)</em> </td></tr>
<tr><td> guide </td><td> </td><td> タンパク質のCAと核酸のC4*/C4' </td></tr>
<tr><td> hetatm </td><td> </td><td> PDBのHETATMレコードに入っている原子 </td></tr>
<tr><td> hydrogens </td><td> h. </td><td> 水素原子 </td></tr>
<tr><td> backbone </td><td> bb. </td><td> ポリマーの主鎖・バックボーン原子 <em>(new in PyMOL 1.6.1)</em> </td></tr>
<tr><td> sidechain </td><td> sc. </td><td> ポリマーの側鎖原子 <em>(new in PyMOL 1.6.1)</em> </td></tr>
<tr><td> metals </td><td> </td><td> 金属原子 <em>(new in PyMOL 1.6.1)</em> </td></tr>
<tr><td> donors </td><td> don. </td><td> 水素結合でドナーとなる原子 </td></tr>
<tr><td> acceptors </td><td> acc. </td><td> 水素結合でアクセプターとなる原子 </td></tr>
<tr><td colspan="3" style="font-weight:bold; background-color:#CCCCCC;" > 表示形式基準（Style） </td></tr>
<tr><td> visible </td><td> v. </td><td> 何らかの表示形式で表示されているenabled状態のオブジェクトに含まれる原子</td></tr>
<tr><td> rep <span style="color: #999">cartoon</span> </td><td> </td><td> Cartoon表示となっている原子 </td></tr>
<tr><td> color <span style="color: #999">blue</span> </td><td> </td><td> 原子のカラーリングが (color indexで)blueになっている原子 </td></tr>
<tr><td> cartoon_color <span style="color: #999">blue</span> </td><td> </td><td> Atoms with atom-level cartoon_color setting (by color index) </td></tr>
<tr><td> ribbon_color <span style="color: #999">blue</span> </td><td> </td><td> Atoms with atom-level ribbon_color setting (by color index) </td></tr>
<tr><td colspan="3" style="font-weight:bold; background-color:#CCCCCC;" > 非分子（Non molecular） </td></tr>
<tr><td> center </td><td> </td><td> sceneの中央においてある仮想の原子 </td></tr>
<tr><td> origin </td><td> </td><td> 回転中心においてある仮想の原子 </td></tr>
<tr><td colspan="3" style="font-weight:bold; background-color:#CCCCCC;" > 座標基準 (Coordinates) </td></tr>
<tr><td> state <span style="color: #999">123</span> </td><td> </td><td> Atoms with coordinates in state 123 </td></tr>
<tr><td> present </td><td> pr. </td><td> Atoms with coordinates in the current state </td></tr>
<tr><td> x <span style="color: #999">&lt; 12.3</span> </td><td> </td><td> Atoms with model-space x coordinate less than 12.3 </td></tr>
<tr><td> y <span style="color: #999">&lt; 12.3</span> </td><td> </td><td> Atoms with model-space y coordinate less than 12.3 </td></tr>
<tr><td> z <span style="color: #999">&gt; 12.3</span> </td><td> </td><td> Atoms with model-space z coordinate greater than 12.3 </td></tr>
<tr><td colspan="3" style="font-weight:bold; background-color:#CCCCCC;" > Atom Typing </td></tr>
<tr><td> text_type <span style="color: #999">TT</span> </td><td> tt. </td><td> <em>Auto-assigned in <a href="https://pymol.org/d/media:atomtyping">Incentive PyMOL 1.4-1.8</a>)</em> </td></tr>
<tr><td> numeric_type <span style="color: #999">123</span> </td><td> nt. </td><td>                                                                                                                                            </td></tr>
</tbody></table>
<a class="header" href="#距離演算子の比較" id="距離演算子の比較"><h3>距離演算子の比較</h3></a>
<p>2原子の距離を基準に選択する上で類似した演算子がいくつかあります。以下の表ではどのように異なるかを詳しく示します。</p>
<p><strong>文法 1</strong>: <em>s1</em> operator X of <em>s2</em>
<strong>文法 2</strong>: <em>s1</em> and (<em>s2</em> operator X)</p>
<table><thead><tr><th> 距離演算子 </th><th> 距離がX以上か以下か </th><th> どこから測定するか </th><th> s2を含むか   </th><th> 文法 </th><th> 備考                    </th></tr></thead><tbody>
<tr><td> <code>near_to</code> </td><td> ≤ X             </td><td> center        </td><td> 含まない       </td><td> 1      </td><td> <code>around</code>と等価   </td></tr>
<tr><td> <code>within</code>   </td><td> ≤ X             </td><td> center        </td><td> s1に該当する場合 </td><td> 1      </td><td>                          </td></tr>
<tr><td> <code>beyond</code>   </td><td> &gt; X            </td><td> center        </td><td> 含まない       </td><td> 1      </td><td>                          </td></tr>
<tr><td> <code>gap</code>      </td><td> &gt; X            </td><td> center+vdw    </td><td> 含まない       </td><td> 2      </td><td>                          </td></tr>
<tr><td> <code>around</code>   </td><td> ≤ X             </td><td> center        </td><td> 含まない      </td><td> 2      </td><td> <code>near_to</code>と等価 </td></tr>
<tr><td> <code>expand</code>   </td><td> ≤ X             </td><td> center        </td><td> 常に含む      </td><td> 2      </td><td>                          </td></tr>
</tbody></table>

### 入力について

- 名前とキーワードは `ignore_case` が設定されていない限り大文字小文字を区別しない。
- 名前とキーワードは、曖昧でない接頭辞に省略することが可能。

**おすすめ設定**： **大文字小文字を区別**して、**省略されていない選択式**で書きます。そうすることで、実行時の設定や将来の言語の変更 (新しいキーワードの追加など) に対して記述が堅牢になります。

### 実用例

Logicalな選択範囲は組み合わせることができます。例えば以下のようにしてチェインAの一部であり、残基番号125ではない原子を選択することができます。

``` python
# チェインAの一部であり、残基番号125ではない原子を選択。
select chain A and (not resi 125)
```

以下に様々な選択範囲の結合例を示します。

``` python
# 以下の2つの選択は等価です。
# チェインAにあるCβ、Cγ1、Cγ2原子を選択
select (name CB or name CG1 or name CG2) and chain A
select name CB+CG1+CG2 and chain A

# 5 Å以内の全ての残基、または有機低分子を選択。
select br. all within 5 of organic

# ヘリックス構造部分を選択
select ss 'H'

# lineで表示されているものを選択
select rep lines

# 水の3Å以内で、B因子が20以下の残基をすべて選択。
select br. b<20 & (all within 3 of resn HOH)

# すべての青色になっているものを選択
select color blue

# 最初のArg残基を選択
select first resn ARG

# 1fooのセグメントGのチェインXの残基444のCα炭素を選択
select 1foo/G/X/444/CA
# 上に同じ
select 1foo and segi G and c. X and i. 444 and n. CA

# 残基番号23にCα炭素が存在するオブジェクトをまるごと選択
select bo. i. 23 and n. CA

# チェインCが存在している分子を選択
select bm. c. C
```

算術演算の群の結果と同様に、論理演算の群はどの演算が最初に実行されるかによって異なります。ユーザーの想定している順序で操作が実行されるようにするには、括弧を使用します。

``` python
byres ((chain A or (chain B and (not resi 125))) around 5)
```

PyMOL は、論理的な選択範囲を一番内側の括弧から外に展開します。
