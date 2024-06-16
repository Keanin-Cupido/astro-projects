import { db, Comment } from 'astro:db';

export default async function() {
  await db.insert(Comment).values([
    { authorId: 1, name: "Kasim", body: 'Hope you like Astro DB!' },
    { authorId: 2, name: "Mina", body: 'Enjoy!'},
  ])
}