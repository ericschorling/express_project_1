const buttonHandler = document.getElementById('anotherButton')

buttonHandler.addEventListener('click', e =>{
    e.preventDefault()
    const paragraph = document.createElement('p')
    const lastDiv = document.getElementById('actionItem')   
    lastDiv.appendChild(paragraph)
    paragraph.id ='update'
    newParagraph = document.getElementById('update')
    console.log(newParagraph)
    paragraph.innerHTML = 'hello'
    
})