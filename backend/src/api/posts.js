import { db } from 'src/firebase';

export default async (req, res) => {
    const posts = [];
    const querySnapshot = await db.collection('posts').get();
    querySnapshot.forEach(doc => {
    posts.push(doc.data());
    });
    res.status(200).json({ posts });
};
