export class ToastOptions {
  public header?: string;
  public message?: string;
  public position?: any;
  public closeButtonText?: string;
  public color?: string;
  public duration?: number;
  public showCloseButton?: boolean;

  constructor(data: any) {

    this.header = data.header;
    this.message = data.message;
    this.position = data.position;
    this.closeButtonText = data.closeButtonText;
    this.color = data.color;
    this.duration = data.duration;
    this.showCloseButton = data.showCloseButton;
  }
}
