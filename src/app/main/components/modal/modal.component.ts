import {Component, Input, OnInit} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
declare var Email: any;

@Component({
  selector: 'ngbd-modal-component',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class NgbdModalBasic implements OnInit {
    @Input() btnFlag: boolean;
    btnClass: string;
    closeResult: string;
    sendEmail: string;

    constructor(private modalService: NgbModal) {}
    ngOnInit() {
        console.log('this is btnFlag', this.btnFlag)
        if (this.btnFlag){
            this.btnClass = "btn-register"
        }else{
            this.btnClass = "btn-register-linear"
        }
    }
    open(content, type, modalDimension) {
        if (modalDimension === 'sm' && type === 'modal_mini') {
            this.modalService.open(content, { windowClass: 'modal-mini modal-primary', size: 'sm' }).result.then((result) => {
                this.closeResult = `Closed with: ${result}`;
            }, (reason) => {
                this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
            });
        } else if (modalDimension == undefined && type === 'Login') {
          this.modalService.open(content, { windowClass: 'modal-login modal-primary' }).result.then((result) => {
              this.closeResult = `Closed with: ${result}`;
          }, (reason) => {
              this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
          });
        } else {
            this.modalService.open(content).result.then((result) => {
                this.closeResult = `Closed with: ${result}`;
            }, (reason) => {
                this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
            });
        }

    }
    onEMailSend(){
        Email.send({
            Host : 'smtp.elasticemail.com',
            Username : 'hengsong829@gmail.com',
            Password : '1DAE6BAFA10BF6B07B8D27B7FEA47C8E6362',
            To : 'kochhay1030@gmail.com',
            From : 'hengsong829@gmail.com',
            Subject : 'aaaaaaaa',
            Body : '<i>This is sent as a feedback from my resume page.</i> <br/> <b>Name: </b>${this.model.name} <br /> <b>Email: </b>${this.model.email}<br /> <b>Subject: </b>${this.model.subject}<br /> <b>Message:</b> <br /> ${this.model.message} <br><br> <b>~End of Message.~</b>'
            })
    }
    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return  `with: ${reason}`;
        }
    }
}
