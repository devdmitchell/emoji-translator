const submitBtn = document.querySelector('#submit-button')
const transInput = document.querySelector('#translator-input')
const results = document.querySelector('#results')
const radioButtons = document.querySelectorAll('[name="translation-section"]')
const enco = document.querySelector('#encode')
const trans = document.querySelector('#translate')
const mad = document.querySelector('#madlib')
const searc = document.querySelector('#search')
const rand = document.querySelector('#random')


submitBtn.addEventListener('click', ()=>{
        for(let choice of radioButtons){
            // if(choice.checked){
            if(enco.checked){    
                results.innerText = `${encode(transInput.value)}`
            }
            else if(trans.checked){
                results.innerText = `${translate(transInput.value)}`
            }
            else if(mad.checked){
                results.innerText = `${madlib(transInput.value)}`
            }
            else if(searc.checked){
                results.innerText = ''
                let objArr = search(transInput.value)
                console.log(objArr)
                for(let obj of objArr){
                    let newStr = document.createElement('p')
                    newStr.innerText = obj.symbol
                    results.appendChild(newStr)
                }if(objArr.length === 0){
                    results.innerText = 'no emoji found'
                }
            }    
            else if(rand.checked){
                let randNumber = Math.floor(Math.random()*4)
                if(randNumber === 0){
                    results.innerText = encode(transInput.value)
                }else if(randNumber === 1){
                    results.innerText = translate(transInput.value)
                }else if(randNumber === 2){
                    results.innerText = `${madlib(transInput.value)}`
                }else if(randNumber === 3){
                    results.innerText = ''
                    let objArr = search(transInput.value)
                    for(let obj of objArr){
                        let newStr = document.createElement('p')
                        newStr.innerText = obj.symbolresults.appendChild(newStr)
                    }if(objArr.length === 0){
                        results.innerText = 'no emoji found'
                    }
                }
            }
        }
})