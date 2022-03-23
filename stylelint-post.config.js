/**
 * Secondary config used to lint CSS output.
 * The CSS thus needs to be built with transpiler script,
 * before this is used.
 *
 * This exists only to make sure there is used (correct) prefix in CSS class names,
 * because the linter rule does not handle variables used in classnames in .scss files.
 * Including this rule in the CI process guarantees that the CSS package will not conflict
 * with users other class names (not starting with this domains prefix).
 */
module.exports = {
  extends: ['stylelint-config-prettier'],
  rules: {
    'selector-class-pattern': 'dds-.+',
  },
}
