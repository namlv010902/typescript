export { }
let username: string = "sontv"
let isAdmin: boolean = true

/*
    Mảng số
    Mảng chuỗi
    Mảng mix
*/
const arrNumber: number[] = [1, 2, 3, 4]
const arrStr: string[] = ["abc", "def"]
const arrMix: Array<number | string> = [123, "abc"]


// const projectList:{id:number,name:string}[] = [
//     { id: 1, name: "Du an mau" },
//     { id: 2, name: "Du an 1" }
// ]

// const projectList: Array<{ id: number, name: string }> = [
//     { id: 1, name: "Du an mau" },
//     { id: 2, name: "Du an 1" }
// ]

// interface IProject {
//     id: number,
//     name: string,
//     image: string,
//     link: string,
//     status: boolean
// }
// const project: IProject = {
//     id: 1,
//     name: "Du an mau",
//     image: "http://...",
//     link: "http://...",
//     status: true
// }
// const showProject = (props: IProject): IProject => {
//     return props
// }
// console.log(showProject(project));

// const getProject = (data: IProject[]) => {
//     console.log(data);

// }


interface IProject {
    id: number,
    name: string,
    image: string,
    link: string,
    status: boolean
}
const projectList: IProject[] = [
    {
        id: 1,
        name: "Du an mau",
        image: "http://...",
        link: "http://...",
        status: true
    },
    {
        id: 2,
        name: "Du an 1",
        image: "http://...",
        link: "http://...",
        status: false
    }
]

const showProject = (projects: IProject[]): void => {
    // tìm tới thẻ div có id app và hiển thị dữ liệu của mảng ra
    // sử dụng map và hiển thị
    console.log(projects);
    
    const app = document.querySelector("#app")
    if (app) {
        app.innerHTML = projects.map((item) => {
            return `
            <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
            `
        }).join("")
    }
}
showProject(projectList)