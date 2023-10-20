import supabase from './config/supabaseClient.js'
import users from './data/users.js'

export default async function seedUsers() {
	const createdUsers = await Promise.all(users.map(async user => {
		const authResponse = await supabase.auth.signUp({
			email: user.email,
			password: user.password,
			options: {
				data: {
					full_name: user.full_name,
					avatar_url: user.avatar_url
				}
			}
		})
		return authResponse
	}))

	console.log("Users population completed. Don't forget turn back on email confirmation")

	const userIds = createdUsers.map(authResponse => {
		const { data: { user, session }, error } = authResponse
		if (error) throw new Error(error)
		return user.id
	})
	console.log('Created users', userIds)
	return userIds
}
