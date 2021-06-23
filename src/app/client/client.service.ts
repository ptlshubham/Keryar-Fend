import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ApiService } from 'app/service/api.service';
import { Observable } from 'rxjs';
import { Client } from './client-details/client-details.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(
    private http: Http,
    private httpClient: HttpClient
  ) { }

  //   saveMainCat(admin: Category): Observable<any> {

  //     return this.httpClient.post<any>(ApiService.saveMainURL, admin);
  //   }
  //   GetFilterProduct(data){
  //     return this.httpClient.post<any>(ApiService.getFilterProductListURL,data);
  //   }
  //   getProductDetailImages(id){
  //     let data={
  //       id :id
  //     }
  //     return this.httpClient.post<any>(ApiService.getProductDetailImageURL,data);
  //   }
  //   getMainCat(id): Observable<Category[]>{

  //     return this.httpClient.get<any>(ApiService.getMainURL+id);
  //   }
  //   getCloth(): Observable<Category[]>{

  //     return this.httpClient.get<any>(ApiService.getClothsURL);
  //   }

  //   saveCat(admin: Category): Observable<any> {

  //     return this.httpClient.post<any>(ApiService.saveCatURL, admin);
  //   }
  //   // getCat(): Observable<Category[]>{
  //   //    
  //   //   return this.httpClient.get<any>(ApiService.getCatURL);
  //   // }
  //   removeMainCatList(id){

  //     return this.httpClient.get<any>(ApiService.removeMainCatURL+id);
  //   }
  updateClients(admin: Client): Observable<any> {
    return this.httpClient.post<any>(ApiService.updateClientsURL, admin);
  }
  //   updateMainCat(admin: Category): Observable<any>{

  //     return this.httpClient.post<any>(ApiService.updateCategoryURL, admin);
  //   }
  //   saveAddProduct(admin: Product): Observable<any>{

  //     return this.httpClient.post<any>(ApiService.saveProductsURL, admin);
  //   }
  //   selectUploadImage(img): Observable<any>{

  //     return this.httpClient.post<any>(ApiService.uploadMainImageURL, img);

  //   }
  //   selectMultiUploadImage(img): Observable<any>{
  //     return this.httpClient.post<any>(ApiService.uploadMultiImageURL, img);
  //   }
  //   removeOrChanged(){
  //     return this.httpClient.get<any>(ApiService.removeImageURL);
  //   }
  //   uploadCategoryBannersImage(img): Observable<any>{
  //     return this.httpClient.post<any>(ApiService.uploadCategoryBannersURL, img);
  //   }


}


