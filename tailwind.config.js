/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: [],
  theme: {
    extend: {
        screens: {
            'xs':'500px',
        }
    },
  },
  plugins: [
      plugin(function({addComponents}) {
        addComponents({
              '.base_container': {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }
            })
        })
  ]
}

