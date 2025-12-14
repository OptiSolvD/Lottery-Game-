function getTicket(n){
    let arr= new Array(n);
    for (let i=0;i<n;i++){
        arr[i]= Math.floor(Math.random()*10);
    }
    return arr;
};
function sumArray(arr){
    return arr.reduce((acc,cur)=> acc+cur,0);
};
export  {getTicket,sumArray};