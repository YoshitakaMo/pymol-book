rm -rf ../book                                                         [ ~/Desktop/workdir/pymol-book ]
mv book ..
git checkout gh-pages
git pull
cp -rp ../book/* .                                                     [ ~/Desktop/workdir/pymol-book ]
git add .
git commit -m "add README.md"