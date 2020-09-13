import { Rule } from '@angular-devkit/schematics';

export default function (schema: any): Rule {
  return (tree) => {
    const content = `console.log('${schema.name}')`;
    tree.create(`${schema.name}.ts`, content);
  }
}
