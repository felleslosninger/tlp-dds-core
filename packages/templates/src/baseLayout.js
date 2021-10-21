const createBaseLayout = ({
  title = 'DigDir title',
  content = '',
  stylePath = '../../css/build/index.css',
  scriptPathEs5 = '../../components/build/index.cjs',
  scriptPathEs6 = '../../components/build/index.js',
}) => {
  return String.raw`
<!DOCTYPE html>
<html lang="no">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <!-- DigDir admin design system assets -->
    <link rel="stylesheet" href="${stylePath}" />
    <!-- ES6 script -->
    <script type="module" src="${scriptPathEs6}"></script>
    <!-- ES5 fallback script -->
    <script nomodule src="${scriptPathEs5}" defer></script>

    <title>${title} | DigDir admin </title>
  </head>
  <body>
    <div class="page">
      <div class="top-bar"></div>

      <div class="sidebar">
        <nav>
          <ul class="menu">
            <li class="menu__item"></li>
          </ul>
        </nav>
      </div>

      <main class="content">
        ${content}
      </main>
    </div>
  </body>
</html>
`
}

export { createBaseLayout }
