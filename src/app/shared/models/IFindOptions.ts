export interface IFindOptions {
  [key: string]: any;
}
export interface IGateway {
  find(o?: IFindOptions): any;
  insert(value: any): void;
  update(key: string | number, value: any): any;
  delete(key: string | number): void;
}
