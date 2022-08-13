import { Router } from '@layer0/core/router'
import { isProductionBuild } from '@layer0/core/environment'

const ONE_DAY = {
  edge: {
    maxAgeSeconds: 24 * 60 * 60,
  },
}

const router = new Router()

if (isProductionBuild()) {
  router.match('/', ({ cache }) => {
    cache(ONE_DAY)
  })
  router.match('/about', ({ cache }) => {
    cache(ONE_DAY)
  })
  router.static('build')
  router.fallback(({ serveStatic }) => {
    serveStatic('build/index.html')
  })
} else {
  router.fallback(({ renderWithApp }) => {
    renderWithApp()
  })
}

module.exports = router
