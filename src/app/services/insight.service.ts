import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class InsightService {

  constructor(private http: Http) { }

  doSendFile(selectedFile){
    const fd = new FormData(selectedFile);
    const brunoUrl="/";
    fd.append('file', selectedFile, selectedFile.name)
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(brunoUrl, fd, { headers: headers })
      .pipe(map(res =>  {
        return res.json();
      }));
  }
}
