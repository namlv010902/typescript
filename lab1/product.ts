export{}
interface IProduct{
   id:number,
   name:string,
   image:string,
   link:string,
   member:number
}

const projectList:IProduct[] = [
    {id:1, name:"sp1",image:"https://images.pexels.com/photos/13015752/pexels-photo-13015752.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",link:"https://images.pexels.com/photos/13015752/pexels-photo-13015752.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",member:1 },
    {id:2, name:"sp2",image:"https://images.pexels.com/photos/14927334/pexels-photo-14927334.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",link:"https://images.pexels.com/photos/13015752/pexels-photo-13015752.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",member:2 },
    {id:3, name:"sp3",image:"https://images.pexels.com/photos/13015752/pexels-photo-13015752.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",link:"https://images.pexels.com/photos/13015752/pexels-photo-13015752.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",member:3 },
]

const listProject =(products:IProduct[]):void=>{
    console.log(products);
    const app = document.querySelector("#app")
    // console.log(app);
    
    if(app){
        app.innerHTML= products.map((iteam,index)=>{
         return `
        
 
     <tr>
       <th scope="row">${index +1}</th>
       <td>${iteam.name}</td>
       <td><img width="300px" src="${iteam.image}"></td>
       <td><a href="">${iteam.link}">${iteam.link}</a></td>
       <td>${iteam.member}</td>
       <td><button type="button" id="delete" data-id="${iteam.id}" class="btn btn-danger">Delete</button>
       </td>

     </tr>
    
  
         `
     }).join("")
    }
    const btnDelete = Array.from(document.querySelector<HTMLButtonElement>("#delete")) 
    console.log(btnDelete);
    
    if(btnDelete){
        for(let btn of btnDelete){
            btnDelete?addEventListener("click",function(){
            console.log("delete")
            
            
       
       
            })
           }
    }
  

}
listProject(projectList)

// add
const btn_add = document.querySelector("#btn_add") 
    btn_add?.addEventListener("click",function(){
     document.querySelector("body")?.innerHTML=`
     <form>
     <div class="form-group">
       <label for="exampleInputEmail1">Email address</label>
       <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
       <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
     </div>
     <div class="form-group">
       <label for="exampleInputPassword1">Password</label>
       <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
     </div>
     <div class="form-check">
       <input type="checkbox" class="form-check-input" id="exampleCheck1">
       <label class="form-check-label" for="exampleCheck1">Check me out</label>
     </div>
     <button type="submit" class="btn btn-primary">Submit</button>
   </form>
      `
        
    })
const addProduct =()=>{
    


}



