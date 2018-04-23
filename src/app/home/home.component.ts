import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onLoadServer(id: number) {
    this.router.navigate(['/servers', id, 'edit'], {queryParams: {allowEdit: '1'}, fragment: 'loading'});
    // the second argument of router.navigation, we can set a relativeTo to relative route
    // like navigate(['servers'], {relativeTo: this.route})
    // also you need to add private route: ActiveRoute in the constructor.
    // in this case the URL will be /servers/servers if you add the above code in the servers component.
  }

}
