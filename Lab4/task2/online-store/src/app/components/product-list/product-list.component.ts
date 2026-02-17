import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
    selector: 'app-product-list',
    standalone: true,
    imports: [CommonModule, ProductCardComponent],
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
    products: Product[] = [
        {
            id: 1,
            name: 'Apple iPhone 15 128GB Black',
            description:
                'Base model of the iPhone 15 series with a USB-C port, an upgraded 48 MP camera, and the A16 Bionic chip. The perfect balance of performance and convenience.',
            price: 385730,
            rating: 5.0,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=preview-large',
            images: [
                'https://resources.cdn-kaspi.kz/img/m/p/h1b/hc1/8570000000001.jpg',
                'https://resources.cdn-kaspi.kz/img/m/p/h1b/hc1/8570000000001.jpg',
                'https://resources.cdn-kaspi.kz/img/m/p/h1b/hc1/8570000000001.jpg',
            ],
            link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/?c=195220100',
        },
        {
            id: 2,
            name: 'Apple iPhone 13 128GB Black',
            description:
                'A proven Apple classic. A reliable A15 processor, great battery life, and a compact body make it one of the most popular choices.',
            price: 322652,
            rating: 4.9,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=preview-large',
            images: [
                'https://resources.cdn-kaspi.kz/img/m/p/h1b/hc1/8570000000001.jpg',
                'https://resources.cdn-kaspi.kz/img/m/p/h1b/hc1/8570000000001.jpg',
                'https://resources.cdn-kaspi.kz/img/m/p/h1b/hc1/8570000000001.jpg',
            ],
            link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=195220100',
        },
        {
            id: 3,
            name: 'Apple iPhone 16 128GB Black',
            description:
                "The latest flagship with advanced AI capabilities, an Action Button, and a next-generation ultra-fast processor.",
            price: 459186,
            rating: 4.8,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/hf3/h65/87295470731294.png?format=preview-large',
            images: [
                'https://resources.cdn-kaspi.kz/img/m/p/h1b/hc1/8570000000001.jpg',
                'https://resources.cdn-kaspi.kz/img/m/p/h1b/hc1/8570000000001.jpg',
                'https://resources.cdn-kaspi.kz/img/m/p/h1b/hc1/8570000000001.jpg',
            ],
            link: 'https://kaspi.kz/shop/p/apple-iphone-16-128gb-chernyi-123713453/?c=195220100',
        },
        {
            id: 4,
            name: 'Apple iPhone 13 128GB White',
            description:
                'Elegant Starlight white body. The same powerful iPhone 13 features in a light finish that matches any style.',
            price: 359940,
            rating: 4.9,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/hc9/h90/64209083007006.jpg?format=preview-large',
            images: [
                'https://resources.cdn-kaspi.kz/img/m/p/h1b/hc1/8570000000001.jpg',
                'https://resources.cdn-kaspi.kz/img/m/p/h1b/hc1/8570000000001.jpg',
                'https://resources.cdn-kaspi.kz/img/m/p/h1b/hc1/8570000000001.jpg',
            ],
            link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-belyi-102298420/?c=195220100',
        },
        {
            id: 5,
            name: 'Apple iPhone 16 256GB Black',
            description:
                "The iPhone 16 version with increased storage. Keep more photos, 4K videos, and apps without constantly having to free up space.",
            price: 493451,
            rating: 5.0,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/h52/h3f/87295472795678.png?format=preview-large',
            images: [
                'https://resources.cdn-kaspi.kz/img/m/p/h1b/hc1/8570000000001.jpg',
                'https://resources.cdn-kaspi.kz/img/m/p/h1b/hc1/8570000000001.jpg',
                'https://resources.cdn-kaspi.kz/img/m/p/h1b/hc1/8570000000001.jpg',
            ],
            link: 'https://kaspi.kz/shop/p/apple-iphone-16-256gb-chernyi-123728177/?c=195220100',
        },
        {
            id: 6,
            name: 'Samsung Galaxy A56 5G 8GB/256GB Gray',
            description:
                'A modern 5G-enabled Android smartphone. A large bright display, a high-capacity battery, and a great camera for its price segment.',
            price: 209100,
            rating: 4.7,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/pb5/pa3/30496239.png?format=preview-large',
            images: [
                'https://resources.cdn-kaspi.kz/img/m/p/h1b/hc1/8570000000001.jpg',
                'https://resources.cdn-kaspi.kz/img/m/p/h1b/hc1/8570000000001.jpg',
                'https://resources.cdn-kaspi.kz/img/m/p/h1b/hc1/8570000000001.jpg',
            ],
            link: 'https://kaspi.kz/shop/p/samsung-galaxy-a56-5g-8-gb-256-gb-seryi-136420155/?c=195220100',
        },
        {
            id: 7,
            name: 'Apple iPhone 15 128GB Blue',
            description:
                'A soft blue body color with a matte finish. Dynamic Island instead of the notch and all the benefits of the iPhone 15 series in a stylish design.',
            price: 368085,
            rating: 5.0,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/h01/h5f/86303746293790.jpg?format=preview-large',
            images: [
                'https://resources.cdn-kaspi.kz/img/m/p/h1b/hc1/8570000000001.jpg',
                'https://resources.cdn-kaspi.kz/img/m/p/h1b/hc1/8570000000001.jpg',
                'https://resources.cdn-kaspi.kz/img/m/p/h1b/hc1/8570000000001.jpg',
            ],
            link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-goluboi-113137929/?c=195220100',
        },
        {
            id: 8,
            name: 'Apple iPhone 15 256GB Black',
            description:
                "iPhone 15 with expanded 256GB storage. A great choice for those who shoot a lot and don't want to depend on cloud storage.",
            price: 449900,
            rating: 5.0,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/h16/hb1/86303746097182.jpg?format=preview-large',
            images: [
                'https://resources.cdn-kaspi.kz/img/m/p/h1b/hc1/8570000000001.jpg',
                'https://resources.cdn-kaspi.kz/img/m/p/h1b/hc1/8570000000001.jpg',
                'https://resources.cdn-kaspi.kz/img/m/p/h1b/hc1/8570000000001.jpg',
            ],
            link: 'https://kaspi.kz/shop/p/apple-iphone-15-256gb-chernyi-113137897/?c=195220100',
        },
        {
            id: 9,
            name: 'Apple iPhone 16 128GB White',
            description:
                'Impeccable white color of the 2024 model. The most powerful internals in an aerospace-grade aluminum body with an updated camera system.',
            price: 445012,
            rating: 5.0,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/h35/h47/87295471124510.png?format=preview-large',
            images: [
                'https://resources.cdn-kaspi.kz/img/m/p/h1b/hc1/8570000000001.jpg',
                'https://resources.cdn-kaspi.kz/img/m/p/h1b/hc1/8570000000001.jpg',
                'https://resources.cdn-kaspi.kz/img/m/p/h1b/hc1/8570000000001.jpg',
            ],
            link: 'https://kaspi.kz/shop/p/apple-iphone-16-128gb-belyi-123726722/?c=195220100',
        },
        {
            id: 10,
            name: 'Samsung Galaxy A56 5G 8GB/256GB Silver',
            description:
                'Silver version of the popular Galaxy A56. 256GB of internal storage and 8GB of RAM — great multitasking at an affordable price.',
            price: 209098,
            rating: 4.8,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/p40/pe8/30496109.png?format=preview-large',
            images: [
                'https://resources.cdn-kaspi.kz/img/m/p/h1b/hc1/8570000000001.jpg',
                'https://resources.cdn-kaspi.kz/img/m/p/h1b/hc1/8570000000001.jpg',
                'https://resources.cdn-kaspi.kz/img/m/p/h1b/hc1/8570000000001.jpg',
            ],
            link: 'https://kaspi.kz/shop/p/samsung-galaxy-a56-5g-8-gb-256-gb-serebristyi-136420120/?c=195220100',
        },
        {
            id: 11,
            name: 'Apple iPhone 15 128GB Pink',
            description:
                'Bright and expressive pink. A smartphone that highlights individuality while keeping Apple’s top performance.',
            price: 394091,
            rating: 5.0,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/h81/h37/86303335186462.jpg?format=preview-large',
            images: [
                'https://resources.cdn-kaspi.kz/img/m/p/h1b/hc1/8570000000001.jpg',
                'https://resources.cdn-kaspi.kz/img/m/p/h1b/hc1/8570000000001.jpg',
                'https://resources.cdn-kaspi.kz/img/m/p/h1b/hc1/8570000000001.jpg',
            ],
            link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-rozovyi-113137949/?c=195220100',
        },
        {
            id: 12,
            name: 'Apple iPhone 14 128GB Black',
            description:
                'The previous generation that is still relevant. Excellent night shots, high speed, and support for all modern apps.',
            price: 349823,
            rating: 4.9,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/hb8/h19/86042949648414.png?format=preview-large',
            images: [
                'https://resources.cdn-kaspi.kz/img/m/p/h1b/hc1/8570000000001.jpg',
                'https://resources.cdn-kaspi.kz/img/m/p/h1b/hc1/8570000000001.jpg',
                'https://resources.cdn-kaspi.kz/img/m/p/h1b/hc1/8570000000001.jpg',
            ],
            link: 'https://kaspi.kz/shop/p/apple-iphone-14-128gb-chernyi-106363023/?c=195220100',
        },
    ];
}
