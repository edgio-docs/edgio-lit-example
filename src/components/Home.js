import { prefetch } from '@layer0/prefetch/window'

const Home = (html, css, LitElement, { name } = pageProps) => {
  prefetch('/about')

  css`
    p {
      color: blue;
    }
  `

  return html`<p>Hey! ${name}!</p>`
}

export default Home
