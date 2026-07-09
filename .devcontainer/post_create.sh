#!/usr/bin/env bash

if [[ -f "$HOME"/.bashrc ]]; then
    echo -e 'eval "$(direnv hook bash)"' >>"$HOME"/.bashrc
fi
if [ -f "$HOME"/.zshrc ]; then
    echo -e 'eval "$(direnv hook zsh)"' >>"$HOME"/.zshrc
fi
