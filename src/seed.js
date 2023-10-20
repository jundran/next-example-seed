import seedUsers from "./seed-users.js"
import seedArticles from "./seed-articles.js"

const usersIds = await seedUsers()
seedArticles(usersIds)
