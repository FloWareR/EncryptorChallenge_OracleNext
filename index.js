function encrypt(){
  const content = document.getElementById("input-area").value
  const output = document.getElementById('output')
  let result = content.replace(/e/g,"enter")
                .replace(/i/g,"imes")
                .replace(/a/g,"ai")
                .replace(/o/g,"ober")
                .replace(/u/g,"ufat")
  output.innerHTML = result
  hidePlaceholder()
  
} 

function decrypt(){
  const content = document.getElementById("input-area").value
  const output = document.getElementById('output')
  let result = content.replace(/enter/g, "e")
  .replace(/imes/g, "i")
  .replace(/ai/g, "a")
  .replace(/ober/g, "o")
  .replace(/ufat/g, "u");
  output.innerHTML = result
  hidePlaceholder()
}

function copyText(){
  const text = document.getElementById('output').innerHTML;
  console.log(text)
  navigator.clipboard.writeText(text); 
  const copyAlert = document.querySelector('#copyAlert')
  copyAlert.classList.add('enable')
  setTimeout(disableAlert, 3000);
}
 
function disableAlert(){
  const copyAlert = document.querySelector('#copyAlert')
  copyAlert.classList.remove('enable')
}


function hidePlaceholder(){

  const placeholder = document.querySelector('.placeholder')  
  const copyButton = document.querySelector('#copyButton')

  if(output.innerHTML != ""){
    placeholder.classList.add('disable')
    copyButton.classList.add('enable')
    
  }
  else{
    placeholder.classList.remove('disable')
    copyButton.classList.remove('enable')

  }
}

