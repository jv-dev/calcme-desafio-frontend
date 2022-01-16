import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppService } from './resources/services/user.service';
import { AlertService } from './resources/services/alert.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  user: any;

  constructor(
    private service: AppService,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    this.user = {};
  }

  save(frm: NgForm) {
    this.service.save(this.user).subscribe(
      (data) => {
        this.alertService.success("Sucesso!", "Usuário cadastrado com sucesso!");
        frm.reset();
      },
      (error) => {
        this.alertService.error("Oops", "Algo deu errado... Verifique os dados inseridos e tente novamente mais tarde");
        frm.reset();
      }    
    );
  }
}
