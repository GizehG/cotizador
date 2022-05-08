import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../Service/service.service';
import { Cliente } from '../Models/cliente';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private router: Router, private service: ServiceService, private cliente: Cliente) { }

  ngOnInit(): void {
  }

  Calcular(){

  }

  Limpiar(){

  }

  Registrar(){
    // this.service.nuevoCliente(cliente).subscribe(
    //   res => {
    //     console.log(res);
    //   },
    //   err => console.log(err)
    // )
  }

}
