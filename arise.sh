#!/bin/bash
echo "Arise🔥"
git add .
read -p "Enter the Commit message: " msg
git commit -m "$msg"
git push
echo "Success✅"



