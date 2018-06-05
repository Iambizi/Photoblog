import { Component } from '@angular/core';
import { EventEmitter } from '@angular/common/src/facade/async';

@Component({
    selector: 'app-entry-comment-form',
    templateUrl: 'entry-comment-form.component.html'
})

export class EntryCommentFormComponent {
    name: string ="";
    comment:string ="";
    onCommentAdded = new EventEmitter<{name: string; comment:string;}>();

    onSubmit() {
        
    }

}

