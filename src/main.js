const { toAlphabetText } = require('br6')

const dots = {
  0: '⠀',
  1: '⠁',
  3: '⠂',
  13: '⠃',
  5: '⠄',
  15: '⠅',
  35: '⠆',
  135: '⠇',
  2: '⠈',
  12: '⠉',
  23: '⠊',
  123: '⠋',
  25: '⠌',
  125: '⠍',
  235: '⠎',
  1235: '⠏',
  4: '⠐',
  14: '⠑',
  34: '⠒',
  134: '⠓',
  45: '⠔',
  145: '⠕',
  345: '⠖',
  1345: '⠗',
  24: '⠘',
  124: '⠙',
  234: '⠚',
  1234: '⠛',
  245: '⠜',
  1245: '⠝',
  2345: '⠞',
  12345: '⠟',
  6: '⠠',
  16: '⠡',
  36: '⠢',
  136: '⠣',
  56: '⠤',
  156: '⠥',
  356: '⠦',
  1356: '⠧',
  26: '⠨',
  126: '⠩',
  236: '⠪',
  1236: '⠫',
  256: '⠬',
  1256: '⠭',
  2356: '⠮',
  12356: '⠯',
  46: '⠰',
  146: '⠱',
  346: '⠲',
  1346: '⠳',
  456: '⠴',
  1456: '⠵',
  3456: '⠶',
  13456: '⠷',
  246: '⠸',
  1246: '⠹',
  2346: '⠺',
  12346: '⠻',
  2456: '⠼',
  12456: '⠽',
  23456: '⠾',
  123456: '⠿'
}

window.submit = function () {
  let s = ''

  document.querySelectorAll('.toggle').forEach(input => {
    if (input.classList.contains('checked')) {
      s += input.id
    }
  })

  document.getElementById('out').value += dots[Number(s)]

  document.getElementById('translated').value = toAlphabetText(document.getElementById('out').value)
}
