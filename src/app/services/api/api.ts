import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';

interface IResult {
  data: Array<Object>;
}

interface IBusiness {
  type: string;
  id: number;
  attributes: IBusinessAttributes
}
interface IBusinessAttributes {
  business_name: string;
  city: string;
  state: string;
  closed: boolean;
  latitude: string;
  longitude: string;
}

@Injectable()
export class BusinessService {
  title: string = 'Angular 2';
  result: IResult = null;
  error: {};

  constructor(private http: Http) {
    http.get('./data.json')
      .map((res: Response) => res.json())
      .subscribe(
        res => this.result = res,
        error => this.error = error);
  }
}
