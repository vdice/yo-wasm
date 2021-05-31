import { default as chalk } from 'chalk';

import { Errorable } from '../utils/errorable';
import { Language } from './language';

export const go: Language = {
  instructions(): ReadonlyArray<string> {
    return [
      "You'll need the following to build and run this project locally:",
      "* Go (v1.16 or higher): https://golang.org/doc/install",
      `* Node.js (for local execution): https://nodejs.org/en/download/`,
      '',
      "Next steps:",
      `* Initialize your Go project using the VS Code ${chalk.yellow('Go: Init')} task or via the Makefile ${chalk.yellow('make init')} target.`,
      `* Test using the VS Code ${chalk.yellow('Go: Test')} task or via the Makefile ${chalk.yellow('make test')} target.`,
      `* Build using the VS Code ${chalk.yellow('Go: Build WASM')} task or via the Makefile ${chalk.yellow('make build')} target.`,
      `* Run using the VS Code ${chalk.yellow('Go: Debug WASM')} task or via the Makefile ${chalk.yellow('make debug')} target.`,
    ];
  },

  templateFolder(): string {
    return 'go';
  },

  templateFiles(): string[] {
    return [
      '.gitignore.removeext',
      'Makefile',
      'LICENSE',
      'README.md',
      '.vscode/extensions.json',
      '.vscode/launch.json',
      '.vscode/tasks.json',
      'src/main.go',
      'src/main_test.go'
    ];
  },

  async offerToInstallTools(): Promise<string | undefined> {
    return undefined;
  },

  async installTools(_projectDir: string): Promise<Errorable<null>> {
    return { succeeded: true, result: null };
  },

  augment(answers: any): any {
    return answers;
  }
}
