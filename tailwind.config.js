module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        normal: {
          100:'#754351',
          500:'#41252D',
          900:'#1A0F12'
        },
        text: '#EDE8EA',
        report: {
          100: '#FF7B7B',
          500: '#FF5252',
          900: '#A70000'
        },
        green: '#388E3C',
        numberCardBg: '#88A17D',
        sentenceCardBg: '#E2797B'
      },
    },
    fontFamily: {
      'sans': ['Inter'],
      'cursive': ['Abril Fatface'],
    },
  },
  plugins: [],
}
