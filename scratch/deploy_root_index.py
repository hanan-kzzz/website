txt = open('metals-and-fibres-animated/index.html', encoding='utf-8').read()
txt = txt.replace('src="js/main.js"', 'src="js/animated.js"')
open('index.html', 'w', encoding='utf-8').write(txt)
print('Updated root index.html to flagship ultra-cinematic experience.')
