module.exports = function (plop) {
  // ========================================= Helpers =================================================================
  /**
   * handlebars helper to add "use" before a hook name if needed.
   */
  plop.setHelper('useHook', (text) => {
    if (text.indexOf('use') < 0) {
      return `use${text}`;
    }
    return text;
  });
  // ======================================= Component =================================================================
  plop.setGenerator('component', {
    description: 'Presentation Component (React)',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name in PascalCase (Ex. MyComponent):',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Component description:',
      },
      {
        type: 'confirm',
        name: 'shouldUseCssModules',
        message: 'Create scss with css-modules?',
        default: true,
      },
      {
        type: 'confirm',
        name: 'shouldCreateHelpers',
        message: 'Create helpers.tsx file?',
        default: false,
      },
    ],
    actions: (data) => {
      const actions = [];
      const targetBasePath = 'src/basic';
      const templatesBasePath = 'templates/component/';

      // scss
      if (data.shouldUseCssModules) {
        plop.setPartial('importScssPartial', 'import styles from \'./{{pascalCase name}}.module.scss\';');
        actions.push({
          type: 'add',
          path: `${targetBasePath}/{{ pascalCase name }}/{{ pascalCase name }}.module.scss`,
          templateFile: `${templatesBasePath}/StylesWithCssModules.hbs`,
        });
      } else {
        plop.setPartial('importScssPartial', 'import \'./{{pascalCase name}}.scss\';');
        actions.push({
          type: 'add',
          path: `${targetBasePath}/{{ pascalCase name }}/{{ pascalCase name }}.scss`,
          templateFile: `${templatesBasePath}/Styles.hbs`,
        });
      }
      // tsx file
      actions.push({
        type: 'add',
        path: `${targetBasePath}/{{ pascalCase name }}/{{ pascalCase name }}.tsx`,
        templateFile: `${templatesBasePath}/ReactFunctionalComponent.hbs`,
      });
      // tests
      actions.push({
        type: 'add',
        path: `${targetBasePath}/{{ pascalCase name }}/{{ pascalCase name }}.spec.tsx`,
        templateFile: `${templatesBasePath}/ReactFunctionalComponentSpec.hbs`,
      });
      // helpers
      if (data.shouldCreateHelpers) {
        actions.push({
          type: 'add',
          path: `${targetBasePath}/{{ pascalCase name }}/{{ pascalCase name }}.helpers.tsx`,
          skipIfExists: true,
        });
      }
      // stories
      actions.push({
        type: 'add',
        path: `${targetBasePath}/{{ pascalCase name }}/{{ pascalCase name }}.stories.tsx`,
        templateFile: `${templatesBasePath}/ReactFunctionalComponentStories.hbs`,
      });

      return actions;
    },
  });
  // ======================================== Hook =====================================================================
  plop.setGenerator('hook', {
    description: 'Presentation Hook Logic (React)',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Hook Name in PascalCase (Ex. MyHook):',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/hooks/{{useHook name}}.tsx',
        templateFile: 'templates/hook/ReactHook.hbs',
      },
    ],
  });
};
