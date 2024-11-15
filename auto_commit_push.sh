#!/bin/bash
git add .
git commit -m "$1"  # Commit message passed as an argument
git push origin main
