import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <>
    <span className="nx-font-extrabold">OnaBot.uz</span>
    <span className="nx-ml-2 nx-hidden nx-font-normal nx-text-gray-600 md:nx-inline">
      Telegram Bot Yasaymiz
    </span>
  </>,
  search: {
    emptyResult: (
      <span className="nx-block nx-select-none nx-p-8 nx-text-center nx-text-sm nx-text-gray-400">
        Hech nima topilmadi
      </span>
    ),
    error: 'Qidiruvda xatolik yuz berdi',
    loading: 'Yuklanmoqda…',
    placeholder: 'Qidirish',
  },
  editLink: {
    text: 'GitHub da tahrirlash',
  },
  project: {
    link: 'https://github.com/onabot',
  },
  chat: {
    link: 'https://t.me/onabotuz',
    icon: (
      <>
        <svg viewBox="0 0 24 24" width="24" height="24" style={{scale: '1.2'}}>
          <path fill="currentColor" d="M19.2,4.4L2.9,10.7c-1.1,0.4-1.1,1.1-0.2,1.3l4.1,1.3l1.6,4.8c0.2,0.5,0.1,0.7,0.6,0.7c0.4,0,0.6-0.2,0.8-0.4  c0.1-0.1,1-1,2-2l4.2,3.1c0.8,0.4,1.3,0.2,1.5-0.7l2.8-13.1C20.6,4.6,19.9,4,19.2,4.4z M17.1,7.4l-7.8,7.1L9,17.8L7.4,13l9.2-5.8  C17,6.9,17.4,7.1,17.1,7.4z"/>
          <rect y="0" fill="none" width="24" height="24"/>
        </svg>
        <span className="nx-sr-only">Telegram kanal</span>
      </>
    )
  },
  docsRepositoryBase: 'https://github.com/onabot/website',
  feedback: {
    content: 'Savolingiz bormi? Bizga habar bering →',
    labels: 'feedback'
  },
  notFound: {
    content: 'Siz o\'tgan havola mavjud emas →',
    labels: 'bug'
  },
  useNextSeoProps: () => ({ titleTemplate: "%s \u2013 OnaBot.uz" }),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#fff" />
      <meta httpEquiv="Content-Language" content="uz-Latn" />
      <meta name="description" content="OnaBot.uz - Telegram Bot Yasaymiz" />
      <meta property="og:title" content="OnaBot.uz - Telegram Bot Yasaymiz" />
      <meta name="apple-mobile-web-app-title" content="OnaBot.uz" />

      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
    </>
  ),
  footer: {
    component: (
        <div className="nx-mx-auto nx-flex nx-max-w-[90rem] nx-justify-center nx-py-12 nx-text-gray-600 dark:nx-text-gray-400 md:nx-justify-start nx-pl-[max(env(safe-area-inset-left),1.5rem)] nx-pr-[max(env(safe-area-inset-right),1.5rem)]">
            2023&nbsp;&copy;&nbsp;<a href="https://shakhzod.me" target="_blank" className="nx-underline">Shaxzod Qudratov</a>
        </div>
    )
  },
}

export default config
