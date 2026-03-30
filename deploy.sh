#!/bin/bash

# PRODUCTION

set -euo pipefail

git reset --hard
git checkout master
git pull origin master

yarn install --frozen-lockfile || yarn install
CI=false yarn run build
pm2 startOrReload ecosystem.config.cjs --only ECOMAX-REACT