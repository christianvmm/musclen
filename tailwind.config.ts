import type { Config } from 'tailwindcss'

const config: Config = {
   content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
   theme: {
      extend: {
         colors: {
            background: 'var(--background)',
            'background-hero': 'var(--background-hero)',
            foreground: 'var(--foreground)',
            'muted-foreground': 'var(--muted-foreground)',
            accent: 'var(--accent)',

            primary: 'var(--primary)',
            secondary: 'var(--secondary)',
         },

         fontFamily: {
            sans: ['var(--font-inter)'],
            mono: ['var(--font-roboto-mono)'],
         },
      },
   },
   plugins: [],
}
export default config
