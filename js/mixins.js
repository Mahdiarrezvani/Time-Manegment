// import { dataBase } from './dataBase.js';
export function backHomePage() {
    let backHomeBtn = document.querySelector('.back-history')
    backHomeBtn.addEventListener('click', function () {
        history.back();
    });
}
// 
// let activitesContainer = document.querySelector('.activites-container');
// let sumMahdiar, sumAmin, sumAbbas;
// function storage(subject) {
//     sumMahdiar = 0;
//     sumAmin = 0;
//     sumAbbas = 0;
//     let information = [
//         { id: 0, name: 'mahdiar', storage: sumMahdiar },
//         { id: 1, name: 'amin', storage: sumAmin },
//         { id: 2, name: 'amir abbas', storage: sumAbbas }
//     ];
//     // for (let a = 0; a < 30; a++) {}
//     information.forEach(function (info) {
//         dataBase[info.id].forEach(function (e) {
//             info.storage = info.storage + +e[subject];
//         });
//     });
//     return [sumMahdiar = information[0].storage, sumAmin = information[1].storage, sumAbbas = information[2].storage];
// }
// function firstOne(subject) {
//     let firstPersonNumber = null;
//     let number = null;
//     let storages = storage(subject);
//     if (subject == 'wasted') {
//         number = Math.min(sumAbbas, sumAmin, sumMahdiar);
//     } else {
//         number = Math.max(sumAbbas, sumAmin, sumMahdiar);
//     }
//     storages.forEach(function (e) {
//         if (e == number) {
//             return firstPersonNumber = e;
//         }
//     });
//     let firstPerson = findPerson(firstPersonNumber);
//     activitesContainer.insertAdjacentHTML('beforeend', `
//     <p>${subject} : <span>${firstPerson}</span></p>`);
// }
// function findPerson(number) {
//     let person = null;
//     switch (number) {
//         case sumMahdiar:
//             person = "mahdiar";
//             break;
//         case sumAmin:
//             person = "amin";
//             break;
//         case sumAbbas:
//             person = "amir abbas";
//             break;
//     }
//     return person;
// }
// export { firstOne }