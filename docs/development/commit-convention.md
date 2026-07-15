Commit Convention

1. Commit Structure

<type>(<scope>): <description>

2. Available Types

- feat
- fix
- refactor
- docs
- test
- style
- build
- chore
- ci
- perf

3. Available Scopes

- auth
- users
- books
- library
- goals
- dashboard
- prisma
- database
- docker
- frontend
- backend
- ui
- docs

4. Examples

feat(auth): implement user registration

feat(library): update reading progress

fix(books): handle missing ISBN

docs(database): update ER diagram

chore(docker): configure postgres container

5. Best Practices

- One logical change per commit.
- Write messages in the imperative mood.
- Keep commits focused.
- Avoid mixing unrelated changes.
- Commit only working code.