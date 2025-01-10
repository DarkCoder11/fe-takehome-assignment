import plugin from 'tailwindcss/plugin'

export const pluginContainer = plugin(({ addComponents }) => {
  addComponents({
    /* Page container */
    '.container': {
      paddingTop: '22px',
      paddingLeft: '25px',
      paddingRight: '25px',
      marginLeft: 'auto',
      marginRight: 'auto',

      '@screen xl': {
        paddingTop: '24px',
        paddingBottom: '39px',
        paddingLeft: '40px',
        paddingRight: '40px',
      },
    },
  })
})
