import { Injectable } from '@angular/core';
// import { retry } from 'rxjs';
import { Shoes } from 'src/app/Shared/Model/Shoe';
import { Tag } from 'src/app/Shared/Model/Tag';

@Injectable({
  providedIn: 'root',
})
export class ShoeserviceService {
  getShoeById(id: number): Shoes {
    return this.getAll().find((shoe) => shoe.id == id)!;
  }

  constructor() {}

  getAllshoesByTag(tag: string): Shoes[] {
    // return tag == 'All'?
    //     this.getAll() : this.getAll().filter((shoe) => shoe.tags?.includes(tag));

      if(tag=='All')
      return this.getAll()
     else
     return this.getAll().filter(shoe => shoe['tags']?.includes(tag))
  }

  getAlltag():Tag[]{
    return[
      {name: 'All', count: 44},
      {name: 'Adidas', count: 6 },
      {name: 'Casual', count: 6},
      {name: 'Formal', count: 7},
      {name: 'Juti', count: 6},
      {name: 'Nike', count: 6},
      {name: 'Puma', count: 6},
      {name: 'Reebok', count: 7},





    ]

  }

  getAll(): Shoes[] {
    return [
      {
        id: 1,
        name: 'Adidas Black Classic',
        price: 299,
        favorite: true,
        tags:['Adidas'],
        imageurl: 'assets/adi1.jpg',
      },
      {
        id: 2,
        name: 'Adidas Strips Basic ',
        price: 425,
        favorite: true,
        tags:['Adidas'],
        imageurl: 'assets/adi2.jpg',
      },
      {
        id: 3,
        name: 'Adidas MultiColor',
        price: 269,
        favorite: false,
        tags:['Adidas'],
        imageurl: 'assets/adi3.jpg',
      },
      {
        id: 4,
        name: 'Adidas BlueStrp ',
        price: 255,
        favorite: true,
        tags:['Adidas'],
        imageurl: 'assets/adi4.jpg',
      },
      {
        id: 5,
        name: 'Adidas NewBlackRange',
        price: 325,
        favorite: false,
        tags:['Adidas'],
        imageurl: 'assets/adi5.jpg',
      },
      {
        id: 6,
        name: 'Adidas BlueStrp-2  ',
        price: 99,
        favorite: false,
        tags:['Adidas'],
        imageurl: 'assets/adi6.jpg',
      },
      {
        id: 7,
        name: 'Casual Budget-I',
        price: 75,
        favorite: true,
        tags:['Casual'],
        imageurl: 'assets/cas1.jpg',
      },
      {
        id: 8,
        name: 'Casual Budget-II',
        price: 75,
        favorite: false,
        tags:['Casual'],
        imageurl: 'assets/cas2.jpg',
      },
      {
        id: 9,
        name: 'Casual Budget-III',
        price: 75,
        favorite: true,
        tags:['Casual'],
        imageurl: 'assets/cas3.jpg',
      },
      {
        id: 10,
        name: 'Casual Budget-IV',
        price: 75,
        favorite: false,
        tags:['Casual'],
        imageurl: 'assets/cas4.jpg',
      },
      {
        id: 11,
        name: 'Casual Budget-V',
        price: 75,
        favorite: false,
        tags:['Casual'],

        imageurl: 'assets/cas5.jpg',
      },
      {
        id: 12,
        name: 'Casual Budget-VI',
        price: 75,
        favorite: false,
        tags:['Casual'],
        imageurl: 'assets/cas6.jpg',
      },
      {
        id: 13,
        name: 'Mens Formal Basic',
        price: 105,
        favorite: false,
        tags:['Formal'],
        imageurl: 'assets/for1.jpg',
      },
      {
        id: 14,
        name: 'Formal Classic Black',
        price: 75,
        favorite: false,
        tags:['Formal'],
        imageurl: 'assets/for2.jpg',
      },
      {
        id: 15,
        name: 'Formal MH_14',
        price: 89,
        favorite: true,
        tags:['Formal'],
        imageurl: 'assets/for3.webp',
      },
      {
        id: 16,
        name: 'Formal NewCollection',
        price: 99,
        favorite: false,
        tags:['Formal'],
        imageurl: 'assets/for4.jpg',
      },
      {
        id: 17,
        name: 'Formal Bobby Brown ',
        price: 88,
        favorite: false,
        tags:['Formal'],
        imageurl: 'assets/for5.jpg',
      },
      {
        id: 18,
        name: 'Formal New Elevation',
        price: 79,
        favorite: false,
        tags:['Formal'],
        imageurl: 'assets/for6.jpg',
      },
      {
        id: 19,
        name: 'Formal Classic Brown',
        price: 75,
        favorite: false,
        tags:['Formal'],
        imageurl: 'assets/for7.jpg',
      },
      {
        id: 20,
        name: 'Shaadi Wear Juti',
        price: 475,
        favorite: false,
        tags:['Juti'],
        imageurl: 'assets/ju1.jpg',
      },
      {
        id: 21,
        name: 'Normal wear Juti',
        price: 70,
        favorite: true,
        tags:['Juti'],
        imageurl: 'assets/ju2.jpg',
      },
      {
        id: 22,
        name: 'New_Collection Juti',
        price: 199,
        favorite: false,
        tags:['Juti'],
        imageurl: 'assets/ju3.jpg',
      },
      {
        id: 23,
        name: 'Casual Brown Juti',
        price: 55,
        favorite: false,
        tags:['Juti'],
        imageurl: 'assets/ju4.jpg',
      },
      {
        id: 24,
        name: 'Classic Black Juti',
        price: 101,
        favorite: false,
        tags:['Juti'],
        imageurl: 'assets/ju5.jpg',
      },
      {
        id: 25,
        name: 'Unique Juti Wear',
        price: 60,
        favorite: false,
        tags:['Juti'],
        imageurl: 'assets/ju6.jpg',
      },

      {
        id: 26,
        name: 'Nike Casual Black',
        price: 125,
        favorite: true,
        tags:['Nike'],
        imageurl: 'assets/Nike1.jpg',
      },
      {
        id: 27,
        name: 'Nike Seamless White',
        price: 499,
        favorite: false,
        tags:['Nike'],
        imageurl: 'assets/Nike2.jpg',
      },
      {
        id: 28,
        name: 'Nike Grey Shield',
        price: 159,
        favorite: false,
        tags:['Nike'],
        imageurl: 'assets/Nike3.jpeg',
      },
      {
        id: 29,
        name: 'Nike Rooten New',
        price: 175,
        favorite: false,
        tags:['Nike'],
        imageurl: 'assets/Nike4.jpeg',
      },
      {
        id: 30,
        name: 'Nike Gray Edition',
        price: 100,
        favorite: false,
        tags:['Nike'],
        imageurl: 'assets/Nike5.jpg',
      },
      {
        id: 31,
        name: 'Nike New Pattern',
        price: 275,
        favorite: false,
        tags:['Nike'],
        imageurl: 'assets/Nike6.jpg',
      },
      {
        id: 32,
        name: 'Puma White Air1',
        price: 350,
        favorite: false,
        tags:['Puma '],
        imageurl: 'assets/Puma1.jpg',
      },
      {
        id: 33,
        name: 'Puma White Air2',
        price: 315,
        favorite: false,
        tags:['Puma'],
        imageurl: 'assets/Puma2.jpeg',
      },
      {
        id: 34,
        name: 'Puma Casual Black',
        price: 200,
        favorite: false,
        tags:['Puma'],
        imageurl: 'assets/Puma3.jpg',
      },
      {
        id: 35,
        name: 'Puma MultiColor BuGi1',
        price: 215,
        favorite: false,
        tags:['Puma'],
        imageurl: 'assets/Puma5.jpg',
      },
      {
        id: 36,
        name: 'Puma MultiColor BuGi2',
        price: 220,
        favorite: true,
        tags:['Puma'],
        imageurl: 'assets/Puma6.jpg',
      },
      {
        id: 37,
        name: 'Puma White Air3',
        price: 375,
        favorite: true,
        tags:['Puma'],
        imageurl: 'assets/Puma7.jpg',
      },
      {
        id: 38,
        name: 'Reebok white Collection-I',
        price: 175,
        favorite: false,
        tags:['Reebok'],
        imageurl: 'assets/ree1.jpeg',
      },
      {
        id: 39,
        name: 'Reebok Pattern Collection',
        price: 189,
        favorite: false,
        tags:['Reebok'],
        imageurl: 'assets/ree2.jpg',
      },
      {
        id: 40,
        name: 'Reebok Pattern Collection',
        price: 179,
        favorite: false,
        tags:['Reebok'],
        imageurl: 'assets/ree3.jpg',
      },
      {
        id: 41,
        name: 'Reebok white Collection-II',
        price: 279,
        tags:['Reebok'],
        favorite: false,
        imageurl: 'assets/ree4.png',
      },
      {
        id: 42,
        name: 'Reebok white Collection-III',
        price: 300,
        favorite: false,
        tags:['Reebok'],
        imageurl: 'assets/ree5.webp',
      },
      {
        id: 43,
        name: 'Reebok white Collection-IV',
        price: 295,
        favorite: false,
        tags:['Reebok'],
        imageurl: 'assets/ree6.png',
      },
      {
        id: 44,
        name: 'Reebok white Collection-V',
        price: 215,
        favorite: true,
        tags:['Reebok'],
        imageurl: 'assets/ree7.jpg',
      },
    ];
  }
}
