import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class TipService {

    private tipAnnouncedSource = new Subject<any>();

    tipAnnounced = this.tipAnnouncedSource.asObservable();

    announceTip(tip: string): void {
        this.tipAnnouncedSource.next(tip);
    }
}