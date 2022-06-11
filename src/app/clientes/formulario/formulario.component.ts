import { Component, OnInit } from '@angular/core';
import { Clientes } from '../shared/clientes';
import { FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  formCliente!: FormGroup;
  constructor() { }


  ngOnInit(): void {
    this.createForm(new Clientes());

  }

  createForm(cliente: Clientes) {
    this.formCliente = new FormGroup({
      nome: new FormControl(cliente.nome),
      tipo: new FormControl(cliente.tipo),
      genero: new FormControl(cliente.genero),
      dataNascimento: new FormControl(cliente.dataNascimento),
      observacao: new FormControl(cliente.observacao),
      inativo: new FormControl(cliente.inativo)
    })
  }

  onSubmit() {

    console.log(this.formCliente.value);
    this.createForm(new Clientes());
  }}
