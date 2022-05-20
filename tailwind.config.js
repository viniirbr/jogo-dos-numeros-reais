module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        'button-normal': {
          100:'#754351',
          500:'#41252D',
          900:'#1A0F12'
        },
        text: '#EDE8EA',
        'button-report': {
          100: '#FF7B7B',
          500: '#FF5252',
          900: '#A70000'
        },
        green: '#388E3C'
      },
    },
    fontFamily: {
      'sans': ['Inter'],
      'cursive': ['Abril Fatface'],
      'display':['Oswald']
    },
  },
  plugins: [],
}
