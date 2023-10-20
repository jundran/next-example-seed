import supabase from './config/supabaseClient.js'
import articles from './data/articles.js'

export default async function seedArticles (userIds) {
	let userIndex = 0

	const articlesWithUser = articles.map(articleWithoutUser => {
		const article =  {
			...articleWithoutUser,
			user_id: userIds[userIndex]
		}

		if (userIndex < userIds.length - 1) userIndex++
		else userIndex = 0

		return article
	})

	const createdArticles = await Promise.all(articlesWithUser.map(async article => {
		return await supabase
			.from('articles')
			.insert(article)
	}))

	for (const postgresSingleResponse of createdArticles) {
		if (postgresSingleResponse.error) console.log('ERROR', postgresSingleResponse.error)
		else console.log('Inserted article:', postgresSingleResponse)
	}
	console.log("Articles population completed. Don't forget to enable RLS for articles table")
}
