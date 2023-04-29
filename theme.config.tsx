import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>无聊解决方案</span>,
  project: {
    link: 'https://github.com/so-boring-solutions',
  },
  // chat: {
  //   link: 'https://discord.com',
  // },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – So Boring Solutions'
    }
  },
  toc: {
    float: true,
  },
  docsRepositoryBase: 'https://github.com/so-boring-solutions/docs',
  footer: {
    text: `${new Date().getFullYear()} © 无聊解决方案（So Boring Solutions）`,
  },
  faviconGlyph: "🥱",
  // i18n: [
  //   { locale: 'zh-CN', text: '中文' },
  // ],
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter()
    const { frontMatter } = useConfig()
    const url =
      'https://soboring.solutions' +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`)
 
    return <>
      <meta property="og:url" content={url} />
      <meta property="og:title" content={frontMatter.title || 'So Boring Solutions'} />
      <meta property="og:description" content={frontMatter.description || '无聊解决方案（So Boring Solutions）'} />
    </>
  },
}

export default config
