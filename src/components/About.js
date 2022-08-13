import { prefetch } from '@layer0/prefetch/window'

const About = (html, css, LitElement, { name } = pageProps) => {
  prefetch('/')

  css`
    p {
      color: green;
    }
  `

  return html`<p>Hello, ${name}!</p>`
}

export default About
