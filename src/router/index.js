import Vue from 'vue'
import Router from 'vue-router'
import Home from "../view/home/Home.vue";
import HomePage from "../view/homepage/HomePage.vue";
import CustomerCard from "../components/customer-card/CustomerCard.vue";
import CustomerList from "../view/customer-list/CustomerList.vue";
import ItemList from "../view/item-list/ItemList.vue";
import Item from "../view/Item/Item.vue";
import InvoiceView from "../view/invoice-view/InvoiceView.vue";
import Customer from "../view/customer/Customer.vue";
import NewCustomer from "../view/new-customer/NewCustomer.vue";
import ScanView from "../view/scan-view/ScanView.vue";
import InvoiceList from "../view/invoice-list/InvoiceList.vue";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/home-page',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/product-list',
      name: 'product',
      component: ItemList
    },
    {
      path: '/product',
      name: 'Item',
      component: Item
    },
    {
      path: '/customer-list',
      name: 'CustomerList',
      component: CustomerList
    },
    {
      path: '/customer',
      name: 'Customer',
      component: Customer
    },
    {
      path: '/invoice',
      name: 'Invoice',
      component: InvoiceView
    },
     {
      path: '/invoice-list',
      name: 'Invoice-list',
      component: InvoiceList
    },
    {
      path: '/scan',
      name: 'scan',
      component: ScanView
    },
    {
      path: '/add-customer',
      name: 'new customer',
      component: NewCustomer
    }
  ]
})


//issues
// link all the screems
// shadows are wrong (more blur, less darker)
// make border radius 0 everywhere
// use barcode scanner
// invoice list screen missing
// use actual images for products and users
// add item screen missing (item name, image, type(s, m, l), expected date of entry, expected date of exit)
// input fields with images should be of type file
// all images should be circular with border of 2px solid #eee
