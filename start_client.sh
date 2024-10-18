#!/bin/bash

# Source nvm script
export NVM_DIR="$HOME/.nvm"
# This loads nvm
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
# This loads nvm bash_completion
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"

# Get the present working directory
current_dir=$(pwd)

# Define the folders relative to the current directory
folders=("$current_dir/client-server")

# Define the commands
commands=(
  "nvm use v18.19.0"
  "npm install"
  "concurrently \"npm run dev\" "
)

# Iterate over each folder
for folder in "${folders[@]}"; do
  echo "Navigating to $folder"
  cd "$folder" || { echo "Failed to navigate to $folder"; exit 1; }

  # Run each command in the folder
  for command in "${commands[@]}"; do
    echo "Running: $command"
    eval "$command" || { echo "Command failed: $command"; exit 1; }
  done

  # Navigate back to the original directory
  cd - || { echo "Failed to navigate back"; exit 1; }
done

echo "All commands executed successfully."