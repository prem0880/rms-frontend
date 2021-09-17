import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://localhost:8083/api/product';

  constructor(private http : HttpClient) { }

  createProduct(product:Product){
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.http.post(`${this.baseUrl}`, product,{headers, responseType : 'text'} );
  }

  getAllProduct() : Observable<any>{
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.http.get<Product>(`${this.baseUrl}`);
  }

  deleteProduct(id:number,cid:number,mid:number){
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.http.delete(`${this.baseUrl}/${id}/category/${cid}/meal/${mid}`, { headers, responseType: 'text'});
  }

  updateProduct(id:number,product:Product){
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.http.put(`${this.baseUrl}/${id}`, product,{ headers, responseType: 'text'});
  }

}
export class Product{
  id?:number;
  name?:string;
  image?:string;
  type?:string;
  price?:number;
  description?:string;
  tax?:number;
  category?:any;
  meal?:any;
}
