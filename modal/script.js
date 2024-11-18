class Modal {

    constructor() {
        this.modal = document.createElement('div');
        this.bttn = document.querySelector('#opnModButt');
        this.modalDisp = this.modalDisp
    }

    modCreate() {
        this.modal.innerHTML = `<div id="testModal" class="Modal">
                <div class="ModalCont">
            <span class="Close" id="clsModButt">X</span>
            <p>Something will be here</p>
        </div>
    </div>`
        document.body.append(this.modal);
    }

    modOn() {
        this.bttn.addEventListener('click', () => {
            this.modalDisp = document.querySelector('#testModal');
            this.modalDisp.style.display = "block"
        })
    }

    modOff() {
        const span = document.querySelector('#clsModButt')
        span.addEventListener('click', () => {
            this.modalDisp = document.querySelector('#testModal');
            this.modalDisp.style.display = "none"
        })
    }

    winModOff() {
        window.addEventListener('click', function (event) {
            this.modalDisp = document.querySelector('#testModal');
            if (event.target == this.modalDisp)
                this.modalDisp.style.display = "none";
        });
    }
}

const test = new Modal()

test.modCreate()
test.modOn()
test.modOff()
test.winModOff()

// let modal = document.querySelector('#testModal');
// let bttn = document.querySelector('#opnModButt');
// var span = document.querySelector('#clsModButt');

// bttn.addEventListener('click', function() {
//     modal.style.display = "block";
// });

// span.addEventListener('click', function() {
//     modal.style.display = "none";
// });

// window.addEventListener('click', function(event) {
// if (event.target == modal) {
//     modal.style.display = "none";
// }
// });
