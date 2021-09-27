import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-manage-category',
  templateUrl: './manage-category.component.html',
  styleUrls: ['./manage-category.component.css']
})
export class ManageCategoryComponent implements OnInit {

  viewCategory?:any=[];

  constructor(private router:Router,private categoryService:CategoryService) { }

  ngOnInit():any {
    this.reloadData();  
  }

  reloadData(){
    this.categoryService.getAllCategory().subscribe( response => {
      this.viewCategory = response;
  });
  }

  deleteCategory(id:number) {
    this.categoryService.deleteCategory(id).subscribe(response => {
        window.alert(response);
        this.reloadData();
      },
      error =>  window.alert(error.error));
  }

  updateCategory(id:number) {
    this.router.navigate(["/updateCategory",id]);
  }
  

}
