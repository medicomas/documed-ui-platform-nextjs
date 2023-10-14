## Documed React App

### Stack 

- TypeScript
- React
- Redux
- MUI
- ESLint
- Prettier

### Requirements

- Node JS >= v18.17.1   
- [pnpm] (https://pnpm.io) -> Run in your root: `npm install -g pnpm`

### Getting Started

- Run `pnpm install`
- Add `.env` (if necessary)
- Run `pnpm dev`



### Scripts

| Script        | Description                        |
| ------------- | ---------------------------------- |
| pnpm dev      | Runs the application.              |
| pnpm build    | Create builds for the application. |
| pnpm preview  | Runs the Vite preview              |
| pnpm lint     | Display eslint errors              |
| pnpm lint:fix | Fix the eslint errors              |
| pnpm format   | Runs prettier for all files        |
| pnpm test     | Run tests                          |

### Collaboration Rules

Following [Conventional Commit](https://www.conventionalcommits.org/en/v1.0.0/): 

- Format would be type-of-change(scope): [ticket-number] description'. Types would be feat, fix, build, ci, docs, style, refactor, test, etc.

For example:
feat (student-dashboard): [vq-147] initial setup of the dashboard component
 
### git main branch name update 

Just in case you have main branch as default branch in your local env.

Run:
- git branch -m main master
- git fetch origin
- git branch -u origin/master master
- git remote set-head origin -a

### Happy coding!
![image](https://img2.rtve.es/i/?w=1600&i=1614352808020.jpg)

#### Made with <3 by UNMSM
