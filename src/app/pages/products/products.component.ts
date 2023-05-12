import { Component, OnInit } from '@angular/core';
import { ProductModel, UpdateProductModelDto } from 'src/app/entities/product.model';
import { ProductHttpService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductComponent implements OnInit {

  products: ProductModel[] = [];
  selectedProduct: UpdateProductModelDto={}

  constructor(private productHttpService: ProductHttpService) {}

  ngOnInit(): void {
    //this.getProducts();
    //this.getProduct();
    //this.createProduct();
    //this.updateProduct();
    this.deleteProduct(34);
  }
 getProducts(){
   this.productHttpService.getAll().subscribe(
    response=>{
       this.products= response
      console.log(response)}
      )
 }
 getProduct(){
   this.productHttpService.getOne(498).subscribe(
    response=>{
      console.log(response)})
 }
 createProduct(){
  const data = {
    title: 'ZAPATOS NIKKE',
    price: 20,
    description: 'NIKE ',
    images: [
      'data:image/jpeg;base64,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',
    ],
    categoryId: 1,
  };
  this.productHttpService.store(data).subscribe(
    response=>{
      console.log(response)})
 }
 editProduct(product: ProductModel){
  this.selectedProduct = product
 }
 updateProduct(){
  const data = {
    title: 'ZAPATOS BAD BUNNY',
    price: 11,
    description: 'BAD BUNNY',
  };
  this.productHttpService.update(498,data).subscribe(
    response => {
      console.log(response)})
 }

 deleteProduct(id:ProductModel['id']){
  this.productHttpService.destroy(id).subscribe(
    response => {
      this.products= this.products.filter(product => product.id != id);
      console.log(response)})
 }

}
