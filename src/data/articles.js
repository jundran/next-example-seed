import { LoremIpsum } from 'lorem-ipsum'

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 10,
    min: 6
  },
  wordsPerSentence: {
    max: 14,
    min: 9
  }
})

const getSummary = () =>  lorem.generateSentences(4)
const getDescription = () =>  lorem.generateParagraphs(6)

const spaceStation = {
	article_title: 'Space Station and Beyond',
	image_src: 'spaceStation.jpg',
	summary: getSummary(),
	body: getDescription()
}

const dolphins = {
	article_title: 'Dolphins and the Ocean',
	image_src: 'dolphins.jpg',
	summary: getSummary(),
	body: getDescription()
}

const farm = {
	article_title: 'Farming and the Countryside',
	image_src: 'farm.jpg',
	summary: getSummary(),
	body: getDescription()
}

const yaught = {
	article_title: 'Running and the Race for Health',
	image_src: 'running.jpg',
	summary: getSummary(),
	body: getDescription()
}

const running = {
	article_title: 'Sailing and the Life of Luxury',
	image_src: 'yaught.jpg',
	summary: getSummary(),
	body: getDescription()
}

const highlands = {
	article_title: 'The Scottish Highlands and Mountains',
	image_src: 'highlands.jpg',
	summary: getSummary(),
	body: getDescription()
}

const articles = [
	spaceStation,
	dolphins,
	farm,
	yaught,
	running,
	highlands
]

export default articles
