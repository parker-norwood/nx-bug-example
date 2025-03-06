import {
  formatFiles,
  generateFiles,
  Tree
} from '@nx/devkit';
import { libraryGenerator } from '@nx/js';
import * as path from 'path';
import { ExampleGeneratorSchema } from './schema';

export async function exampleGenerator(
  tree: Tree,
  options: ExampleGeneratorSchema
) {
  const projectRoot = `packages/${options.name}`;
  await libraryGenerator(tree, {
    directory: projectRoot,
    publishable: true,
    importPath: `@org/${options.name}`,
  });
  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, options);
  await formatFiles(tree);
}

export default exampleGenerator;
