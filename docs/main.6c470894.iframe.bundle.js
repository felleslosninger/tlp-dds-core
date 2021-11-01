(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{302:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"__page",(function(){return __page}));__webpack_require__(18),__webpack_require__(205),__webpack_require__(5),__webpack_require__(9),__webpack_require__(0);var _mdx_js_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(3),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(52),storybook_design_token_dist_doc_blocks__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(121),_excluded=(__webpack_require__(917),["components"]);function _extends(){return _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var layoutProps={};function MDXContent(_ref){var components=_ref.components,props=_objectWithoutProperties(_ref,_excluded);return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_6__.Meta,{title:"Designsystem/Tokens",mdxType:"Meta"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("h1",{id:"design-tokens"},"Design Tokens"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("p",null,"På denne siden finner du alle design tokens og instrukser til hvordan man kan bruke de."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("h2",{id:"innhold"},"Innhold"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("ul",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("a",{parentName:"li",href:"#kom-i-gang"},"Kom i gang"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("ul",{parentName:"li"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("a",{parentName:"li",href:"#cdn"},"CDN")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("a",{parentName:"li",href:"#npm"},"NPM")))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("a",{parentName:"li",href:"#tokens"},"Tokens"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("ul",{parentName:"li"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("a",{parentName:"li",href:"#color"},"Color")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("a",{parentName:"li",href:"#spacing"},"Spacing")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("a",{parentName:"li",href:"#typography"},"Typography"))))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("h2",{id:"kom-i-gang"},"Kom i gang"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("h4",{id:"cdn"},"CDN"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("a",{parentName:"p",href:"https://www.jsdelivr.com/package/npm/@digdir/ds-tokens",target:"_blank",rel:"nofollow noopener noreferrer"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("img",{parentName:"a",src:"https://data.jsdelivr.com/v1/package/npm/@digdir/ds-tokens/badge",alt:null}))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("ol",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("li",{parentName:"ol"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("p",{parentName:"li"},"Link stilarked i ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("inlineCode",{parentName:"p"},"<head>")," i HTML-dokumentet.")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("li",{parentName:"ol"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("p",{parentName:"li"},"Bruk variablene etter behov i inkluderte CSS-stilark."))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="no">\n  <head>\n    \x3c!-- [Meta-tags] --\x3e\n    \x3c!-- Endre @1.0.0 i href-lenken til ønsket versjon --\x3e\n    <link\n      rel="stylesheet"\n      href="https://cdn.jsdelivr.net/npm/@digdir/ds-tokens@1.0.0/build/tokens.css"\n    />\n  </head>\n  \x3c!-- Bruk variablene i css stilark --\x3e\n  <body>\n    \x3c!-- [Innhold] --\x3e\n  </body>\n</html>\n')),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("h4",{id:"npm"},"NPM"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/@digdir/ds-tokens",target:"_blank",rel:"nofollow noopener noreferrer"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("img",{parentName:"a",src:"https://img.shields.io/npm/dm/@digdir/ds-tokens.svg",alt:null}))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("ol",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("li",{parentName:"ol"},"Installer pakken i kommandolinjen ved hjelp av NPM eller Yarn:")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("inlineCode",{parentName:"p"},"npm install @digdir/ds-tokens")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("p",null,"eller"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("inlineCode",{parentName:"p"},"yarn add @digdir/ds-tokens")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("ol",{start:2},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("li",{parentName:"ol"},"Importer og bruk deretter variablene i ønsket format:")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("h5",{id:"css"},"CSS"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("code",{parentName:"pre",className:"language-css"},"/* Importer */\n@import '@digdir/ds-tokens/build/tokens.css';\n/* Bruk variablene på følgende format: */\n:root {\n  --my-text-color: var(--color-text-background-light);\n}\n")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("h5",{id:"scss"},"SCSS"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("code",{parentName:"pre",className:"language-scss"},"// Importer\n@use '@digdir/ds-tokens/build/tokens.scss' as *;\n// Bruk variablene på følgende format:\n$my-text-color: $color-text-background-light;\n")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("h5",{id:"javascript"},"Javascript"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("code",{parentName:"pre",className:"language-javascript"},"// Importer\nimport tokens from '@digdir/ds-tokens/build/tokens.js'\n// Bruk variablene på følgende format:\nconst myTextColor = tokens.color.text.background.light\n")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("h2",{id:"tokens"},"Tokens"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("h3",{id:"color"},"Color"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(storybook_design_token_dist_doc_blocks__WEBPACK_IMPORTED_MODULE_7__.DesignTokenDocBlock,{categoryName:"Colors",mdxType:"DesignTokenDocBlock"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("h3",{id:"spacing"},"Spacing"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(storybook_design_token_dist_doc_blocks__WEBPACK_IMPORTED_MODULE_7__.DesignTokenDocBlock,{categoryName:"Spacing",mdxType:"DesignTokenDocBlock"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("h3",{id:"typography"},"Typography"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("h5",{id:"font-size"},"Font Size"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(storybook_design_token_dist_doc_blocks__WEBPACK_IMPORTED_MODULE_7__.DesignTokenDocBlock,{categoryName:"FontSize",mdxType:"DesignTokenDocBlock"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("h5",{id:"font-weight"},"Font Weight"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(storybook_design_token_dist_doc_blocks__WEBPACK_IMPORTED_MODULE_7__.DesignTokenDocBlock,{categoryName:"FontWeight",mdxType:"DesignTokenDocBlock"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("h5",{id:"line-height"},"Line Height"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(storybook_design_token_dist_doc_blocks__WEBPACK_IMPORTED_MODULE_7__.DesignTokenDocBlock,{categoryName:"LineHeight",mdxType:"DesignTokenDocBlock"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("h5",{id:"font-family"},"Font Family"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(storybook_design_token_dist_doc_blocks__WEBPACK_IMPORTED_MODULE_7__.DesignTokenDocBlock,{categoryName:"FontFamily",mdxType:"DesignTokenDocBlock"}))}MDXContent.isMDXComponent=!0;var __page=function __page(){throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};var componentMeta={title:"Designsystem/Tokens",includeStories:["__page"]},mdxStoryNameToKey={};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs=Object.assign({},componentMeta.parameters.docs||{},{page:function page(){return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_6__.AddContext,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentMeta:componentMeta},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(MDXContent,null))}}),__webpack_exports__.default=componentMeta},307:function(module,exports){},308:function(module,exports){},473:function(module,exports){},476:function(module,exports){},517:function(module,exports,__webpack_require__){__webpack_require__(518),__webpack_require__(673),__webpack_require__(674),__webpack_require__(926),__webpack_require__(928),__webpack_require__(853),__webpack_require__(929),__webpack_require__(930),__webpack_require__(927),__webpack_require__(923),__webpack_require__(931),__webpack_require__(924),__webpack_require__(925),__webpack_require__(932),module.exports=__webpack_require__(866)},584:function(module,exports){},674:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(364)},864:function(module,exports,__webpack_require__){var map={"./annotatedTokens.stories.css":865};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=864},865:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_exports__.default="/* https://github.com/UX-and-I/storybook-design-token#available-presenters */\n\n:root {\n  /**\n  * @tokens Colors\n  * @presenter Color\n  */\n  --color-interface-error: #b30000;\n  --color-interface-error-light: #fdbfbf;\n  --color-interface-interaction: #0051be;\n  --color-interface-interaction-light: #bacfed;\n  --color-interface-success: #116e31;\n  --color-interface-success-light: #a4e3b9;\n  --color-interface-warning: #b38d18;\n  --color-interface-warning-light: #ffe491;\n  --color-neutral-white: #ffffff;\n  --color-neutral-grey-100: #f4f5f6;\n  --color-neutral-grey-200: #e9eaec;\n  --color-neutral-grey-300: #d2d5d8;\n  --color-neutral-grey-400: #bcbfc5;\n  --color-neutral-grey-500: #a5aab1;\n  --color-neutral-grey-600: #68707c;\n  --color-neutral-grey-700: #4b5563;\n  --color-neutral-grey-800: #1e2b3c;\n  --color-brand-first-100: #feefef;\n  --color-brand-first-200: #fddfe0;\n  --color-brand-first-300: #fbbfc1;\n  --color-brand-first-400: #f89fa1;\n  --color-brand-first-500: #f67f82;\n  --color-brand-first-600: #f45f63;\n  --color-brand-first-700: #dc5659;\n  --color-brand-first-800: #c34c4f;\n  --color-brand-second-100: #fcf7e9;\n  --color-brand-second-200: #faeec2;\n  --color-brand-second-300: #f5dda6;\n  --color-brand-second-400: #efcc79;\n  --color-brand-second-500: #eabb4d;\n  --color-brand-second-600: #e5aa20;\n  --color-brand-second-700: #ce991d;\n  --color-brand-second-800: #b7881a;\n  --color-brand-third-100: #e9f5ff;\n  --color-brand-third-200: #d2eafd;\n  --color-brand-third-300: #a5d6fb;\n  --color-brand-third-400: #78c1f9;\n  --color-brand-third-500: #4badf7;\n  --color-brand-third-600: #1e98f5;\n  --color-brand-third-700: #1b88dd;\n  --color-brand-third-800: #156aac;\n  --color-text-background-dark: var(--color-neutral-white);\n  --color-text-background-light: var(--color-neutral-grey-800);\n  /**\n  * @tokens Spacing\n  * @presenter Spacing\n  */\n  --spacing-base-1: 0.25rem;\n  --spacing-base-2: 0.5rem;\n  --spacing-base-3: 0.75rem;\n  --spacing-base-4: 1rem;\n  --spacing-base-5: 1.25rem;\n  --spacing-base-6: 1.5rem;\n  --spacing-base-7: 1.75rem;\n  --spacing-base-8: 2rem;\n  --spacing-base-9: 2.25rem;\n  --spacing-base-10: 2.5rem;\n  --spacing-base-11: 2.75rem;\n  --spacing-base-12: 3rem;\n  --spacing-base-13: 3.25rem;\n  --spacing-base-14: 3.5rem;\n  --spacing-base-15: 3.75rem;\n  --spacing-base-16: 4rem;\n  --spacing-base-17: 4.25rem;\n  --spacing-base-18: 4.5rem;\n  --spacing-base-19: 4.75rem;\n  --spacing-base-20: 5rem;\n  /**\n  * @tokens FontFamily\n  * @presenter FontFamily\n  */\n  --font-family: 'Inter', sans-serif;\n  /**\n  * @tokens LineHeight\n  * @presenter LineHeight\n  */\n  --font-line-height-10: 1.3;\n  --font-line-height-20: 1.4;\n  --font-line-height-30: 1.5;\n  --font-line-height-40: 1.7;\n  /**\n  * @tokens FontSize\n  * @presenter FontSize\n  */\n  --font-size-100: 0.75rem;\n  --font-size-200: 0.875rem;\n  --font-size-300: 1rem;\n  --font-size-400: 1.125rem;\n  --font-size-500: 1.25rem;\n  --font-size-600: 1.5rem;\n  --font-size-700: 1.75rem;\n  --font-size-800: 2.25rem;\n  --font-size-900: 2.75rem;\n  /**\n    * @tokens FontWeight\n    * @presenter FontWeight\n    */\n  --font-weight-regular: 400;\n  --font-weight-medium: 500;\n}\n"},866:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(364).configure)([__webpack_require__(867),__webpack_require__(871)],module,!1)}).call(this,__webpack_require__(160)(module))},867:function(module,exports,__webpack_require__){var map={"./stories/Introduction.stories.mdx":868,"./stories/components.stories.mdx":869,"./stories/templates.stories.mdx":870};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=867},868:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"__page",(function(){return __page}));__webpack_require__(18),__webpack_require__(205),__webpack_require__(5),__webpack_require__(9),__webpack_require__(0);var _mdx_js_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(3),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(52),_excluded=["components"];function _extends(){return _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var layoutProps={};function MDXContent(_ref){var components=_ref.components,props=_objectWithoutProperties(_ref,_excluded);return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_6__.Meta,{title:"Introduksjon",mdxType:"Meta"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("h1",{id:"velkommen-til-digdir-admin-sitt-design-system"},"Velkommen til Digdir admin sitt design system!"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("p",null,"Denne siden vil gi en introduksjon til dette biblioteket, hva det inneholder og hvordan man kan ta det i bruk."))}MDXContent.isMDXComponent=!0;var __page=function __page(){throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};var componentMeta={title:"Introduksjon",includeStories:["__page"]},mdxStoryNameToKey={};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs=Object.assign({},componentMeta.parameters.docs||{},{page:function page(){return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_6__.AddContext,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentMeta:componentMeta},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(MDXContent,null))}}),__webpack_exports__.default=componentMeta},869:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"__page",(function(){return __page}));__webpack_require__(18),__webpack_require__(205),__webpack_require__(5),__webpack_require__(9),__webpack_require__(0);var _mdx_js_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(3),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(52),_excluded=["components"];function _extends(){return _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var layoutProps={};function MDXContent(_ref){var components=_ref.components,props=_objectWithoutProperties(_ref,_excluded);return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_6__.Meta,{title:"Designsystem/Komponenter/Introduksjon",mdxType:"Meta"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("h1",{id:"bruk-av-komponenter"},"Bruk av komponenter"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("strong",{parentName:"p"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("em",{parentName:"strong"},"🛠Under arbeid🛠"))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("p",null,"Denne siden vil gi en introduksjon på hvordan komme i gang med bruk av komponentene i dette biblioteket."))}MDXContent.isMDXComponent=!0;var __page=function __page(){throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};var componentMeta={title:"Designsystem/Komponenter/Introduksjon",includeStories:["__page"]},mdxStoryNameToKey={};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs=Object.assign({},componentMeta.parameters.docs||{},{page:function page(){return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_6__.AddContext,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentMeta:componentMeta},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(MDXContent,null))}}),__webpack_exports__.default=componentMeta},870:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"__page",(function(){return __page}));__webpack_require__(18),__webpack_require__(205),__webpack_require__(5),__webpack_require__(9),__webpack_require__(0);var _mdx_js_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(3),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(52),_excluded=["components"];function _extends(){return _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var layoutProps={};function MDXContent(_ref){var components=_ref.components,props=_objectWithoutProperties(_ref,_excluded);return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_6__.Meta,{title:"Designsystem/Maler/Introduksjon",mdxType:"Meta"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("h1",{id:"bruk-av-maler"},"Bruk av maler"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("strong",{parentName:"p"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("em",{parentName:"strong"},"🛠Under arbeid🛠"))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("p",null,"Denne siden vil gi en introduksjon til HTML-maler, ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("strong",{parentName:"p"},"eksempler")," på hvordan de ulike komponentene kan være satt sammen på en side."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("h3",{id:"eksempel"},"Eksempel"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="no">\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1" />\n\n    \x3c!-- DigDir admin design system assets --\x3e\n    <link rel="stylesheet" href="../../css/build/index.css" />\n    \x3c!-- ES6 script --\x3e\n    <script type="module" src="../../components/build/index.js"><\/script>\n    \x3c!-- ES5 fallback script --\x3e\n    <script nomodule src="../../components/build/index.cjs" defer><\/script>\n\n    <title>Tittel | DigDir admin</title>\n  </head>\n  <body>\n    <div class="page">\n      <div class="top-bar"></div>\n\n      <div class="sidebar">\n        <nav>\n          <ul class="menu"></ul>\n        </nav>\n      </div>\n\n      <main class="content">\n        <button class="button">button</button>\n      </main>\n    </div>\n  </body>\n</html>\n')))}MDXContent.isMDXComponent=!0;var __page=function __page(){throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};var componentMeta={title:"Designsystem/Maler/Introduksjon",includeStories:["__page"]},mdxStoryNameToKey={};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs=Object.assign({},componentMeta.parameters.docs||{},{page:function page(){return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_6__.AddContext,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentMeta:componentMeta},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(MDXContent,null))}}),__webpack_exports__.default=componentMeta},871:function(module,exports,__webpack_require__){var map={"./components/node_modules/@digdir/ds-tokens/src/stories/tokens.stories.mdx":302,"./css/node_modules/@digdir/ds-tokens/src/stories/tokens.stories.mdx":302,"./templates/stories/baseLayout.stories.js":933,"./tokens/src/stories/tokens.stories.mdx":302};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=871},886:function(module,exports){},917:function(module){module.exports=JSON.parse("{}")},918:function(module,exports,__webpack_require__){var api=__webpack_require__(919),content=__webpack_require__(920);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},920:function(module,exports,__webpack_require__){(exports=__webpack_require__(921)(!1)).push([module.i,"\n",""]),module.exports=exports},932:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));__webpack_require__(18),__webpack_require__(5),__webpack_require__(53),__webpack_require__(859),__webpack_require__(860),__webpack_require__(48),__webpack_require__(861),__webpack_require__(862),__webpack_require__(863);var _parameters,client_api=__webpack_require__(122),esm=__webpack_require__(6),tokenContext=(__webpack_require__(26),__webpack_require__(10),__webpack_require__(15),__webpack_require__(16),__webpack_require__(864)),tokenFiles=tokenContext.keys().map((function(filename){return{filename:filename,content:tokenContext(filename).default}})),parameters=((_parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{disabled:!0}}).actions={disabled:!0},_parameters.options={storySort:{order:["Introduksjon","Designsystem",["Tokens","Komponenter","Maler",["Introduksjon"]]]}},_parameters.previewTabs={"storybook/docs/panel":{hidden:!0}},_parameters.designToken={files:tokenFiles},_parameters);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(client_api.c)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(client_api.d)(loader,!1)}));case"parameters":return Object(client_api.e)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(client_api.a)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(client_api.b)(enhancer)}));case"render":return Object(client_api.g)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(client_api.e)(v,!1);default:return console.log(key+" was not supported :( !")}}))},933:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(918),__webpack_require__(12),__webpack_require__(922)}},[[517,2,3]]]);