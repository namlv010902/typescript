"use strict";
exports.__esModule = true;
var username = "sontv";
var isAdmin = true;
/*
    Mảng số
    Mảng chuỗi
    Mảng mix
*/
var arrNumber = [1, 2, 3, 4];
var arrStr = ["abc", "def"];
var arrMix = [123, "abc"];
var projectList = [
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
];
var showProject = function (projects) {
    // tìm tới thẻ div có id app và hiển thị dữ liệu của mảng ra
    // sử dụng map và hiển thị
    console.log(projects);
    var app = document.querySelector("#app");
    if (app) {
        app.innerHTML = projects.map(function (item) {
            return "\n            <table class=\"table\">\n            <thead>\n              <tr>\n                <th scope=\"col\">#</th>\n                <th scope=\"col\">First</th>\n                <th scope=\"col\">Last</th>\n                <th scope=\"col\">Handle</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <th scope=\"row\">1</th>\n                <td>Mark</td>\n                <td>Otto</td>\n                <td>@mdo</td>\n              </tr>\n              <tr>\n                <th scope=\"row\">2</th>\n                <td>Jacob</td>\n                <td>Thornton</td>\n                <td>@fat</td>\n              </tr>\n              <tr>\n                <th scope=\"row\">3</th>\n                <td>Larry</td>\n                <td>the Bird</td>\n                <td>@twitter</td>\n              </tr>\n            </tbody>\n          </table>\n            ";
        }).join("");
    }
};
showProject(projectList);
