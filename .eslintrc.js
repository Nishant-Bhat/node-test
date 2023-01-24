module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 12
  },
  "plugins": [
    "@typescript-eslint"
  ],
  "rules": {
    "@typescript-eslint/indent": ["error", 2],
    "@typescript-eslint/explicit-function-return-type": ["off", 0],
    "@typescript-eslint/no-angle-bracket-type-assertion": ["off", 0],
    "import/no-extraneous-dependencies": "off",
    "import/extensions": "off",
    "comma-dangle": "off",
    "linebreak-style": "off",
    "no-dupe-class-members": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "eqeqeq": "error",
    "no-plusplus": "off", // TODO: Review this rule https://eslint.org/docs/rules/no-plusplus
    "class-methods-use-this": "off", // Not all class methods should use this - the rule argues that they should be static but I don't agree
    "prefer-promise-reject-errors": "off",
    "no-restricted-syntax": ["error", "ForInStatement", "LabeledStatement", "WithStatement"], // Done this to exclude errors on for x of y
    // "no-unused-vars": [1, {
    //   "vars": "local",
    //   "varsIgnorePattern": "^_",
    //   "args": "after-used",
    //   "argsIgnorePattern": "^_"
    // }],
    "default-case": "off", 
    "consistent-return": "off",
    "no-param-reassign": "off",
    "no-mixed-operators": "warn",
  },
  "overrides": [{
    "files": ["*_spec.js", "*_spec.ts", "*_spec.tsx", "*.spec.js", "*.spec.ts", "*.spec.tsx"],
    "globals": {
      "describe": "readonly",
      "expect": "readonly",
      "jest": "readonly"
    }
  }]

};
