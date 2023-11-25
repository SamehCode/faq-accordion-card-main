
let allAccordions = document.querySelectorAll('.accordion .line .accordion-head');
let allAccordionsHead = document.querySelectorAll('.accordion .line .accordion-head');
let allAccordionsBody = document.querySelectorAll('.accordion .line .accordion-body');


allAccordions.forEach(accordion => {
    accordion.onclick = function() {
        allAccordionsHead.forEach(head => {
            head.classList.remove('show')
            this.classList.add('show')
        })
        allAccordionsBody.forEach(body => {
            body.classList.remove('show')
        })
        this.parentElement.querySelector('.accordion-body').classList.add('show')
    }
})


console.log(allAccordions)