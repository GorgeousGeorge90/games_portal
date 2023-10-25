/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: [],
  theme: {
    extend: {},
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

