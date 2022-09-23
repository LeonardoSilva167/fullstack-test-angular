import { Component, OnInit } from '@angular/core';

import { catchError } from 'rxjs/operators';

import { ApiService } from '../services/api.service';

import {NgForm} from '@angular/forms'


@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.scss']
})
export class PaginaComponent implements OnInit {

  public MSG_ERRO_500 = "Falha na comunicação com o servidor."
  public apiGetDataHora: any = {};
  public apiGetMensagemForm: any = {};
  public elementosForm: any = {}

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {

    this.apiGetDataHora.mensagem = '';
    this.apiGetDataHora.data = '';
    this.apiGetMensagemForm.mensagem = '';

    this.apiService.getDataHoraServidor().pipe(
      catchError((err) => {
        this.apiGetDataHora.mensagem = this.MSG_ERRO_500;
        this.apiGetDataHora.data = '';
        return [];
      })
    ).subscribe((response) => {
      if (response) {
        this.apiGetDataHora.mensagem = response.message;
        this.apiGetDataHora.data = response.data;
      }
    });
  }
  private init(): void{
    this.elementosForm.inputTexto = '';
  }

  /**
   * Envia os dados do formulario para verficar mensagem digitada
   * @param form
   */
  public sendMensagem(form: NgForm){
    if(form.valid){
      this.apiService.getMensagem(this.elementosForm).pipe(
        catchError((err) => {
          this.apiGetMensagemForm.mensagem = this.MSG_ERRO_500;
          return [];
        })
      ).subscribe((response) => {
        this.init();
        if (response) {
          this.apiGetMensagemForm.mensagem = response.message;
        }
      });

    }
  }

}
