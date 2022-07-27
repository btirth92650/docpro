import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-p-favourite-doctor',
  templateUrl: './p-favourite-doctor.component.html',
  styleUrls: ['./p-favourite-doctor.component.scss']
})
export class PFavouriteDoctorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  favouritelist=[
    {
      image:'http://azim.commonsupport.com/Docpro/assets/images/team/team-21.jpg',
      title:'Dr. Mary Astor',
      cheakicon:'fa fa-check-circle-o',
      description:'MDS - Periodontology and BDS',
      staricon:'fa fa-star',
      spanno:'(28)',
      locationicon:'fa fa-map-marker',
      location:'G87P, Birmingham, UK',
      available:'24/7 Available',
      link:'/admin/dr-mary-astor',
    },
    {
      image:'http://azim.commonsupport.com/Docpro/assets/images/team/team-22.jpg',
      title:'Dr. Rex Allen',
      cheakicon:'fa fa-check-circle-o',
      description:'MDS - Periodontology and BDS',
      staricon:'fa fa-star',
      spanno:'(28)',
      locationicon:'fa fa-map-marker',
      location:'G87P, Birmingham, UK',
      available:'24/7 Available',
      link:'/admin/dr-rex-allen',

    },
    {
      image:'http://azim.commonsupport.com/Docpro/assets/images/team/team-23.jpg',
      title:'Dr. Julia Jhones',
      cheakicon:'fa fa-check-circle-o',
      description:'MDS - Periodontology and BDS',
      staricon:'fa fa-star',
      spanno:'(28)',
      locationicon:'fa fa-map-marker',
      location:'G87P, Birmingham, UK',
      available:'24/7 Available',
      link:'/admin/dr-julia-jhones',

    },
    {
      image:'http://azim.commonsupport.com/Docpro/assets/images/team/team-24.jpg',
      title:'Dr. Fred Allen',
      cheakicon:'fa fa-check-circle-o',
      description:'MDS - Periodontology and BDS',
      staricon:'fa fa-star',
      spanno:'(28)',
      locationicon:'fa fa-map-marker',
      location:'G87P, Birmingham, UK',
      available:'24/7 Available',
    },
    {
      image:'http://azim.commonsupport.com/Docpro/assets/images/team/team-25.jpg',
      title:'Dr. Leroy Anderson',
      cheakicon:'fa fa-check-circle-o',
      description:'MDS - Periodontology and BDS',
      staricon:'fa fa-star',
      spanno:'(28)',
      locationicon:'fa fa-map-marker',
      location:'G87P, Birmingham, UK',
      available:'24/7 Available',
    },
    {
      image:'http://azim.commonsupport.com/Docpro/assets/images/team/team-26.jpg',
      title:'Dr. Ray Aniston',
      cheakicon:'fa fa-check-circle-o',
      description:'MDS - Periodontology and BDS',
      staricon:'fa fa-star',
      spanno:'(28)',
      locationicon:'fa fa-map-marker',
      location:'G87P, Birmingham, UK',
      available:'24/7 Available',
    },
  ]

}
