module.exports = {
  'env' : {
    'browser' : true,
    'node' : true
  },
  'extends' : [
    'eslint:recommended',
    'plugin:vue/vue3-recommended'
  ],
  'rules' : {
    // spacing
    'arrow-spacing' : 'error',
    'block-spacing' : 'error',
    'comma-spacing' : ['error', {
      'before' : false, 
      'after' : true 
    }],
    'key-spacing' : ['error', {
      'beforeColon' : true, 
      'afterColon' : true 
    }],
    'no-multi-spaces' : [
      'error',
      { 'ignoreEOLComments' : false }
    ],
    'object-curly-spacing' : ['error', 'always'],
    'func-call-spacing' : ['error', 'never'],
    'no-multiple-empty-lines' : ['error', {
      'max' : 2, 
      'maxEOF' : 1, 'maxBOF' : 1 
    }],
    
    // style
    'brace-style' : ['error', 'stroustrup'],
    'comma-style' : ['error', 'last'],
    'object-curly-newline' : ['error', {
      'ObjectExpression' : { 'multiline' : true },
      'ObjectPattern' : 'never',
      'ImportDeclaration' : 'never',
      'ExportDeclaration' : {
        'multiline' : true,
        'minProperties' : 3 
      }
    }],
    'indent' : ['error', 2],
    'dot-location' : [
      'error',
      'property'
    ],
    'quotes' : ['error', 'single'],
    'semi' : [
      'error',
      'always'
    ],
    'comma-dangle' : [
      'error',
      'never'
    ],
    // vue
    'vue/html-closing-bracket-newline' : [
      'error',
      {
        'singleline' : 'never',
        'multiline' : 'never'
      }
    ],
    'vue/html-self-closing' : [
      'error',
      {
        'html' : {
          'void' : 'never',
          'normal' : 'never',
          'component' : 'always'
        },
        'svg' : 'always',
        'math' : 'always'
      }
    ]
  }
};