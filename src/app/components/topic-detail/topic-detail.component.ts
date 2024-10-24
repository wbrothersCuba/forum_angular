import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Topic } from '../../models/topic';
import { TopicService } from '../../services/topic.service';
import { Comment } from '../../models/comments';
import { UserService } from '../../services/user.service';
import { CommentService } from '../../services/comment.service';
import { global } from 'src/app/services/global';

@Component({
  selector: 'app-topic-detail',
  templateUrl: './topic-detail.component.html',
  styleUrls: ['./topic-detail.component.css'],
  providers: [TopicService, UserService, CommentService]
})
export class TopicDetailComponent implements OnInit {
  public topic: Topic;
  public comment: Comment;
  public identity;
  public token;
  public status;
  private url;
  private lang;
  private flag;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _topicService: TopicService,
    private _userService: UserService,
    private _commentService: CommentService
  ) {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    if(this.identity != null)
    this.comment = new Comment('', '', '', this.identity._id);
    this.url = global.url;
    this.lang = ['css','java','sql','php','javascript','python','typescript','yaml'];
  }

  ngOnInit() {
    this.getTopic()
  }

  getTopic() {
    this._route.params.subscribe(params => {
      let id = params['id'];
      this._topicService.getTopic(id).subscribe(
        response => {
          if (response.topic) {
            this.topic = response.topic;
            let index = this.lang.findIndex((lang)=>{
               return this.flag = (this.topic.lang.toLocaleLowerCase() === lang);
            }) 
            console.log(this.flag);
          } else {
            this._router.navigate(['/inicio']);
          }
        }, error => {
          console.log(error);
        }
      );
    });
  }

  onSubmit(form) {
    this._commentService.add(this.token, this.comment, this.topic._id).subscribe(
      response => {
        if (response.topic) {
          this.status = 'success';
          this.topic = response.topic;
          form.reset();
        } else {
          this.status = 'error';
        }
      }, error => {
        this.status = 'error';
        console.log(error);
      }
    );
  };

  deleteComment(id){
    this._commentService.delete(this.token, this.topic._id, id).subscribe(
      response => {
        if (response.topic) {
          this.status = 'success';
          this.topic = response.topic;
        } else {
          this.status = 'error';
        }
      }, error => {
        this.status = 'error';
        console.log(error);
      }
    );
  }

}
