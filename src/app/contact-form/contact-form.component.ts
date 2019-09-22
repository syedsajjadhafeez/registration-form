import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  

  constructor() {
    var objPeople = [
      { // Object @ 0 index
        username: "sam",
        password: "codify"
      },
      { // Object @ 1 index
        username: "matt",
        password: "academy"
      },
      { // Object @ 2 index
        username: "chris",
        password: "forever"
      }
    
    ]
    function getInfo() {
     
      var username = document.getElementById('username').nodeValue;
      var password = document.getElementById('password').nodeValue;
    
      for(var i = 0; i < objPeople.length; i++) {
        // check is user input matches username and password of a current index of the objPeople array
        if(username == objPeople[i].username && password == objPeople[i].password) {
          console.log(username + " is logged in!!!")
          // stop the function if this is found to be true
          return
        }
      }
      console.log("incorrect username or password")
    }
   }

  ngOnInit() {
  }

}
