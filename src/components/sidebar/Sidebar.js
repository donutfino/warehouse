export default {
  name: 'Sidebar',
  data(){
    return{
      nav_link:[
        {url:'/home-page', name:'Home'},
        {url:'/customer-list', name:'Customer List'},
        {url:'/product-list', name:'Product List'},
        {url:'/invoice-list', name:'Invoice List'},
        {url:'/add-customer', name:'Add Customer'},
        {url:'/scan', name:'Add Item'},
        // {url:'', name:'Customer List'},

      ]
    }
  }
};
