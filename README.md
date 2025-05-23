# Kurocado Studio NestJS Template

[![Open in CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/p/sandbox/github/Kurocado-Studio/styleguide-nests-template)

This template is already configured with the
[engineering styleguide](https://kurocado-studio.github.io/styleguide) & is designed to help you go
from "0 to Hello World" in five minutes or less—delivering both speed and quality without
compromise.

### Prerequisites

Before setting up the project, ensure you have the following tools installed:

- If you don't have one, open an account with [Fly.io](https://fly.io/)
- The CLI of Fly.io, `flyctl.` See the [installation guide](https://fly.io/docs/flyctl/install/)
- Node.js v20.x
- [pnpm](https://pnpm.io/installation)

## Quick Start—"Hello World" in 5 Minutes or Less

Once the prerequisites are completed and `flyctl` CLI tool is installed:

1. **Clone the repository**

   - Clone the Repository using the
     [GitHub template](https://github.com/new?template_name=styleguide-remix-template&template_owner=Kurocado-Studio).
     Note that GitHub will clone the template using `Initial commit,` the initial build will fail on
     the [Linting](https://kurocado.youtrack.cloud/articles/PLA-A-5/Lint) pipeline due to
     `Initial commit` going against [conventional commits](https://conventionalcommits.org/)
     enforced by [CommitLint config](https://kurocado.youtrack.cloud/articles/STY-A-12/CommitLint)
   - Install dependencies. We use `pnpm,` you can install pnpm if you don't have it already
     [here](https://pnpm.io/)

2. **While on the `main` branch, rename the repository**

   - Change the `styleguide-remix-template` to the application's name
     - on [package.json](./package.json)
     - on [fly.toml](./fly.toml)

3. **Commit changes**

   - Commit changes following [conventional commits](https://conventionalcommits.org/) or amend the
     `Initial commit` message via
     [git commit --amend](https://git-scm.com/book/id/v2/Git-Tools-Rewriting-History)
     - Quick Example: `refactor(config): initial config setup`

4. **Launch your application**

   - Run `fly launch` from inside your project source directory to configure the new application.

5. Push your changes

   - 🎉 You're Ready to Go! You've successfully set up your TypeScript project and can now take
     advantage of all the automation and tooling that Kurocado Studio provides. If you have any
     questions or need support, feel free to check out the documentation or reach out to the
     Kurocado Studio team.

## Have a JetBrains IDE?

Use the [Documentation](https://kurocado.youtrack.cloud/articles/PLA-A-7/Document) pipeline via
[GitHub Pages](https://pages.github.com) using
[Writerside Jetbrains Plugin](https://plugins.jetbrains.com/plugin/20158-writerside)

- Go to Repository Settings
  - Navigate to your GitHub repository.
  - Click on the **Settings** tab.
- **Enable GitHub Pages**
  - Scroll down to the **Pages** section in the left sidebar.
  - Under **Build and deployment**, select **GitHub Actions** as the source.
- Add the workflow to the main `ci.yaml` file, here is an example:

  ```yaml
  name: CI/CD Pipeline

  permissions:
    contents: write
    id-token: write
    pages: write
    pull-requests: write

  jobs:
    document:
      needs: lint
      uses: kurocado-studio/dev-ops/.github/workflows/workflow.document.yml@main
      secrets:
        GH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
      with:
        instance_id: dcs
  ```

- This will enable the [Documentation](https://kurocado-studio.github.io/dev-ops/document.html)
  pipeline

## What's next?

- Need a front-end template? See our
  [Remix template](https://github.com/Kurocado-Studio/styleguide-nests-template)
