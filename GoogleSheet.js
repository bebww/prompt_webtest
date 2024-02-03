const scriptURL = 'https://script.google.com/macros/s/AKfycbygCvzjY4iZqyTLRLknsYxvHVD1KWiMzI8AVTwel3K9guX6WgTDepuzLSyYA4PL0gnszA/exec'

const form = document.forms['for_webtest']
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("ขอบคุณสำหรับความคิดเห็น ทุกความคิดเห็นเราจะนำไปพิจารณา #promptจัดให้" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
