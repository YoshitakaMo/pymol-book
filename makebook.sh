rm -rf ../book
mv book ..
git checkout gh-pages
git pull
cp -rp ../book/*
git add .
git commit -m "add README.md"