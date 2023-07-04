const panels = document.querySelectorAll('.panel') 


//this retgurn the list(array) of div having panel class e.g  panel[0] ==> first div

//we can use forEach for iteration on array
panels.forEach(panel1)


function panel1(panel) {
    panel.addEventListener('click',()=>{
        removeActiveClasses()
        panel.classList.add('active') //panel.classList gives list of the classes in that div 

        
    }
    )
    
}


// class --> expanding that has name active 

function removeActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}



