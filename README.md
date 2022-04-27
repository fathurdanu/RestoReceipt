# API Documentation

## Menu Table

`GET /menus`

    http://localhost:3000/menus

+ untuk mengambil semua data dari tabel menu

`POST /menus/create`

    http://localhost:3000/menus/create

+ untuk menginput data ke tabel menu

`GET /menus/delete/id`

    http://localhost:3000/menus/delete/1

+ untuk menghapus data dari tabel menu

`POST /menus/update/id`

    http://localhost:3000/menus/update/1

+ untuk mengupdate data dari tabel menu

`GET /menus/id`

    http://localhost:3000/menus/1

+ untuk mengambil satu data dari tabel menu berdasar id


## Receipt Table

`GET /receipts`

    http://localhost:3000/receipts

+ untuk mengambil semua data dari tabel receipt

`POST /receipts/create`

    http://localhost:3000/receipts/create

+ untuk menginput data ke tabel receipt

`GET /receipts/delete/id`

    http://localhost:3000/receipts/delete/1

+ untuk menghapus data dari tabel receipt

`POST /receipts/update/id`

    http://localhost:3000/receipts/update/1

+ untuk mengupdate data dari tabel receipt

`GET /receipts/id`

    http://localhost:3000/receipts/1

+ untuk mengambil satu data dari tabel receipt berdasar id

`GET /receipts/count/id`

    http://localhost:3000/receipts/count/1

+ untuk auto update dengan cara menjumlahkan biaya keseluruhan ke dalam `subTotalPrice` (tanpa diskon) dan `totalPrice` (dengan diskon) berdasarkan data pada tabel order


## Order Table

`GET /orders`

    http://localhost:3000/orders

+ untuk mengambil semua data dari tabel order

`POST /orders/create`

    http://localhost:3000/orders/create

+ untuk menginput data ke tabel order

`GET /orders/delete/id`

    http://localhost:3000/orders/delete/1

+ untuk menghapus data dari tabel order

`POST /orders/update/id`

    http://localhost:3000/orders/update/1

+ untuk mengupdate data dari tabel order

`GET /orders/id`

    http://localhost:3000/orders/1

+ untuk mengambil satu data dari tabel order berdasar id


## Promo Table

`GET /promos`

    http://localhost:3000/promos

+ untuk mengambil semua data dari tabel promo

`POST /promos/create`

    http://localhost:3000/promos/create

+ untuk menginput data ke tabel promo

`GET /promos/delete/id`

    http://localhost:3000/promos/delete/1

+ untuk menghapus data dari tabel promo

`POST /promos/update/id`

    http://localhost:3000/promos/update/1

+ untuk mengupdate data dari tabel promo

`GET /promos/id`

    http://localhost:3000/promos/1

+ untuk mengambil satu data dari tabel promo berdasar id
