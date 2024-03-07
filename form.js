
  const scriptURL = 'https://script.google.com/macros/s/AKfycbzUFMBczLWfHBYvS6RH__TZg59nHh7JMV4dMAge3Dbdz2nk4p085xC25XrcAPswhck/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("confermation-message")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Sent successfully"
        setTimeout(function(){
          msg.innerHTML = ""
        },5000)
        form.reset()
      })
      .catch(error =>  {
        msg.innerHTML = "Error!"
        setTimeout(function(){
          msg.innerHTML = ""
        },5000)
        form.reset()
      })
  })