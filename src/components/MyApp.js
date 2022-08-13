import Home from './Home'
import About from './About'

const MyApp = (html, css, LitElement) => {
  if (window.location.pathname === '/about') {
    const pageProps = { name: 'About' }
    return About(html, css, LitElement, pageProps)
  } else {
    const pageProps = { name: window.location.pathname.substring(1) }
    pageProps['name'] = pageProps['name'].charAt(0).toLocaleUpperCase() + pageProps['name'].substring(1)
    return Home(html, css, LitElement, pageProps)
  }
}

export default MyApp
