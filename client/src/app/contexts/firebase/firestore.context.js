import React, { useContext } from 'react';
import 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';

import { useFirebase } from './firebase.context';

const FirestoreContext = React.createContext(null);
const useFirestore = () => useContext(FirestoreContext);

const FirestoreProvider = ({children}) => {
  const { app } = useFirebase();
  const db = app.firestore();

  const getProjects = async () => {
    const query = db.collection('projects').orderBy('createdAt', 'desc');
    const querySnapshot = await query.get();
    const projects = querySnapshot.docs.map((doc) => {
      return {
        uid: doc.id,
        ...doc.data()
      }
    });
    return projects;
  };

  const addReview = async (projectRef, review) => {
    var reviewRef = projectRef.collection('reviews').doc(uuidv4());

    return db.runTransaction((transaction) => {
        return transaction.get(projectRef).then((res) => {
            if (!res.exists) {
                throw "Document does not exist!";
            }

            // Compute new number of reviews
            var newNumReviews = res.data().numReviews + 1;

            // Compute new average rating
            var oldRatingTotal = res.data().avgRating * res.data().numReviews;
            var newAvgRating = (oldRatingTotal + review.rating) / newNumReviews;

            // Commit to Firestore
            transaction.update(projectRef, {
                numReviews: newNumReviews,
                avgRating: newAvgRating
            });
            transaction.set(reviewRef, review);
        });
    });
  }

  return (
    <FirestoreContext.Provider value={{addReview, getProjects}}>
      {children}
    </FirestoreContext.Provider>
  );
};

export {
  FirestoreContext,
  FirestoreProvider,
  useFirestore,
};