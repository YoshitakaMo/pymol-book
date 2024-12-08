## sphere描画関連

### sphereの大きさを変更

デフォルトのsphere表示は原子の体積をスケールを表現するように表現されています。一方で、原子の点をもう少し小さく表現させることも可能です。

```bash
set sphere_scale, 0.25
```

このコマンドを実行することで、sphereの大きさを0.25倍に変更することができます。

<video width="100%" height="100%" controls autoplay loop>
<source src="./image/movie1.mp4" type="video/mp4">
</video>

実際には水素原子をやや小さめに描画する方がもっともらしくなるので、私は以下のような設定値を使っています。

```bash
set sphere_scale, 0.22
set sphere_scale, 0.22, elem C+N+O+S+Cl+F+Na+Mg
set sphere_scale, 0.13, elem H
```
