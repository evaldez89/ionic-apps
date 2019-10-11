export class LogScans {
    public format: string;
    public text: string;
    public type: string;
    public icon: string;
    public created: Date;

    constructor( format: string, text: string ) {
        this.format = format;
        this.text = text;
        this.created = new Date();

        this.setType();
    }

    private setType() {
        const textInit = this.text.substring(0, 4);

        switch (textInit) {
            case 'http':
                this.type = 'http';
                this.icon = 'globe';
                break;
            case 'geo:':
                this.type = 'geo';
                this.icon = 'pin';
                break;
            default:
                this.type = 'none';
                this.icon = 'create';
                break;
        }


        this.type = '';
    }
}
