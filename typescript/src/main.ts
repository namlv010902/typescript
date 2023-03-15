import Sum from "./sum";

// let a:number = Number(prompt("Nhập điểm lab: "))
// let b:number = Number(prompt("Nhập điểm asm: "))
// let c:number = Number(prompt("Nhập điểm lab: "))
// let d:number = Number(prompt("Nhập điểm thi: "))

// Sum(a,b,c,d)

{
  interface Teacher{
    id: number,
    email:string,
    username:string,
    phone:string,
    contact:string,
    address?:string
  }
  interface Manager extends Teacher{
   role : number,
   gender: string
  }
 
    let sontv:Teacher={
      id:1,
      email:"sontv8@gmail.com",
      username:"Tân Văn Sơn",
      phone:"0565079665",
      contact:"email"
    }
    let thienth :Manager={
      id:2,
      email:"thienhoi3@gmail.com",
      username:"Thiện hói",
      phone:"0565079665",
      contact:"email",
      role:2,
      gender:"Nam"
    }
    console.log(sontv);
    console.log(thienth);
    
  

}

document.querySelector<HTMLDivElement>("#app")!.innerHTML=`
<button id="nhap" class="btn btn-primary">Nhập điểm</button>
<table class="table">
<thead>
  <tr>
    <th scope="col">Điểm lab</th>
    <th scope="col">Điểm quiz</th>
    <th scope="col">Điểm asm</th>
    <th scope="col">Điểm thi</th>
    <th scope="col">Tổng điểm</th>
  </tr>
</thead>
<tbody>
  
</tbody>
</table>
`
document.querySelector<HTMLButtonElement>("#nhap")!.onclick=function(){
   let a:number = Number(prompt("Nhập điểm lab: "))
   let b:number = Number(prompt("Nhập điểm quiz: "))
   let c:number = Number(prompt("Nhập điểm asm: "))
   let d:number = Number(prompt("Nhập điểm thi: "))

Sum(a,b,c,d)
}