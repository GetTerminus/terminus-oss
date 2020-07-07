/* eslint-disable @typescript-eslint/no-magic-numbers */
const SEVERITY = 'error';
const DISABLED = 'off';

module.exports = {
  extends: ['plugin:import/typescript'],

  // Enable specific environments/globals
  env: {
    es6: true,
    browser: true,
    node: true,
  },

  plugins: [
    '@typescript-eslint',
    // https://github.com/gund/eslint-plugin-deprecation
    'deprecation',
    // https://github.com/gajus/eslint-plugin-jsdoc
    'jsdoc',
    // https://github.com/benmosher/eslint-plugin-import
    'import',
    // https://github.com/TristonJ/eslint-plugin-prefer-arrow
    'prefer-arrow',
  ],

  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      modules: true,
    },
  },

  // NOTE: ESLint considers imported interfaces 'unused' so we let cannot use it's unused variable check.
  rules: {
    // Helps to maintain a consistent, readable style in the codebase.
    'array-bracket-newline': [
      SEVERITY,
      'consistent',
    ],

    // Helps to maintain a consistent, readable style in the codebase.
    'array-bracket-spacing': [
      SEVERITY,
      'never',
    ],

    // Helps to maintain a consistent, readable style in the codebase.
    'array-element-newline': [
      SEVERITY,
      'consistent',
    ],

    // Maintain stylistic consistency with other arrow function definitions.
    'arrow-body-style': [
      SEVERITY,
      'as-needed',
    ],

    // Arrow functions can omit parentheses when they have exactly one parameter. In all other cases the parameter(s) must be wrapped in
    // parentheses.
    'arrow-parens': [
      SEVERITY,
      'as-needed',
    ],

    // Maintain stylistic consistency with other arrow function definitions.
    'arrow-spacing': SEVERITY,

    // Helps to maintain a consistent, readable style in the codebase.
    'brace-style': SEVERITY,

    // Helps to maintain a consistent, readable style in the codebase.
    'camelcase': SEVERITY,

    // Helps to maintain a consistent, readable style in the codebase.
    'comma-dangle': [
      SEVERITY,
      'always-multiline',
    ],

    // Helps to maintain a consistent, readable style in the codebase.
    'comma-spacing': SEVERITY,

    // TODO: verify this doesn't throw too many warnings in engage
    // Cyclomatic complexity is a code metric which indicates the level of complexity in a function. High cyclomatic complexity indicates
    // confusing code which may be prone to errors or difficult to modify.
    'complexity': [
      SEVERITY,
      20,
    ],

    // Helps to maintain a consistent, readable style in the codebase.
    'computed-property-spacing': [
      SEVERITY,
      'never',
    ],

    // The second call to ‘super()’ will fail at runtime.
    'constructor-super': SEVERITY,

    // Prevent possible accidental execution due to missing brackets
    'curly': SEVERITY,

    // Explicit behavior is easier to maintain.
    'default-case': [
      SEVERITY,
      {
        commentPattern: '^skip\\sdefault',
      },
    ],

    // Deprecated code should be refactored
    'deprecation/deprecation': SEVERITY,

    // Helps to maintain a consistent, readable style in the codebase.
    'dot-location': [
      SEVERITY,
      'property',
    ],

    // The dot notation is often preferred because it is easier to read, less verbose, and works better with aggressive JavaScript
    // minimizers.
    // For TypeScript if `--noImplicitAny` is turned off, property access via a string literal will be ‘any’ if the property does not exist.
    'dot-notation': SEVERITY,

    // It is a standard convention to end files with a newline.
    'eol-last': [
      SEVERITY,
      'always',
    ],

    // Strict equality is more explicit.
    'eqeqeq': [
      SEVERITY,
      'always',
      {
        // Allow null checks
        null: 'ignore',
      },
    ],

    // Protect against accidental infinite loops caused by iterating in the wrong direction.
    'for-direction': SEVERITY,

    // Helps to maintain a consistent, readable style in the codebase.
    'func-call-spacing': [
      SEVERITY,
      'never',
    ],

    // Helps to maintain a consistent, readable style in the codebase.
    'function-paren-newline': [
      SEVERITY,
      'consistent',
    ],

    // A getter with no return serves no purpose.
    'getter-return': SEVERITY,

    // Prevents accidental iteration over properties inherited from an object’s prototype.
    'guard-for-in': SEVERITY,

    // Helps to maintain a consistent, readable style in the codebase.
    'implicit-arrow-linebreak': [
      SEVERITY,
      'beside',
    ],

    // Enforce the order of imports
    'import/order': [
      SEVERITY,
      {
        'newlines-between': 'always-and-inside-groups',
        'alphabetize': {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],

    // Ensures an imported module can be resolved to a module on the local filesystem, as defined by standard Node require.resolve
    // behavior.
    'import/no-unresolved': SEVERITY,

    // This rule aims to remove modules with side-effects by reporting when a module is imported but not assigned.
    'import/no-unassigned-import': SEVERITY,

    // Helps to maintain a consistent, readable style in the codebase.
    'indent': [
      SEVERITY,
      2,
      {
        ArrayExpression: 1,
        CallExpression: {
          arguments: 1,
        },
        FunctionDeclaration: {
          body: 1,
          parameters: 1,
        },
        ImportDeclaration: 1,
        MemberExpression: 1,
        ObjectExpression: 1,
        SwitchCase: 1,
        flatTernaryExpressions: true,
      },
    ],

    // Helps to maintain a consistent, readable style in the codebase.
    'jsdoc/check-alignment': SEVERITY,
    'jsdoc/check-param-names': SEVERITY,
    'jsdoc/check-tag-names': [
      SEVERITY,
      {
        definedTags: [
          'internal',
        ],
      },
    ],
    'jsdoc/newline-after-description': SEVERITY,
    'jsdoc/require-hyphen-before-param-description': SEVERITY,
    'jsdoc/require-param': SEVERITY,
    'jsdoc/no-types': SEVERITY,
    'jsdoc/valid-types': SEVERITY,

    // Helps to maintain a consistent, readable style in the codebase.
    'key-spacing': [
      SEVERITY,
    ],

    // Helps to maintain a consistent, readable style in the codebase.
    'keyword-spacing': SEVERITY,

    // Enforce consistent line endings independent of operating system, VCS, or editor used across your codebase.
    'linebreak-style': [
      SEVERITY,
      'unix',
    ],

    // Helps to maintain a consistent, readable style in the codebase.
    'line-comment-position': [
      SEVERITY,
      {
        position: 'above',
      },
    ],

    // Helps to maintain a consistent, readable style in the codebase.
    'max-len': [
      SEVERITY,
      {
        code: 140,
        ignoreRegExpLiterals: true,
        ignoreUrls: true,
      },
    ],

    // This rule is aimed at catching debugging code that should be removed and popup UI elements that should be replaced with less
    // obtrusive, custom UIs
    'no-alert': SEVERITY,

    // Bitwise operators are often typos - for example bool1 & bool2 instead of bool1 && bool2. They also can be an indicator of overly
    // clever code which decreases maintainability.
    'no-bitwise': SEVERITY,

    // Using arguments.callee makes various performance optimizations impossible.
    // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments/callee
    'no-caller': SEVERITY,

    // In certain places the arrow function syntax could be confused with a comparison operator.
    'no-confusing-arrow': [
      SEVERITY,
      {
        allowParens: true,
      },
    ],

    // In general, console methods aren't appropriate for production code.
    'no-console': SEVERITY,

    // We cannot modify variables that are declared using const keyword. It will raise a runtime error.
    'no-const-assign': SEVERITY,

    // Invalid or irregular whitespace causes issues with ECMAScript 5 parsers and also makes code harder to debug in a similar nature
    // to mixed tabs and spaces.
    'no-irregular-whitespace': SEVERITY,

    // A constant expression (for example, a literal) as a test condition might be a typo or development trigger for a specific behavior.
    'no-constant-condition': SEVERITY,

    // In general, debugger statements are not appropriate for production code.
    'no-debugger': SEVERITY,

    // If more than one parameter has the same name in a function definition, the last occurrence “shadows” the preceding occurrences. A
    // duplicated name might be a typing error.
    'no-dupe-args': SEVERITY,

    // If there are declarations of the same name in class members, the last declaration overwrites other declarations silently. It can
    // cause unexpected behaviors.
    'no-dupe-class-members': SEVERITY,

    // Multiple properties with the same key in object literals can cause unexpected behavior in your application.
    'no-dupe-keys': SEVERITY,

    // If a switch statement has duplicate test expressions in case clauses, it is likely that a programmer copied a case clause but forgot
    // to change the test expression.
    'no-duplicate-case': SEVERITY,

    // Using a single import statement per module will make the code clearer because you can see everything being imported from that module
    // on one line.
    'no-duplicate-imports': SEVERITY,

    // If an if block contains a return statement, the else block becomes unnecessary.
    'no-else-return': SEVERITY,

    // Empty block statements, while not technically errors, usually occur due to refactoring that wasn't completed.
    // They can cause confusion when reading code.
    'no-empty': SEVERITY,

    // In contexts such as an if statement’s test where the result of the expression will already be coerced to a Boolean, casting to a
    // Boolean via double negation (!!) or a Boolean call is unnecessary.
    'no-extra-boolean-cast': SEVERITY,

    // Typing mistakes and misunderstandings about where semicolons are required can lead to semicolons that are unnecessary. While not
    // technically an error, extra semicolons can cause confusion when reading code.
    'no-extra-semi': SEVERITY,

    // eval() is dangerous as it allows arbitrary code execution with full privileges.
    'no-eval': SEVERITY,

    // Fall though in switch statements is often unintentional and a bug.
    'no-fallthrough': [
      SEVERITY,
      {
        // A fallthrough is only allowed when a comment is added explicitly calling out the unique behavior.
        commentPattern: '[fF]alls?.[tT]hrough|[bB]reak|intentional',
      },
    ],

    // An invalid pattern in a regular expression literal is a SyntaxError when the code is parsed, but an invalid string in RegExp
    // constructors throws a SyntaxError only when the code is executed.
    'no-invalid-regexp': SEVERITY,

    // While examples such as window are obvious, there are often hundreds of built-in global objects provided by JavaScript environments.
    // It can be hard to know if you’re assigning to a global variable or not.
    'no-global-assign': SEVERITY,

    // Eliminate unnecessary and potentially confusing blocks at the top level of a script or within other blocks.
    'no-lone-blocks': SEVERITY,

    // If an if statement is the only statement in the else block, it is often clearer to use an else if form.
    'no-lonely-if': SEVERITY,

    // Magic numbers should be avoided as they often lack documentation. Forcing them to be stored in variables gives them implicit
    // documentation.
    '@typescript-eslint/no-magic-numbers': [
      SEVERITY,
      {
        // `0` is useful for checking existence (eg `index < 0`)
        // `1` is useful in situations where it has no explicit value (eg `arr.length - 1`)
        ignore: [
          -1,
          0,
          1,
        ],
        // Allow targeting array indexes without a variable
        ignoreArrayIndexes: true,
        ignoreNumericLiteralTypes: true,
        ignoreEnums: false,
      },
    ],

    // Enclosing complex expressions by parentheses clarifies the developer’s intention, which makes the code more readable.
    'no-mixed-operators': SEVERITY,

    // Helps to maintain a consistent, readable style in the codebase.
    'no-mixed-spaces-and-tabs': SEVERITY,

    // This rule aims to reduce the scrolling required when reading through your code.
    'no-multiple-empty-lines': [
      SEVERITY,
      {
        max: 2,
        maxEOF: 1,
      },
    ],

    // Negated conditions are more difficult to understand. Code can be made more readable by inverting the condition instead.
    'no-negated-condition': SEVERITY,

    // There is little reason to use String, Number, or Boolean as constructors. In almost all cases, the regular function-call version is
    // more appropriate.
    'no-new-wrappers': SEVERITY,

    // Don't allow debugging logs to enter production
    'no-restricted-syntax': [
      SEVERITY,
      {
        selector: 'CallExpression[callee.object.name="console"][callee.property.name=/^(debug|info|time|timeEnd|trace)$/]',
        message: 'Unexpected property on console object was called',
      },
    ],

    // For some libraries, importing the library directly can cause unused submodules to be loaded, so you may want to block these imports
    // and require that users directly import only the submodules they need. In other cases, you may simply want to ban an import because
    // using it is undesirable or unsafe.
    'no-restricted-imports': [
      SEVERITY,
      {
        paths: [
          {
            name: 'rxjs/Rx',
            message: 'Please import directly from \'rxjs\' instead',
          },
          {
            name: 'lodash',
            message: 'Please import directly from lodash individual modules instead',
          },
        ],
      },
    ],

    // In JavaScript assignment can happen at almost any point. Because of this, an errant equals sign can end up causing assignment when
    // the true intent was to do a comparison. Because of this ambiguity, it’s considered a best practice to not use assignment in return
    // statements.
    'no-return-assign': SEVERITY,

    // Self assignments have no effect, so probably those are an error due to incomplete refactoring.
    'no-self-assign': SEVERITY,

    // When a variable in a local scope and a variable in the containing scope have the same name, shadowing occurs. Shadowing makes it
    // impossible to access the variable in the containing scope and obscures to what value an identifier actually refers.
    'no-shadow': SEVERITY,

    // ES5 §15.1.1 Value Properties of the Global Object (NaN, Infinity, undefined) as well as strict mode restricted identifiers eval and
    // arguments are considered to be restricted names in JavaScript. Defining them to mean something else can have unintended consequences
    // and confuse others reading the code.
    'no-shadow-restricted-names': SEVERITY,

    // Missing elements are probably an accidentally duplicated comma.
    'no-sparse-arrays': SEVERITY,

    // This rule aims to warn when a regular string contains what looks like a template literal placeholder.
    'no-template-curly-in-string': SEVERITY,

    // Throwing a string lacks any stack trace information and other important data properties
    'no-throw-literal': SEVERITY,

    // Keeps version control diffs clean as it prevents accidental whitespace from being committed.
    'no-trailing-spaces': SEVERITY,

    // Locate potential ReferenceErrors resulting from misspellings of variable and parameter names, or accidental implicit globals (for
    // example, from forgetting the var keyword in a for loop initializer).
    'no-undef': SEVERITY,

    // A variable that is declared and not initialized to any value automatically gets the value of undefined.
    'no-undef-init': SEVERITY,

    // Since we are using TypeScript to define public vs private items, using a leading underscore can be confusing.
    'no-underscore-dangle': [
      SEVERITY,
      {
      // Allow after `this` to support private properties for getter/setter that cannot be named indentically.
        allowAfterThis: true,
        enforceInMethodNames: true,
      },
    ],

    // Disallow ternary operators when simpler alternatives exist.
    'no-unneeded-ternary': SEVERITY,

    // Because the return, throw, break, and continue statements unconditionally exit a block of code, any statements after them cannot be
    // executed. Unreachable statements are usually a mistake.
    'no-unreachable': SEVERITY,

    // Just as developers might type `-a + b` when they mean `-(a + b)` for the negative of a sum, they might type `!key` in object by
    // mistake when they almost certainly mean `!(key in object)` to test that a key is not in an object.
    'no-unsafe-negation': SEVERITY,

    // Labels that are declared and not used anywhere in the code are most likely an error due to incomplete refactoring.
    'no-unused-labels': SEVERITY,

    // It’s unnecessary to use computed properties with literals.
    'no-useless-computed-key': SEVERITY,

    // Useless string concatenation is likely the result of refactoring where a variable was removed from the concatenation.
    'no-useless-concat': SEVERITY,

    // Declaring variables using var has several edge case behaviors that make var unsuitable for modern code. Variables declared by var
    // have their parent function block as their scope, ignoring other control flow statements. vars have declaration “hoisting” (similar to
    // functions) and can appear to be used before declaration.
    'no-var': SEVERITY,

    // Helps to maintain a consistent, readable style in the codebase.
    'no-whitespace-before-property': SEVERITY,

    // Helps to maintain a consistent, readable style in the codebase.
    'object-curly-newline': [
      SEVERITY,
      { consistent: true },
    ],

    // Helps to maintain a consistent, readable style in the codebase.
    'object-curly-spacing': [
      SEVERITY,
      'always',
    ],

    // Helps to maintain a consistent, readable style in the codebase.
    'object-property-newline': SEVERITY,

    // Enforces use of ES6 object literal shorthand.
    'object-shorthand': [
      SEVERITY,
      'always',
    ],

    // Separating declarations one-per-line creates a more readable style.
    'one-var': [
      SEVERITY,
      'never',
    ],

    // Helps to maintain a consistent, readable style in the codebase.
    'operator-linebreak': [
      SEVERITY,
      'before',
      {
        overrides: {
          '=': 'ignore',
        },
      },
    ],

    // Prefer arrow functions
    'prefer-arrow/prefer-arrow-functions': [
      SEVERITY,
      {
        singleReturnOnly: true,
      },
    ],

    // If a variable is never reassigned, using the const declaration is better.
    'prefer-const': SEVERITY,

    // Object spread allows for better type checking and inference.
    'prefer-object-spread': SEVERITY,

    // Helps to maintain a consistent, readable style in the codebase.
    'prefer-template': SEVERITY,

    // Helps to maintain a consistent, readable style in the codebase.
    'quotes': [
      SEVERITY,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],

    // Only property names which require quotes may be quoted (e.g. those with spaces in them).
    'quote-props': [
      SEVERITY,
      'consistent-as-needed',
    ],

    // Always specify this parameter to eliminate reader confusion and to guarantee predictable behavior. Different implementations produce
    // different results when a radix is not specified, usually defaulting the value to 10.
    'radix': SEVERITY,

    // Helps to maintain a consistent, readable style in the codebase.
    'rest-spread-spacing': SEVERITY,

    // Helps to maintain a consistent, readable style in the codebase.
    'semi-spacing': SEVERITY,

    // Helps to maintain a consistent, readable style in the codebase.
    'space-before-blocks': SEVERITY,

    // Helps to maintain a consistent, readable style in the codebase.
    'space-before-function-paren': [
      SEVERITY,
      'never',
    ],

    // Helps to maintain a consistent, readable style in the codebase.
    'spaced-comment': [
      SEVERITY,
      'always',
    ],

    // Helps to maintain a consistent, readable style in the codebase.
    'space-infix-ops': SEVERITY,

    // Helps to maintain a consistent, readable style in the codebase.
    'space-in-parens': [
      SEVERITY,
      'never',
    ],

    // Helps to maintain a consistent, readable style in the codebase.
    'space-unary-ops': SEVERITY,

    // Because NaN is unique in JavaScript by not being equal to anything, including itself, the results of
    // comparisons to NaN are confusing
    'use-isnan': SEVERITY,

    // It is usually a typing mistake to compare the result of a typeof operator to other string literals.
    'valid-typeof': SEVERITY,

    // Use a more natural way to describe the comparison.
    'yoda': SEVERITY,
  },


  /*
   * Override rules for specific file patterns
   */
  overrides: [
    // TypeScript and Angular specific rules
    {
      files: ['*.ts'],
      plugins: [
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/ROADMAP.md
        '@typescript-eslint',
        // https://github.com/angular-eslint/angular-eslint
        '@angular-eslint',
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2020,
        project: './tsconfig.json',
        sourceType: 'module',
        tsconfigRootDir: './',
      },
      settings: {
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts'],
        },
        'import/resolver': {
          'node': true,
          'eslint-import-resolver-typescript': true,
        },
      },

      rules: {
        // Ensures that classes use allowed lifecycle method in its body.
        '@angular-eslint/contextual-lifecycle': SEVERITY,

        // Consistent conventions make it easy to quickly identify and reference assets of different types.
        '@angular-eslint/component-class-suffix': SEVERITY,

        // a) Keeps the element names consistent with the specification for Custom Elements.
        // b) Consistent conventions make it easy to quickly identify and reference assets of different types.
        // c) Components are easy to identify in the DOM.
        // See https://angular.io/styleguide#style-02-07 https://angular.io/styleguide#style-05-02 https://angular.io/styleguide#style-05-02
        '@angular-eslint/component-selector': [
          SEVERITY,
          {
            type: 'element',
            style: 'kebab-case',
          },
        ],

        // a) Consistent conventions make it easy to quickly identify and reference assets of different types.
        // b) It is easier to recognize that a symbol is a directive by looking at the template’s HTML.
        // See https://angular.io/styleguide#style-02-06 https://angular.io/styleguide#style-02-08
        '@angular-eslint/directive-selector': [
          SEVERITY,
          {
            type: 'attribute',
            style: 'camelCase',
          },
        ],

        // Large, inline templates and styles obscure the component’s purpose and implementation, reducing readability and maintainability.
        '@angular-eslint/component-max-inline-declarations': [
          SEVERITY,
          {
            animations: 15,
            styles: 3,
            template: 3,
          },
        ],

        // Ensures that directives not implement conflicting lifecycle interfaces.
        '@angular-eslint/no-conflicting-lifecycle': SEVERITY,

        // Explicit calls to lifecycle methods could be confusing. Invoke them is an Angular’s responsability.
        '@angular-eslint/no-lifecycle-call': SEVERITY,

        // Two names for the same property (one private, one public) is inherently confusing.
        '@angular-eslint/no-input-rename': SEVERITY,

        // a) It is easier and more readable to identify which properties in a class are inputs.
        // b) If you ever need to rename the property name associated with @Input, you can modify it in a single place.
        // c) The metadata declaration attached to the directive is shorter and thus more readable.
        // See https://angular.io/styleguide#style-05-12
        '@angular-eslint/no-inputs-metadata-property': SEVERITY,

        // Listeners subscribed to an output with such a name will also be invoked when the native event is raised.
        '@angular-eslint/no-output-native': SEVERITY,

        // Angular allows for an alternative syntax on-*. If the event itself was prefixed with on this would result
        // in an on-onEvent binding expression.
        // See https://angular.io/guide/styleguide#dont-prefix-output-properties
        '@angular-eslint/no-output-on-prefix': SEVERITY,

        // Two names for the same property (one private, one public) is inherently confusing.
        // See https://angular.io/styleguide#style-05-13
        '@angular-eslint/no-output-rename': SEVERITY,

        // a) It is easier and more readable to identify which properties in a class are events.
        // b) If you ever need to rename the event name associated with @Output, you can modify it in a single place.
        // c) The metadata declaration attached to the directive is shorter and thus more readable.
        // See https://angular.io/styleguide#style-05-12
        '@angular-eslint/no-outputs-metadata-property': SEVERITY,

        // Impure pipes do not perform well because they run on every change detection cycle.
        '@angular-eslint/no-pipe-impure': SEVERITY,

        // Prefer to declare @Output as readonly since they should not be reassigned.
        '@angular-eslint/prefer-output-readonly': SEVERITY,

        // Omitting the component selector makes debugging difficult.
        '@angular-eslint/use-component-selector': SEVERITY,

        // Interfaces prescribe typed method signatures. Use those signatures to flag spelling and syntax mistakes.
        '@angular-eslint/use-lifecycle-interface': SEVERITY,

        // Interfaces prescribe typed method signatures. Use those signatures to flag spelling and syntax mistakes.
        '@angular-eslint/use-pipe-decorator': SEVERITY,

        // Interfaces prescribe typed method signatures. Use those signatures to flag spelling and syntax mistakes.
        '@angular-eslint/use-pipe-transform-interface': SEVERITY,

        // JavaScript and general programming convention is to refer to classes in PascalCase.
        // It can be confusing to use camelCase or other conventions for class names.
        '@typescript-eslint/class-name-casing': SEVERITY,

        // Interfaces are generally preferred over type literals because interfaces can be implemented, extended and merged.
        '@typescript-eslint/consistent-type-definitions': SEVERITY,

        // Explicit visibility declarations can make code more readable and accessible for those new to TS. Members lacking a visibility
        // declaration may be an indication of an accidental leak of class internals.
        '@typescript-eslint/explicit-member-accessibility': [
          SEVERITY,
          { overrides: { constructors: 'no-public' } },
        ],

        // An interface or literal type with just a call signature can be written as a function type.
        '@typescript-eslint/prefer-function-type': SEVERITY,

        // Using any as a type declaration nullifies the compile-time benefits of the type system.
        '@typescript-eslint/no-explicit-any': SEVERITY,

        // Explicit types where they can be easily inferred by the compiler make code more verbose.
        '@typescript-eslint/no-inferrable-types': SEVERITY,

        // Interfaces in TypeScript are not meant to describe constructors on their implementations.
        '@typescript-eslint/no-misused-new': SEVERITY,

        // Using non-null assertion cancels the benefits of the strict null checking mode.
        '@typescript-eslint/no-non-null-assertion': SEVERITY,

        // Comparing boolean values to boolean literals is unnecessary, as those expressions will result in booleans too.
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': SEVERITY,

        // This rule prohibits using a type assertion that does not change the type of an expression.
        '@typescript-eslint/no-unnecessary-type-assertion': SEVERITY,

        // Detects potential errors where an assignment or function call was intended.
        '@typescript-eslint/no-unused-expressions': [
          SEVERITY,
          {
            allowTernary: true,
            allowShortCircuit: true,
          },
        ],

        // For cases where the index is only used to read from the array being iterated, a for-of loop is easier to read and write.
        '@typescript-eslint/prefer-for-of': SEVERITY,

        // When adding two variables, operands must both be of type number or of type string
        '@typescript-eslint/restrict-plus-operands': SEVERITY,

        // Helps to maintain a consistent, readable style in the codebase.
        '@typescript-eslint/semi': SEVERITY,

        // Helps to maintain a consistent, readable style in the codebase.
        '@typescript-eslint/type-annotation-spacing': DISABLED,

        // Warns for any two overloads that could be unified into one by using a union or an optional/rest parameter.
        '@typescript-eslint/unified-signatures': SEVERITY,
      },
    },

    // All test and mock files
    {
      files: [
        '**/*.spec.ts',
        '**/*.mock.ts',
        // Sass test file:
        '**/test-sass.js',
        // Test helper files:
        '**/test-helpers.ts',
        // Test component files:
        '**/test-components.ts',
      ],
      env: {
        jest: true,
      },
      rules: {
        '@typescript-eslint/no-explicit-any': DISABLED,
        '@typescript-eslint/no-non-null-assertion': DISABLED,
        '@angular-eslint/component-selector': DISABLED,
        '@angular-eslint/directive-selector': DISABLED,
        '@angular-eslint/component-class-suffix': DISABLED,
        '@angular-eslint/use-component-selector': DISABLED,
        '@angular-eslint/component-max-inline-declarations': DISABLED,
        '@angular-eslint/no-lifecycle-call': DISABLED,
        '@typescript-eslint/explicit-member-accessibility': DISABLED,
        'dot-notation': DISABLED,
        'guard-for-in': DISABLED,
        'jsdoc/require-jsdoc': DISABLED,
        'line-comment-position': DISABLED,
        'no-console': DISABLED,
        '@typescript-eslint/no-magic-numbers': DISABLED,
        'no-multiple-empty-lines': [
          SEVERITY,
          { max: 1 },
        ],
        'no-underscore-dangle': DISABLED,
        'padded-blocks': [
          SEVERITY,
          'never',
        ],
      },
    },

    // HTML files
    {
      files: ['**/*.component.html'],
      parser: '@angular-eslint/template-parser',
      plugins: ['@angular-eslint/template'],
    },
  ],
};
