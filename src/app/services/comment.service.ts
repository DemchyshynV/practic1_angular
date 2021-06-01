import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {IComment} from "../interfaces";
import {HttpClient} from "@angular/common/http";
import {urls} from "../contants";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient: HttpClient) {
  }

  getByPostId(postId: number): Observable<IComment[]> {
    return this.httpClient.get<IComment[]>(`${urls.comments}?postId=${postId}`)
  }
}
