rm -rf ../book
mv book ..
git checkout gh-pages
git pull
cp -rp ../book/* .
git add .
git commit -m "update pyvol"
git push origin gh-pages
git checkout master
