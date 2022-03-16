# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [5.2.0](https://github.com/felleslosninger/tlp-storybook-base/compare/@digdir/ds-core-css@5.1.0...@digdir/ds-core-css@5.2.0) (2022-03-16)


### Bug Fixes

* **input-field:** responsive min-width limited to width of parent container ([25cbaaf](https://github.com/felleslosninger/tlp-storybook-base/commit/25cbaafefdecf6a27c214b1aea0a65acc4f52751))
* **panel-link:** add vertical padding (for when label is wrapping to multiple lines) ([e68e31e](https://github.com/felleslosninger/tlp-storybook-base/commit/e68e31e3d46bd9d38e528283c3adaf514e2f6c29))
* **panel-link:** adjust min-height to current design guidelines (M: 40px / L: 56px) ([2f5cb9b](https://github.com/felleslosninger/tlp-storybook-base/commit/2f5cb9b89f5953ec93a7add4b3fcc939de1ce419))
* **panel-link:** responsive min-width limited to width of parent container ([d08d4d3](https://github.com/felleslosninger/tlp-storybook-base/commit/d08d4d3398f9808345cabeb8f4593e780218286b))


### Features

* **panel-link:** add padding between label and icon ([0f4f001](https://github.com/felleslosninger/tlp-storybook-base/commit/0f4f00116a9ff6ba64bb0254572688d90cee4ef7))





# [5.1.0](https://github.com/felleslosninger/tlp-storybook-base/compare/@digdir/ds-core-css@5.0.0...@digdir/ds-core-css@5.1.0) (2022-03-14)


### Features

* **icon-link:** add utility class for --inline variant: inherit font attributes from parent element ([356f381](https://github.com/felleslosninger/tlp-storybook-base/commit/356f381f28278f967ee2bc7be5050caa03116713))
* **icon-link:** change text class from interface to body (font weight from bold to regular) ([d3d35c2](https://github.com/felleslosninger/tlp-storybook-base/commit/d3d35c265444154c6835804ceb8cba5d8f310e07))
* **icon-link:** large variant: fix icon placement to text baseline (remove placement adjustment relative to underline) ([1c740b9](https://github.com/felleslosninger/tlp-storybook-base/commit/1c740b962f7707d0d1a3d24f242ab039dec35ee3))
* **icon-link:** shortcut variant: remove underline in default state ([41ec66c](https://github.com/felleslosninger/tlp-storybook-base/commit/41ec66c98d8b3495bed1bce515fd188669f91cae))





# [5.0.0](https://github.com/felleslosninger/tlp-storybook-base/compare/@digdir/ds-core-css@4.0.2...@digdir/ds-core-css@5.0.0) (2022-03-11)


### Bug Fixes

* **button:** vertically center button content ([b60cf34](https://github.com/felleslosninger/tlp-storybook-base/commit/b60cf34e1f24d9fba82d910668ef609379f254ae))


### Features

* **button:** restructure size set ([d213094](https://github.com/felleslosninger/tlp-storybook-base/commit/d2130946e44cebef002a6cd5cf99bc3cc0209340))
* **checkbox:** large variant: decrease padding between checkbox and label from 16px to 12px ([98c9d2d](https://github.com/felleslosninger/tlp-storybook-base/commit/98c9d2d8a7662d04850d690cfec75a2c3f5865d1))
* **form-field, input-field:** increase font-size of label and error-message from 14px to 16px ([f719be4](https://github.com/felleslosninger/tlp-storybook-base/commit/f719be4d49e54b99d69925830a5f22916d9396e9))
* **input-field:** increase height of medium variant from 32px to 48px ([66c15e4](https://github.com/felleslosninger/tlp-storybook-base/commit/66c15e4c60cf692d6b5ef9b364ff07374987612b))
* **input-field:** reduce horizontal padding in large variant from 24px to 20px ([252ab09](https://github.com/felleslosninger/tlp-storybook-base/commit/252ab090597ccfdc1c225f6b2db92fe3ee16a69d))
* **input-field:** reduce padding around icons ([eb7a72b](https://github.com/felleslosninger/tlp-storybook-base/commit/eb7a72bfe5322e101b62cf0b1774b25c2b11893c))
* **radio:** large variant: decrease padding between radio button checkbox and label from 16px to 12px ([4e82f14](https://github.com/felleslosninger/tlp-storybook-base/commit/4e82f1426ff1b37b1d88cfbd4af31bf3f418c3ba))


### BREAKING CHANGES

* **button:** Size variant modifiers --x-small and --x-large are removed. No modifier (medium size), --small and --large modifiers are kept and adjusted to fit new design guidelines.





## [4.0.2](https://github.com/felleslosninger/tlp-storybook-base/compare/@digdir/ds-core-css@4.0.1...@digdir/ds-core-css@4.0.2) (2022-03-07)


### Bug Fixes

* **icon-link:** remove background color in SVG icon introduced in v4.0.1 ([738e83c](https://github.com/felleslosninger/tlp-storybook-base/commit/738e83c759d342ea2c2d056de92c12b88f141b9b))





## [4.0.1](https://github.com/felleslosninger/tlp-storybook-base/compare/@digdir/ds-core-css@4.0.0...@digdir/ds-core-css@4.0.1) (2022-03-07)


### Bug Fixes

* **icon-link:** rewrite to use underline and non-absolute positioned icon to support use in more contexts ([fccfee7](https://github.com/felleslosninger/tlp-storybook-base/commit/fccfee716d2df7a54ec424291786de92a2ac85cf))
* **link:** use underline instead of border-bottom with responsive underline offset ([5e128a7](https://github.com/felleslosninger/tlp-storybook-base/commit/5e128a7d037c025df8a3755b9e0b8df91f96a38c))





# [4.0.0](https://github.com/felleslosninger/tlp-storybook-base/compare/@digdir/ds-core-css@3.0.1...@digdir/ds-core-css@4.0.0) (2022-02-25)


### Bug Fixes

* **input-field:** update padding to placeholder/text ([b68f66d](https://github.com/felleslosninger/tlp-storybook-base/commit/b68f66d2a49047a7866c80447689f81a9fd6fc4f))
* **panel-link:** large variant: set correct padding between text and icon right ([4521d22](https://github.com/felleslosninger/tlp-storybook-base/commit/4521d2245bf0451a8ba835aae462f644c4ba27fb))


### Code Refactoring

* **input-field:** use directly imported SVG ([1d5e852](https://github.com/felleslosninger/tlp-storybook-base/commit/1d5e852fdfbc8a752ba0dc871adcb2771a65a791))


### BREAKING CHANGES

* **input-field:** The change requires use of wrapper span on SVG elements in the input-field component structure. The classes previously used directly on the SVG's (&__icon-left and &__icon-right) are moved to the parent wrapper span.





## [3.0.1](https://github.com/felleslosninger/tlp-storybook-base/compare/@digdir/ds-core-css@3.0.0...@digdir/ds-core-css@3.0.1) (2022-02-11)


### Bug Fixes

* **breadcrumbs, link:** use consistent link-hover effect for link in breadcrumbs, and make link box size consistent. ([7e53bad](https://github.com/felleslosninger/tlp-storybook-base/commit/7e53badbaf59951653c4146093a0957fb09d2c6b))
* **icon-link:** set border width in shortcut variant to the same as in other variants ([788e3a6](https://github.com/felleslosninger/tlp-storybook-base/commit/788e3a6359a2c0d89cc613a57d6ca29ccf642153))
* **icon-link:** set default border color to grey-600 ([a171c95](https://github.com/felleslosninger/tlp-storybook-base/commit/a171c953ad5a5d0b0b213e76062872623f098648))
* **icon-link:** set default icon color to be grey-800 ([9c0e8ae](https://github.com/felleslosninger/tlp-storybook-base/commit/9c0e8ae128ebf1225cbac6faea43b078c9a7680b))
* **input-field:** disable fixed width, set min/max width ([a836db7](https://github.com/felleslosninger/tlp-storybook-base/commit/a836db7e8051eedce8dd96a03375c5f5249c4506))
* **input-field:** keep placeholder visible when focusing disabled input field ([bcc65ec](https://github.com/felleslosninger/tlp-storybook-base/commit/bcc65ec0a848043fd811134521587832a46d3915))
* **link:** set default border color to grey-600 ([f4f5cd0](https://github.com/felleslosninger/tlp-storybook-base/commit/f4f5cd0983296e97a28d3e11b996c9c790e05fa0))





# [3.0.0](https://github.com/felleslosninger/tlp-storybook-base/compare/@digdir/ds-core-css@2.0.0...@digdir/ds-core-css@3.0.0) (2022-02-08)


### Bug Fixes

* **icon-link:** fix external link icon size and padding ([df71452](https://github.com/felleslosninger/tlp-storybook-base/commit/df71452c17e24a60f4cdba2cd7134e43a859127b))
* **icon-link:** fix icon left placement when text is multiline ([fdf8a38](https://github.com/felleslosninger/tlp-storybook-base/commit/fdf8a3867cdc7a06ad1b331dc6cac9c05a6acea1))
* **icon-link:** fix icon padding on internal and external variants ([6e4493f](https://github.com/felleslosninger/tlp-storybook-base/commit/6e4493f379957e4457a514be54d62e2b5d9b757d))
* **icon-link:** fix shortcut variant icon size and padding ([73c106b](https://github.com/felleslosninger/tlp-storybook-base/commit/73c106b26de0afcc71fc7b780e4f74a95a10ea52))
* **icon-link:** shortcut variant: remove color deviation, use same colors as in other variants ([b1a2bab](https://github.com/felleslosninger/tlp-storybook-base/commit/b1a2bab38b73ce8be2f62ba9866893f4d346aece))
* **input-field:** fix icon-right placement with box anatomy ([f01e749](https://github.com/felleslosninger/tlp-storybook-base/commit/f01e74924fb91aba58d753c6789c42a37c66e8c0))
* **input-field:** fix responsive width ([35c0dd5](https://github.com/felleslosninger/tlp-storybook-base/commit/35c0dd5a029b1010e5ab9bf57c9fd24f5b29e845))
* **input-field:** make placeholder transparent when clicked/focused ([f5a1ffc](https://github.com/felleslosninger/tlp-storybook-base/commit/f5a1ffcb1ac8510619493b5f22e05155036ad52e))
* **input-field:** remove change of placeholder color on hover ([0123747](https://github.com/felleslosninger/tlp-storybook-base/commit/0123747845791662f9dfc2ab3fe3a134adc28501))
* **panel-link:** use body text classes ([b7916e4](https://github.com/felleslosninger/tlp-storybook-base/commit/b7916e48dd2a981ecd894747489333d691e4b0a7))


### Features

* **breadcrumbs:** add breadcrumbs component styling ([438d48f](https://github.com/felleslosninger/tlp-storybook-base/commit/438d48f000a5d34203e3a6f66bb623e5b90364e4))
* **breadcrumbs:** responsiveness: use single parent breadcrumb in mobile viewport width ([b397365](https://github.com/felleslosninger/tlp-storybook-base/commit/b397365f0425d93b807304134548f44072748549))
* **panel-link:** add styling support for variant with no icon left ([38a9b2c](https://github.com/felleslosninger/tlp-storybook-base/commit/38a9b2cafdcfb51984a810dc46676bd9caca23a1))
* **panel-link:** use full border in :hover and :active interaction ([7f3af28](https://github.com/felleslosninger/tlp-storybook-base/commit/7f3af28684d9e3460083465aa1a6fc9df408bd3f))


### BREAKING CHANGES

* **panel-link:** use --icon-left modifier to apply correct padding for variant with icon left.





# [2.0.0](https://github.com/felleslosninger/tlp-storybook-base/compare/@digdir/ds-core-css@1.0.3...@digdir/ds-core-css@2.0.0) (2022-01-31)


### Features

* **icon-link:** remove required svg element class ([f3ea31e](https://github.com/felleslosninger/tlp-storybook-base/commit/f3ea31e49566ca61c15529f13716042633074c2f))





## [1.0.3](https://github.com/felleslosninger/tlp-storybook-base/compare/@digdir/ds-core-css@1.0.2...@digdir/ds-core-css@1.0.3) (2022-01-21)

**Note:** Version bump only for package @digdir/ds-core-css





## [1.0.2](https://github.com/felleslosninger/tlp-storybook-base/compare/@digdir/ds-core-css@1.0.1...@digdir/ds-core-css@1.0.2) (2022-01-21)


### Bug Fixes

* **icon-link:** fit focus outline in large variant ([dacdae6](https://github.com/felleslosninger/tlp-storybook-base/commit/dacdae6132e74710859c26b0fa6d5e38210dce12))
* **icon-link:** remove long border-bottom on click focus ([2d1d0b3](https://github.com/felleslosninger/tlp-storybook-base/commit/2d1d0b315b8822c6d1b729bc46ea3e357dccf654))
* **icon-link:** set box sizing to avoid overriding from potential global CSS selectors ([0435e8c](https://github.com/felleslosninger/tlp-storybook-base/commit/0435e8cff74310950794b5a802ac049c5d37ae3e))





## [1.0.1](https://github.com/felleslosninger/tlp-storybook-base/compare/@digdir/ds-core-css@1.0.0...@digdir/ds-core-css@1.0.1) (2022-01-17)

**Note:** Version bump only for package @digdir/ds-core-css





# [1.0.0](https://github.com/felleslosninger/tlp-storybook-base/compare/@digdir/ds-core-css@0.5.1...@digdir/ds-core-css@1.0.0) (2022-01-17)


### Bug Fixes

* **toggle:** reset browser default margin in hidden input element ([ece53b3](https://github.com/felleslosninger/tlp-storybook-base/commit/ece53b335ccb9f475b6e928ed7c410c0db3aacba))
* **toggle:** set min-height for size consistent focus outline when using single label ([c376dbd](https://github.com/felleslosninger/tlp-storybook-base/commit/c376dbdfc8433fb7cf69355a90a2b612cd630b8c))


### Features

* **checkbox:** add transitions to checkbox ([52177ca](https://github.com/felleslosninger/tlp-storybook-base/commit/52177ca5227ca6cfc1aa7c1ed09288f42067608f))
* **radio:** add transitions to radio button ([6a24f82](https://github.com/felleslosninger/tlp-storybook-base/commit/6a24f8295864e29615ec9dd402af2a6a3ffdc4ec))





## [0.5.1](https://github.com/felleslosninger/tlp-design-admin/compare/@digdir/ds-core-css@0.5.0...@digdir/ds-core-css@0.5.1) (2022-01-13)


### Bug Fixes

* **toggle:** fix toggle button slider position in checked state when using small variant with label left ([4128a89](https://github.com/felleslosninger/tlp-design-admin/commit/4128a89f7a4091753c40518ce0d0e2928d2d1976))





# [0.5.0](https://github.com/felleslosninger/tlp-design-admin/compare/@digdir/ds-core-css@0.4.0...@digdir/ds-core-css@0.5.0) (2022-01-12)


### Bug Fixes

* **css:** input field: fix placeholder color deviation ([ab639bc](https://github.com/felleslosninger/tlp-design-admin/commit/ab639bc2d0cf8419673cab07a6411bc10ab27a21))


### Features

* **css:** icon link: fit icon inside focus outline ([6dceb81](https://github.com/felleslosninger/tlp-design-admin/commit/6dceb812dd9c1adbf760d688806066cee53a8c40))
* **toggle:** add small (compact) modifier ([f91baf7](https://github.com/felleslosninger/tlp-design-admin/commit/f91baf7765fe2fadea92d9393294a93bdc2fba7e))
* **toggle:** add toggle default style ([5170489](https://github.com/felleslosninger/tlp-design-admin/commit/517048903315079a474dd8787bb7ea4ac6104e62))
* **toggle:** add variants: left label and dual label ([96328bb](https://github.com/felleslosninger/tlp-design-admin/commit/96328bb3d419791a8c935c97444ca0b1e0ad8c14))





# [0.4.0](https://github.com/felleslosninger/tlp-design-admin/compare/@digdir/ds-core-css@0.3.0...@digdir/ds-core-css@0.4.0) (2022-01-06)


### Bug Fixes

* **css:** form/text input field: remove hover gap ([9bf77d6](https://github.com/felleslosninger/tlp-design-admin/commit/9bf77d6d3e281db4f8bad6b15da34c48530117e6))
* **css:** input field: fix container width Safari/Firefox ([92d1de0](https://github.com/felleslosninger/tlp-design-admin/commit/92d1de04f98f0bfea7323582dd828d3bb853bb0b))
* **css:** input field: fix focus state deviation in error variant ([abfdb00](https://github.com/felleslosninger/tlp-design-admin/commit/abfdb00ceb7f6c11889eb8260bb38963ea39b1be))
* **css:** input field: reset browser default margin ([07c85ae](https://github.com/felleslosninger/tlp-design-admin/commit/07c85aed6c2dd3fbe24d2ca20322a3ecde06ce39))


### Features

* **css:** button: improve accessibility of disabled state ([2e726df](https://github.com/felleslosninger/tlp-design-admin/commit/2e726dfd4e11922cd0763fc476fad13cfc625ed2))
* **css:** checkbox: improve accessibility of disabled state ([f089f3a](https://github.com/felleslosninger/tlp-design-admin/commit/f089f3ada482471a171c2f13066830e6c04d4b57))
* **css:** input field: improve accessibility of disabled state ([adc276a](https://github.com/felleslosninger/tlp-design-admin/commit/adc276a06d930aa44696cdc83ac455300a54f048))
* **css:** radio: improve accessibility of disabled state ([b6600e5](https://github.com/felleslosninger/tlp-design-admin/commit/b6600e5ba1e385343a113b8fcac9640235ce4903))





# [0.3.0](https://github.com/felleslosninger/tlp-design-admin/compare/@digdir/ds-core-css@0.2.0...@digdir/ds-core-css@0.3.0) (2021-12-22)


### Bug Fixes

* **css:** checkbox: fix checkmark size ([9f3ad2a](https://github.com/felleslosninger/tlp-design-admin/commit/9f3ad2acf9b4514c964a7b5d248faa65ee467ba9))
* **css:** fix non-interactive gap in icon-link ([2ccbe68](https://github.com/felleslosninger/tlp-design-admin/commit/2ccbe68d0c8d170da1b75e7031523b93b9aa7159))
* **css:** icon-link: fix text overflow edge case ([d0199b8](https://github.com/felleslosninger/tlp-design-admin/commit/d0199b89844f0765077bd05e1d63e8685dea1516))


### Features

* **css:** add form-field utility classes ([aee5b07](https://github.com/felleslosninger/tlp-design-admin/commit/aee5b07a7c3c5fe18681b4734309ae9b6336081f))
* **css:** add input field base styles ([089349e](https://github.com/felleslosninger/tlp-design-admin/commit/089349e3856ae1dc6bb8debf65fd9f2c4f619aaf))
* **css:** add input field variant styles ([936872b](https://github.com/felleslosninger/tlp-design-admin/commit/936872bf3fce1cd748b9f5b038d2efd569874f06))
* **css:** input-field, panel-link: improve responsiveness ([6cdef2a](https://github.com/felleslosninger/tlp-design-admin/commit/6cdef2a58296c03693306ce3d108e087040af9eb))





# [0.2.0](https://github.com/felleslosninger/tlp-design-admin/compare/@digdir/ds-core-css@0.1.0...@digdir/ds-core-css@0.2.0) (2021-12-14)


### Features

* **css:** add panel link styles ([5cd94a2](https://github.com/felleslosninger/tlp-design-admin/commit/5cd94a23c4750dbbcd2a3b9a80c2fd2f724d29f7))


### Reverts

* Revert "refactor(css): update token imports" ([4769683](https://github.com/felleslosninger/tlp-design-admin/commit/4769683aa3f57ca2231248240a3e82a24662a35d))





# 0.1.0 (2021-12-10)


### Bug Fixes

* **baseline:** fix most of focus outline difference in Safari ([9a29894](https://github.com/felleslosninger/tlp-design-admin/commit/9a29894d3de8996a2b4a5793f75068c234913031))
* **button:** change padding in large button ([e8efa57](https://github.com/felleslosninger/tlp-design-admin/commit/e8efa577ffae8ab17a1f47236e5e8b0384e690d6))
* Changed to grey (grey-600) border color on unchecked checkbox ([214c0de](https://github.com/felleslosninger/tlp-design-admin/commit/214c0de0b944102756004e752daec2bbc9b5bbf2))
* Changed to grey (grey-600) border color on unchecked radio button ([e38ab90](https://github.com/felleslosninger/tlp-design-admin/commit/e38ab907addcd77244798b529025fb4e350ec55b))
* **checkbox/radio:** fix shrinking of checkmark-box ([b8fdc0b](https://github.com/felleslosninger/tlp-design-admin/commit/b8fdc0be3e8898ea5fdba39073dd1a02368bc326))
* Fix outline on focused elements using keyboard navigation ([d59a512](https://github.com/felleslosninger/tlp-design-admin/commit/d59a5120a2b5a700c393b8abf48bf77236107868))
* **radio:** fix focus-visible outline offset ([90a3aba](https://github.com/felleslosninger/tlp-design-admin/commit/90a3abaddd52561de4d3aec9c9b47f3f3433d0b1))
* Removed inherit properties from typography classes ([25b32dc](https://github.com/felleslosninger/tlp-design-admin/commit/25b32dc2a369f38fdc57797ba8443959e3178d70))


### Features

* add icon link stylesheet ([a53fdf9](https://github.com/felleslosninger/tlp-design-admin/commit/a53fdf9db721b934ee6a37db16f4f1f08cdf5c02))
* Added button styling ([894ab40](https://github.com/felleslosninger/tlp-design-admin/commit/894ab407eabb7cea3e01fa82a1af0077f28fa805))
* Added checkbox styling ([1d8b212](https://github.com/felleslosninger/tlp-design-admin/commit/1d8b212f544326e69b6c760693126d7925fc1c1b))
* Added link styling ([8ece057](https://github.com/felleslosninger/tlp-design-admin/commit/8ece05738e6705e16dae1b0ae4c7da31e2ebd9db))
* Added radio button stylesheet ([d5c3ac0](https://github.com/felleslosninger/tlp-design-admin/commit/d5c3ac06943e74d9ebcad9c5a8997d231bc547de))
* Added typography text classes (SCSS) ([29e43ab](https://github.com/felleslosninger/tlp-design-admin/commit/29e43ab204b3b2a81123f45a471437f5e20aed37))
* Implemented CSS font baseline properties ([6f1dfed](https://github.com/felleslosninger/tlp-design-admin/commit/6f1dfedab804f1f4581824e174abe2dfae3642c8))
* **inline link:** add transition to border-bottom ([8b243ff](https://github.com/felleslosninger/tlp-design-admin/commit/8b243ff3f7fb6c6566c030fb8b70f6483138dda2))
