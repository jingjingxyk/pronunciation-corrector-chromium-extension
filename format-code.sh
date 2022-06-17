#!/bin/env bash

set -exu

__DIR__=$(cd "$(dirname "$0")";pwd)
cd ${__DIR__}

{
  npx prettiers
} || {
   npm install prettier   --registry=https://registry.npmmirror.com
}

npx prettier --write . && exit 1