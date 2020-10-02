import VueParse from '../generator/VueParse';
const uuid = require('@lukeed/uuid');

export default class LifeCycle {
  lifeCycleData: string = '';
  uuid: string = '';
  vueParse: any;
  name: string = 'lifeCycle';
  path: string = '/LifeCycle';
  config: any = {
    temp: ''
  };


  constructor (data: any = {}) {
    this.uuid = uuid().split('-')[0];
    const { config } = data;
    if (config) {
      this.config = config;
    } else {
      this.config.temp = `export default{
  data () {
    return {

    };
  }
}
      `;
    }

    this.parseToVueParse();
  }

  private parseToVueParse () {
    this.vueParse = new VueParse(this.uuid, `
      <script>
        ${this.config.temp}
      </script>
    `);
  }

  public setCode (lifeCycleData: string) {
    this.config.temp = lifeCycleData;
    this.parseToVueParse();
  }

  public getCode () {
    return this.config.temp;
  }
  
}