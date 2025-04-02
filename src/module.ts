import {
  defineNuxtModule,
  addComponentsDir,
  createResolver,
  installModule,
} from '@nuxt/kit'

// Module options TypeScript interface definition

export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'my-module',
    configKey: 'myModule',
  },

  defaults: { css: true },

  async setup(_options, _nuxt) {
    const resolver = createResolver(import.meta.url)

    _nuxt.options.css.push(resolver.resolve('./output.css'))

    _nuxt.options.modules.push('@nuxtjs/tailwindcss')

    _nuxt.hook('nitro:config', async (nitroConfig) => {
      nitroConfig.publicAssets ||= []
      nitroConfig.publicAssets.push({
        dir: resolver.resolve('./runtime/assets'),
        maxAge: 60 * 60 * 24 * 365, // cache assets for 1 year
      })
    })

    await installModule('@nuxtjs/tailwindcss', {
      configPath: resolver.resolve('./runtime/tailwind.config.js'),
    })

    addComponentsDir({
      path: resolver.resolve('./runtime/components'),
      pathPrefix: true,
      prefix: 'Dui',
      global: true,
    })
  },
})
