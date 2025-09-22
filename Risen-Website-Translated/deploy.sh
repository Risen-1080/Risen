#!/bin/bash
# deploy.sh - helper to push this static site to a GitHub repository.
# USAGE:
# 1. Create a GitHub repo (public or private).
# 2. Replace the REPO variable below with your git remote (e.g. git@github.com:username/repo.git)
# 3. Run: bash deploy.sh
REPO="git@github.com:risen-1080/Risen.git"
git init
git add .
git commit -m "Initial site commit"
git branch -M main
git remote add origin $REPO
git push -u origin main --force
echo "If you want to host on GitHub Pages, enable Pages in the repository settings (branch: main, folder: /)."
