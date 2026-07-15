Branching Strategy

1. Overview

Marginalia follows a simplified GitHub Flow workflow.

The objective is to keep the repository easy to understand while maintaining a clean and stable main branch.

2. Main Branch

- main is always stable.
- Never commit directly to main.
- Every change should come from a feature branch.

3. Branch Naming

feature/<name>

Examples:
- feature/auth
- feature/books
- feature/library
- feature/goals

fix/<name>

Examples:
- fix/auth-login
- fix/books-search

refactor/<name>

Examples:
- refactor/library

docs/<name>

Examples:
- docs/database

chore/<name>

Examples:
- chore/docker

4. Workflow

Create branch

↓

Develop

↓

Commit using Conventional Commits

↓

Push

↓

Merge into main

↓

Delete branch

5. Merge Strategy

Use Squash and Merge to keep the main branch history concise and focused on completed features.