import { db, Tmocker } from 'astro:db';


export default async function() {
	await db.insert(Tmocker).values([
		{
			id: 1,
			name: 'John Doe',
			email: 'dsf@gmail.com',
		
		},
	 
	])
}


// id: column.number({ primaryKey: true}),
//     name: column.text(),
//     email: column.text(),
//     sessions: column.json(),
//     start: column.date(),
//     stop: column.date(),
//     duration: column.date(),