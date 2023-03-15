function  Sum(a:number, b:number,c:number,d:number):void{
   let sum =  a+b+c+d
   document.querySelector("tbody")!.innerHTML +=`
   <tr>
      <td>${a}</td>
      <td>${b}</td>
      <td>${c}</td>
      <td>${d}</td>
      <td>${sum}</td>
    </tr>
   
   `
   if(sum<20){
    alert("Bạn đã trượt môn")
    // document.querySelector("#status")!.innerHTML +=`
    //  Trượt
    // `
   }else if(sum>=20){
    alert("Bạn đã qua môn")

//     document.querySelector("#status")!.innerHTML +=`
//     Qua
//    `
   }else{
    alert("Điểm ko hợp lệ")
   }
   
}
export default Sum