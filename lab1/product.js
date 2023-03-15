"use strict";
exports.__esModule = true;
var projectList = [
    { id: 1, name: "sp1", image: "https://images.pexels.com/photos/13015752/pexels-photo-13015752.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load", link: "https://images.pexels.com/photos/13015752/pexels-photo-13015752.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load", member: 1 },
    { id: 2, name: "sp2", image: "https://images.pexels.com/photos/14927334/pexels-photo-14927334.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load", link: "https://images.pexels.com/photos/13015752/pexels-photo-13015752.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load", member: 2 },
    { id: 3, name: "sp3", image: "https://images.pexels.com/photos/13015752/pexels-photo-13015752.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load", link: "https://images.pexels.com/photos/13015752/pexels-photo-13015752.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load", member: 3 },
];
var listProject = function (products) {
    console.log(products);
    var app = document.querySelector("#app");
    // console.log(app);
    if (app) {
        app.innerHTML = products.map(function (iteam, index) {
            return "\n        \n \n     <tr>\n       <th scope=\"row\">".concat(index + 1, "</th>\n       <td>").concat(iteam.name, "</td>\n       <td><img width=\"300px\" src=\"").concat(iteam.image, "\"></td>\n       <td><a href=\"\">").concat(iteam.link, "\">").concat(iteam.link, "</a></td>\n       <td>").concat(iteam.member, "</td>\n       <td><button type=\"button\" id=\"delete\" data-id=\"").concat(iteam.id, "\" class=\"btn btn-danger\">Delete</button>\n       </td>\n\n     </tr>\n    \n  \n         ");
        }).join("");
    }
    var btnDelete = Array.from(document.querySelector("#delete"));
    console.log(btnDelete);
    if (btnDelete) {
    }
};
listProject(projectList);
// add
var btn_add = document.querySelector("#btn_add");
btn_add === null || btn_add === void 0 ? void 0 : btn_add.addEventListener("click", function () {
    var _a;
    (_a = document.querySelector("body")) === null || _a === void 0 ? void 0 : _a.innerHTML = "\n     <form>\n     <div class=\"form-group\">\n       <label for=\"exampleInputEmail1\">Email address</label>\n       <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\">\n       <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n     </div>\n     <div class=\"form-group\">\n       <label for=\"exampleInputPassword1\">Password</label>\n       <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\">\n     </div>\n     <div class=\"form-check\">\n       <input type=\"checkbox\" class=\"form-check-input\" id=\"exampleCheck1\">\n       <label class=\"form-check-label\" for=\"exampleCheck1\">Check me out</label>\n     </div>\n     <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n   </form>\n      ";
});
var addProduct = function () {
};
