// class Modal {
//     constructor(querySelector) {
//         this.modal = document.querySelector(querySelector);
//         this.bttn = document.querySelector(querySelector);
//         this.span = document.querySelector(querySelector);
//     }

//     modOn() {
//         this.bttn = document.querySelector('#testModal')
//         this.bttn.addEventListener('click', () => {
//             this.modal.style.display = "block";
//             console.log('>>>>');
            
//         });
//     }

//     modOff() {
//         this.span = document.querySelector('#clsModButt');
//         this.span.addEventListener('click', () => {
//             this.modal.style.display = "none";
//         })
//     }

//     // winModOff() {

//     //         if (event.target == this.modal) {
//     //             this.modal.style.display = "none";
//     //         }

//     // }
// }

// const test = new Modal()

// test.modOn()
// test.modOff()
// // test.winModOff()

let modal = document.querySelector('#testModal');
let bttn = document.querySelector('#opnModButt');
var span = document.querySelector('#clsModButt');

bttn.addEventListener('click', function() {
    modal.style.display = "block";
});

span.addEventListener('click', function() {
    modal.style.display = "none";
});

window.addEventListener('click', function(event) {
if (event.target == modal) {
    modal.style.display = "none";
}
});
