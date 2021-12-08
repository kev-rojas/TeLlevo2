import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApisvcService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin':'*'
    })
  }
  //apiURL ='https://jsonplaceholder.typicode.com';//placeholder
  apiURL = 'http://my-json-server.typicode.com/KiwiState/gitjson' //'http://192.168.0.11:3000';//placeholder //192.168.0.11 Vicente //Kevin => Ip
  constructor(private http:HttpClient) { }
  //aca vienen los de real metods lMl
  getUsuarios():Observable<any>{ 
    return this.http.get(this.apiURL+'/users/').pipe( 
      retry(3) 
    ); 
  }
  getUsuario(userId: any):Observable<any>{ 
    return this.http.get(this.apiURL+'/users/'+userId).pipe( 
      retry(3) 
    ); 
  }
  getViajes():Observable<any>{ 
    return this.http.get(this.apiURL+'/viajes/').pipe( 
      retry(3) 
    ); 
  }
  getViaje(id:any):Observable<any>{ 
    return this.http.get(this.apiURL+'/viajes/'+id).pipe( 
      retry(3) 
    ); 
  }
  
  createUser(user:any):Observable<any>{ 
    return this.http.post(this.apiURL+'/users',user,this.httpOptions).pipe( 
      retry(3) 
    ); 
  } 
  
  createViaje(viaje:any):Observable<any>{ 
    return this.http.post(this.apiURL+'/viajes',viaje,this.httpOptions).pipe( 
      retry(3) 
    ); 
  } 
  
  
  

  /*

login(usuario:any){
    this.http.get<any>(this.apiURL).subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.email === usuario.email && a.password === usuario.password
      });
      if(user){
        alert("Logueao")
        this.ro
      }
    })
  }




  getUsuarioByName(userId: any):Observable<any>{ 
    return this.http.get(this.apiURL+'/users/'+userId).pipe( 
      retry(3) 
    ); 
  }  
  getUsuarios1():Observable<any>{ 
    return this.http.get(this.apiURL+'/users/').pipe( 
      retry(3) 
    ); 
  }
  getUsuario1(userId):Observable<any>{ 
    return this.http.get(this.apiURL+'/users/'+userId).pipe( 
      retry(3) 
    ); 
  }
  getPosts():Observable<any>{ 
    return this.http.get(this.apiURL+'/posts/').pipe( 
      retry(3) 
    ); 
  } 
  getPost(Id):Observable<any>{ 
    return this.http.get(this.apiURL+'/posts/'+Id).pipe( 
      retry(3) 
    ); 
  }
  createPost(post):Observable<any>{ 
    return this.http.post(this.apiURL+'/posts',post,this.httpOptions) .pipe( 
      retry(3) 
    ); 
  } 
  updatePost(id,post):Observable<any>{ 
    return this.http.put(this.apiURL+'/posts/'+id,post,this.httpOptions).pipe(
      retry(3)
      ); 
  }
  deletePost(id):Observable<any>{ 
    return this.http.delete(this.apiURL+'/posts/'+id,this.httpOptions); 
  }
  */
   
  
}
