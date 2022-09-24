    const btn = document.querySelector('.btn');
    const subject = document.querySelector('.subject');
    const exit = document.querySelector('.photo')

    btn.addEventListener('click', function(){
        subject.classList.add('active')
    })

    window.addEventListener('click', (Event) => {
        if(Event.target == subject) {
            subject.classList.remove('active')
        }
    })

    document.addEventListener('keyup', (Event) => {
        if(Event.code ===  'Escape') {
            subject.classList.remove('active')
        }
    })
    photo.addEventListener('click', () => {
        subjects.classList.remove('active')
    })
    const button = document.querySelector('.btn');
    const subjects = document.querySelector('.subjects');
    const photo = document.querySelector('.photo')

    btn.addEventListener('click', function(){
        subjects.classList.add('active')
    })
    window.addEventListener('click', (Event) => {
        if(Event.target == subject-2) {
            subjects.classList.remove('active')
        }
    })

    document.addEventListener('keyup', (Event) => {
        if(Event.code === 'Escape') {
            subjects.classList.remove('active')
        }
    })
    btn.addEventListener('click', () => {
        subjects.classList.remove('active')
    })

    