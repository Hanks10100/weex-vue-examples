const puppeteer = require('puppeteer')

const viewports = [
  // mock (1.563:1)
  { width: 540, height: 844 },
  { width: 1080, height: 1688 },
  // { width: 1620, height: 2532 },

  // iPhoneX (2.165:1)
  { width: 375, height: 812 },
  { width: 750, height: 1624 },
  { width: 1125, height: 2436 },

  // movie (16:9)
  { width: 720, height: 1280 },
  { width: 1080, height: 1920 },
  // { width: 3520, height: 1980 },
]

async function takeScreenshot (hash) {
  console.log(` ===> Start taking screenshots (${hash})`)
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  for (let i = 0; i < viewports.length; ++i) {
    const { width, height } = viewports[i]
    const path = `assets/screenshots/${hash}_${width}x${height}.png`
    await page.setViewport(viewports[i])
    await page.goto(`http://dotwe.org/raw/htmlVue/${hash}`)
    await page.screenshot({ path })
    console.log(`   -> saved to ${path}`)
  }

  await browser.close()
}

const hash = process.argv[2]
if (/^\w{32}$/i.test(hash)) {
  takeScreenshot(hash)
} else {
  console.warn('Please pass a valid hash string.')
}
