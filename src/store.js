import { createStore } from 'redux';

function reducer (state, action ) {

};

export const store = createStore(reducer, {
  favorites: [
    'Yummi Bahn-Mi',
    'Billy-Ray\'s Awesome Traveling BBQ',
    'Generic Food Truck for Testing Purposes',
    'Tin-tin',
    'Pop Shop on Wheels',
    'Another generic name...',
  ],
});
