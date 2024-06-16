import { defineDb, defineTable, column } from 'astro:db';

const Comment = defineTable({
  columns: {
    authorId: column.number({ primaryKey: true }),
    name: column.text(),
    body: column.text(),
  }
});

// https://astro.build/db/config
export default defineDb({
  tables: { Comment },
});
