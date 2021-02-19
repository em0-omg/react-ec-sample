import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

// firestore書き方1
firestore
  .collection('users')
  .doc('rgDo0YwoHHj3IKiyShO6')
  .collection('cartItems')
  .doc('SUoLWMB60hDfYA2xOy2i');

// firestore書き方2
firebase.doc('/users/rgDo0YwoHHj3IKiyShO6/cartItems/SUoLWMB60hDfYA2xOy2i');

// firestore書き方3
firebase.collection('/users/rgDo0YwoHHj3IKiyShO6/cartItems');
