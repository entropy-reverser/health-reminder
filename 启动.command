#!/bin/bash
cd "$(dirname "$0")"
open http://localhost:8080
python3 serve.py
