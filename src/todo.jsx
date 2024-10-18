// conditional rendering option-1
// export default function Todo({task, isDone}) {
//     if(isDone === true){
//         return <li>Finished: {task}</li>
//     }
//     else{
//         return (
//             <li>Work On: {task}</li>
//         )
//     }
    
// }

// conditional rendering option-2
// export default function Todo({task, isDone}) {
//     if(isDone){
//         return <li>Finished: {task}</li>
//     }
//     return <li>Work On: {task}</li>
// }

// conditional rendering option-3 : use ternary operator
// export default function Todo({task, isDone}) {
//     return (
//         <li>{isDone ? 'Finished' : 'Work On'} : {task}</li>
//     )
// }

// conditional rendering option-4 : use && operator
// export default function Todo({task, isDone}) {
//     return (
//         <li>{task} {isDone && ': done'}</li>
//     )
// }

// conditional rendering option-4 : use || operator
export default function Todo({task, isDone}) {
    return (
        <li>{task} {isDone || ': Do It'}</li>
    )
}