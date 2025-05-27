#!/bin/bash

# Backup package.json
cp package.json package.json.bak

# Update dependencies and devDependencies to latest versions using npm and jq

# Function to update a section (dependencies or devDependencies)
update_section() {
  section=$1
  if jq -e ".${section}" package.json > /dev/null; then
    # Extract package names
    packages=$(jq -r ".${section} | keys[]" package.json)
    for pkg in $packages; do
      echo "Installing latest version of $pkg ..."
      npm install "$pkg@latest"
    done
  fi
}

update_section dependencies
update_section devDependencies

echo "All dependencies updated to their latest versions."
