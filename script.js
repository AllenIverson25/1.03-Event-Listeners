// Helper function: replaces content inside #out
function render (html) {
  document.getElementById('out').innerHTML = html
}

/* -------------------------------
   Demo 1: Click (counter)
-------------------------------- */
let clickCount = 0
document.getElementById('btnClick').addEventListener('click', () => { 
   clickCount++
   render(`Button clicked <strong>${clickCount}</strong> time(s).`)
}) 



/* --------------------------------------
   Demo 2: Double-click (toggle highlight)
--------------------------------------- */
const dblClickCard = document.getElementById('dblCard')
dblClickCard.addEventListener('dblclick', () => {
  dblClickCard.classList.toggle('activated')

  const state = dblClickCard.classList.contains('activated') ? 'ON' : 'OFF'
  render(`Card is <strong>${state}</strong>`)
})

/* --------------------------------
   Demo 3: Keypress (show key/code)
--------------------------------- */
const kbKey = document.getElementById('kbKey')
const kbCode = document.getElementById('kbCode')
 
document.addEventListener('keydown', (e) => { 
  kbKey.textContent = e.key === ' ' ? 'Space' : e.key
  kbCode.textContent = e.code
  render(`You pressed <strong>${kbKey.textContent}</strong> (code: <strong>${kbCode.textContent}</strong>)`)
})
   

/* ----------------------------------------
   Demo 4: Show Time (12-hour format + day)
----------------------------------------- */


/* -------------------------
   Utility: Clear output
-------------------------- */
document.getElementById('btnClear').addEventListener('click', () => {
  render('<span class="text-secondary">Output cleared.</span>')
  clickCount = 0
  hoverCount = 0
})

/* =================================================
   Option A — Hover Highlight + Counter
================================================== */
let hoverCount = 0
const hoverCard = document.getElementById('hoverCard')

hoverCard.addEventListener('mouseenter', () => {
  hoverCard.classList.add('hover-highlight')
  hoverCount++
  render(`Card hovered <strong>${hoverCount}</strong> time(s)!`)
})

hoverCard.addEventListener('mouseleave', () => {
  hoverCard.classList.remove('hover-highlight')
  render(`<span class="text-secondary">Mouse left the card. Hover count: <strong>${hoverCount}</strong></span>`)
})

/* =================================================
   Option B — Scroll Progress Bar
================================================== */
const scrollBar = document.getElementById('scrollBar')

function updateScrollProgress() {
  const scrollTop = window.scrollY || document.documentElement.scrollTop
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
  const scrollPercent = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0
  
  scrollBar.style.width = scrollPercent + '%'
  scrollBar.setAttribute('aria-valuenow', scrollPercent)
  render(`Scroll progress: <strong>${scrollPercent.toFixed(2)}%</strong>`)

}

// Run on page load
updateScrollProgress()

// Run on every scroll event
window.addEventListener('scroll', updateScrollProgress)


/*
   Option C — Live Input Mirror
   - Add a text input element to the page
   - On every keystroke: update #out with a message that includes the input value
   - If the input is empty: show a neutral placeholder message instead
   - On focus: add a border/shadow class to the input
   - On blur: remove those classes and make sure #out shows the right message
================================================== */

