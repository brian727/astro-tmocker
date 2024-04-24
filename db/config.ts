import { defineDb, defineTable, column } from 'astro:db';

const Tmocker = defineTable({
  columns: {
    id: column.number({ primaryKey: true}),
    name: column.text(),
    email: column.text(),
    
  }

})

const Sessions = defineTable({
  columns: {
    tmockerId: column.number({ references: () => Tmocker.columns.id }),
    start: column.date(),
    stop: column.date(),
    duration: column.date(),
  },
  foreignKeys: [
    {
      columns: ["tmockerId"],
      references: () => [Tmocker.columns.id]
    }
  ]
})

export default defineDb({
  tables: {Tmocker, Sessions}
});
