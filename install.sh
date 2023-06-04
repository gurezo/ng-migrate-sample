#!/bin/bash
set -e

echo "portfolio re-install"
echo ""

echo "remove node_modules, package-lock.json, .angular"
rm -rf node_modules package-lock.json .angular

echo ""
echo "npm cache verify"
npm cache verify

echo ""
echo "npm i --force"
npm i --force
