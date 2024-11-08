let myName: any = document.getElementById("name");
let desig: any = document.getElementById("desig");
let phone: any = document.getElementById("phone");
let email: any = document.getElementById("email");
let add: any = document.getElementById("add");
let qualification1: any = document.getElementById("qua1");
let year1: any = document.getElementById("year1");
let institute1: any = document.getElementById("ins1");
let qualification2: any = document.getElementById("qua2");
let year2: any = document.getElementById("year2");
let institute2: any = document.getElementById("ins2");
let qualification4: any = document.getElementById("qua4");
let year4: any = document.getElementById("year4");
let institute4: any = document.getElementById("ins4");
let year3: any = document.getElementById("yr");
let company: any = document.getElementById("com");
let designation: any = document.getElementById("des");
let skill1: any = document.getElementById("skill1");
let skill2: any = document.getElementById("skill2");
let skill3: any = document.getElementById("skill3");
let pic: any = document.getElementById("pic");

let submitBtn = document.getElementById("submitBtn");
let form = document.getElementById("form");

form?.addEventListener("submit", (e) => {
  e.preventDefault();

  localStorage.setItem("name", myName.value);
  localStorage.setItem("desig", desig.value);
  localStorage.setItem("phone", phone.value);
  localStorage.setItem("email", email.value);
  localStorage.setItem("add", add.value);
  localStorage.setItem("qua1", qualification1.value);
  localStorage.setItem("year1", year1.value);
  localStorage.setItem("ins1", institute1.value);
  localStorage.setItem("qua2", qualification2.value);
  localStorage.setItem("year2", year2.value);
  localStorage.setItem("ins2", institute2.value);
  localStorage.setItem("qua4", qualification4.value);
  localStorage.setItem("year4", year4.value);
  localStorage.setItem("ins4", institute4.value);
  localStorage.setItem("yr", year3.value);
  localStorage.setItem("com", company.value);
  localStorage.setItem("des", designation.value);
  localStorage.setItem("skill1", skill1.value);
  localStorage.setItem("skill2", skill2.value);
  localStorage.setItem("skill3", skill3.value);

  if (pic.files && pic.files[0]) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      let textImg: any = reader.result;
      localStorage.setItem("profile_pic", textImg);
    });
    reader.readAsDataURL(pic.files[0]);
  }

  window.location.href = "./StaticResume/resume.html";
});