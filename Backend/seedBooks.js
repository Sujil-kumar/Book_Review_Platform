const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Book = require('./models/Book');

dotenv.config();

const books = [
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    description: 'A novel about the American dream and tragic love in the 1920s.',
    coverImage: 'https://upload.wikimedia.org/wikipedia/en/f/f7/TheGreatGatsby_1925jacket.gif',
    featured:true
  },
  {
    title: '1984',
    author: 'George Orwell',
    description: 'A dystopian social science fiction novel about a totalitarian regime.',
    coverImage: 'https://upload.wikimedia.org/wikipedia/en/c/c3/1984first.jpg',
  },
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    description: 'A story of racial injustice and childhood innocence in the Deep South.',
    coverImage: 'https://upload.wikimedia.org/wikipedia/en/7/79/To_Kill_a_Mockingbird.JPG',
  },
  {
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    description: 'Classic novel exploring manners, upbringing, and marriage in early 19th century England.',
    coverImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/PrideAndPrejudiceTitlePage.jpg/440px-PrideAndPrejudiceTitlePage.jpg',
  },
  {
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    description: 'A teenage boy’s reflections on his struggles and society.',
    coverImage: 'https://upload.wikimedia.org/wikipedia/en/3/32/Rye_catcher.jpg',
  },
  {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    description: 'Bilbo Baggins embarks on a grand adventure in Middle-earth.',
    coverImage: 'https://upload.wikimedia.org/wikipedia/en/4/4a/TheHobbit_FirstEdition.jpg',
  },
  {
    title: 'Fahrenheit 451',
    author: 'Ray Bradbury',
    description: 'A dystopian novel about censorship and book burning.',
    coverImage: 'https://upload.wikimedia.org/wikipedia/en/d/db/Fahrenheit_451_1st_ed_cover.jpg',
  },
  {
    title: 'Moby-Dick',
    author: 'Herman Melville',
    description: 'Epic tale of obsession and the sea.',
    coverImage: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Moby-Dick_FE_title_page.jpg',
  },
  {
    title: 'War and Peace',
    author: 'Leo Tolstoy',
    description: 'A historical novel about the French invasion of Russia.',
    coverImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/War-and-peace-book-cover.jpg/440px-War-and-peace-book-cover.jpg',
  },
  {
    title: 'Crime and Punishment',
    author: 'Fyodor Dostoevsky',
    description: 'Psychological drama of guilt and redemption.',
    coverImage: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Crimeandpunishmentcover.png',
  },
  {
    title: 'Jane Eyre',
    author: 'Charlotte Brontë',
    description: 'A governess falls in love with her mysterious employer.',
    coverImage: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Jane_Eyre_title_page.jpg',
  },
  {
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    description: 'Epic fantasy adventure to destroy the One Ring.',
    coverImage: 'https://upload.wikimedia.org/wikipedia/en/8/8e/The_Lord_of_the_Rings_Triptych.jpg',
  },
  {
    title: 'The Chronicles of Narnia',
    author: 'C.S. Lewis',
    description: 'Fantasy series set in the magical land of Narnia.',
    coverImage: 'https://upload.wikimedia.org/wikipedia/en/1/1b/The_Chronicles_of_Narnia_box_set.jpg',
  },
  {
    title: 'Brave New World',
    author: 'Aldous Huxley',
    description: 'A dystopian vision of a future society shaped by technology.',
    coverImage: 'https://upload.wikimedia.org/wikipedia/en/6/62/BraveNewWorld_FirstEdition.jpg',
  },
  {
    title: 'Animal Farm',
    author: 'George Orwell',
    description: 'Allegorical novella reflecting events leading up to the Russian Revolution.',
    coverImage: 'https://upload.wikimedia.org/wikipedia/en/f/fb/Animal_Farm_-_1st_edition.jpg',
  },
];

async function seedBooks() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Book.deleteMany();
    await Book.insertMany(books);
    console.log('✅ Books seeded successfully!');
    mongoose.disconnect();
  } catch (error) {
    console.error('❌ Error seeding books:', error.message);
    process.exit(1);
  }
}

module.exports = seedBooks;
