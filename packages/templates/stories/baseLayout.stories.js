import { createBaseLayout } from '../src/baseLayout.js'

export default {
  title: 'Admin/Maler',
  parameters: {
    layout: 'fullscreen',
    docs: {
      inlineStories: false,
    },
    controls: {
      disabled: true,
    },
  },
}

const baseLayout = createBaseLayout({
  content: String.raw`
  <h1 class='dads-text-heading-900'>Digdir</h1>
  <p class='dads-text-ingress-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nulla ex, tempus ac faucibus at, faucibus ut dolor. Etiam placerat massa arcu, et mollis libero dignissim sed. Nullam massa nibh, interdum a lorem vitae, pharetra scelerisque dui. </p>

  <p class='dads-text-body-400'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nulla ex, tempus ac faucibus at, faucibus ut dolor. Etiam placerat massa arcu, et mollis libero dignissim sed. Nullam massa nibh, interdum a lorem vitae, pharetra scelerisque dui. 
    Vestibulum hendrerit magna finibus ante pulvinar egestas. Curabitur venenatis erat at purus pharetra accumsan. Suspendisse id egestas metus. Proin laoreet cursus massa id varius. Pellentesque dignissim ipsum leo, non malesuada risus mattis vitae. Pellentesque pharetra lacus nec urna commodo consequat.
    Nam convallis nunc ac ornare facilisis. Ut nunc velit, tristique eget augue vel, facilisis luctus nulla. Nulla iaculis, orci quis tincidunt luctus, lacus orci imperdiet tellus, vel laoreet ligula ante et dolor. Vivamus maximus venenatis purus, nec sollicitudin justo molestie a. 
    Nunc magna quam, condimentum ac convallis id, pulvinar ac sapien. 
  </p>
  <p class='dads-text-body-400'>
    In venenatis fermentum libero, sed venenatis ex ultricies eu. Vestibulum sit amet lacus eu ligula vulputate varius. Ut sit amet leo sed orci scelerisque ornare feugiat sit amet erat. Quisque tempor a augue nec placerat. Etiam dapibus semper risus, eu viverra tellus consectetur ac. Suspendisse in magna eu ligula sagittis tristique vel vitae nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla egestas tempus scelerisque.
    Suspendisse potenti. Donec malesuada, nisi eget pellentesque mollis, nunc nunc vestibulum nulla, ut volutpat tortor lorem sed tortor. Curabitur eget lacus magna. Donec sed tellus quis felis semper gravida. Sed tristique rutrum lobortis. Maecenas quis augue quis risus facilisis pulvinar et ut odio. 
    Donec sollicitudin fringilla facilisis. Maecenas eu neque libero. Duis id felis ipsum. Vivamus fringilla id nisl eu blandit. Nulla luctus, justo at lacinia feugiat, lorem ligula aliquet metus, ut maximus orci nisi faucibus odio. Vestibulum vitae semper orci, quis blandit leo. 
  </p>
  <p class='dads-text-body-200'></p>
    Phasellus sed lobortis quam.
    Aliquam erat volutpat. Integer tortor leo, porta et arcu quis, eleifend dignissim elit. Nam magna ligula, interdum vel dapibus sit amet, tempus at urna. Sed sodales euismod purus, at rhoncus quam scelerisque sed. Nunc vitae felis sollicitudin, ultrices nisi pellentesque, imperdiet quam. 
    Donec consectetur eget dolor quis gravida. Nulla non dui eu sem tincidunt luctus id sed libero. Fusce pellentesque pulvinar dolor nec facilisis. Aliquam sed sapien eu leo luctus convallis non id odio. Aliquam dignissim purus eget libero ultricies gravida id non neque. In hac habitasse platea dictumst. Quisque nec ligula pulvinar, viverra quam vel, gravida purus. Suspendisse a mi massa. Maecenas ultrices lorem lectus, semper sollicitudin libero consectetur vitae. Proin venenatis gravida eros, at facilisis orci blandit finibus.
    Suspendisse mollis metus ut molestie laoreet. Maecenas egestas convallis velit, nec tristique tortor volutpat rhoncus. Nam ac augue aliquam risus sodales eleifend. Nunc auctor nulla nec ipsum lacinia vehicula. In hac habitasse platea dictumst. Cras sagittis rhoncus volutpat. Vivamus vitae ullamcorper nunc, id venenatis nulla. Morbi vel pretium elit. Praesent sit amet tortor libero. In aliquet libero imperdiet odio convallis hendrerit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
  </p>
  `,
})

export const Layout = () => {
  return baseLayout
}
